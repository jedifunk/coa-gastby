import React from "react"
import ReactHtmlParser from 'react-html-parser'

const CoreImageBlock = ({ attributes }) => {
  const { align, caption, className, url, alt, id } = attributes

  return (
    <figure className="wp-block-image">
      <img src={url} alt={alt} />
      <figcaption>{ReactHtmlParser(caption)}</figcaption>
    </figure>
  )
}

export default CoreImageBlock
