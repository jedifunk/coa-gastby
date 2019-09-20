import React from "react"
import Layout from "../../components/layout"

const HomepageLayout =({ pageNumber, location, children }) => (
    <Layout>
            {children}
    </Layout>
)

export default HomepageLayout