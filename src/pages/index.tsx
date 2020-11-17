import React from "react"

import Layout from "../components/layout"
import { getAllPosts } from "../query/getAll"
import { PostCard } from "../components/post-card"

const Home = () => {
  const data = getAllPosts()
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout title="Home">
      <div>
        {posts.map((post: any) => {
          return <PostCard post={post} key={post.fields.slug} />
        })}
      </div>
    </Layout>
  )
}

export default Home
