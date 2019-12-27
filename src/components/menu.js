import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import { createLocalLink } from '../../create'

const MENU_QUERY = graphql`
query {
  wpgraphql {
    menuItems(where: {location: MENU_1}) {
      edges {
        node {
          label
          id
          menuItemId
          url
          childItems {
            edges {
              node {
                id
                label
                menuItemId
                connectedObject {
                  ... on WPGraphQL_Category {
                    id
                    name
                    slug
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
`

const Menu = () => {
 
  return (
    <StaticQuery
      query={MENU_QUERY}
      
      render={data => {
          const items = data.wpgraphql.menuItems.edges

          return (
            <nav id="site-navigation" className="main-navigation" role="navigation" aria-label="Primary Menu" >              
                <ul id="menu-primary" className="menu" >
                  {items.map(parent => parent.node.childItems.edges.length ? (
                      <li key={parent.node.id} className="menu-item menu-item-has-children">
                          <Link to={createLocalLink(parent.node.url)}>{parent.node.label}</Link>
                          <ul className="sub-menu">
                          {parent.node.childItems.edges.map(child => (
                                <li key={child.node.id} className="menu-item"><Link to={`/category/${child.node.connectedObject.slug}`}>{child.node.label}</Link></li>
                          ))}
                          </ul>
                      </li>
                  ) : (
                      <li key={parent.node.id} className="menu-item"><Link to={createLocalLink(parent.node.url)}>{parent.node.label}</Link></li>
                  ))}
                </ul>
            </nav>
          )

      }}
    />
    )
}

export default Menu