import { useContext } from "react"
import { CarritoContext } from "../../context/CartContext"
import './DrawerCarrito.css'
import { CardsCarrito } from "./CardsCarrito"
import { FaArrowRight  } from 'react-icons/fa'
import { NavLink, useNavigate } from "react-router-dom"


export const DrawerCarrito = () => {

   const { carrito, abierto, manejarCarrito, cantidades, eliminarProductos, sumarProductos, restarProductos, total, vaciar } = useContext(CarritoContext)

   const navigate = useNavigate()

   return (
      <>
         <div className={abierto ? 'ventana-carrito abierta' : 'ventana-carrito'}>
            <div className="flecha-total">
               <FaArrowRight  className="boton-carrito" onClick={manejarCarrito} />
               <span>Total: ${total()}</span>
            </div>
            {carrito.length === 0 ? <p>El carrito está vacío</p> : carrito.map((e) => (
               <CardsCarrito
                  key={e.id}
                  {...e}
                  cantidades={cantidades}
                  restarProductos={restarProductos}
                  sumarProductos={sumarProductos}
                  eliminarProductos={eliminarProductos}
               />
            ))}
            <div className="bton-confirm-vaciar">
             {carrito.length === 0 ? null: <button className="boton-vaciar-carrito" onClick={() => vaciar()}>Vaciar carrito</button>}
             {carrito.length === 0 ? null: <button className="boton-realizar-compra" onClick={() => navigate('/checkout')}>Realizar compra</button>}
            </div>
         </div>
      </>
   )
}
