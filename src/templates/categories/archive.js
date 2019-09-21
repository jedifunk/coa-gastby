import React from "react"
import { Helmet } from 'react-helmet'
import Layout from "../../components/layout"
import Sidebar from "../../components/sidebar"
import PostEntry from "../../components/post-entry"

const CategoryArchive = props => {
  const {
    pageContext: { name, posts },
  } = props

  return (
    <Layout>
      <Helmet bodyAttributes={{ class: 'archive category' }} />
      <div id="primary" className="content-area wrapper">
        <header className="page-header">
          <h1 className="page-title">{name}</h1>
        </header>

        <div className="grid-wrapper">
          <main className="content inner-grid">
            {posts.nodes && posts.nodes.map(post => { return <PostEntry key={post.id} post={post} /> })}
          </main>
          <Sidebar />
        </div>
      </div>
    </Layout>
  )
}

export default CategoryArchive
