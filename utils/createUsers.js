const path = require(`path`)
const { PostTemplateFragment } = require("../src/graphql-fragments/PostTemplateFragment")
const usersTemplate = path.resolve(`./src/templates/users/archive.js`)

module.exports = async ({ actions, graphql }) => {
  const GET_USERS = `
    query GET_USERS($first: Int) {
      wpgraphql {
        users(first: $first) {
          pageInfo {
            hasNextPage
            endCursor
          }
          nodes {
            id
            name
            userId
            slug
            posts {
              nodes {
                ...PostTemplateFragment
              }
            }
          }
        }
      }
    }
    ${ PostTemplateFragment }
  `
  const { createPage } = actions
  const allUsers = []
  const fetchUsers = async variables =>
    await graphql(GET_USERS, variables).then(({ data }) => {
      const {
        wpgraphql: {
          users: {
            nodes,
            pageInfo: { hasNextPage, endCursor },
          },
        },
      } = data
      nodes.map(user => {
        allUsers.push(user)
      })
      if (hasNextPage) {
        return fetchUsers({ first: 10, after: endCursor })
      }
      return allUsers
    })

  await fetchUsers({ first: 10, after: null }).then(allUsers => {
    allUsers.map(user => {
      console.log(`create user: ${user.slug}`)
      createPage({
        path: `/author/${user.slug}`,
        component: usersTemplate,
        context: {
          ...user,
        },
      })
    })
  })
}
