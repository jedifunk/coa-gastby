import React from 'react'
import { Link } from "gatsby"
import PostMeta from './post-meta'

const FeaturedPost = ({
  post: {
    id,
    postId,
    title,
    uri,
    author,
    date,
    categories,
    featuredImage,
  },
}) => {

  return (
    <div className="featured-item">
      <figure>
        <Link to={`/${uri}`}>
          <img src={featuredImage.sourceUrl} alt="" />
        </Link>
        <figcaption>
          <h3 className="entry-title"><Link to={`/${uri}`}>{title}</Link></h3>
          <PostMeta date={date} author={author} categories={categories} />
        </figcaption>
      </figure>
    </div>
  )
}

export default FeaturedPost
