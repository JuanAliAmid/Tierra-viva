import { useEffect, useState } from "react"
import { CardsTienda } from "../../components/ItemDetail/CardsTienda"
import { getProducts } from "../../services/mocks/productos"
import { services } from "../../services"
import { useNavigate, useParams } from "react-router-dom"
import { TiendaList } from "../../components/TiendaList/TiendaList"


export const TiendaContainer = ({ setHeaderColor }) => {

    useEffect(() => {
        // Al entrar a esta página, cambiamos el color (ej: Tomato con transparencia)
        setHeaderColor('rgb(114, 105, 28)');

        // IMPORTANTE: Al salir de la página, volvemos al color original
        return () => setHeaderColor('#1a1a1a');
    }, [setHeaderColor]);

    const [productos, setProductos] = useState([])
    const [nombreFiltrado, setNombreFiltrado] = useState("")
    const [loading, setLoading] = useState(true)
    const [montoElegido, setMontoElegido] = useState('')

    const navigate = useNavigate()
    const { categoryId } = useParams()

    const handleCategoriaChange = (event) => {

        const categoria = event.target.value;
        if (categoria === 'todas') {
            navigate('/Tienda');
        } else {
            navigate(`/Categoria/${categoria}`)
        }

    }

    useEffect(() => {

        services.mocks.getProducts().then(data => {
            setProductos(data.productos)
        }).catch(error => {
            console.error(error)
        }).finally(() => setLoading(false))

    }, [])


    const filtrados = productos.filter(a => {
        // Si no hay categoría en la URL, mostramos todo
        if (!categoryId) return true;

        // Si hay categoría, comparamos (asegurándonos de que coincidan las mayúsculas/minúsculas)
        return a.ambiente.toLowerCase().includes(categoryId.toLowerCase());
    }).filter(e =>
        e.nombre.toLowerCase().includes(nombreFiltrado.toLowerCase())
    );

    const ordenados = montoElegido ? [...filtrados].sort((a, b) => montoElegido === 'Menor' ? a.precio - b.precio : b.precio - a.precio) : filtrados

    return (
        <div className="tienda-img">
            <TiendaList 
            categoryId={categoryId} 
            handleCategoriaChange={handleCategoriaChange} 
            nombreFiltrado={nombreFiltrado} 
            setNombreFiltrado={setNombreFiltrado} 
            montoElegido={montoElegido} 
            setMontoElegido={setMontoElegido} 
            loading={loading} 
            filtrados={filtrados} 
            ordenados={ordenados}/>
        </div>
    )
}
