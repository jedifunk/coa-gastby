import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import Sidebar from "../../components/sidebar"
import PostEntry from "../../components/post-entry"

const renderPreviousLink = props => {
    const {
      pageContext: { pageNumber },
    } = props

    let previousLink = null

    if (!pageNumber || pageNumber === 1) {
      return null
    } else if (2 === pageNumber) {
      previousLink = `/`
    } else if (2 < pageNumber) {
      previousLink = `/page/${pageNumber - 1}`
    }

    return (
      <div className="nav-previous">
        <Link to={previousLink}>
          Newer Posts
        </Link>
      </div>
    )
  }

const renderNextLink = props => {
    const {
      pageContext: { hasNextPage, pageNumber },
    } = props

    if (hasNextPage) {
      return (
        <div className="nav-next">
          <Link to={`/page/${pageNumber + 1}`}>
            Older Posts
          </Link>
        </div>
      )
    } else {
      return null
    }
  }

const BlogArchive = props => {
  const {
    pageContext: { nodes, pageNumber },
  } = props

  return (
    <Layout>
      <div id="primary" className="content-area wrapper">
        <main id="main" className="site-main" role="main">
          <div className="grid-wrapper">

            <div className="content inner-grid">
              {nodes && nodes.map(post => <PostEntry key={post.id} post={post} /> )}

              <nav className="navigation post-navigation" role="navigation">
                <div className="nav-links">
                  {renderPreviousLink(props)}
                  {renderNextLink(props)}
                </div>
              </nav>

            </div>

            <Sidebar />

          </div>
        </main>
      </div>
    </Layout>
  )
}

export default BlogArchive
