const createPosts = require(`./utils/createPosts`)
const createPages = require(`./utils/createPages`)
const createCategories = require(`./utils/createCategories`)

exports.createPages = async ({ actions, graphql }) => {
  await createPosts({ actions, graphql })
  await createPages({ actions, graphql })
  await createCategories({ actions, graphql })
}

/*
const path = require(`path`)
const slash = require(`slash`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const postTemplate = path.resolve(`./src/templates/post.js`)
  const pageTemplate = path.resolve(`./src/templates/page.js`)
  const categoryTemplate = path.resolve(`./src/templates/category.js`)
  
  const result = await graphql(`
    {
      wpgraphql {
        posts {
          edges {
            node {
              id
              postId
              title
              slug
              content
              date
              author {
                name
                slug
              }
            }
          }
        }
        pages {
            edges {
                node {
                    id
                    pageId
                    title
                    slug
                    content
                }
            }
        }
        categories {
            edges {
              node {
                id
                categoryId
                name
                slug
              }
            }
        }
      }
    }
  `)
  
  const { posts, pages, categories } = result.data.wpgraphql

  pages.edges.forEach(page => {
      createPage({
          path: `/${page.node.slug}/`,
          component: slash(pageTemplate),
          context: page,
      })
  })
  
  posts.edges.map(post => {
    createPage({
      path: `/${post.node.slug}/`,
      component: slash(postTemplate),
      context: post,
    })
  })
  
  categories.edges.map(category => {
    createPage({
      path: `/category/${category.node.slug}/`,
      component: slash(categoryTemplate),
      context: { 
          id: category.node.id,
        },
    })
  })
}
*/