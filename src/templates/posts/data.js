const PostTemplateFragment = `
  fragment PostTemplateFragment on WPGraphQL_Post {
    id
    postId
    title
    excerpt
    uri
    date
    content
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
`

module.exports.PostTemplateFragment = PostTemplateFragment
