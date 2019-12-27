const path = require(`path`)
const { PostTemplateFragment, PostPreviewFragment } = require("../src/templates/posts/data.js")
const { getAllBlocksData } = require("./utils")
const blogTemplate = path.resolve(`./src/templates/posts/archive.js`)
const postTemplate = path.resolve(`./src/templates/posts/single.js`)

const GET_POSTS = (blocks) => `
  ${PostTemplateFragment(blocks)}
  ${PostPreviewFragment}

  query GET_POSTS($first:Int $after:String){
    wpgraphql {
      posts(
        first: $first 
        after: $after
      ) {
        pageInfo {
          endCursor
          hasNextPage
        }
        nodes {
          uri
          ...PostTemplateFragment
          ...PostPreviewFragment
        }
      }
    }
  }
`
const allPosts = []
const blogPages = []
let pageNumber = 0

module.exports = async ({ actions, graphql }) => {

  const blocksData = getAllBlocksData()

/**
 * This is the method from Gatsby that we're going
 * to use to create posts in our static site.
 */
  const { createPage } = actions

/**
 * Fetch posts method. This accepts variables to alter
 * the query. The variable `first` controls how many items to
 * request per fetch and the `after` controls where to start in
 * the dataset.
 *
 * @param variables
 * @returns {Promise<*>}
 */
  const fetchPosts = async variables =>
  /**
   * Fetch posts using the GET_POSTS query and the variables passed in.
   */
    await graphql(GET_POSTS(blocksData), variables).then(({ data }) => {
    /**
     * Extract the data from the GraphQL query results
     */
      const {
        wpgraphql: {
          posts: {
            nodes,
            pageInfo: { hasNextPage, endCursor },
          },
        },
      } = data

    /**
     * Define the path for the paginated blog page.
     * This is the url the page will live at
     * @type {string}
     */
      const nodeIds = nodes.map(node => node.postId)
      const blogPagePath = !variables.after ? `/` : `/page/${pageNumber + 1}`

    /**
     * Add config for the blogPage to the blogPage array
     * for creating later
     *
     * @type 
     *   path: string,
     *   component: string,
     *   context: {nodes: *, pageNumber: number, hasNextPage: *}
     * 
     */
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

    /**
     * Map over the posts for later creation
     */
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
  
/**
* Kick off our `fetchPosts` method which will get us all
* the posts we need to create individual posts.
*/
  await fetchPosts({ first: 10, after: null }).then(wpPosts => {
    wpPosts &&
    wpPosts.map((post, index) => {
      console.log(`create post: ${post.uri}`)
      createPage({
        path: `${post.uri}/`,
        component: postTemplate,
        context: {
            post,
            prev: allPosts[index + 1],
            next: allPosts[index - 1],
        }
      })
    })

  /**
   * Map over the `blogPages` array to create the
   * paginated blog pages
   */
    blogPages &&
    blogPages.map(archivePage => {
      console.log(`createBlogPage ${archivePage.context.pageNumber}`)
      createPage(archivePage)
    })    
  })
}