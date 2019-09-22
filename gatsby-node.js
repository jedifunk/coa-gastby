const createPosts = require(`./utils/createPosts`)
const createPages = require(`./utils/createPages`)
const createCategories = require(`./utils/createCategories`)
const createUsers = require(`./utils/createUsers`)

exports.createPages = async ({ actions, graphql }) => {
  await createPosts({ actions, graphql })
  await createPages({ actions, graphql })
  await createCategories({ actions, graphql })
  await createUsers({ actions, graphql })
}
