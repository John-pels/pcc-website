import React from "react"
import { Link } from "gatsby"
import { NavbarFlexItem } from "./style"
import { NavItemsTypes } from "./types"

type itemType = {
  item: NavItemsTypes
  hasScrolled?: boolean
  isOpen?: boolean
}
const NavItem = ({ item, hasScrolled, isOpen }: itemType) => {
  return (
    <NavbarFlexItem hasScrolled={hasScrolled} isOpen={isOpen}>
      <Link to={item.path}>
        <span>{item.name}</span>
      </Link>
    </NavbarFlexItem>
  )
}

export default NavItem
