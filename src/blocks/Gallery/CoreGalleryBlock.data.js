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
      galleryImages {
        nodes {
          mediaItemId
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