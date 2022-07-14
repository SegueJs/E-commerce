import "../styles/components/Checkout.css"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrashCan } from "@fortawesome/free-regular-svg-icons"
import { useContext } from "react"
import AppContext from "../context/AppContext"
import { ProductInt } from "../interfaces/Product"
import sumTotal from "../utils/sumTotal"

const CheckOut = () => {
  const { state, removeFromCart } = useContext(AppContext)
  const { cart } = state

  const handleRemove = (product: ProductInt) => {
    removeFromCart(product)
  }

  return (
    <div className="checkout">
      <div className="checkout-content">
        {cart.length > 0 ? <h3>Lista de Pedidos:</h3> : <h3>No hay pedidos</h3>}
        {cart?.map((item) => (
          <div key={item.id} className="checkout-item">
            <div className="checkout-element">
              <h4>{item.title}</h4>
              <span>#{item.qty}</span>
              <span>{item.price}</span>
            </div>
            <button
              type="button"
              style={{ color: "#3af" }}
              onClick={() => handleRemove(item)}
            >
              <FontAwesomeIcon icon={faTrashCan} />
            </button>
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div className="checkout-sidebar">
          <h3>Precio Total: ${sumTotal()}</h3>
          <Link to="information">
            <button type="button">Continuar pedido</button>
          </Link>
        </div>
      )}
    </div>
  )
}

export default CheckOut
