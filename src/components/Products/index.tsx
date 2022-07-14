import React, { useContext } from "react"
import AppContext from "../../context/AppContext"
import Product from "../Product"
import '../../styles/components/Products.css'
import { ProductInt } from "../../interfaces/Product"

const Products:React.FC = () => {
  const { state, addToCart } = useContext(AppContext)
  const { products } = state

  const handleAddToCart = (product:ProductInt) => {
    addToCart(product)
  }

  return (
        <div className="products">
            <div className="products-items">
                {products.map((item) => (
                    <Product key={item.id} product={item} handleAddToCart={handleAddToCart} />
                ))}
            </div>
        </div>
  )
}

export default Products
