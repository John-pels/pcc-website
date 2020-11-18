import React from "react"
import { Link } from "gatsby"
import { NavbarFlexItem } from "./style"
import { NavItemsTypes } from "./types"

type itemType = {
  item: NavItemsTypes
}
const NavItem = ({ item }: itemType) => {
  return (
    <NavbarFlexItem>
      <Link to={item.path}>
        <span>{item.name}</span>
      </Link>
    </NavbarFlexItem>
  )
}

export default NavItem
