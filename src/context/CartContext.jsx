import { createContext, useMemo, useState } from 'react'

export const CarritoContext = createContext()

export const CarritoProvider = ({ children }) => {

    const [carrito, setCarrito] = useState([])
    const [abierto, setAbierto] = useState(false)
    const [cantidades, setCantidades] = useState({})
    const contador = Object.values(cantidades).reduce((a, b) => a + b, 0)//const contador Suma todos los valores de cantidades para saber cuántos productos hay en total. Si tenés 2 plantas y 3 macetas, el contador muestra 5.

    const manejarCarrito = () => {
        setAbierto(!abierto)//manejarCarrito Abre y cierra el carrito. Cada vez que la llamás cambia abierto al valor contrario.
    }

    const agregar = (e) => { //AGREGAR
        /*agregar
        Recibe un producto e y hace dos cosas según si ya existe en el carrito o no:

        Si existe → no lo agrega de nuevo, solo le suma 1 a su cantidad en cantidades
        Si no existe → lo agrega al array carrito y le pone cantidad 1 en cantidades
        */
        const existe = carrito.find(item => item.id === e.id)

        if (existe) {
            setCantidades(prev => {
                const cantidadActual = prev[e.id]  // ya tiene cantidad?
                const cantidadNueva = cantidadActual ? cantidadActual + 1 : 1 + 1  // si tiene, sumale 1, sino arrancá en 2
                const copia = { ...prev }  // copiá el objeto
                copia[e.id] = cantidadNueva  // actualizá este producto
                return copia
            })
        } else {
            setCarrito([...carrito, e])
            setCantidades(estadoActual => ({ ...estadoActual, [e.id]: 1 }))
        }

        if (abierto) {
            setAbierto(true)
        } else {
            setAbierto(true)
            setTimeout(() => {
                setAbierto(false)
            }, 3000)
        }

    }
 

    function eliminarProductos(id) { //ELIMINAR
        setCarrito(carrito.filter(e => e.id !== id))
        setCantidades(prev => { // prev es el estado actual de cantidades, ej: { 1: 3, 2: 5 }
            const nuevas = { ...prev } // copia el objeto, para no mutar el estado directamente
            delete nuevas[id]// borra la propiedad con ese id del objeto copiado
            return nuevas// devuelve el objeto nuevo sin ese id, React actualiza el estado
        })
    }

    function sumarProductos(i) { //SUMAR
        setCantidades({ ...cantidades, [i]: (cantidades[i] || 0) + 1 })
    }

    function restarProductos(i) {//RESTAR
        if ((cantidades[i] || 1) <= 1) return;
        setCantidades({ ...cantidades, [i]: (cantidades[i] || 0) - 1 })
    }

    function total() {//TOTAL
        return carrito.reduce((acumulador, producto) => { return acumulador + producto.precio * (cantidades[producto.id] || 1) }, 0)
    }

    function vaciar() { //VACIAR CARRITO
        setCarrito([])
        setCantidades({})
    }

    const value = useMemo(() => {
        return {
            carrito, contador,
            abierto, agregar,
            manejarCarrito, cantidades,
            eliminarProductos, restarProductos,
            sumarProductos, total,
            vaciar
        }
    }, [carrito, abierto, cantidades, contador])

    return (
        < CarritoContext.Provider value={value}>
            {children}
        </CarritoContext.Provider>
    )

}


