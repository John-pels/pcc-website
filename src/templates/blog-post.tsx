import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "gatsby-image"
import {
  BlogPostContainer,
  BlogPostImageWrapper,
  BlogDescription,
  BlogPostCategory,
  HeadingContainer,
  H1,
  BlogPostBody,
  Footer,
  TagsWrapper,
  Tag,
  Tagline,
  Span,
  Nav,
  NavItem,
} from "./style"

import { getSlug } from "../utils/getSlug"


const tags = [
  "Organisation",
  "Sports",
  "Politics",
  "Engineering",
  "Financial Technilogy",
]

const BlogPostTemplate = ({ data }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data

  const image = post.frontmatter?.image?.childImageSharp?.fluid
  const description = post?.frontmatter?.description
    const tags = post?.frontmatter?.tags || []

    const author = post?.frontmatter?.author

  return (
    <Layout title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <BlogPostContainer>
        <HeadingContainer>
          <BlogPostCategory>Business</BlogPostCategory>
          <H1 itemProp="headline">{post.frontmatter.title}</H1>
          <Footer>
            <Bio
              author={author}
              ttr={post?.timeToRead}
              date={post.frontmatter.date}
            />
          </Footer>
          <BlogDescription
            dangerouslySetInnerHTML={{
              __html: description,
            }}
            itemProp="description"
          />
          <TagsWrapper>
            <Tagline>
              {Array.isArray(tags) && tags.length
                ? tags.map((tag, index) => {
                    return <Tag key={index}>{tag}</Tag>
                  })
                : null}
            </Tagline>
            {/* <Date>By FandK Savings * {post.frontmatter.date}</Date> */}
          </TagsWrapper>
        </HeadingContainer>
        <BlogPostImageWrapper>
          <Image
            fluid={image}
            style={{
              height: "300px",
              borderRadius: "5px",
            }}
          />
        </BlogPostImageWrapper>
        <Span />
        <BlogPostBody
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />

        <Nav>
          <NavItem>
            {previous && (
              <Link to={getSlug(previous.fields.slug)} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </NavItem>
          <NavItem>
            {next && (
              <Link to={getSlug(next.fields.slug)} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </NavItem>
        </Nav>
      </BlogPostContainer>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      timeToRead
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        tags
        author
        image {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
