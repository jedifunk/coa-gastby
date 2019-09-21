import React from "react"
import RecentPostsWidget from "./recent-posts-widget"
import CategoriesWidget from "./categories-widget"

const Sidebar = props => (

    <aside id="secondary" className="widget-area sidebar">
      <RecentPostsWidget />
      <CategoriesWidget />
    </aside>

)

export default Sidebar
