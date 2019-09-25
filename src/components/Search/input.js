import React from "react"
import { navigate } from 'gatsby'
import { FaSearch } from 'react-icons/fa'

const SearchInput = () => {

  return(
    <form className="searchform" method="GET" role="search" onSubmit={event => {
      event.preventDefault()
      // TODO: do something with form values
      navigate("/results")
    }}>
        <FaSearch />
      <input type="search" name="s" id="s" placeholder="discover" />
    </form>
  )
}

export default SearchInput
