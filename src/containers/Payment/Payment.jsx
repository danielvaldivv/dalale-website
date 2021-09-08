import React, { useContext } from 'react'
import { PayPalButton } from 'react-paypal-button-v2'
import { Helmet } from 'react-helmet'
import OrderSummary from '../../components/OrderSummary/OrderSummary'
import AppContext from '../../context/AppContext'
import './Payment.scss'

const Payment = ({ history }) => {
  const { state, addNewOrder } = useContext(AppContext);
  const { cart, buyer } = state;

  const paypalOptions = {
    clientId: 'access_token$sandbox$jntyv8p9fqv354mn$63f25257e1884e76249efe9c240cbe18',
    intent: 'capture',
    currency: 'USD'
  }

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect'
  }

  const handlePaymentSuccess = data => {
    if(data.status=== 'COMPLETED') {
      const newOrder ={
        buyer,
        product: cart,
        payment: data
      }
      addNewOrder(newOrder)
      history.push('/checkout/success')
    }
  }

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price
    const sum = cart.reduce(reducer, 0);
    return sum;
  }

  return (
    <>
    <Helmet>
      <title>Dalalé Gastronomía | Payment</title>
    </Helmet>
      <div className="Payment">
        <div className="Payment-content">
          <OrderSummary/>
          <div className="Payment-button">
            <PayPalButton
                  paypalOptions={paypalOptions}
                  buttonStyles={buttonStyles}
                  amount={handleSumTotal()}
                  onSuccess={data => handlePaymentSuccess(data)}
                  onError={error => console.log(error)}
                  onCancel={data => console.log(data)}
                />
          </div>
        </div>
      </div>
    </>
  )
}
export default Payment