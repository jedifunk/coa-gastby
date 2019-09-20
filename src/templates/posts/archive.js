import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
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
      <Link to={previousLink}>
        Newer Posts
      </Link>
    )
  }

const renderNextLink = props => {
    const {
      pageContext: { hasNextPage, pageNumber },
    } = props

    if (hasNextPage) {
      return (
        <Link to={`/page/${pageNumber + 1}`}>
          Older Posts
        </Link>
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
            
                <div className="content inner-grid">
                {nodes && nodes.map(post => <PostEntry key={post.id} post={post} /> )}
                </div>
            
            <div>
                {renderPreviousLink(props)}
                {pageNumber}
                {renderNextLink(props)}
            </div>
        </Layout>
      )
  }

export default BlogArchive