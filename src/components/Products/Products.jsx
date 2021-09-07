import React, { useContext } from 'react'
import AppContext from '../../context/AppContext'
import Product from '../Product/Product'
import './Products.scss'

const Products = () => {
  const { state , addToCart } = useContext(AppContext);
  const { products } = state;

  const handleAddToCart = product => () => {
    addToCart(product);
  }

  return (
    <>
      <h1 className="Products-title">Productos</h1>
      <section className="Products">
        {products.map( (product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          />
          ))
        }
      </section>
    </>
  )
}

export default Products
