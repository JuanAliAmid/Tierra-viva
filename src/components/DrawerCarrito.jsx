import { useContext } from "react"
import { CarritoContext } from "../context/CartContext"
import '../components/DrawerCarrito.css'


export const DrawerCarrito = () => {

    const { carrito, abierto, manejarCarrito, setCarrito, cantidades, setCantidades, contador, setContador } = useContext(CarritoContext)

    console.log('cantidades en drawer:', cantidades)

    function sumarProductos(i) {
        if (cantidades[i] === 5) return;
        setCantidades({ ...cantidades, [i]: (cantidades[i] || 0) + 1 })
    }

    function restarProductos(i) {
        if ((cantidades[i] || 1) <= 1) return;
        setCantidades({ ...cantidades, [i]: (cantidades[i] || 0) - 1 })
    }
    function total() {
        return carrito.reduce((acumulador, producto) => { return acumulador + producto.precio * (cantidades[producto.id] || 1) }, 0)
    }

    function eliminarProductos(id) {
        setCarrito(carrito.filter(e => e.id !== id))
        setContador(contador - (cantidades[id] || 1))
        setCantidades(prev => { // prev es el estado actual de cantidades, ej: { 1: 3, 2: 5 }
            const nuevas = { ...prev } // copia el objeto, para no mutar el estado directamente
            delete nuevas[id]// borra la propiedad con ese id del objeto copiado
            return nuevas// devuelve el objeto nuevo sin ese id, React actualiza el estado
        })
    }

    return (
        <>
            <div className={abierto ? 'ventana-carrito abierta' : 'ventana-carrito'}>
                <div className="flecha-total">
                    <button onClick={manejarCarrito} className="boton-carrito">➦</button>
                    <span>Total: ${total()}</span>
                </div>

                <ul>
                    {carrito.length === 0 ? <p>El carrito está vacio</p> : carrito.map((e) => (
                        <li key={e.id}>
                            <img src={e.img} alt={e.nombre} className="img-carrito" />
                            <div className="info-prodc-carrito">
                                <p><strong>Nombre:</strong> {e.nombre}</p>
                                <p><strong>Precio:</strong>$ {e.precio * (cantidades[e.id] || 1)}</p>
                            </div>


                            <div className="control-cantidades">
                                <div className="cantidades">
                                    <button className="boton-SM-ventana" onClick={() => restarProductos(e.id)}>-</button>
                                    <span>{cantidades[e.id] || 1}</span>
                                    <button className="boton-SM-ventana" onClick={() => sumarProductos(e.id)}>+</button>
                                </div>
                                <button className="bton-eliminar" onClick={() => eliminarProductos(e.id)}>Eliminar</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}
