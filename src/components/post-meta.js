import React from "react"
import { Link } from "gatsby"
import moment from "moment/moment"

const PostMeta = ({ author, date, categories, uri }) => (
    <div className="entry-meta">
        <span className="posted-on"><time className="entry-date published updated">{moment(date).format(`MMMM D, YYYY`)}</time></span>
        <span className=""> by <span className="author vcard"><Link to={author.slug} className="url fn n">{author.name}</Link></span></span>
        <div className="cat-links tax-links">
            <ul className="post-categories">
            {categories.nodes.map(cat => (
                <li key={cat.name}><Link to={`/category/${cat.slug}`}>{cat.name}</Link></li>
            ))
            .reduce((accu, elem) => {
              return accu === null ? [elem] : [...accu, ", ", elem]
            }, null)}
            </ul>
        </div>
    </div>
)

export default PostMeta