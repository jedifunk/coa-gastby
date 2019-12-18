const { CoreGalleryBlockFragment } = require("./CoreGalleryBlockFragment")

const PostTemplateFragment = `
  fragment PostTemplateFragment on WPGraphQL_Post {
    id
    postId
    title
    excerpt
    uri
    date
    content
    blocks {
      name
      originalContent
      ...CoreGalleryBlockFragment
    }
    categories {
      nodes {
        name
        slug
      }
    }
    tags {
      nodes {
        slug
        name
      }
    }
    author {
      name
      slug
    }
    featuredImage {
      id
      mediaItemId
      sourceUrl(size: MED_VERT)
    }
  }
  ${ CoreGalleryBlockFragment }
`

module.exports.PostTemplateFragment = PostTemplateFragment