import React from "react"
import ReactHtmlParser from 'react-html-parser'

const CoreQuoteBlock = ({ attributes }) => {

  const { citation, value } = attributes

  return (
    <blockquote className="wp-block-quote">
      {ReactHtmlParser(value)}
      <cite>
        {ReactHtmlParser(citation)}
      </cite>
    </blockquote>    
  )

}

export default CoreQuoteBlock