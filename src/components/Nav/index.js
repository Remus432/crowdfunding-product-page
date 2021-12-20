import React from 'react'
import Menu from "../Menu/index"
import NavStyled from "./NavStyled"
import Logo from "../../images/logo.svg"
import HamburgerMenu from "../../images/icon-hamburger.svg"
import CloseMenuIcon from "../../images/icon-close-menu.svg"
import { useDispatch, useSelector } from "react-redux"
import { selectIsMenuOn, toggleMenu } from "../../reducers/uiReducer"

const Nav = () => { 
  const dispatch = useDispatch()
  const isMenuOn = useSelector(selectIsMenuOn)

  return (
    <>
      <NavStyled>
        <img src={Logo} alt="Crowdfund Logo" />
        <img className="menu-icon" onClick={() => dispatch(toggleMenu())} src={isMenuOn ? CloseMenuIcon : HamburgerMenu} alt="Hamburger Menu Icon" />
        <Menu isMenuOn={isMenuOn} />
      </NavStyled>
    </>
  )
}

export default Nav
