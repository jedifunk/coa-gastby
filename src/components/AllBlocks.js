import React from "react"
import CoreParagraphBlock from "../blocks/Paragraph"

const AllBlocks = ({ blockData }) => {

  const blockType = blockData.__typename

  /**
   * Default component
   */
  const Default = () => ( <div>In AllBlocks the mapping of this component is missing: {blockType}</div> )

  /**
   * Mapping the __typename(s) to our components
   */
  const blocks = {
    CoreParagraphBlock: CoreParagraphBlock,
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
