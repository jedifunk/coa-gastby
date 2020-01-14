import React from "react"

const CoreEmbedYoutubeBlock = ({ attributes }) => {
  const { url, align, allowResponsive, caption, className, providerNameSlug, type } = attributes

  const yTUrl = url.replace('https://youtu.be/', '')

  return (
    <figure className={`wp-block-embed-youtube wp-block-embed is-type-${type} is-provider-${providerNameSlug} ${className}`}>
      <div className="wp-block-embed__wrapper">
        <iframe src={`https://youtube.com/embed/${yTUrl}?feature=oembed`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;" allowFullScreen></iframe>
      </div>
      <figcaption>{caption}</figcaption>
    </figure>
  )

}

export default CoreEmbedYoutubeBlock