import React from 'react'

import productImg1 from '../../assets/picture/ajo.jpg'
import './Product.scss'

function Product() {
  return (
    <section className="Product">
      <img src={productImg1} alt="Product" width="240px" />
      <div className="Product__description">
        <h4>Pasta de ajo</h4>
        <h1><span>$ 10.000</span></h1>
        <p>Pasta de ajos con especias maravillosas que traen a tu mente los banquetes preparados en la valhalla</p>
      </div>
      <button type="button">Añadir</button>
    </section>
  )
}

export default Product
