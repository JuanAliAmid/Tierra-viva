import { collection, getDocs, query, where, doc, deleteDoc } from "firebase/firestore"
import { db } from "../../components/firebase/config"

export const getProducts = async (categoryId) => {

    const prodColl = categoryId ? query(collection(db, "productos"), where("ambiente", "==", categoryId)) : collection(db, "productos")

    const res = await getDocs(prodColl)
    return res.docs.map(documentos => ({ id: documentos.id, ...documentos.data() }))

}

