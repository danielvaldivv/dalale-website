import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AppContext from '../../context/AppContext'
import { Helmet } from 'react-helmet'

import arrowLeft from '../../assets/icons/arrow-left.png'
import trash from '../../assets/icons/trash.png'

import './Checkout.scss'

const Checkout = () => {
  const { state, removeFromCart } = useContext(AppContext)

  const { cart } = state

  const handleRemove = (product, index) => () => {
    removeFromCart(product, index);
  };

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };

    return (
      <>
      <div className="Checkout">
        {cart.length > 0 ? (
          <h3 className ="Checkout-list">Lista de Pedidos:</h3>
        ) : (
          <div className="Checkout-comeback">
            <h4>No hay productos en el carrito de compras aún</h4>
            <h3>Regresa aquí</h3>
            <Link to="/"><img src={arrowLeft} alt="Arrow Left" width="40px" /></Link>
          </div>
        )}

      {cart.length > 0 && (
        <>
          <Helmet>
            <title>Dalalé Gastronomía | Checkout</title>
          </Helmet>
          <section className="Checkout-content">
          {cart.map((item, index) => (
            <div className="Checkout-item" key={item.title}>
                <div className="Checkout-element">
                  <img src={item.image} alt={item.title} width="50px" />
                  <p>{item.title}</p>
                  <span><p>$ {item.price}</p></span>
                  <p>0</p>
                </div>
                <button type="button" onClick={handleRemove(item, index)}>
                  <img src={trash} alt ="trash" width="30px" />
                </button>
              </div>
          ))}
          </section>
          <div className="Checkout-sidebar">
              <p>Total:</p>
              <h4>{`  $ ${handleSumTotal()}`}</h4>
              <Link to ='/checkout/information' >
                <button type="button">Continuar</button>
              </Link>
          </div>
        </>
      )}
    </div>
      </>
    )
}

export default Checkout
