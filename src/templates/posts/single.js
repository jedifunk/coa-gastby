import React from "react"
import { Link } from 'gatsby'
import Layout from "../../components/layout"
import { Helmet } from 'react-helmet'
import Sidebar from "../../components/sidebar"
import PostMeta from '../../components/post-meta'
import AllBlocks from '../../components/AllBlocks'
import ReactHtmlParser from 'react-html-parser'
// import { TransitionLink } from "gatsby-plugin-transition-link"
// import SocialShare from '../../components/social-share'

// const Config = require('../../../config')

const SinglePost = ({ pageContext }) => {
    const {
        page: {
          id,
          postId,
          uri,
          title,
          blocks,
          date,
          author,
          categories,
          prev,
          next,
        },
    } = pageContext

    const Allblocks = blocks.blocks || []

    return(
    <Layout>
      <Helmet bodyAttributes={{ class: 'single' }} />
      <div id="primary" className="content-area wrapper">
        <div className="grid-wrapper grid-main">
            <main id="main" className="site-main" role="main">
                <article data-id={id} id={`post-${postId}`} className={`post-${postId} post type-post status-publish format-standard hentry category-react tag-accessibility tag-gatsby entry`}>
                    <header className="entry-header">
                        <h3 className="entry-title">{ ReactHtmlParser (title) }</h3>
                        <PostMeta date={date} author={author} categories={categories} />
                    </header>

                    { Allblocks.map((block, index) => {
                      return <AllBlocks key={index} blockData={block} />
                    })}
                    {/* <SocialShare 
                        socialConfig={{
                            config: {
                                url: `${Config.source.url}/${uri}`,
                            }
                        }}
                        title={title} 
                        featuredImage={featuredImage}
                        twitterHandle={Config.social.twitterHandle} /> */}
                </article>
    
                <nav className="navigation post-navigation" role="navigation">
                    <h2 className="screen-reader-text">Post navigation</h2>
                    <div className="nav-links">
                      {prev && (
                        <div className="nav-previous">
                          Previous: <Link 
                            to={prev.uri} 
                            rel="prev" 
/*
                            exit={{ length: 1 }} 
                            entry={{  
                                delay: 1 
                            }} 
*/
                            className="transition-link">
                            <span className="post-title">{ ReactHtmlParser (prev.title) }</span>
                          </Link>
                        </div>
                      )}
                      {next && (
                        <div className="nav-next">
                          Next: <Link to={next.uri} rel="next">
                            <span className="post-title">{ ReactHtmlParser (next.title) }</span>
                          </Link>
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
