import { graphql } from "gatsby"

export const CoreGalleryBlockFragment = graphql`
  fragment CoreGalleryBlockFragment on WPGraphQL_CoreGalleryBlock {
    attributes {
      align
      caption
      className
      columns
      imageCrop
      images
    }
    originalContent
  }
`