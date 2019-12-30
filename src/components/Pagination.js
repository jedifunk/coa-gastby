import React from "react"
import { Link } from "gatsby"
import { FaAngleLeft, FaAngleRight } from "react-icons/fa"

const Pagination = ({ pageNumber, hasNextPage }) => {
  if (pageNumber === 1 && !hasNextPage) return null

  return (
    <nav className="navigation post-navigation" role="navigation">
      <div className="nav-links">
        {pageNumber > 1 && (
          <div className="nav-previous">
            <Link to={
              pageNumber > 2
                ? `/page/${pageNumber - 1}`
                : `/`
            }>
              <FaAngleLeft /> Newer Posts
            </Link>
          </div>
        )}

        {hasNextPage && (
          <div className="nav-next">
            <Link to={`/page/${pageNumber + 1}`}>
              Older Posts <FaAngleRight />
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Pagination
