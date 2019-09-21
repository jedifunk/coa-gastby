import React from "react"
import PropTypes from "prop-types"
import { Link } from 'gatsby'
import Menu from "./Menu"
import SearchInput from "./Search/input"

const Header = ({ siteTitle }) => {

  return(
    <header id="masthead" className="site-header" role="banner">
      <div className="wrapper flex-wrapper">
        <div className="site-branding"><h1 className="site-title"><Link to="/">Choosing Our Adventure</Link></h1></div>
          <Menu />
          <SearchInput />
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
