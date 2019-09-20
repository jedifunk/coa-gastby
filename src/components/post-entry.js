import React from "react"
import { Link } from "gatsby"
import PostMeta from './post-meta'

const PostEntry = ({
  post: {
    id,
    postId,
    title,
    excerpt,
    uri,
    author,
    date,
    categories,
  },
}) => {

  return (
    <article id={`post-${postId}`} className="post" >
        <header className="entry-header">
            <h3 className="entry-title">
                <Link to={`/${uri}`}>{title}</Link>
            </h3>
            <PostMeta date={date} author={author} categories={categories} />
        </header>

        <div className="entry-content" dangerouslySetInnerHTML={{ __html: excerpt }} />
    </article>
  )
}

export default PostEntry