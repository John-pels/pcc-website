import React from "react"
import { getAllPosts } from "../../query/getAll"
import {
  Flex,
  PostCardColumn,
  PostCardColumnExternal,
  SectionTitle,
} from "../container"
import { PostCard } from "../post-card"
import { AllPostContainer } from "./style"

const AllPost = () => {
  const data = getAllPosts()
  const posts = data.allMarkdownRemark.nodes

  return (
    <AllPostContainer>
      <SectionTitle>Recommended Reads</SectionTitle>
      <Flex>
        {posts.map((post: any) => {
          return (
            <PostCardColumnExternal key={post.fields.slug}>
              <PostCardColumn>
                <PostCard post={post} />
              </PostCardColumn>
            </PostCardColumnExternal>
          )
        })}
      </Flex>
    </AllPostContainer>
  )
}

export default AllPost
