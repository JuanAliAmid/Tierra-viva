import { useEffect, useState } from "react"
import { CardsTienda } from "../../components/ItemDetail/CardsTienda"
import { useNavigate, useParams } from "react-router-dom"
import { TiendaList } from "../../components/TiendaList/TiendaList"
import { collection, getDocs, query } from "firebase/firestore"
import { db } from "../../components/firebase/config"
import { where } from "firebase/firestore"
import { getProducts } from "../../services/firestore/productos"


export const TiendaContainer = () => {

    const [productos, setProductos] = useState([])
    const [nombreFiltrado, setNombreFiltrado] = useState("")
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()
    const { categoryId, orden } = useParams()

    const handleCategoriaChange = (event) => { //maneja el enrutado cuando seleccionas algo en el filtro de ambiente 

        const categoria = event.target.value;
        if (categoria === 'todas') {
            navigate(orden ? `/Tienda/${orden}` : '/Tienda');
        } else {
            navigate(orden ? `/Categoria/${categoria}/${orden}` : `/Categoria/${categoria}`)
        }

    }

    const handlePreciosChange = (event) => { //maneja el enrutado cuando seleccionas algo en el filtro de precios 

        const porPrecio = event.target.value;
        if (porPrecio === 'Aleatorio') {
            navigate(categoryId ? `/Categoria/${categoryId}` : '/Tienda');
        } else {
            navigate(categoryId ? `/Categoria/${categoryId}/${porPrecio}` : `/Tienda/${porPrecio}`)
        }

    }

    useEffect(() => {

        setLoading(true)

        getProducts(categoryId)
            .then(res => setProductos(res))
            .catch(error => console.error(error))
            .finally(() => setLoading(false))

    }, [categoryId])

    const filtrados = productos.filter(e => e.nombre.toLowerCase().includes(nombreFiltrado.toLowerCase()))

    const ordenados = orden ? [...filtrados].sort((a, b) => orden === 'Menor-a-mayor' ? a.precio - b.precio : b.precio - a.precio) : filtrados

    return (
        <div className="tienda-img">
            <TiendaList
                categoryId={categoryId}
                handleCategoriaChange={handleCategoriaChange}
                handlePreciosChange={handlePreciosChange}
                nombreFiltrado={nombreFiltrado}
                setNombreFiltrado={setNombreFiltrado}
                loading={loading}
                filtrados={filtrados}
                orden={orden}
                ordenados={ordenados} />
        </div>
    )
}
