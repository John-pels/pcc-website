import { graphql, useStaticQuery } from "gatsby"

export const getPageInfo = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return data
}
