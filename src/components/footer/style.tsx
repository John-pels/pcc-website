import styled from "styled-components"
import { MarginalContainer } from "../container"
export const FooterContainer = styled(MarginalContainer)`
  display: flex;
  flex-flow: column;
  font-family: ${({ theme }) => theme?.fontFamily?.normal};
  background: ${({ theme }) => theme?.colors?.primary};
  color: ${({ theme }) => theme?.colors?.white};
  padding: 4rem 5rem;
  width: 100%;

  ${({ theme }) => theme?.media?.md} {
    padding: 1rem;
  }
`

export const FooterFlex = styled.section`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  margin-bottom: 2rem;

  ${({ theme }) => theme?.media?.custom(840)} {
    flex-flow: column;
  }
`

export const FooterBrief = styled.form`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  ${({ theme }) => theme?.media?.custom(840)} {
    width: 100%;
  }
`
export const ImageWrapper = styled.div`
  width: 50%;
  height: 300px;
`
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: center;
`

export const DetailsContainer = styled.section`
  width: 50%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-flow: column;

  ${({ theme }) => theme?.media?.custom(840)} {
    width: 100%;
  }
`

export const InquiryDetails = styled.div`
  display: flex;
  padding: 1em 0;

  ${({ theme }) => theme?.media?.custom(840)} {
    flex-flow: column wrap;
    align-items: center;
  }
`

export const DetailIcon = styled.div`
  position: relative;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  width: 1.8em;
  height: 1.8em;
  font-size: 1.5em;
  border-radius: 50%;
  background: ${({ theme }) => theme?.colors?.hue};

  &:before {
    content: "";
    position: absolute;
    right: -1.5em;
    width: 1.5em;
    height: 0.2em;
    background: ${({ theme }) => theme?.colors?.hue};

    ${({ theme }) => theme?.media?.custom(840)} {
      content: "";
      position: absolute;
      right: 0.8em;
      width: 0.2em;
      height: 1em;
      top: 1.5em;
    }
  }

  ${({ theme }) => theme?.media?.custom(840)} {
    flex-flow: column wrap;
    align-items: center;
  }
`
export const DetailText = styled.div`
  width: 20em;
  height: 5em;
  padding: 2em 1em;
  box-shadow: ${({ theme }) => `0px 0px 3px 0px ${theme?.colors?.hue}`};
  border-left: ${({ theme }) => `2px solid ${theme?.colors?.hue}`};
  margin-left: 2.2rem;
  text-align: center;

  ${({ theme }) => theme?.media?.custom(840)} {
    display: flex;
    margin-top: 1em;
    margin-left: 0;
  }
`

export const SocialMedia = styled.div`
  display: flex;
  width: 30%;
  margin: 1rem auto;
  justify-content: space-evenly;

  a {
    font-size: ${({ theme }) => theme?.fontSize?.custom(20)};
    color: ${({ theme }) => theme?.colors?.white};
  }
`

export const SocialHeading = styled.h4`
  text-align: center;
`

export const Copyright = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme?.fontSize?.custom(15)};
  a {
    text-decoration: none;
    color: ${({ theme }) => theme?.colors?.white};

    &:hover {
      text-decoration: underline;
    }
  }

  ${({ theme }) => theme?.media?.custom(840)} {
    font-size: ${({ theme }) => theme?.fontSize?.custom(12)};
  }
`

export const AnchorTag = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme?.colors?.white};
`
