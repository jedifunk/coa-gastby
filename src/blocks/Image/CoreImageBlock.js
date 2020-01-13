import React from "react"

const CoreImageBlock = ({ attributes }) => {
  const { align, caption, className, url, alt, id } = attributes

  return (
    <figure className="wp-block-image">
      <img src={url} alt={alt} />
      <figcaption>{caption}</figcaption>
    </figure>
  )
}

export default CoreImageBlock
