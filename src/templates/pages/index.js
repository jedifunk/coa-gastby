import React from "react"
import Layout from "../../components/layout"
import Sidebar from "../../components/sidebar"

const SinglePage = props => {
  const {
    pageContext: { id, postId, title, content },
  } = props

  return (
    <Layout>
      <div id="primary" className="content-area wrapper">
        <div className="grid-wrapper">
          <main id="main" className="site-main" role="main">
            <article data-id={id} id={`post-${postId}`} className={`post-${postId} page type-page status-publish hentry entry`} >
              <header className="entry-header">
                <h1 className="entry-title">{title}</h1>
              </header>

              <div className="entry-content" dangerouslySetInnerHTML={{ __html: content }} />

            </article>
          </main>
          <Sidebar />
        </div>
      </div>
    </Layout>
  )
}

export default SinglePage
