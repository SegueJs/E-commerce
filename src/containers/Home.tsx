import React from "react"
import Products from "../components/Products"
import initialState from "../initialState"

const Home:React.FC = () => {
  return (
    <Products products={initialState.products} />
  )
}

export default Home
