import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AppContext from '../../context/AppContext'

import arrowLeft from '../../assets/icons/arrow-left.png'

import './Checkout.scss'

const Checkout = () => {
  const { state } = useContext(AppContext)
  const { cart } = state
  
    return (
      <div className="Checkout">
        { cart.length > 0
        ? <h3>Lista de productos</h3>
        : <div className="Checkout__comeback">
            <h4>No hay productos en el carrito de compras aún</h4>
            <h3>Regresa aquí</h3>
            <Link to="/"><img src={arrowLeft} alt="Arrow Left" width="40px" /></Link>
          </div>
      }
      </div>
    )
}

export default Checkout
