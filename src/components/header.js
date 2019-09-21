import React from "react"
import PropTypes from "prop-types"
import { Link } from 'gatsby'
import Menu from "./Menu"

const Header = ({ siteTitle }) => {

    return(
  <header id="masthead" className="site-header" role="banner">
    <div className="wrapper flex-wrapper">
        <div className="site-branding"><h1 className="site-title"><Link to="/">Choosing Our Adventure</Link></h1></div>
        <Menu />
    </div>
  </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
