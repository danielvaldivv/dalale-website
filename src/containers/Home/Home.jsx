import React from 'react'
import Products from '../../components/Products/Products'
import Description from '../../components/Description/Description'
import './Home.scss'

function Home() {
  return (
    <main>
      <Description/>
      <Products />
    </main>
  )
}

export default Home
