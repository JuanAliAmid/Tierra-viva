import { useEffect, useState } from "react"
import { Cards } from "./Tienda"

export const ProductsList = () => {

    const [productos, setProductos] = useState([])
    useEffect(() => {
        async function data() {
            try {
                const resolve = await fetch('/Productos.json')
                if (!resolve.ok) throw new Error('Error de carga')
                const newData = await resolve.json()
                setProductos(newData.productos)
            } catch (error) {
                console.error('Hay un error: ', error)
            }
        }
        data()
    }, [])
    console.log(productos)

    return (
        <div className='tienda'>
            <ul>
                {productos.map((a) => (
                    <Cards
                        key={a.id}
                        id={a.id}
                        nombre={a.nombre}
                        img={a.img}
                        precio={a.precio}
                        ambiente={a.ambiente}
                    />
                ))}
            </ul>
        </div>
    )
}
