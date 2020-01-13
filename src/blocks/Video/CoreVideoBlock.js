import React from "react"

const CoreVideoBlock = ({ attributes }) => {
  const { src, poster, preoload, playsInline, muted, loop, controls, className, caption, autoplay, align } = attributes

  return (
    <figure className="wp-block-video aligncenter">
      <video controls src={src}></video>
      <figcaption>{caption}</figcaption>
    </figure>
  )

}

export default CoreVideoBlock