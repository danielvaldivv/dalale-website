import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import AppContext from '../../context/AppContext'

import './Information.scss'

const Information = () => {
  const { state } = useContext(AppContext)
  const { cart } = state

  return (
    <section className="Information">
      <section className="Information-content">
        <div className="Information-head">
          <h4>Información de contacto:</h4>
        </div>

        <section className="Information-form">
          <form>
            <input type="text" placeholder="Apellidos completos" />
            <input type="text" placeholder="Nombres completos" />
            <input type="email" placeholder="Correo electronico" />
            <input type="tel" placeholder="Teléfono" />
            <input type="text" placeholder="Departamento" />
            <input type="text" placeholder="Ciudad" />
            <input type="text" placeholder="Barrio" />
            <input type="text" placeholder="Dirección" />
            <input type="text" placeholder="Conjunto / Edificio" />
            <input type="text" placeholder="Casa / apto" />
          </form>
        </section>

        <section className="Information-buttons">
          <div className="Informacion-back">
            <Link to="/checkout"><p>Regresar</p></Link>
          </div>
          <div className="Information-next">
          <button type="button">
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
          <h3>$ 10000</h3>
          </div>
        </section>
      </section>
    </section>
  )
}

export default Information
