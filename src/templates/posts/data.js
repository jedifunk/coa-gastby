const PostTemplateFragment = (blocks) => `
  fragment PostTemplateFragment on WPGraphQL_Post {
    id
    postId
    title
    excerpt
    uri
    date
    content
    blocks {
      __typename
      ${blocks}
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
`

const PostPreviewFragment = `
  fragment PostPreviewFragment on WPGraphQL_Post {
    id
    postId
    title
    excerpt
    uri
    date
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
module.exports.PostPreviewFragment = PostPreviewFragment