import React from 'react'
import MenuStyled from "./MenuStyled"

const index = () => {
  return (
    <>
      <MenuStyled>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#discover">Discover</a>
        </li>
        <li>
          <a href="#get-started">Get Started</a>
        </li>
      </MenuStyled>
    </>
  )
}

export default index
