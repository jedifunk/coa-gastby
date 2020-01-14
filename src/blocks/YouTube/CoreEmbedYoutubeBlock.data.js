module.exports = () => {
  return `
    ... on WPGraphQL_CoreEmbedYoutubeBlock {
      attributes {
        url
        className
        caption
        align
        allowResponsive
        providerNameSlug
        type
      }
    }
  `
}