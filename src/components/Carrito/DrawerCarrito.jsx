import { useContext } from "react"
import { CarritoContext } from "../../context/CartContext"
import './DrawerCarrito.css'
import { CardsCarrito } from "./CardsCarrito"


export const DrawerCarrito = () => {

   const { carrito, abierto, manejarCarrito, cantidades, eliminarProductos, sumarProductos, restarProductos, total } = useContext(CarritoContext)

   return (
      <>
         <div className={abierto ? 'ventana-carrito abierta' : 'ventana-carrito'}>
            <div className="flecha-total">
               <button onClick={manejarCarrito} className="boton-carrito">➦</button>
               <span>Total: ${total()}</span>
            </div>
            {carrito.length === 0 ? <p>El carrito está vacio</p> : carrito.map((e) => (
               <CardsCarrito
                  key={e.id}
                  {...e}
                  cantidades={cantidades}
                  restarProductos={restarProductos}
                  sumarProductos={sumarProductos}
                  eliminarProductos={eliminarProductos}
               />
            ))}

         </div>
      </>
   )
}
