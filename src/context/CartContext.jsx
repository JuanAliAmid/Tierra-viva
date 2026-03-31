import { createContext, useState } from 'react'

export const CarritoContext = createContext()

export const CarritoProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([])
    const [abierto, setAbierto] = useState(false)
    const [cantidades, setCantidades] = useState({})
    const contador = Object.values(cantidades).reduce((a, b) => a + b, 0)//const contador Suma todos los valores de cantidades para saber cuántos productos hay en total. Si tenés 2 plantas y 3 macetas, el contador muestra 5.

    const manejarCarrito = () => { 
    setAbierto(!abierto)//manejarCarrito Abre y cierra el carrito. Cada vez que la llamás cambia abierto al valor contrario.
    }

    const agregar = (e) => {
        /*agregar
        Recibe un producto e y hace dos cosas según si ya existe en el carrito o no:

        Si existe → no lo agrega de nuevo, solo le suma 1 a su cantidad en cantidades
        Si no existe → lo agrega al array carrito y le pone cantidad 1 en cantidades
        */
        const existe = carrito.find(item => item.id === e.id)

        if (existe) {
            setCantidades(prev => {
                const cantidadActual = prev[e.id]  // ¿ya tiene cantidad?
                const cantidadNueva = cantidadActual ? cantidadActual + 1 : 1 + 1  // si tiene, sumale 1, sino arrancá en 2
                const copia = { ...prev }  // copiá el objeto
                copia[e.id] = cantidadNueva  // actualizá este producto
                return copia
            })
        } else {
            setCarrito([...carrito, e])
            setCantidades(estadoActual => ({ ...estadoActual, [e.id]: 1 }))
        }
    }


    console.log(carrito)
    return (
        < CarritoContext.Provider value={{ carrito, contador, abierto, agregar, manejarCarrito, setCarrito, cantidades, setCantidades }}>
            {children}
        </CarritoContext.Provider>
    )
}


