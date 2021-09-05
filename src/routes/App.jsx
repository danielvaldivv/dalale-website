import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Layout from '../components/Layout/Layout'
import Home from '../containers/Home/Home'
import Checkout from '../containers/Checkout/Checkout'
import Information from '../containers/Information/Information'
import Payment from '../containers/Payment/Payment'
import Success from '../containers/Success/Success'
import Error404 from '../containers/Error404/Error404'
import useInitialState from '../hooks/useInitialState'
import AppContext from '../context/AppContext'
import Header from '../components/Header/Header'


const App = () => {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Header/>
        <Layout>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/checkout/' component={Checkout}/>
            <Route exact path='/checkout/information/' component={Information} />
            <Route exact path='/checkout/payment/' component={Payment} />
            <Route exact path='/checkout/success/' component={Success} />
            <Route component={Error404}/>
          </Switch>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  )
}

export default App
