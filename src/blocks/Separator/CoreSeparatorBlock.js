import React from "react"
import ReactHtmlParser from 'react-html-parser'

const CoreSeparatorBlock = ({ originalContent }) => {

  return (
    ReactHtmlParser(originalContent)
  )

}

export default CoreSeparatorBlock