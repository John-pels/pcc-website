import React from "react"
import Layout from "../components/layout"
import GallerySlider from "../components/gallery/index"

const Gallery = ({ location }) => {
  return (
    <Layout title="Gallery" location={location}>
      <GallerySlider />
    </Layout>
  )
}
export default Gallery
