import "../../styles/components/Header.css"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { useContext } from "react"
import AppContext from "../../context/AppContext"
import { ProductCheckoutInt } from "../../interfaces/Product"

const Header = () => {
  const { state } = useContext(AppContext)
  const { cart } = state

  const reducer = (acumulador: number, currentValue: ProductCheckoutInt) => acumulador + currentValue.qty
  const totalQty = cart.reduce(reducer, 0)

  return (
    <div className="header">
      <div className="header-title">
        <Link to="/">E-commerce</Link>
      </div>
      <div className="header-checkout">
        <Link to="/checkout">
          <FontAwesomeIcon icon={faCartShopping} />
        </Link>
        {cart.length > 0 && <div className="header-alert">{totalQty}</div> }
      </div>
    </div>
  )
}

export default Header
