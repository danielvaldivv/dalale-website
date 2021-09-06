import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import AppContext from '../../context/AppContext'

import cartImg from '../../assets/icons/cart.png'

import './CartButton.scss'

const CartButton = () => {
  const { state } = useContext(AppContext)
  const { cart } = state

  return (
    <Link to="/checkout">
      <figure className ="CartButton">
        <img
          src={cartImg}
          alt="Carrito de Compras"
          width="24px"
        />
        {cart.length > 0 
          ? <p className="items-quantity">{cart.length}</p>
          : <p className="items-quantity">0</p>
        }
      </figure>
    </Link>
  )
}

export default CartButton
