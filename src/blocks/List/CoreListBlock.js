import React from "react"
import ReactHtmlParser from "react-html-parser"

const CoreListBlock = ({ originalContent }) => {
  
  return (
    ReactHtmlParser(originalContent)
  )
}

export default CoreListBlock
