import React, { useRef, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import OrderSummary from '../../components/OrderSummary/OrderSummary'

import AppContext from '../../context/AppContext'

import './Information.scss'

const Information = () => {
  const { addToBuyer } = useContext(AppContext)
  const form = useRef(null)
  const history = useHistory();

  const handleSubmit = () => {
    const formData = new FormData(form.current);
    const buyer = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      state: formData.get('state'),
      city: formData.get('city'),
      neighborhood: formData.get('neighborhood'),
      address: formData.get('address').replace("#","").toLowerCase(),
      houseGroup: formData.get('houseGroup').toLowerCase(),
      houseNumber: formData.get('houseNumber'),
    }
    addToBuyer(buyer);
    history.push('/checkout/payment');
  }

  return (
    <>
    <Helmet>
      <title>Dalalé Gastronomía | Information Form</title>
    </Helmet>
    <section className="Information">
      <section className="Information-content">
        <div className="Information-head">
          <h4>Información de contacto:</h4>
        </div>

        <section className="Information-form">
          <form ref={form}>
            <input type="text" placeholder="Nombres completos" name="name" />
            <input type="email" placeholder="Correo electronico" name="email" />
            <input type="tel" placeholder="Teléfono" name="phone" />
            <input type="text" placeholder="Departamento" name="state" />
            <input type="text" placeholder="Ciudad" name="city" />
            <input type="text" placeholder="Barrio" name="neighborhood" />
            <input type="text" placeholder="Dirección" name="address"/>
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

        <OrderSummary/>
      </section>
    </section>
    </>
  )
}

export default Information
