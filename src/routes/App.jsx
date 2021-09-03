import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from '../containers/Home/Home'
import Checkout from '../containers/Checkout/Checkout'
import Information from '../containers/Information/Information'
import Payment from '../containers/Payment/Payment'
import Success from '../containers/Success/Success'
import Error404 from '../containers/Error404/Error404'


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/checkout/' component={Checkout}/>
        <Route exact path='/checkout/information/' component={Information} />
        <Route exact path='/checkout/payment/' component={Payment} />
        <Route exact path='/checkout/success/' component={Success} />
        <Route component={Error404}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App
