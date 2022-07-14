import { useContext } from "react"
import { PayPalButton } from "react-paypal-button-v2"
import { useNavigate } from "react-router-dom"
import AppContext from "../context/AppContext"
import "../styles/components/Payment.css"
import sumTotal from "../utils/sumTotal"

const Payment = () => {
  const { state, addNewOrder } = useContext(AppContext)
  const { cart, buyer } = state
  const CLIENT_ID = import.meta.env.VITE_CLIENT_ID

  const navigate = useNavigate()

  const handlePaymentSucess = (data:any) => {
    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        product: cart,
        payment: data
      }

      addNewOrder(newOrder)
      navigate('/checkout/success')
    }
  }

  return (
    <div className="payment">
      <div className="payment-content">
        <h3>Resumen del pedido:</h3>
        {cart.map((item) => (
          <div className="payment-item" key={item.id}>
            <div className="payment-element">
              <h4>{item.title}</h4>
              <span>#{item.qty}</span>
              <span>$ {item.price}</span>
            </div>
          </div>
        ))}
        <div className="payment-button">
          <PayPalButton
            options={{
              clientId: CLIENT_ID,
              intent: "capture",
              currency: "USD"
            }}

            amount={sumTotal()}

            onSuccess={(data:any) => handlePaymentSucess(data)}
          />
        </div>
      </div>
      <div></div>
    </div>
  )
}

export default Payment
