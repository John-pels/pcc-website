import React from "react"
import AboutPage from "../components/about"
import Layout from "../components/layout"

const About = ({ location }) => {
  return (
    <Layout title="About" location={location}>
      <AboutPage />
    </Layout>
  )
}

export default About
