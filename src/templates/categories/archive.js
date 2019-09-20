import React from "react"
import Layout from "../../components/layout"
import PostEntry from "../../components/post-entry"

const CategoryArchive = props => {
  const {
    pageContext: { name, posts },
  } = props

  return (
    <Layout classNames="archive">
      <header className="page-header">
        <h1 className="page-title">{name}</h1>
      </header>
      
      <div className="grid-wrapper">
            <div className="content inner-grid">
            {posts.nodes && posts.nodes.map(post => { return <PostEntry key={post.id} post={post} /> })}
            </div>
        </div>
    </Layout>
  )
}

export default CategoryArchive