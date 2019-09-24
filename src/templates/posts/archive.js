import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import { Helmet } from 'react-helmet'
import HpHero from '../../components/home-hero'
import Sidebar from "../../components/sidebar"
import FeaturedPost from "../../components/featured-post"
import PostEntry from '../../components/post-entry'

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
  
  const paged = pageNumber > 1 ? `paged page-${pageNumber}` : ''

  return (
    <Layout>
    <Helmet>
        <body class={`home blog ${paged}`} />
    </Helmet>
    {pageNumber === 1 ?
      <HpHero />
    : null }
      <div id="primary" className="content-area wrapper">
        <main id="main" className="site-main" role="main">
{pageNumber === 1 ?
          <div className="featured grid-wrapper grid-fourths">
            {nodes && nodes.slice(0, 4).map(post =>
              <FeaturedPost key={post.id} post={post} />
            )}
          </div>
: null }
          <div className="grid-wrapper grid-main">
            <div>
                <div className="content grid-wrapper grid-halves">
                  { pageNumber === 1 ?
                      nodes && nodes.slice(4).map(post => <PostEntry key={post.id} post={post} /> )
                    :
                      nodes && nodes.map(post => <PostEntry key={post.id} post={post} /> )
                  }
                </div>

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
