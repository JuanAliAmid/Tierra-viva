import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { ItemDetail } from "../../components/ItemDetail/ItemDetail"
import './ItemDetailContainerr.css'
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../components/firebase/config"
import { ImSpinner2 } from "react-icons/im"


export const ItemDetailContainer = () => {
    const [item, setItem] = useState(null)
    const navigate = useNavigate()
    const { productId } = useParams()

    useEffect(() => {
        const docRef = doc(db, "productos", productId)

        getDoc(docRef)
            .then((res) => {
                const data = { id: res.id, ...res.data() }
                console.log(data)
                setItem(data)
            })
            .catch(error => console.log(error))

    }, [productId])


    return (
        <div className="Detail-Container-img">

            {item ? <ItemDetail item={item} navigate={navigate} /> : <h1>Buscando planta en el sistema <ImSpinner2 className="loading"/></h1>}

        </div>
    )
}
