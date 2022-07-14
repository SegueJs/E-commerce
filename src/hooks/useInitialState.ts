import { useState } from "react"
import initialState from "../initialState"
import { ListProducts, ProductCheckoutInt, ProductInt, BuyerInt } from "../interfaces/Product"

const useInitialState = () => {
  const [state, setState] = useState<ListProducts>(initialState)

  const addToCart = (payload: ProductInt) => {
    let result = state.cart
    const index = result.findIndex(item => item.id === payload.id)

    index >= 0 ? result[index].qty += 1 : result = [...result, { ...payload, qty: 1 }]

    setState({
      ...state,
      cart: result
    })
  }

  const removeFromCart = (payload: ProductCheckoutInt) => {
    setState({
      ...state,
      cart: state.cart.filter(item => item.id !== payload.id)
    })
  }

  const addToBuyer = (payload: BuyerInt) => {
    setState({
      ...state,
      buyer: payload
    })
  }

  const addNewOrder = (payload: any) => {
    setState({
      ...state,
      orders: [...state.orders, payload]
    })
  }

  return {
    addToCart,
    removeFromCart,
    addToBuyer,
    addNewOrder,
    state
  }
}

export default useInitialState
