import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import AppContext from '../../context/AppContext'

const Information = () => {
  const { state } = useContext(AppContext)
  const { cart } = state

  return (
    <section className="Information">
      <section className="Information-content">
        <div className="Information-head">
          <h2>Información de contacto:</h2>
        </div>

        <section className="Information-form">
          <form>
            <input type="text" placeholder="Apellidos completos" />
            <input type="text" placeholder="Nombres completos" />
            <input type="text" placeholder="Correo electronico" />
            <input type="number" placeholder="Teléfono" />
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
          <h3>Predido:</h3>
          {
            cart.map(item => (
              <div className="Information-item" key={item.title}>
                <div className="Information-element">
                  <h4>{item.title} </h4>
                  <span>{item.price}</span>
                </div>
              </div>
            ))
          }
        </section>
      </section>
    </section>
  )
}

export default Information
