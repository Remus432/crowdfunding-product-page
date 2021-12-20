import React from 'react'
import MenuStyled from "./MenuStyled"

const index = ({ isMenuOn }) => {
  return (
    <>
      <MenuStyled className={isMenuOn ? "menu-on": ""}>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Discover</a>
        </li>
        <li>
          <a href="#">Get Started</a>
        </li>
      </MenuStyled>
    </>
  )
}

export default index
