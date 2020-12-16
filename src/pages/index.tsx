import React from "react"
import Layout from "../components/layout"
import Landing from "../components/landing"
import Highlight from "../components/highlight"
import AllPost from "../components/all-post"

const Home = ({ location }) => {
  return (
    <React.Fragment>
      <Layout
        title="Pentecostal Church of Christ"
        location={location}
        showHeader={true}
      >
        <Highlight />
        <AllPost />
      </Layout>
    </React.Fragment>
  )
}

export default Home
