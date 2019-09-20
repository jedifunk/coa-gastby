import React from "react"
import RecentPostsWidget from "./recent-posts-widget"
import CategoriesWidget from "./categories-widget"

const Sidebar = props => (
    <aside className="widget-area" aria-label="Sidebar">
      <div className="widget-column footer-widget-1">
        <RecentPostsWidget />
        <CategoriesWidget />
      </div>
    </aside>

)

export default Sidebar
