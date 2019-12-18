const CoreGalleryBlockFragment = `
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

module.exports.CoreGalleryBlockFragment = CoreGalleryBlockFragment