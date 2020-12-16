import React from "react"

import Layout from "../components/layout"
import { getAllPosts } from "../query/getAll"
import { PostCard } from "../components/post-card"
import styled from "styled-components"
import {
  Flex,
  PostCardColumn,
  PostCardColumnExternal,
} from "../components/container"

const Heading = styled.h3`
  font-family: ${({ theme }) => theme?.fontFamily?.heading};
  text-align: center;
  color: ${({ theme }) => theme?.colors?.primary};
  margin: 6.5rem 0;
  font-size: ${({ theme }) => theme?.fontSize?.custom(28)};

  ${({ theme }) => theme?.media?.md} {
    font-size: ${({ theme }) => theme?.fontSize?.custom(20)};
  }
`

const Blog = ({ location }) => {
  const data = getAllPosts()
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout title="Blog" location={location}>
      <Heading> All Messages</Heading>
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
