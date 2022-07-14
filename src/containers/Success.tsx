import '../styles/components/Success.css'
import { useContext } from 'react'
import AppContext from '../context/AppContext'

const Sucess = () => {
  const { state } = useContext(AppContext)
  const { buyer } = state

  return (
    <div className="success">
      <div className="success-content">
        <h2>{buyer.name}, Gracias por tu compra</h2>
        <span>Tu pedido llegara en 3 dias a tu dirección:</span>
        <div className="success-map">
        </div>
      </div>
    </div>
  )
}

export default Sucess
