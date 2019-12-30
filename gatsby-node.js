const createPosts = require('./create/createPosts')
const createPages = require('./create/createPages')
const createCategories = require('./create/createCategories')
const createUsers = require('./create/createUsers')
const { createRemoteFileNode } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ actions, graphql }) => {
  await createPosts({ actions, graphql })
  await createPages({ actions, graphql })
  await createCategories({ actions, graphql })
  await createUsers({ actions, graphql })
}

exports.createResolvers = ({
  actions,
  cache,
  createNodeId,
  createResolvers,
  store,
  reporter,
}) => {
  const { createNode } = actions
  createResolvers({
    WPGraphQL_MediaItem: {
      imageFile: {
        type: `File`,
        resolve(source, args, context, info) {
          return createRemoteFileNode({
            url: source.sourceUrl,
            store,
            cache,
            createNode,
            createNodeId,
            reporter,
          })
        },
      },
    },
  })
}