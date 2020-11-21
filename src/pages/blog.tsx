import React from "react"

import Layout from "../components/layout"
import { getAllPosts } from "../query/getAll"
import { PostCard } from "../components/post-card"
import {
  Flex,
  PostCardColumn,
  PostCardColumnExternal,
} from "../components/container"

const Blog = () => {
  const data = getAllPosts()
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout title="Blog">
      <Flex>
        {posts.map((post: any) => {
          return (
            <PostCardColumnExternal>
              <PostCardColumn key={post.fields.slug}>
                <PostCard post={post} />
              </PostCardColumn>
            </PostCardColumnExternal>
          )
        })}
        {posts.map((post: any) => {
          return (
            <PostCardColumnExternal>
              <PostCardColumn key={post.fields.slug}>
                <PostCard post={post} />
              </PostCardColumn>
            </PostCardColumnExternal>
          )
        })}
        {posts.map((post: any) => {
          return (
            <PostCardColumnExternal>
              <PostCardColumn key={post.fields.slug}>
                <PostCard post={post} />
              </PostCardColumn>
            </PostCardColumnExternal>
          )
        })}
      </Flex>
    </Layout>
  )
}

export default Blog
