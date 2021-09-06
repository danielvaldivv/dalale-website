import React from 'react'
import CartButton from '../CartButton/CartButton'


import './NavBar.scss'

const Navbar = () =>  (
  <nav>
    <ul>
      <li><h4>Conócenos</h4></li>
      <li><h4>|</h4></li>
      <li>
        <CartButton/>
      </li>
    </ul>
  </nav>
)

export default Navbar
