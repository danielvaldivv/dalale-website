import React, { useEffect, useState, useRef } from 'react'

import familyCooking from '../../assets/picture/family-cooking.jpg'
import spices from '../../assets/picture/spices.jpg'

import './Description.scss'

function Description() {
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

  return (
    <section className="Description">
      <div className="Description-principal">
        <h3>En Dalalé queremos lo mejor para tí y tú famila.</h3>
        <h4>Es por esto que te ofrecemos los mejores productos para que puedas cocinar las más deliciosas recetas.</h4>
      </div>
      <figure className="figure-family">
          <img src={familyCooking} alt="Familia Cocinando" />
      </figure>
      <div className="Description-secondary" ref={element}>
        <figure className="figure-spices">
          {isVisible &&
            <img  src={spices} alt="Especias"/>
          }
          </figure>
        <h3>La alimentación saludable no tiene porqué que ser aburrida.</h3>
      </div>
    </section>
  )
}

export default Description
