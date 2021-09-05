import React from 'react'
import { Link } from 'react-router-dom'

import cartImg from '../../assets/icons/cart.png'

import './NavBar.scss'

function Navbar() {
  return (
    <nav>
      <ul>
        <li><h4>Conócenos</h4></li>
        <li><h4>|</h4></li>
        <li>
          <Link to="/checkout">
            <img
              src={cartImg}
              alt="Carrito de Compras"
              width="30px"
            />
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
