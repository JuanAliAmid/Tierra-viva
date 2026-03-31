import { useContext } from 'react'
import '../components/Tienda.css'
import { CarritoContext } from '../context/CartContext'

export const Cards = ({ id, img, nombre, precio, ambiente }) => {
  
  const {agregar} = useContext(CarritoContext)

  return (
    <div >  
        <li>
          <img src={img} alt={nombre} className="img-cards" />
          <h3>{nombre}</h3>
          <p>Ambientación🌿: {ambiente}</p>
          <p>Monto: ${precio}</p>
          <button className="boton-agregar" onClick={() => agregar ({id, img, nombre, precio})}>Agregar al Carrito</button>
        </li>
    </div>
  )
}
