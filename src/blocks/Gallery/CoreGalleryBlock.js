import React from "react"

const CoreGalleryBlock = ({ attributes }) => {

  const {columns, images, imageCrop, align, caption} = attributes
  
  let imagesArray = JSON.parse(images)

  return (
    <figure className={`wp-block-gallery columns-${columns} is-cropped`}>
      <ul className="blocks-gallery-grid">
        {imagesArray.map( (image, index) => {
          return (
            <li key={index} className="blocks-gallery-item">
              <figure>
                <img src={image.url} />
              </figure>
            </li>
          )
        })}
        
      </ul>
    </figure>
  )

}

export default CoreGalleryBlock