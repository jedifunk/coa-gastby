import React from "react"
import RecentPostsWidget from "./recent-posts-widget"
import CategoriesWidget from "./categories-widget"
import InstagramWidget from "./instagram-widget"

const Sidebar = props => (

    <aside id="secondary" className="widget-area sidebar">
      <RecentPostsWidget />
      <CategoriesWidget />
      <InstagramWidget />
    </aside>

)

export default Sidebar
