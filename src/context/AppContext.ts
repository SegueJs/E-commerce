import { createContext } from "react"
import { ListProducts } from "../interfaces/Product"

const state = {
  state: {
    cart: [],
    products: [],
    buyer: {
      name: "",
      email: "",
      addres: "",
      city: "",
      country: "",
      state: "",
      cp: "",
      phone: "",
      apto: ""
    },
    orders: []
  },
  addToCart: () => { },
  removeFromCart: () => { },
  addToBuyer: () => { },
  addNewOrder: () => { }
}

const AppContext = createContext<{ state: ListProducts, addToCart: Function, removeFromCart: Function, addToBuyer: Function, addNewOrder: Function }>(state)

export default AppContext
