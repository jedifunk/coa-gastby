import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

const HERO_IMG_QUERY = graphql`
query HERO_QUERY {
  wpgraphql {
    mediaItemBy(slug: "img_7282-1") {
      id
      sourceUrl
      mediaItemId
    }
  }
}`

const HpHero = () => (
  <StaticQuery
    query={HERO_IMG_QUERY}
    render={data => {
      return(
        <div className="hero">
          <img src={data.wpgraphql.mediaItemBy.sourceUrl} alt="" />
        </div>
      )
    }}
  />
)

export default HpHero
