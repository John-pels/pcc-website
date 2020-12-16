import styled from "styled-components"

export const PostCardContainer = styled.div`
  width: 100%;
  font-family: ${({ theme }) => theme?.fontFamily?.normal};

  a {
    text-decoration: none;
  }
`

export const ImageContainer = styled.div`
  width: 100%;
  height: 180px;
  border-radius: 5px;

  ${({ theme }) => theme?.media.md} {
    width: 100%;
    height: 150px;
  }
`

export const PostCategory = styled.p`
  font-size: 10px;
  text-transform: uppercase;
  margin: 0;
  margin-top: 1.5rem;
  color: ${({ theme }) => theme?.colors?.hue};
`

export const PostTitle = styled.h3`
  margin: 0.5rem 0;
  /* min-height: 40px; */
  color: ${({ theme }) => theme?.colors?.primary};
  font-size: ${({ theme }) => theme?.fontSize?.custom(17)};
  line-height: 28px;
`

export const DesciptionContainer = styled.div``

export const PostDescription = styled.article`
  color: ${({ theme }) => theme?.colors?.hue};
  font-size: ${({ theme }) => theme?.fontSize?.custom(13)};
  line-height: 21px;
  margin-bottom: 1rem;
`

export const PostDate = styled.p`
  margin: 0;
  color: ${({ theme }) => theme?.colors?.hue};
  font-size: ${({ theme }) => theme?.fontSize?.small};
`

export const PostTTR = styled(PostDate)``

export const PostBase = styled.div`
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
