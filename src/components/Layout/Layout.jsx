import React from 'react'
import Footer from '../Footer/Footer'

function Layout({children}) {
  return (
    <>
      {children}
      <Footer/>
    </>
  )
}

export default Layout
