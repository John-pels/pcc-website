import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import {
  NavbarContainer,
  NavbarLabel,
  NavbarToggler,
  Toggler,
  NavbarFlex,
  NavbarFlexButtonContainer,
  NavbarFlexButton,
} from "./style"
import { Large, Small } from "../responsive"
import images from "../../assets/svg"
import NavItem from "./navItem"
import { NavItemsTypes } from "./types"

const { logo, logoLg } = images

interface NavbarTypes {
  location: any
}

const items: NavItemsTypes[] = [
  {
    name: "Products",
    path: "/",
  },
  {
    name: "Support",
    path: "/",
  },
  {
    name: "Blog",
    path: "/blog",
  },
]

const Navbar = ({ location }: NavbarTypes) => {
  const [hasScrolled, setHasScrolled] = useState<boolean>(false)
  const [isOpen, _setIsOpen] = useState<boolean>(false)

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > 50) {
        setHasScrolled(true)
      } else {
        setHasScrolled(false)
      }
    }
  }

  /**
   * toggle wrapper. It adds and removes scroll
   * @param state
   */
  const setIsOpen = (state: boolean) => {
    _setIsOpen(state)

    if (typeof window !== "undefined") {
      if (state) {
        //add overflow-x to body to prevent scroll when sidebar is open
        window.document.body.classList.add("fixed-body")
      } else {
        window.document.body.classList.remove("fixed-body")
      }
    }
  }

  const handleToggle = () => {
    const newState = !isOpen
    setIsOpen(newState)
  }

  const handleEscape = (e: KeyboardEvent) => {
    if (e.code === "Escape") {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    window.addEventListener("keydown", handleEscape)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("keydown", handleEscape)
    }
  }, [])

  const router: string = location?.pathname
  const isNotHome = router !== "/"
  return (
    <NavbarContainer hasScrolled={hasScrolled} isNotHome={isNotHome}>
      <NavbarLabel isOpen={isOpen}>
        <Link to="/">
          <Large as="img" src={logoLg} />
          <Small as="img" src={logo} />
        </Link>
        <Small>
          <NavbarToggler isOpen={isOpen} onClick={handleToggle}>
            <Toggler isOpen={isOpen}>
              <div className="icon-bar" />
              <div className="icon-bar" />
              <div className="icon-bar" />
            </Toggler>
          </NavbarToggler>
        </Small>
      </NavbarLabel>
      <NavbarFlex isOpen={isOpen}>
        {items.map((item, index) => (
          <NavItem item={item} key={index} />
        ))}

        <NavbarFlexButtonContainer>
          <Link to="/" className="first">
            <span>Login</span>
          </Link>
          <Link to="/">
            <NavbarFlexButton>Contact Us</NavbarFlexButton>
          </Link>
        </NavbarFlexButtonContainer>
      </NavbarFlex>
    </NavbarContainer>
  )
}

export default Navbar
