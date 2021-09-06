import React, { useState } from 'react'

import './Product.scss'

const Product = ({ product, handleAddToCart }) => {
  const [isRotate, setIsRotate] = useState(false)

  const onRotate = () =>{
    setIsRotate(rotated => !rotated)
  }
    return (
      <div className="Product">
        <section className={`Product-card ${isRotate ?'rotated' :''}`}>
          <div className="Product-front">
            <div className="Product-content">
              <img src={product.image} alt="Product" width="240px" />
              <div className="Product__description">
                <h4>{product.title}</h4>
                <h1><span>$ {product.price}</span></h1>
                <p>{product.description}</p>
              </div>
            </div>
            <p className="read-more" onClick={onRotate}  >Leer más...</p>
            <button type="button" onClick={handleAddToCart(product)}>
              Añadir
            </button>
          </div>
          <div className="Product-back">
            <div className="Product-content">
              <div className="Product__description">
                <h4>{product.title}</h4>
                <p>{product.description}</p>
              </div>
            </div>
            <p className="read-more" onClick={onRotate} >Leer menos...</p>
          </div>
        </section>
      </div>
    )
  }

export default Product
