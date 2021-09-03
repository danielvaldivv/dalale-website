import React from 'react'

import Logo from '../Logo/Logo'
import NavBar from '../NavBar/NavBar'

import './Header.scss'

function Header() {
  return (
    <header>
      <Logo/>
      <NavBar/>
    </header>
  )
}

export default Header
