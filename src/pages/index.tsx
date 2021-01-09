import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import Highlight from "../components/highlight"
import AllPost from "../components/all-post"
import CustomModal from "../components/modal/index"
import TimeOfService from "../components/timeOfService"

const Home = ({ location }) => {
  const [showModal, setShowModal] = useState<boolean>(false)

  const hideModal = () => {
    setShowModal(false)
    window.document.body.classList.remove("fixed")
  }

  useEffect(() => {
    setTimeout(() => {
      setShowModal(true)
      window.document.body.classList.add("fixed")
    }, 5000)
  }, [])
  return (
    <React.Fragment>
      <Layout
        title="Pentecostal Church of Christ"
        location={location}
        showHeader={true}
      >
        <Highlight />
        <AllPost />
        <CustomModal
          show={showModal}
          closeModal={hideModal}
          width="30rem"
          padding
        >
          <TimeOfService />
        </CustomModal>
      </Layout>
    </React.Fragment>
  )
}

export default Home
