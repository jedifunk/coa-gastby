module.exports = () => {
  return `
    ... on WPGraphQL_Post_CoreParagraphBlock {
      name
      attributes {
        ... on CoreParagraphBlockAttributesV3 {
          content
        }
      }
    }
  `
}