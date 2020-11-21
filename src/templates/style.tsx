import styled from "styled-components"

export const BlogPostContainer = styled.section`
  display: flex;
  flex-flow: column;
  max-width: 750px;
  margin: 0 auto;
  font-family: ${({ theme }) => theme?.fontFamily?.normal};
`

export const BlogPostImageWrapper = styled.div`
  width: 100%;
  margin: 2rem 0;
`

export const Span = styled.span`
  width: 100%;
  height: 1px;
  background: #e3e3e3;
`

export const BlogPostCategory = styled.section`
  color: ${({ theme }) => theme?.colors?.hue};
  font-size: ${({ theme }) => theme?.fontSize?.small};
  text-transform: uppercase;
`

export const BlogDescription = styled.div`
  line-height: 1.9;
  margin-bottom: 1.3rem;
  color: #363945;
`

export const BlogPostBody = styled(BlogDescription)``

export const HeadingContainer = styled.header`
  margin: 3rem 0 1rem;

  ${({ theme }) => theme?.media?.md} {
    margin-top: 1rem;
  }
`

export const H1 = styled.h1`
  color: #363945;
  font-family: ${({ theme }) => theme?.fontFamily?.heading};
`
export const TagsWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  ${({ theme }) => theme?.media?.md} {
    flex-flow: column;
    align-items: flex-start;
  }
`
export const Tag = styled.span`
  padding: 0.3rem;
  border-radius: 20px;
  border: 1px solid #363945;
  font-size: ${({ theme }) => theme?.fontSize?.custom(10)};
  margin: 0 1rem 1rem 0;
  cursor: pointer;
`
export const Tagline = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const Date = styled.span`
  color: ${({ theme }) => theme?.colors?.hue};
  font-size: ${({ theme }) => theme?.fontSize?.custom(13)};
`

export const Footer = styled.footer``

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

export const NavItem = styled.div`
  a {
    text-decoration: none;
    color: ${({ theme }) => theme?.colors?.primary};
    font-size: ${({ theme }) => theme?.fontSize?.custom(13)};
  }
`
