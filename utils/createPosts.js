const path = require(`path`)
const { PostTemplateFragment } = require("../src/graphql-fragments/PostTemplateFragment")
const blogTemplate = path.resolve(`./src/templates/posts/archive.js`)
const postTemplate = path.resolve(`./src/templates/posts/single.js`)

const GET_POSTS = `
  query GET_POSTS($first:Int $after:String){
    wpgraphql {
      posts(
        first: $first 
        after:$after
      ) {
        pageInfo {
          endCursor
          hasNextPage
        }
        nodes {
          uri
          ...PostTemplateFragment
        }
      }
    }
  }
  ${ PostTemplateFragment }
  `
const allPosts = []
const blogPages = []
let pageNumber = 0

module.exports = async ({ actions, graphql }) => {

  const { createPage } = actions
  
  const fetchPosts = async variables =>
    await graphql(GET_POSTS, variables).then(({ data }) => {
      const {
        wpgraphql: {
          posts: {
            nodes,
            pageInfo: { hasNextPage, endCursor },
          },
        },
      } = data

      const nodeIds = nodes.map(node => node.postId)
      const blogPagePath = !variables.after ? `/` : `/page/${pageNumber + 1}`

      blogPages[pageNumber] = {
        path: blogPagePath,
        component: blogTemplate,
        context: {
          ids: nodeIds,
          nodes,
          pageNumber: pageNumber + 1,
          hasNextPage,
        },
      }
      nodes &&
          nodes.map(post => {
            allPosts.push(post)
          })
      
      if (hasNextPage) {
        pageNumber++
        console.log(`fetch page ${pageNumber} of posts...`)
        return fetchPosts({ first: 10, after: endCursor })
      }
      return allPosts
    })

  await fetchPosts({ first: 10, after: null }).then(allPosts => {
    allPosts &&
        allPosts.map((post, index) => {
          console.log(`create post: ${post.uri}`)
          createPage({
            path: `${post.uri}/`,
            component: postTemplate,
            context: {
                ...post,
                prev: allPosts[index + 1],
                next: allPosts[index - 1],
            }
          })
        })
    blogPages &&
        blogPages.map(archivePage => {
          console.log(`createBlogPage ${archivePage.context.pageNumber}`)
          createPage(archivePage)
        })    
  })
}