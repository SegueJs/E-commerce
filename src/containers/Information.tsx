import "../styles/components/Information.css"
import { Link, useNavigate } from "react-router-dom"
import { useContext } from "react"
import AppContext from "../context/AppContext"
import useForm from "../hooks/useForm"

const Information = () => {
  const { state, addToBuyer } = useContext(AppContext)
  const { formValues, handleInputChange } = useForm()
  const { cart } = state
  const navigate = useNavigate()

  const handleSubmit = () => {
    addToBuyer(formValues)
    console.log(formValues)
    navigate('/checkout/payment')
  }

  return (
    <div className="information">
      <div className="information-content">
        <div className="information-head">
          <h2>Información de contacto:</h2>
        </div>
        <div className="information-form">
          <form>
            <input type="text" placeholder="Nombre completo" name="name" onChange={handleInputChange} />
            <input type="text" placeholder="Correo Electronico" name="email" onChange={handleInputChange} />
            <input type="text" placeholder="Direccion" name="addres" onChange={handleInputChange} />
            <input type="text" placeholder="apto" name="apto" onChange={handleInputChange} />
            <input type="text" placeholder="Ciudad" name="city" onChange={handleInputChange} />
            <input type="text" placeholder="Pais" name="country" onChange={handleInputChange} />
            <input type="text" placeholder="Estado" name="state" onChange={handleInputChange} />
            <input type="text" placeholder="Codigo postal" name="cp" onChange={handleInputChange} />
            <input type="text" placeholder="Telefono" name="phone" onChange={handleInputChange} />
          </form>
        </div>
        <div className="information-buttons">
          <div className="information-back">
            <Link to="/checkout">Regresar</Link>
          </div>
          <div className="information-next">
            <button type="button" onClick={handleSubmit}>Pagar</button>
          </div>
        </div>
      </div>
      <div className="information-sidebar">
        <h3>Pedido:</h3>
        {cart.map((item) => (
          <div className="information-item" key={item.id}>
            <div className="information-element">
              <h4>{item.title}</h4>
              <span>#{item.qty}</span>
              <span>${item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Information
