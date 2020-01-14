import React, { useState } from "react"
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'
import ReactHtmlParser from 'react-html-parser'

const CoreGalleryBlock = ({ attributes, galleryImages }) => {

  const {columns, images, imageCrop, align, caption} = attributes
  
  // check for null value... mostly for older posts that randomly return null
  const cols = (columns != null) ? columns : 3

  // Set State for Lightbox
  const [photoIndex, setPhotoIndex] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  // Shutter Speed conversion function
  function sSpeed(d) {
    if (d >= 1) {
      return Math.round(d) + "s"
    }
    var df = 1,
      top = 1,
      bot = 1
    var tol = 1e-8 // seems to allow for d > 1e-4
    while (df !== d && Math.abs(df - d) > tol) {
      if (df < d) {
        top += 1
      } else {
        bot += 1
        top = parseInt(d * bot, 10)
      }
      df = top / bot
    }
    if (top > 1) {
      bot = Math.round(bot / top)
      top = 1
    }
    if (bot <= 1) {
      return "1s"
    }
    return top + "/" + bot + "s"
  }

  return (
    <figure className={`wp-block-gallery columns-${cols} is-cropped`}>
      <ul className="blocks-gallery-grid">
        {galleryImages.nodes.map((img, index) => {
          // setup onclick function to handle state change
          function updateOnClick() {
            setPhotoIndex(index)
            setIsOpen(true)
          }
          return (
            <li
              key={index}
              onClick={updateOnClick}
              className="blocks-gallery-item"
            >
              <figure>
                <img src={img.mediaItemUrl} />
                <figcaption>{ReactHtmlParser(img.caption)}</figcaption>
              </figure>
            </li>
          )
        })}
      </ul>

      {isOpen && (
        <Lightbox
          mainSrc={galleryImages.nodes[photoIndex].mediaItemUrl}
          nextSrc={
            galleryImages.nodes[(photoIndex + 1) % galleryImages.nodes.length]
              .mediaItemUrl
          }
          prevSrc={
            galleryImages.nodes[
              (photoIndex + galleryImages.nodes.length - 1) %
                galleryImages.nodes.length
            ].mediaItemUrl
          }
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex(
              (photoIndex + galleryImages.nodes.length - 1) %
                galleryImages.nodes.length
            )
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % galleryImages.nodes.length)
          }
          enableZoom={false}
          imageCaption={`Camera: ${
            galleryImages.nodes[photoIndex].mediaDetails.meta.camera
          }, Aperture: f/${
            galleryImages.nodes[photoIndex].mediaDetails.meta.aperture
          }, ISO: ${
            galleryImages.nodes[photoIndex].mediaDetails.meta.iso
          }, Shutter Speed: ${sSpeed(
            galleryImages.nodes[photoIndex].mediaDetails.meta.shutterSpeed
          )}`}
          imageTitle={ReactHtmlParser(galleryImages.nodes[photoIndex].caption)}
        />
      )}
    </figure>
  )

}

export default CoreGalleryBlock