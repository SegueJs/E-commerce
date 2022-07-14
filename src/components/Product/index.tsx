import React from "react"
import { ProductInt } from "../../interfaces/Product"

const Product:React.FC<{product: ProductInt, handleAddToCart: Function}> = ({ product, handleAddToCart }) => {
  return (
        <div className="products-item">
            <img src={product.image} alt={product.title} />
            <div className="product-item-info">
                <h2>{product.title}
                    <span>$ {product.price}</span>
                </h2>
                <p>{product.description}</p>
            </div>
            <button type="button" onClick={() => handleAddToCart(product)} >Comprar</button>
        </div>
  )
}

export default Product
