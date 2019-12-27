module.exports = () => {
  return `
    ... on WPGraphQL_CoreParagraphBlock {
      originalContent
      attributes {
        ... on WPGraphQL_CoreParagraphBlockAttributesV3 {
          content
        }
      }
    }
  `
}