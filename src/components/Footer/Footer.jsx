import React from 'react'

import istagram from '../../assets/icons/instagram.png'
import whatsapp from '../../assets/icons/whatsapp.png'
import './Frooter.scss'

function Footer() {
  return (
    <footer className="index-footer">
      <p>Contactanos:</p>
      <ul className="index-footer-contact">
          <li><a target="_blank" rel="noreferrer" href="https://www.google.com/"><span><img src={istagram} alt="Logo istagram"/></span></a></li>
          <li><a target="_blank" rel="noreferrer" href="https://www.google.com/"><span><img src={whatsapp} alt="Logo whatsapp"/></span></a></li>
      </ul>
      <p>Copyright © by DALALÉ</p>
      <p> 2021</p>
    </footer>
  )
}

export default Footer
