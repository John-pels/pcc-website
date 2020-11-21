import React from "react"
import Image from "gatsby-image"
import { getBio } from "../query/getBio"
import styled from "styled-components"

const BioContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 50%;
  margin: 1.5rem 0;

  ${({ theme }) => theme?.media?.md} {
    width: 100%;
  }
`
const AuthorInfo = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: center;
`
const ImageWrapper = styled.div`
  display: flex;
  padding: 2px;
  border-top: 1px solid rgb(51, 124, 99);
  border-bottom: 1px solid rgb(51, 124, 99);
  border-radius: 50%;
  margin-right: 1rem;
`
const AuthorBio = styled.div`
  display: flex;
  flex-flow: column;
`
const AuthorName = styled.span`
  font-weight: 600;
  font-size: ${({ theme }) => theme?.fontSize?.custom(14)};
  margin-bottom: 2px;
`
const Date = styled.span`
  font-size: ${({ theme }) => theme?.fontSize?.custom(12)};
  line-height: 2;
`

interface DateType {
  date: Date
  ttr: number
  author?: string
}

const Bio = ({ date, ttr, author }: DateType) => {
  const data = getBio()
  // Set these values by editing "siteMetadata" in gatsby-config.js
  const postAuthor = author || data.site.siteMetadata?.author.name
  const avatar = data?.avatar?.childImageSharp?.fixed

  return (
    <BioContainer>
      <ImageWrapper>
        {avatar && (
          <Image
            fixed={avatar}
            alt={postAuthor || ``}
            imgStyle={{
              borderRadius: `50%`,
              padding: ".1rem",
            }}
          />
        )}
      </ImageWrapper>
      

      <AuthorInfo>
        {postAuthor && (
          <AuthorBio>
            <AuthorName>{postAuthor}</AuthorName>
            <Date>
              {date} &middot; {ttr} mins read
            </Date>
          </AuthorBio>
        )}
      </AuthorInfo>
    </BioContainer>
  )
}

export default Bio
