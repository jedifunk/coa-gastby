import React from "react"
import { Link } from "gatsby"
import PostMeta from './post-meta'
import ReactHtmlParser from 'react-html-parser'

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
                <Link to={`/${uri}`}>{ ReactHtmlParser (title) }</Link>
            </h3>
            <PostMeta date={date} author={author} categories={categories} />
        </header>

        <div className="entry-content">{ ReactHtmlParser (excerpt) }</div>
    </article>
  )
}

export default PostEntry