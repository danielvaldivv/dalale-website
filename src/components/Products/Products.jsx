import React from 'react'
import Product from '../Product/Product'
import './Products.scss'

function Products() {
  return (
    <section className="Products">
      <h1>Productos</h1>
      <Product/>
      <Product/>
      <Product/>
    </section>
  )
}

export default Products
