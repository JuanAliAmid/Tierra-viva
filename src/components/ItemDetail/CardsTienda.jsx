import { useContext } from 'react'
import '../TiendaList/Tienda.css'
import { CarritoContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'


export const CardsTienda = ({ id, img, nombre, precio, ambiente }) => {

  const { agregar, cantidades } = useContext(CarritoContext)

  console.log(cantidades)
  return (
    <div >
      <li>
        <img src={img} alt={nombre} className="img-cards" />
        <h3>{nombre}</h3>
        <Link to={`/product/${id}`} className="btn-detalle">
          Ver más detalles
        </Link>
        <p>Monto: ${precio}</p>
        <button className="boton-agregar" disabled={cantidades[id] >= 10} onClick={() => agregar({ id, img, nombre, precio })}> {cantidades[id] >= 10 ? "Stock agotado" : "Agregar al Carrito"}</button>
      </li>
    </div>
  )
}
