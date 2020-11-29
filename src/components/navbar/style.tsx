import styled from "styled-components"
import { MarginalContainer } from "../container"

export const NavbarContainer = styled(MarginalContainer)<{
  hasScrolled: boolean
  isNotHome: boolean
}>`
  background-color: ${({ theme, hasScrolled }) =>
    hasScrolled ? "#fff" : theme?.colors?.primary};

  background-color: ${({ isNotHome }) => isNotHome && "#fff"};

  box-shadow: ${({ hasScrolled }) =>
    hasScrolled && "0 0 20px rgba(0, 0, 0, 0.1)"};

  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  left: 0;
  max-width: 100%;
  z-index: 50;
  transition: background-color 0.3s, box-shadow 0.3s;

  h1 {
    margin: 0;
  }

  ${({ theme }) => theme?.media?.lg} {
    flex-direction: column;
  }
`

export const NavbarLabel = styled.div<{
  isOpen: boolean
  hasScrolled?: boolean
}>`
  transition: 0.2s;

  ${({ theme }) => theme?.media?.lg} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background-color: ${({ isOpen }) => isOpen && "#fff"};
  }
  .small {
    display: none;
  }
  .large {
    display: block;
  }
  ${({ theme }) => theme?.media?.lg} {
    .small {
      display: block;
    }
    .large {
      display: none;
    }
  }

  z-index: 22;

  width: 170px;

  img {
    width: 100%;
    height: 100%;
  }

  a {
    text-decoration: none;
    color: ${({ theme, hasScrolled }) =>
      hasScrolled ? theme?.colors.primary : theme?.colors.white};
    font-family: ${({ theme }) => theme?.fontFamily?.heading};
    font-size: ${({ theme }) => theme?.fontSize?.custom(16)};

    ${({ theme }) => theme?.media?.lg} {
      font-size: ${({ theme }) => theme?.fontSize?.custom(12)};
    }
  }
`

export const NavbarToggler = styled.div<{ isOpen: boolean }>`
  width: 22px;
  height: 22px;
  transition: 0.2s;
  cursor: pointer;
  transition: 0.2s;

  transform: ${({ isOpen }) => isOpen && "rotate(90deg) perspective(200)"};

  img {
    width: 100%;
    height: 100%;
  }
`

export const Toggler = styled.div<{ isOpen: boolean; hasScrolled?: boolean }>`
  .icon-bar {
    display: block;
    width: 22px;
    height: 2px;
    border-radius: 1px;
    margin: 4px 0 4px 0;
    transition: all 0.2s;
    background-color: ${({ theme, hasScrolled }) =>
      hasScrolled ? theme?.colors?.primary : theme?.colors?.white};

    background-color: ${({ theme, isOpen }) =>
      isOpen && theme?.colors?.primary};

    &:nth-of-type(1) {
      transform: ${({ isOpen }) => (isOpen ? "rotate(45deg)" : "rotate(0)")};
      transform-origin: ${({ isOpen }) => isOpen && "10% 10%"};
    }

    &:nth-of-type(2) {
      opacity: ${({ isOpen }) => (isOpen ? 0 : 1)};
      filter: alpha(opacity= ${({ isOpen }) => (isOpen ? 0 : 100)});
    }
    &:nth-of-type(3) {
      transform: ${({ isOpen }) => (isOpen ? "rotate(-45deg)" : "rotate(0)")};
      transform-origin: ${({ isOpen }) => isOpen && "10% 90%"};
    }
  }
`

export const NavbarFlex = styled.div<{
  isOpen: boolean
  hasScrolled?: boolean
}>`
  display: flex;
  margin-left: 1rem;
  background: ${({ theme, hasScrolled }) =>
    !hasScrolled ? theme?.colors?.primary : theme?.colors.white};
  flex: 1;
  align-items: center;
  color: ${({ theme, hasScrolled }) =>
    hasScrolled ? theme?.colors?.primary : theme?.colors.white};
  ${({ theme }) => theme?.media?.lg} {
    color: ${({ theme, isOpen }) =>
      isOpen ? theme?.colors?.primary : theme?.colors.white};
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    margin-left: 0;

    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    max-height: 100%;
    height: -webkit-fill-available;
    background-color: #fff;
    z-index: 20;
    overflow-y: auto;
    overflow-x: hidden;

    //this padding top is to prevent the items from overlapping on the logo
    padding-top: 7rem;

    transition: transform 0.3s, opacity 1.3s;
    transform: ${({ isOpen }) =>
      !isOpen ? "translateY(-100%)" : "translateY(0)"};
  }
`

export const NavbarFlexItem = styled.div<{
  hasScrolled?: boolean
  isOpen?: boolean
}>`
  letter-spacing: 0.07em;
  color: ${({ theme, hasScrolled }) =>
    hasScrolled ? theme?.colors.primary : theme?.colors.white};
  color: ${({ theme, isOpen }) => isOpen && theme?.colors.primary};
  cursor: pointer;
  font-size: ${({ theme }) => theme?.fontSize?.navlink};
  padding: 0 30px;

  ${({ theme }) => theme?.media?.lg} {
    cursor: default;
    margin: 1rem 0;
    padding: 0 2rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    span {
      font-size: 19px;
    }
  }

  a {
    text-decoration: none;
    color: inherit;
    font-family: ${({ theme }) => theme?.fontFamily?.normal};
    transition: 0.3s ease-in-out;
    font-weight: 600;

    &:hover {
      color: ${({ theme }) => theme?.colors.gold};
    }
  }
`

export const NavbarFlexButtonContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme?.colors.primary};
    font-family: ${({ theme }) => theme?.fontFamily?.normal};
    transition: 0.3s ease-in-out;
    font-weight: 600;

    &:nth-of-type(1) {
      padding-right: 3rem;
    }

    &:hover {
      color: ${({ theme }) => theme?.colors.gold};
    }
  }

  ${({ theme }) => theme?.media?.md} {
    flex-direction: column;
    flex: none;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
  }
`

export const StartButton = styled.button`
  background-image: ${({ theme }) =>
    `linear-gradient(to bottom left, ${theme?.colors?.primary}, ${theme?.colors?.gold})`};
  /* background-color: ${({ theme }) => theme?.colors?.hue}; */
  color: ${({ theme }) => theme?.colors?.white};
  font-family: ${({ theme }) => theme?.fontFamily?.heading};
  letter-spacing: 0.05em;
  border: none;
  border-radius: 5px;
  padding: 8px 20px;
  font-size: ${({ theme }) => theme?.fontSize?.custom(15)};
  cursor: pointer;
  border: 2px solid transparent;
  transition: 0.2s;

  &:hover {
    transform: scale(1.05);
  }

  &:focus {
    outline: 0;
  }
`

export const NavbarFlexButton = styled(StartButton)`
  margin-left: 1.5rem;
  transition: 0.2s;

  ${({ theme }) => theme?.media?.lg} {
    margin-left: 0;
    width: 100%;
    margin: 1rem 0;
    padding-top: 10px;
    padding-bottom: 10px;
    border-radius: 8px;
  }
`

export const BrandText = styled.h1``
