import React from "react"
import { Link } from 'gatsby'
import Layout from "../../components/layout"
import PostMeta from '../../components/post-meta'

const SinglePost = props => {
    const {
        pageContext: {
          id,
          postId,
          title,
          content,
          date,
          author,
          categories,
          prev,
          next,
        },
    } = props
    
    return(
    <Layout>
        <article data-id={id} id={`post-${postId}`} className={`post-${postId} post type-post status-publish format-standard hentry category-react tag-accessibility tag-gatsby entry`}>
            <header className="entry-header">
                <h3 className="entry-title">{title}</h3>
                <PostMeta date={date} author={author} categories={categories} />
            </header>
            <div className="entry-content" dangerouslySetInnerHTML={{ __html: content }} />
        </article>
        
        <nav className="navigation post-navigation" role="navigation">
        <h2 className="screen-reader-text">Post navigation</h2>
        <div className="nav-links">
          {prev && (
            <div className="nav-previous">
              <Link to={prev.uri} rel="prev">
                <span
                  className="post-title"
                  dangerouslySetInnerHTML={{ __html: prev.title }}
                />
              </Link>
            </div>
          )}
          {next && (
            <div className="nav-next">
              <Link to={next.uri} rel="next">
                <span
                  className="post-title"
                  dangerouslySetInnerHTML={{ __html: next.title }}
                />
              </Link>
            </div>
          )}
        </div>
      </nav>
    </Layout>
    )
}

export default SinglePost