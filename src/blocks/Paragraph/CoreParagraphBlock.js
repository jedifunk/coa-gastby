import React from "react"
import ReactHtmlParser from 'react-html-parser'

const CoreParagraphBlock = ({ attributes }) => {

  const {content} = attributes

  return (
    <p>{ReactHtmlParser(content)}</p>
  )

}

export default CoreParagraphBlock