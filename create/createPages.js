const path = require(`path`)
const pageTemplate = path.resolve(`./src/templates/pages/index.js`)

module.exports = async ({ actions, graphql }) => {
  const GET_PAGES = `
  query GET_PAGES($first:Int $after:String){
    wpgraphql {
      pages(
        first: $first 
        after: $after
        where: {
          parent: null
        }
      ) {
        pageInfo {
          endCursor
          hasNextPage
        }
        nodes {
          id
          pageId
          title
          slug
          content
        }
      }
    }
  }
  `
  const { createPage } = actions
  const allPages = []
  const fetchPages = async variables =>
    await graphql(GET_PAGES, variables).then(({ data }) => {
      const {
        wpgraphql: {
          pages: {
            nodes,
            pageInfo: { hasNextPage, endCursor },
          },
        },
      } = data
      nodes.map(page => {
        allPages.push(page)
      })
      if (hasNextPage) {
        return fetchPages({ first: variables.first, after: endCursor })
      }
      return allPages
    })

  await fetchPages({ first: 100, after: null }).then(allPages => {

    allPages.map(page => {
      console.log(`create page: ${page.slug}`)
      createPage({
        path: `/${page.slug}`,
        component: pageTemplate,
        context: page,
      })
    })
  })
}