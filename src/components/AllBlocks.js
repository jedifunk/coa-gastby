import React from "react"
import CoreParagraphBlock from "../blocks/Paragraph"
import CoreSeparatorBlock from "../blocks/Separator"
import CoreListBlock from "../blocks/List"
import CoreImageBlock from "../blocks/Image"
import CoreHeadingBlock from "../blocks/Heading"

const AllBlocks = ({ blockData }) => {

  const blockType = blockData.__typename

  /**
   * Default component
   */
  const Default = () => (<div><pre>In AllBlocks the mapping of this component is missing: <strong>{blockType}</strong></pre></div> )

  /**
   * Mapping the __typename(s) to our components
   */
  const blocks = {
    WPGraphQL_CoreParagraphBlock: CoreParagraphBlock,
    WPGraphQL_CoreSeparatorBlock: CoreSeparatorBlock,
    WPGraphQL_CoreListBlock: CoreListBlock,
    WPGraphQL_CoreImageBlock: CoreImageBlock,
    WPGraphQL_CoreHeadingBlock: CoreHeadingBlock,
    page_default: Default,
  }

  /**
   * If block type is not existing in our mapping, it shows our Default instead.
   */
  const ComponentTag = blocks[blockType] ? blocks[blockType] : blocks["page_default"]

  return (
    <ComponentTag {...blockData} />
  )
}

export default AllBlocks
