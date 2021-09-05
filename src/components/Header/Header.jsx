import React from 'react'

import Logo from '../Logo/Logo'
import NavBar from '../NavBar/NavBar'

import './Header.scss'

function Header() {
  return (
    <header>
      <section>
      <Logo/>
      <NavBar/>
      </section>
    </header>
  )
}

export default Header
