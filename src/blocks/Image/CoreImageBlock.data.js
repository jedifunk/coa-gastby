module.exports = () => {
  return `
    ... on WPGraphQL_CoreImageBlock {
      attributes {
        align
        caption
        className
        url
        alt
        id
      }
    }
  `
}
