import React, { useState } from 'react'

import './Product.scss'

const Product = ({ product, handleAddToCart }) => {
  const [isRotate, setIsRotate] = useState(false)

  const onRotate = () =>{
    setIsRotate(rotated => !rotated)
  }
    return (
      <div className="Product">
        <h2>{product.title}</h2>
        <img src={product.image} alt="Product" width="240px" />
        <section className={`Product-card ${isRotate ?'rotated' :''}`}>
          <div className="Product-front">
            <div className="Product-content">
              <div className="Product__description">
                <h1><span>$ {product.price}</span></h1>
                <p>{product.description}</p>
              </div>
            </div>
            <p className="read" onClick={onRotate}  >Leer más...</p>

          </div>
          <div className="Product-back">
            <div className="Product-content">
              <div className="Product__description">
                <p>{product.description}</p>
              </div>
            </div>
            <p className="read" onClick={onRotate} >Leer menos...</p>
          </div>
        </section>
          <button type="button" onClick={handleAddToCart(product)}>
              Añadir
          </button>
      </div>
    )
  }

export default Product
