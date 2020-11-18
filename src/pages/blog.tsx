import React from "react"

import Layout from "../components/layout"
import { getAllPosts } from "../query/getAll"
import { PostCard } from "../components/post-card"
import { Flex, PostCardColumn } from "../components/container"

const Blog = () => {
  const data = getAllPosts()
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout title="Blog">
      <Flex>
        {posts.map((post: any) => {
          return (
            <PostCardColumn key={post.fields.slug}>
              <PostCard post={post} />
            </PostCardColumn>
          )
        })}
        {posts.map((post: any) => {
          return (
            <PostCardColumn key={post.fields.slug}>
              <PostCard post={post} />
            </PostCardColumn>
          )
        })}
        {posts.map((post: any) => {
          return (
            <PostCardColumn key={post.fields.slug}>
              <PostCard post={post} />
            </PostCardColumn>
          )
        })}
      </Flex>
    </Layout>
  )
}

export default Blog
