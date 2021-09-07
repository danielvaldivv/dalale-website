import React, { useEffect, useState, useRef } from 'react'

import './Product.scss'

const Product = ({ product, handleAddToCart }) => {
  const [isVisible, setIsVisible] = useState(false)

  const element = useRef(null)

  useEffect(() => {
    const observer = new window.IntersectionObserver( entries => {
      const {isIntersecting} = entries[0]
      if(isIntersecting){
        setIsVisible(true)
        observer.disconnect()
      }
    })
    observer.observe(element.current)
  }, [element])

  const onVisible = () =>{
    setIsVisible(visible => !visible)
  }


    return (
      <div className="Product" >
        <h2>{product.title}</h2>
        <section className="Product-card" ref={element}>
        {isVisible
          ? <div className="Product-front">
            <img src={product.image} alt="Product" width="240px" />
              <div className="Product-content">
                <div className="Product__description">

                  <h1><span>$ {product.price}</span></h1>
                  <p>{product.description}</p>
                </div>
              </div>
              <p className="read" onClick={onVisible} >Leer más...</p>
            </div>
            
          : <div className="Product-back">
              <div className="Product-content">
                <div className="Product__description">
                  <p>{product.description}</p>
                </div>
              </div>
              <p className="read" onClick={onVisible} >Regresar</p>
            </div>}
          
        </section>
        <button className="button-add" type="button" onClick={handleAddToCart(product)}>
            Añadir
        </button>
      </div>
    )
  }

export default Product
