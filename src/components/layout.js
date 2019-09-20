import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import Sidebar from "./sidebar"
import "./layout.css"

const Layout = ({ children, classNames }) => {

  return (
    <>
      <Header siteTitle={"Choosing Our Adventure"} />
      <div className={`content-area wrapper ${classNames}`}>
      <div className="grid-wrapper">
        <main>{children}</main>
        <Sidebar />
    </div>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
