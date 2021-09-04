import React from 'react'

import './Product.scss'

const Product = ({ product }) => (
    <section className="Product">
      <img src={product.image} alt="Product" width="240px" />
      <div className="Product__description">
        <h4>{product.title}</h4>
        <h1><span>$ {product.price}</span></h1>
        <p>{product.description}</p>
      </div>
      <button type="button">Añadir</button>
    </section>
)

export default Product
