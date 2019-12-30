import React from 'react'
import { Link } from "gatsby"
import PostMeta from './post-meta'
import FluidImage from "./FluidImage"

const FeaturedPost = ({ post }) => {
  const { title, uri, author, date, categories, featuredImage } = post

  return (
    <div className="featured-item">
      <figure>
        <Link to={`/${uri}`}>
          <FluidImage image={featuredImage} />
        </Link>
        <figcaption>
          <h3 className="entry-title">
            <Link to={`/${uri}`}>{title}</Link>
          </h3>
          <PostMeta date={date} author={author} categories={categories} />
        </figcaption>
      </figure>
    </div>
  )
}

export default FeaturedPost
