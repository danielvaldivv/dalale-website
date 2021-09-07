import React from 'react'

import productoImg from '../../assets/picture/family-eating.jpg'

import './Description.scss'

function Description() {
  return (
    <section className="Description">
      <div className="Description-principal">
        <h3>En Dalalé queremos lo mejor para tí y tu famila.</h3>
        <h4>Es por esto que te ofrecemos productos para que puedas cocinar las más deliciosas recetas.</h4>
      </div>
      <figure>
        <img src={productoImg} alt="Productos Dalalé" />
      </figure>
      <div className="Description-secondary">
        <h3>La alimentación saludable no tiene porqué que ser aburrida.</h3>
      </div>
    </section>
  )
}

export default Description
