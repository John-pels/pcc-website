import React from "react"
import Layout from "../components/layout"
import { getAllPosts } from "../query/getAll"
import { PostCard } from "../components/post-card"
import {
  Flex,
  PostCardColumn,
  PostCardColumnExternal,
} from "../components/container"
import Landing from "../components/landing"
import Highlight from "../components/highlight"
import AllPost from "../components/all-post"

const Home = ({ location }) => {
  return (
    <Layout title="Home" location={location}>
      <Landing />
      <Highlight />
      <AllPost />
    </Layout>
  )
}

export default Home
