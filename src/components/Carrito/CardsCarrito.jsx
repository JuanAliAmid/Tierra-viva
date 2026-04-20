
export const CardsCarrito = ({ restarProductos, sumarProductos, eliminarProductos, cantidades, id, img, nombre, precio }) => {
   
   return (

      <li key={id}>
         <img src={img} alt={nombre} className="img-carrito" />
         <div className="info-prodc-carrito">
            <p><strong>Nombre:</strong> {nombre}</p>
            <p><strong>Precio:</strong> ${precio * (cantidades[id] || 1)}</p>
         </div>

         <div className="control-cantidades">
            <div className="cantidades">
               <button className="boton-SM-ventana" onClick={() => restarProductos(id)}>-</button>
               <span>{cantidades[id] || 1}</span>
               <button className="boton-SM-ventana" onClick={() => sumarProductos(id)}>+</button>
            </div>
            <button className="bton-eliminar" onClick={() => eliminarProductos(id)}>Eliminar</button>
         </div>
      </li>

   )
}
