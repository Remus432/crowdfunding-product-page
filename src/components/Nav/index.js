import React from 'react'
import Menu from "../Menu/index"
import NavStyled from "./NavStyled"
import Logo from "../../images/logo.svg"
import HamburgerMenu from "../../images/icon-hamburger.svg"
import CloseMenuIcon from "../../images/icon-close-menu.svg"
import { useDispatch, useSelector } from "react-redux"
import { selectIsMenuOn, toggleMenu } from "../../reducers/uiReducer"
import { motion } from "framer-motion"

const Nav = () => { 
  const dispatch = useDispatch()
  const isMenuOn = useSelector(selectIsMenuOn)

  return (
    <motion.div 
      animate={{ y: [-100, 0]}} 
      transition={{ ease: "easeInOut", stiffness: 150 }}>
      <NavStyled>
        <img src={Logo} alt="Crowdfund Logo" />
        <img className="menu-icon" onClick={() => dispatch(toggleMenu())} src={isMenuOn ? CloseMenuIcon : HamburgerMenu} alt="Hamburger Menu Icon" />
        <Menu isMenuOn={isMenuOn} />
      </NavStyled>
    </motion.div>
  )
}

export default Nav
