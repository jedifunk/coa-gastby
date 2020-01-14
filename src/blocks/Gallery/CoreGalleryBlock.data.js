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
        ids
      }
      galleryImages(first: 50) {
        nodes {
          mediaItemId
          mediaItemUrl
          mediaDetails {
            meta {
              aperture
              camera
              iso
              shutterSpeed
            }
          }
        }
      }
    }
  `
}