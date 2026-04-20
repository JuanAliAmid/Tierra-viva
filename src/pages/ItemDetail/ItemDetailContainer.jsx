import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { services } from "../../services"
import { getProducts } from "../../services/mocks/productos"
import { ItemDetail } from "../../components/ItemDetail/ItemDetail"
import './ItemDetailContainer.css'

export const ItemDetailContainer = ({ setHeaderColor }) => {
    const [item, setItem] = useState(null)
    const navigate = useNavigate()
    const { productId } = useParams()

    useEffect(() => {
        // Al entrar a esta página, cambiamos el color (ej: Tomato con transparencia)
        setHeaderColor('tomato');

        // IMPORTANTE: Al salir de la página, volvemos al color original
        return () => setHeaderColor('#1a1a1a');
    }, [setHeaderColor]);

    useEffect(() => {

        services.mocks.getProducts().then(data => {
            const plantaEncontrada = data.productos.find((e) => e.id == productId)
            setItem(plantaEncontrada)
        }).catch(error => {
            console.error(error)
        })

    }, [productId])


    return (
        <div className="Detail-Container-img">

            {item ? <ItemDetail item={item} navigate={navigate} /> : <h1>Buscando planta en el sistema...</h1>}

        </div>
    )
}
