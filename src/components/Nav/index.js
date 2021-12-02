import React from 'react'
import Menu from "../Menu/index"
import NavStyled from "./NavStyled"
import Logo from "../../images/logo.svg"
import HamburgerMenu from "../../images/icon-hamburger.svg"

const Nav = () => {
  return (
    <>
      <NavStyled>
        <img src={Logo} alt="Crowdfund Logo" />
        <img src={HamburgerMenu} alt="Hamburger Menu Icon" />
        <Menu />
      </NavStyled>
    </>
  )
}

export default Nav
