
import { CarritoContext } from "../../context/CartContext"
import { useContext } from "react"
import { ShoppingCart } from 'lucide-react'

export const Carrito = () => {

  const { contador, manejarCarrito } = useContext(CarritoContext)

  return (
    <div className="carrito">
      <button className='bton-carrito' onClick={() => manejarCarrito()}>
        <ShoppingCart className="icono-carrito"/>
         <span className="contador-carrito">{contador}</span>
      </button>
    </div>
  )
}
