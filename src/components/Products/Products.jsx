import React, { useContext } from 'react'
import AppContext from '../../context/AppContext'
import Product from '../Product/Product'
import './Products.scss'

const Products = () => {
  const { state } = useContext(AppContext);
  const { products } = state;

  return (
    <section className="Products">
      <h1>Productos</h1>

      {products.map( (product) => (
        <Product
          key={product.id}
          product={product}
        />
        ))
      }
    </section>
  )
}

export default Products
