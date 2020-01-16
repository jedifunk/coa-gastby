import React from "react"
import Layout from "../../components/layout"
import { Helmet } from 'react-helmet'
import HpHero from '../../components/home-hero'
import Sidebar from "../../components/sidebar"
import FeaturedPost from "../../components/featured-post"
import PostEntry from '../../components/post-entry'
import Pagination from '../../components/Pagination'

const BlogArchive = ({pageContext}) => {
  const {nodes, pageNumber, hasNextPage, itemsPerPage, allPosts} = pageContext

  const paged = pageNumber > 1 ? `paged page-${pageNumber}` : ''

  return (
    <Layout pageNumber={pageNumber}>
    <Helmet>
        <body class={`home blog ${paged}`} />
    </Helmet>
      {pageNumber === 1 ? <HpHero /> : null }

      <div id="primary" className="content-area wrapper">
        <main id="main" className="site-main" role="main">
          {pageNumber === 1 ?
          <div className="featured grid-wrapper grid-fourths">
            {nodes && nodes.slice(0, 4).map(post => {
              return <FeaturedPost key={post.id} post={post} />
            })}
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

                <Pagination
                  pageNumber={pageNumber}
                  hasNextPage={hasNextPage}
                  allPosts={allPosts}
                  itemsPerPage={itemsPerPage}
                />
            </div>

            <Sidebar />

          </div>
        </main>
      </div>
    </Layout>
  )
}

export default BlogArchive
