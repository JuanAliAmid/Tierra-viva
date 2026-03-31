
import { CarritoContext } from "../context/CartContext"
import { useContext } from "react"

export const Carrito = () => {
   const {contador, manejarCarrito} = useContext(CarritoContext)
  return (
    <div className="carrito">
      <button className='bton-carrito' onClick={() => manejarCarrito()}>
        🛒 <span>{contador}</span>
      </button>
    </div>
  )
}
