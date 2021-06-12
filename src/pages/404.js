import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Home({ location }) {
  return (
    <Layout>
      <SEO pagetitle="ページが見つかりません" pagepath={location.pathname} />
      <div className="partsGrid">
        <h1
          style={{
            height: "calc(100vh - (60px + 100px))",
            display: "grid",
            placeContent: "center",
          }}
        >
          お探しのページが見つかりませんでした
        </h1>
      </div>
    </Layout>
  )
}
