import React from 'react'

import './Product.scss'

const Product = ({ product, handleAddToCart }) => (
    <section className="Product">
      <div className="Product-content">
        <img src={product.image} alt="Product" width="240px" />
        <div className="Product__description">
          <h4>{product.title}</h4>
          <h1><span>$ {product.price}</span></h1>
          <p>{product.description}</p>
        </div>
      </div>
      <button type="button" onClick={handleAddToCart(product)}>
        Añadir
      </button>
    </section>
)

export default Product
