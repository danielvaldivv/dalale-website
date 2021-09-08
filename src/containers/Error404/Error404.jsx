import React from 'react'}
import { Helmet } from 'react-helmet'

import './Error404.scss'

function Error404() {
  return (
    <>
      <Helmet>
        <title>Dalalé Gastronomía | Error 404</title>
      </Helmet>
      <section className="Error404">
        <h1>Error 404</h1>
        <h3>No logramos encontrar lo que buscabas :(</h3>
      </section>
    </>
  )
}

export default Error404