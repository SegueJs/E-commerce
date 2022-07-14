import { ProductCheckoutInt } from "../interfaces/Product"
import AppContext from "../context/AppContext"
import { useContext } from "react"

const sumTotal = () => {
  const { state } = useContext(AppContext)
  const { cart } = state
  const reducer = (accumulator: number, currentValue: ProductCheckoutInt) =>
    accumulator + currentValue.price * currentValue.qty
  const sum = cart.reduce(reducer, 0)

  return sum
}

export default sumTotal
