import React from "react"
import ReactHtmlParser from "react-html-parser"

const CoreHeadingBlock = ({ attributes }) => {
  const { align, className, content, level } = attributes

  /* Create custom dynamic Heading tag */
  const Heading = `h${level}`

  return (
    <Heading className={className}>{ReactHtmlParser(content)}</Heading>
  )
}

export default CoreHeadingBlock
