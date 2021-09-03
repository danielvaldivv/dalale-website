import React from 'react'
import { Link } from 'react-router-dom'
import LogoDalaleColor from '../../assets/logo/LOGO.png'

function Logo() {
  return (
    <Link to="/">
      <figure>
        <img
          src={LogoDalaleColor}
          alt="Logo Dalalé"
          width=" 120px"
          height="auto"
        />
    </figure>
    </Link>
  )
}

export default Logo
