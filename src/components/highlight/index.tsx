import { Link } from "gatsby"
import React from "react"
import { getAllPosts } from "../../query/getAll"
import { getDescription } from "../../utils/getDescription"
import { getSlug } from "../../utils/getSlug"
import { SectionTitle } from "../container"
import {
  HighlightCardContainer,
  HighlightCardDescription,
  HighlightCardTitle,
  HighlightCardTTL,
  HighlightContainer,
  HighlightFlex,
  HightlightCardImage,
} from "./style"

const Highlight = () => {
  const data = getAllPosts()

  const posts = data.allMarkdownRemark.nodes.slice(0, 2)

  return (
    <HighlightContainer>
      <SectionTitle>Weekly Highlights</SectionTitle>
      <HighlightFlex>
        {posts.map(post => {
          const title = post.frontmatter.title

          const image = post.frontmatter.image.childImageSharp.fluid

          const _description = post?.frontmatter?.description
          const formattedDescription = getDescription(_description, 150)
          return (
            <HighlightCardContainer key={post.fields.slug}>
              <HightlightCardImage fluid={image} />
              <HighlightCardTitle>
                <Link to={getSlug(post.fields.slug)}>{title}</Link>
              </HighlightCardTitle>
              <HighlightCardDescription>
                {formattedDescription}
              </HighlightCardDescription>
              <HighlightCardTTL>{post.timeToRead} mins read</HighlightCardTTL>
            </HighlightCardContainer>
          )
        })}
      </HighlightFlex>
    </HighlightContainer>
  )
}

export default Highlight
