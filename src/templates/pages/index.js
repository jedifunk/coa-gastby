import React from "react"
import Layout from "../../components/layout"
import { Helmet } from 'react-helmet'
import Sidebar from "../../components/sidebar"
import ReactHtmlParser from 'react-html-parser'

const SinglePage = props => {
  const {
    pageContext: { id, postId, title, content },
  } = props

  return (
    <Layout>
    <Helmet bodyAttributes={{ class: 'page' }} />
      <div id="primary" className="content-area wrapper">
        <div className="grid-wrapper grid-main">
          <main id="main" className="site-main" role="main">
            <article data-id={id} id={`post-${postId}`} className={`post-${postId} page type-page status-publish hentry entry`} >
              <header className="entry-header">
                <h1 className="entry-title">{title}</h1>
              </header>

              <div className="entry-content">{ ReactHtmlParser (content) }</div>

            </article>
          </main>
          <Sidebar />
        </div>
      </div>
    </Layout>
  )
}

export default SinglePage
