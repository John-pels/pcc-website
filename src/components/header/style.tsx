import styled, { keyframes } from "styled-components"
import images from "../../assets/svg"
import { MarginalContainer } from "../container"
const { waveBg } = images

export const HeroAnimation = keyframes`
    from {
        transform: translateY(70px);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;

    }
`

export const TaglineAnimation = keyframes`

    0% {
      transform: translateX(100%);
      opacity: 0;
    }

    50% {
      transform: translateX(0);
      opacity: 0.5;
  
    }

    75% {
      transform: translateX(0);
      opacity: 1;
    
    }

    100% {
      transform: translateX(0);
      opacity: 1;
    }
  
`

export const HeaderContainer = styled(MarginalContainer)`
  display: flex;
  flex-flow: column;
  min-height: 120vh;
  max-width: 100%;
  overflow-x: hidden;
  color: ${({ theme }) => theme?.colors?.white};
  background: url(${waveBg}) no-repeat;
  background-position: center;
  background-size: cover;
  text-align: center;

  ${({ theme }) => theme?.media?.md} {
  }
`

export const HeroText = styled.h1`
  font-family: ${({ theme }) => theme?.fontFamily?.heading};
  font-size: ${({ theme }) => theme?.fontSize?.custom(45)};
  animation: ${HeroAnimation} 3s 1 cubic-bezier(0, 1, 0.5, 1);
  margin-top: 4rem;

  ${({ theme }) => theme?.media?.md} {
    font-size: ${({ theme }) => theme?.fontSize?.custom(30)};
  }
`

export const Tagline = styled.p`
  font-family: ${({ theme }) => theme?.fontFamily?.normal};
  font-size: ${({ theme }) => theme?.fontSize?.custom(20)};
  animation: ${TaglineAnimation} 3s 1;

  ${({ theme }) => theme?.media?.md} {
    font-size: ${({ theme }) => theme?.fontSize?.custom(16)};
  }
`

export const TypeText = styled.h4`
  font-family: ${({ theme }) => theme?.fontFamily?.normal};
  font-weight: 400;
  line-height: 25px;
`
