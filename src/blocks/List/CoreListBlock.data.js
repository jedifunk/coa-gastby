module.exports = () => {
  return `
    ... on WPGraphQL_CoreListBlock {
      attributes {
        className
        ordered
      }
      originalContent
    }
  `
}
