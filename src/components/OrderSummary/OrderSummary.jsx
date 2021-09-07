import React, { useContext} from 'react'
import AppContext from '../../context/AppContext'

import './OrderSumary.scss'

const OrderSummary = () =>{

  const { state } = useContext(AppContext)
  const { cart } = state

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price
    const sum = cart.reduce(reducer, 0);
    return sum;
  }
  return (
    <section className="Information-sidebar">
      <h4>Resumen del pedido</h4>
      {
        cart.map(item => (
          <div className="Information-item" key={item.title}>
            <div className="Information-element">
              <p>{`1 ${item.title}`}</p>
              <span className="Information-element-price"><h4>${item.price}</h4></span>
            </div>
          </div>
        ))
      }
      <hr/>
      <div className="Information-totalCost">
      <p>Total:</p>
      <h4>$ {handleSumTotal()}</h4>
      </div>
    </section>
  )
  }

export default OrderSummary