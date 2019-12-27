import React from "react"
import ReactHtmlParser from 'react-html-parser'

const CoreParagraphBlock = ({ content }) => {

  return (
    <p>{ReactHtmlParser(content)}</p>
  )

}

export default CoreParagraphBlock