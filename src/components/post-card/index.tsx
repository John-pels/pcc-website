import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"
import {
  PostCardContainer,
  ImageContainer,
  PostCategory,
  PostTitle,
  PostDescription,
  DesciptionContainer,
  PostDate,
} from "./style"

export const PostCard = ({ post }) => {
  const title = post.frontmatter.title || post.fields.slug
  const image = post?.frontmatter?.image?.childImageSharp?.fluid
  return (
    <PostCardContainer>
      <Link to={post.fields.slug} itemProp="url">
        <ImageContainer>
          <Image
            fluid={image}
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "5px",
              objectFit: "cover",
            }}
          />
        </ImageContainer>
        <PostCategory>Fintech</PostCategory>
        <PostTitle>
          <span itemProp="headline">{title}</span>
        </PostTitle>
        <DesciptionContainer>
          <PostDescription
            dangerouslySetInnerHTML={{
              __html: post.frontmatter.description || post.excerpt,
            }}
            itemProp="description"
          />
        </DesciptionContainer>
        <PostDate>{post.frontmatter.date}</PostDate>
      </Link>
    </PostCardContainer>
  )
}
