import React from 'react'
import { Helmet } from'react-helmet'

import Products from '../../components/Products/Products'
import Description from '../../components/Description/Description'

import './Home.scss'

const Home= () => (
  <main>
    <Helmet>
      <title>Dalale Gastronomía</title>
      <meta name="twitter:card" content="summary_large_image"/>
      <meta name="twitter:site" content="@danielvaldivv"/>
      <meta name="twitter:creator" content="@danielvaldivv"/>
      <meta name="twitter:title" content="Dalelé Gastronomía"/>
      <meta name="twitter:description" content="Dalalé Gastronomía"/>
      <meta
        name="twitter:image"
        content="https://i.ibb.co/9sFJw8P/LOGO.png"
      />
    </Helmet>
    <Description/>
    <Products />
  </main>
)
export default Home



