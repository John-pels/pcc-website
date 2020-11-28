import React from "react"
import Layout from "../components/layout"
import ContactUs from "../components/contact/index"

const Contact = ({ location }) => {
  return (
    <Layout title="Contact" location={location}>
      <ContactUs />
    </Layout>
  )
}

export default Contact
