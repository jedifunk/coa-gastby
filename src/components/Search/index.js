import React, { useState, useEffect, createRef } from "react"
import {
  InstantSearch,
  Index,
  Hits,
  PoweredBy,
  connectStateResults,
} from "react-instantsearch-dom"
import algoliasearch from "algoliasearch/lite"

import * as hitComps from "./hitComps"

const Config = require('../../../config')

const Results = connectStateResults(
  ({ searchState: state, searchResults: res, children }) =>
    res && res.nbHits > 0 ? children : `No results for '${state.query}'`
)

const Stats = connectStateResults(
  ({ searchResults: res }) =>
    res && res.nbHits > 0 && `${res.nbHits} result${res.nbHits > 1 ? `s` : ``}`
)

// const useClickOutside = (ref, handler, events) => {
//   if (!events) events = [`mousedown`, `touchstart`]
//   const detectClickOutside = event =>
//     !ref.current.contains(event.target) && handler()
//   useEffect(() => {
//     for (const event of events)
//       document.addEventListener(event, detectClickOutside)
//     return () => {
//       for (const event of events)
//         document.removeEventListener(event, detectClickOutside)
//     }
//   })
// }

export default function Search({ indices, collapse, hitsAsGrid }) {
  //const ref = createRef()
  const [query, setQuery] = useState(``)
  //const [focus, setFocus] = useState(false)
  const searchClient = algoliasearch(
    Config.search.appId,
    Config.search.searchKey,
  )
  //useClickOutside(ref, () => setFocus(false))
  return (
    <InstantSearch
      searchClient={searchClient}
      indexName={indices[0].name}
      onSearchStateChange={({ query }) => setQuery(query)}
      //root={{ Root, props: { ref } }}
    >
        {indices.map(({ name, title, hitComp }) => (
          <Index key={name} indexName={name}>
            <header>
              <h3>{title}</h3>
              <Stats />
            </header>
            <Results>
              <Hits hitComponent={hitComps[hitComp]()} />
            </Results>
          </Index>
        ))}
        <PoweredBy />
    </InstantSearch>
  )
}
