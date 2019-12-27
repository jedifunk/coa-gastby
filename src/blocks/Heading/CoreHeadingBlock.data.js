module.exports = () => {
  return `
    ... on WPGraphQL_CoreHeadingBlock {
      attributes {
        align
        className
        content
        level
      }
    }
  `
}
