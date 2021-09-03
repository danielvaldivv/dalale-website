import React from 'react'

import productoImg from '../../assets/picture/productos2.jpg'

import './Description.scss'

function Description() {
  return (
    <section className="Description">
      <div>
        <h3>En Dalalé queremos lo mejor para tí y tu famila.</h3>
        <h4>Es por esto que lanzamos los siguientes productos.</h4>
      </div>
      <figure>
        <img src={productoImg} alt="Productos Dalalé" />
      </figure>
    </section>
  )
}

export default Description
