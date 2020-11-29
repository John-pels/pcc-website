import styled from "styled-components"
import images from "../../assets/svg"
import { MarginalContainer } from "../container"
const { waveBg } = images

export const HeaderContainer = styled(MarginalContainer)`
  display: flex;
  flex-flow: column;
  min-height: 500px;
  color: ${({ theme }) => theme?.colors?.white};
  background: url(${waveBg}) no-repeat;
  background-position: center;
  background-size: cover;
  text-align: center;

  ${({ theme }) => theme?.media?.md} {
    min-height: 430px;
  }
`

export const HeroText = styled.h1`
  font-family: ${({ theme }) => theme?.fontFamily?.heading};
  font-size: ${({ theme }) => theme?.fontSize?.custom(45)};

  ${({ theme }) => theme?.media?.md} {
    font-size: ${({ theme }) => theme?.fontSize?.custom(30)};
  }
`

export const Tagline = styled.p`
  font-family: ${({ theme }) => theme?.fontFamily?.normal};
  font-size: ${({ theme }) => theme?.fontSize?.custom(20)};

  ${({ theme }) => theme?.media?.md} {
    font-size: ${({ theme }) => theme?.fontSize?.custom(16)};
  }
`
