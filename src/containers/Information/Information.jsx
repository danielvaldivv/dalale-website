import React, { useRef, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'

import AppContext from '../../context/AppContext'

import './Information.scss'

const Information = () => {
  const { state, addToBuyer } = useContext(AppContext)
  const form = useRef(null)
  const { cart } = state
  const history = useHistory();

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price
    const sum = cart.reduce(reducer, 0);
    return sum;
  }

  const handleSubmit = () => {
    const formData = new FormData(form.current);
    const buyer = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      state: formData.get('state'),
      city: formData.get('city'),
      neighborhood: formData.get('neighborhood'),
      direction: formData.get('direction'),
      houseGroup: formData.get('houseGroup'),
      houseNumber: formData.get('houseNumber'),
    }
    addToBuyer(buyer);
    history.push('/checkout/payment');
  }

  return (
    <section className="Information">
      <section className="Information-content">
        <div className="Information-head">
          <h4>Información de contacto:</h4>
        </div>

        <section className="Information-form">
          <form ref={form}>
            <input required="required" type="text" placeholder="Nombres completos" name="name" />
            <input required type="email" placeholder="Correo electronico" name="email" />
            <input required type="tel" placeholder="Teléfono" name="phone" />
            <input required type="text" placeholder="Departamento" name="state" />
            <input required type="text" placeholder="Ciudad" name="city" />
            <input type="text" placeholder="Barrio" name="neighborhood" />
            <input required type="text" placeholder="Dirección" name="direction" />
            <input type="text" placeholder="Conjunto / Edificio" name="houseGroup" />
            <input type="text" placeholder="Casa / apto" name="houseNumber" />
          </form>
        </section>

        <section className="Information-buttons">
          <div className="Informacion-back">
            <Link to="/checkout"><p>Regresar</p></Link>
          </div>
          <div className="Information-next">
          <button type="button" onClick={handleSubmit}>
            Pagar
          </button>
          </div>
        </section>

        <section className="Information-sidebar">
          <h3>Pedido:</h3>
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
      </section>
    </section>
  )
}

export default Information
