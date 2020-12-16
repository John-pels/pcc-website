import React from "react"
import { getAllPosts } from "../../query/getAll"
import {
  LandingCategory,
  LandingContainer,
  LandingContent,
  LandingFlex,
  LandingHeroDescription,
  LandingHeroText,
  LandingImage,
  LandingLink,
  _Image,
} from "./style"
import Image from "gatsby-image"
import { getDescription } from "../../utils/getDescription"
import { Link } from "gatsby"
import { getSlug } from "../../utils/getSlug"

const Landing = () => {
  const data = getAllPosts()
  const post = data.allMarkdownRemark.nodes[0]
  const title = post.frontmatter.title

  const image = post.frontmatter.image.childImageSharp.fluid

  const _description = post?.frontmatter?.description
  const formattedDescription = getDescription(_description, 500)
  const tags = post?.frontmatter?.tags

  return (
    <LandingContainer>
      <LandingFlex>
        <LandingContent>
          <LandingCategory>{tags?.[0]}</LandingCategory>
          <LandingHeroText>
            <Link to={getSlug(post.fields.slug)}>{title}</Link>
          </LandingHeroText>
          <LandingHeroDescription>
            {formattedDescription}
          </LandingHeroDescription>
          <LandingLink>
            <Link to={getSlug(post.fields.slug)}>Read the article</Link>
          </LandingLink>
        </LandingContent>
        <LandingImage>
          <_Image fluid={image} />
        </LandingImage>
      </LandingFlex>
    </LandingContainer>
  )
}

export default Landing
