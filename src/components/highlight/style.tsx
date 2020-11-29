import styled from "styled-components"
import Image from "gatsby-image"

export const HighlightContainer = styled.div`
  margin-bottom: 3rem;
  margin-top: -15rem;
`

export const HighlightFlex = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 0 13px;

  ${({ theme }) => theme?.media?.md} {
    padding: 0;
  }

  ${({ theme }) => theme?.media.md} {
    flex-direction: column;
  }
`

export const HighlightCardContainer = styled.div`
  width: 48%;
  font-family: ${({ theme }) => theme?.fontFamily?.normal};

  ${({ theme }) => theme?.media.md} {
    width: 100%;
    margin-bottom: 2rem;
  }
`

export const HightlightCardImage = styled(Image)`
  height: 300px;
  object-fit: cover;
  border-radius: 6px;
  ${({ theme }) => theme?.media.md} {
    height: 150px;
  }
`

export const HighlightCardTitle = styled.h3`
  margin: 1.5rem 0;
  color: ${({ theme }) => theme?.colors?.primary};
  font-size: ${({ theme }) => theme?.fontSize?.custom(17)};
  font-family: ${({ theme }) => theme?.fontFamily?.heading};

  a {
    text-decoration: none;
    color: inherit;
  }
`

export const HighlightCardDescription = styled.p`
  margin: 0;
  margin-bottom: 1.5rem;

  color: ${({ theme }) => theme?.colors?.hue};
  font-size: ${({ theme }) => theme?.fontSize?.small};
  line-height: 21px;
`
export const HighlightCardTTL = styled.p`
  color: ${({ theme }) => theme?.colors?.hue};
  font-size: ${({ theme }) => theme?.fontSize?.small};
`
