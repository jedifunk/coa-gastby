const PostTemplateFragment = (blocks) => `
  fragment PostTemplateFragment on WPGraphQL_Post {
    id
    postId
    title
    excerpt
    uri
    date
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
      imageFile {
        childImageSharp {
          fluid(maxHeight: 400, maxWidth: 800, quality: 90, cropFocus: CENTER) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  }
`

module.exports.PostTemplateFragment = PostTemplateFragment
module.exports.PostPreviewFragment = PostPreviewFragment