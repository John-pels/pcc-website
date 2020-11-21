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
  PostTTR,
  PostBase,
} from "./style"
import { getDescription } from "../../utils/getDescription"
import moment from "moment"
import { getSlug } from "../../utils/getSlug"

export const PostCard = ({ post }) => {
  const title = post.frontmatter.title || post.fields.slug
  const image = post?.frontmatter?.image?.childImageSharp?.fluid

  const _description = post?.frontmatter?.description
  const formattedDescription = getDescription(_description)

  return (
    <PostCardContainer>
      <Link to={getSlug(post.fields.slug)} itemProp="url">
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
              __html: formattedDescription,
            }}
            itemProp="description"
          />
        </DesciptionContainer>

        <PostBase>
          <PostTTR>{post.timeToRead} mins read</PostTTR>
          <PostDate>{moment(post.frontmatter.date).fromNow()}</PostDate>
        </PostBase>
      </Link>
    </PostCardContainer>
  )
}
