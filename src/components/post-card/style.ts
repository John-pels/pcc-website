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
    height: 100%;
  }
`

export const PostCategory = styled.p`
  font-size: ${({ theme }) => theme?.fontSize?.small};
  text-transform: uppercase;
  color: ${({ theme }) => theme?.colors?.hue};
`

export const PostTitle = styled.h3`
  color: ${({ theme }) => theme?.colors?.primary};
  font-size: ${({ theme }) => theme?.fontSize?.heading};
`

export const DesciptionContainer = styled.div``

export const PostDescription = styled.article`
  min-height: 100px;
  color: ${({ theme }) => theme?.colors?.hue};
  font-size: ${({ theme }) => theme?.fontSize?.heading};
  font-size: ${({ theme }) => theme?.fontSize?.normal};
  line-height: 25px;
`

export const PostDate = styled.p`
  color: ${({ theme }) => theme?.colors?.hue};
  font-size: ${({ theme }) => theme?.fontSize?.heading};
  font-size: ${({ theme }) => theme?.fontSize?.small};
`
