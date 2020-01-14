import React from "react"
import Layout from "../../components/layout"
import { Helmet } from 'react-helmet'
import { Link } from 'gatsby'
import ReactHtmlParser from 'react-html-parser'

import Sidebar from "../../components/sidebar"
import PostMeta from '../../components/post-meta'
import AllBlocks from '../../components/AllBlocks'
import SocialShare from '../../components/social-share'
import { FaAngleLeft, FaAngleRight } from "react-icons/fa"
const Config = require('../../../config')
// import { TransitionLink } from "gatsby-plugin-transition-link"

const SinglePost = ({ pageContext }) => {
  const {
    post: {
      id,
      postId,
      uri,
      title,
      blocks,
      date,
      author,
      categories,
      featuredImage,
      prev,
      next,
    },
  } = pageContext

  const allBlocks = blocks || []

  return (
    <Layout>
      <Helmet bodyAttributes={{ class: "single" }} />
      <div id="primary" className="content-area wrapper">
        <div className="grid-wrapper grid-main">
          <main id="main" className="site-main" role="main">
            <article
              data-id={id}
              id={`post-${postId}`}
              className={`post-${postId} post type-post status-publish format-standard hentry category-react tag-accessibility tag-gatsby entry`}
            >
              <header className="entry-header">
                <h3 className="entry-title">{ReactHtmlParser(title)}</h3>
                <PostMeta date={date} author={author} categories={categories} />
              </header>

              {allBlocks.map((block, index) => {
                return <AllBlocks key={index} blockData={block} />
              })}
              <SocialShare
                socialConfig={{
                  config: {
                    url: `${Config.source.url}/${uri}`,
                  },
                }}
                title={title}
                featuredImage={featuredImage}
                twitterHandle={Config.social.twitterHandle}
              />
            </article>

            <nav className="navigation post-navigation" role="navigation">
              <h2 className="screen-reader-text">Post navigation</h2>
              <div className="nav-links">
                {pageContext.prev && (
                  <div className="nav-previous">
                    <FaAngleLeft />
                    <Link
                      to={pageContext.prev.uri}
                      rel="prev"
                      /*
                          exit={{ length: 1 }} 
                          entry={{  
                              delay: 1 
                          }} 
*/
                      className="transition-link"
                    >
                      <span className="post-title">
                        {ReactHtmlParser(pageContext.prev.title)}
                      </span>
                    </Link>
                  </div>
                )}
                {pageContext.next && (
                  <div className="nav-next">
                    <Link to={pageContext.next.uri} rel="next">
                      <span className="post-title">
                        {ReactHtmlParser(pageContext.next.title)}
                      </span>
                    </Link>
                    <FaAngleRight />
                  </div>
                )}
              </div>
            </nav>
          </main>
          <Sidebar />
        </div>
      </div>
    </Layout>
  )
}

export default SinglePost
