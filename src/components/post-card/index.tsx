import React from "react"
import { Link } from "gatsby"

export const PostCard = ({ post }) => {
  const title = post.frontmatter.title || post.fields.slug
  return (
    <div>
      <h2>
        <Link to={post.fields.slug} itemProp="url">
          <span itemProp="headline">{title}</span>
        </Link>
      </h2>
      <small>{post.frontmatter.date}</small>
      <section>
        <p
          dangerouslySetInnerHTML={{
            __html: post.frontmatter.description || post.excerpt,
          }}
          itemProp="description"
        />
      </section>
    </div>
  )
}
