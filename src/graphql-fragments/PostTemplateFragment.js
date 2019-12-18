import { graphql } from 'gatsby'

export const PostTemplateFragment = graphql`
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