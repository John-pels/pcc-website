import React from "react"
import { Link } from "gatsby"
import { NavbarFlexItem } from "./style"
import { NavItemsTypes } from "./types"

type itemType = {
  item: NavItemsTypes
  hasScrolled?: boolean
  isOpen?: boolean
  location?: any
}
const NavItem = ({ item, hasScrolled, isOpen, location }: itemType) => {
  const router: string = location?.pathname
  const isNotHome = router !== "/"

  return (
    <NavbarFlexItem hS={hasScrolled} iNH={isNotHome}>
      <Link activeClassName="active" to={item.path}>
        <span>{item.name}</span>
      </Link>
    </NavbarFlexItem>
  )
}

export default NavItem
