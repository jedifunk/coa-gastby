module.exports = () => {
  return `
    ... on WPGraphQL_Post_CoreParagraphBlock {
      __typename
      attributes {
        ... on CoreParagraphBlockAttributesV3 {
          content
        }
      }
    }
  `
}