import React from "react"
import ReactHtmlParser from 'react-html-parser'

const CoreHtmlBlock = ({ originalContent }) => {

  return (
    ReactHtmlParser(originalContent)
  )
}

export default CoreHtmlBlock
