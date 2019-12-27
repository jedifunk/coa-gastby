const createPosts = require('./create/createPosts')
const createPages = require('./create/createPages')
const createCategories = require('./create/createCategories')
const createUsers = require('./create/createUsers')

exports.createPages = async ({ actions, graphql }) => {
  await createPosts({ actions, graphql })
  await createPages({ actions, graphql })
  await createCategories({ actions, graphql })
  await createUsers({ actions, graphql })
}