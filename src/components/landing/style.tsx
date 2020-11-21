import styled from "styled-components"
import Image from "gatsby-image"

export const LandingContainer = styled.div`
  padding: 0 13px;

  ${({ theme }) => theme?.media?.md} {
    padding: 0;
    margin: 2rem 0;
  }
`

export const LandingFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 80vh;

  ${({ theme }) => theme?.media.md} {
    flex-direction: column-reverse;
    min-height: unset;
  }
`

export const LandingContent = styled.div`
  width: 50%;
  font-family: ${({ theme }) => theme?.fontFamily?.normal};

  ${({ theme }) => theme?.media.md} {
    width: 100%;
  }
`

export const LandingHeroText = styled.h1`
  margin: 0;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme?.colors?.primary};
  font-size: ${({ theme }) => theme?.fontSize?.custom(50)};
  font-family: ${({ theme }) => theme?.fontFamily?.heading};

  a {
    text-decoration: none;
    color: inherit;
  }

  ${({ theme }) => theme?.media.md} {
    font-size: ${({ theme }) => theme?.fontSize?.custom(30)};
  }
`

export const LandingHeroDescription = styled.p`
  margin: 0;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme?.colors?.hue};
  font-size: ${({ theme }) => theme?.fontSize?.small};
  line-height: 21px;
`

export const LandingImage = styled.div`
  width: 43%;
  height: 450px;

  ${({ theme }) => theme?.media.md} {
    width: 100%;
    height: 150px;
    margin-bottom: 2rem;
  }
`

export const _Image = styled(Image)`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  object-fit: cover;
`

export const LandingLink = styled.p`
  margin: 0;
  font-size: 13px;

  a {
    color: inherit;
  }
`

export const LandingCategory = styled.p`
  margin: 0;
  margin-bottom: 2rem;
  text-transform: uppercase;

  font-size: 12px;
  font-weight: 600;
  color: ${({ theme }) => theme?.colors?.hue};
`
