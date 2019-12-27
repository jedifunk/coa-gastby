const path = require(`path`)
const { PostTemplateFragment, } = require("../src/templates/posts/data.js")
const usersTemplate = path.resolve(`./src/templates/users/archive.js`)

const GET_USERS = (blocks) => `
  ${PostTemplateFragment(blocks)}
  
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
`

const allUsers = []

module.exports = async ({ actions, graphql }) => {

  const { createPage } = actions

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
