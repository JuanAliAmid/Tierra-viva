import { FaTrashAlt } from 'react-icons/fa'
export const CardsCarrito = ({ restarProductos, sumarProductos, eliminarProductos, cantidades, id, img, nombre, precio }) => {

   return (

      <li key={id}>
         <img src={img} alt={nombre} className="img-carrito" />
         <div className="info-prodc-carrito">
            <p>{nombre}</p>
            <p>${precio * (cantidades[id] || 1)}</p>
         </div>

         <div className="control-cantidades">
            <div className="cantidades">
               <button className="boton-SM-ventana" onClick={() => restarProductos(id)}>-</button>
               <span>{cantidades[id] || 1}</span>
               <button className="boton-SM-ventana" disabled={cantidades[id] >= 10} onClick={() => sumarProductos(id)}>+</button>
            </div>
            <FaTrashAlt className="img-papelera" onClick={() => eliminarProductos(id)} />
         </div>
      </li>

   );
};
