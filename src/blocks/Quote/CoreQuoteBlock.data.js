module.exports = () => {
  return `
    ... on WPGraphQL_CoreQuoteBlock {
      attributes {
        citation
        value
      }
    }
  `
}