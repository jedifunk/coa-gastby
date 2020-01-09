import React, { useState } from "react"
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'

const CoreGalleryBlock = ({ attributes }) => {
console.log(attributes)
  const {columns, images, imageCrop, align, caption} = attributes
  
  // convert images JSON into array
  let imgs = JSON.parse(images)

  // Set State for Lightbox
  const [photoIndex, setPhotoIndex] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  return (
    <figure className={`wp-block-gallery columns-${columns} is-cropped`}>
      <ul className="blocks-gallery-grid">
        {imgs.map( (img, index) => {
          // setup onclick function to handle state change
          function updateOnClick() {
            setPhotoIndex(index)
            setIsOpen(true)
          }
          return (
            <li key={index} onClick={updateOnClick} className="blocks-gallery-item">
              <figure>
                <img src={img.url} />
              </figure>
            </li>
          )
        })}
        
      </ul>

      {isOpen && (
        <Lightbox
          mainSrc={imgs[photoIndex].url}
          nextSrc={imgs[(photoIndex + 1) % imgs.length].url}
          prevSrc={imgs[(photoIndex + imgs.length - 1) % imgs.length].url}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() => setPhotoIndex( (photoIndex + imgs.length -1) % imgs.length )}
          onMoveNextRequest={() => setPhotoIndex( (photoIndex + 1) % imgs.length )}
        />
      )}
    </figure>
  )

}

export default CoreGalleryBlock