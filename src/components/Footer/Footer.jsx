import React from 'react'

import dalaleBlack from'../../assets/logo/LOGOnegro.png'
import istagram from '../../assets/icons/instagram.png'
import whatsapp from '../../assets/icons/whatsapp.png'
import './Frooter.scss'

function Footer() {
  return (
    <footer className="index-footer">
      <section className="index-footer-container">
      <ul className="index-footer-contact">
            <p>Contáctanos:</p>
            <li><a target="_blank" rel="noreferrer" href="https://www.google.com/"><span><img src={istagram} alt="Logo istagram"/></span></a></li>
            <li><a target="_blank" rel="noreferrer" href="https://www.google.com/"><span><img src={whatsapp} alt="Logo whatsapp"/></span></a></li>
        </ul>
        <img src={dalaleBlack} alt="Logo Dalale" width="100px" />
        <p> Copyright © 2021 Dalalé All rights reserved.</p>
      </section>
    </footer>
  )
}

export default Footer
