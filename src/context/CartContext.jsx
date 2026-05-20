import { createContext, useEffect, useMemo, useState } from 'react'

export const CarritoContext = createContext()

export const CarritoProvider = ({ children }) => {

    const [carrito, setCarrito] = useState(() => {
        const productosGuardados = localStorage.getItem('carrito')
        return productosGuardados ? JSON.parse(productosGuardados) : []
    })

    useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(carrito))
    }, [carrito])

    const [cantidades, setCantidades] = useState(() => {
        const cantidadesGuardadas = localStorage.getItem('cantidades')
        return cantidadesGuardadas ? JSON.parse(cantidadesGuardadas) : {}
    })

    useEffect(() => {
        localStorage.setItem('cantidades', JSON.stringify(cantidades))
    }, [cantidades])
    
    const [abierto, setAbierto] = useState(false)
    const contador = Object.values(cantidades).reduce((a, b) => a + b, 0)//const contador Suma todos los valores de cantidades para saber cuántos productos hay en total.

    const manejarCarrito = () => {
        setAbierto(!abierto)//manejarCarrito Abre y cierra el carrito. Cada vez que la llamás cambia abierto al valor contrario.
    }

    const agregar = (e) => { //AGREGAR

        const existe = carrito.find(item => item.id === e.id)

        if (existe) {
            setCantidades(prev => {
                const cantidadActual = prev[e.id] 
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
        setCantidades(prev => { // 
            const nuevas = { ...prev } 
            delete nuevas[id]
            return nuevas
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


