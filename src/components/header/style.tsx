import styled, { keyframes } from "styled-components"
import images from "../../assets/svg"
import { MarginalContainer } from "../container"
import Image, { FluidObject } from "gatsby-image"
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

export const HeroImageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  height: 100%;
  width: 100%;
`

export const HeroImage = styled(Image)<{ fluid: FluidObject }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.5);
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

export const HeaderContainer = styled.div`
  display: flex;
  height: 80vh;
  width: 100%;
  overflow-x: hidden;
  color: ${({ theme }) => theme?.colors?.white};
  text-align: center;
  position: relative;

  justify-content: center;
  align-items: center;
`

export const HeroContent = styled.div`
  z-index: 3;
  padding: 0 2rem;

  ${({ theme }) => theme?.media?.md} {
    padding: 0 1rem;
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
