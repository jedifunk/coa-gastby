module.exports = () => {
  return `
    ... on WPGraphQL_CoreParagraphBlock {
      attributes {
        ... on WPGraphQL_CoreParagraphBlockAttributesV3 {
          content
        }
      }
    }
  `
}