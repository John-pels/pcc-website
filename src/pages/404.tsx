import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { getPageInfo } from "../query/pageInfo"
import styled from "styled-components"
import images from "../assets/svg"

const { not_found } = images

const NotFoundContainer = styled.div`
  font-family: ${({ theme }) => theme?.fontFamily?.normal};
  font-size: ${({ theme }) => theme?.fontSize?.custom(14)};
  color: ${({ theme }) => theme?.colors?.hue};

  display: flex;
  justify-content: center;
  min-height: 65vh;
  align-items: center;
  text-align: center;

  img {
    width: 30%;
    height: 30%;
    margin-bottom: 1rem;
  }

  ${({ theme }) => theme?.media?.md} {
    img {
      width: 50%;
      height: 50%;
    }
  }
`

const NotFoundPage = () => {
  const data = getPageInfo()
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO title="404: Not Found" />
      <NotFoundContainer>
        <div>
          <img src={not_found} />
          <h1>404: Not Found</h1>
          <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        </div>
      </NotFoundContainer>
    </Layout>
  )
}

export default NotFoundPage
