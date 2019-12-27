module.exports = () => {
  return `
    ... on WPGraphQL_CoreGalleryBlock {
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
}