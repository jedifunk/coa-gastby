import React from "react"
import Layout from "../../components/layout"

const SinglePage = props => {
  const {
    pageContext: { id, postId, title, content },
  } = props

  return (
    <Layout>
      <article data-id={id} id={`post-${postId}`} className={`post-${postId} page type-page status-publish hentry entry`} >
        <header className="entry-header">
          <h1 className="entry-title">{title}</h1>
        </header>

        <div className="entry-content" dangerouslySetInnerHTML={{ __html: content }} />

      </article>
    </Layout>
  )
}

export default SinglePage