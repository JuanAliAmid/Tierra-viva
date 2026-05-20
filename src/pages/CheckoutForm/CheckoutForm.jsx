import { useContext, useEffect, useState } from 'react'
import { CarritoContext } from '../../context/CartContext'
import './CheckoutForm.css'
import { useNavigate } from 'react-router-dom'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from "../../components/firebase/config"
import { ImSpinner2 } from "react-icons/im"
import { toast, ToastContainer } from 'react-toastify'
import { AlertTriangle } from "lucide-react";
import 'react-toastify/dist/ReactToastify.css'

export const CheckoutForm = () => {

    const { total, carrito, vaciar } = useContext(CarritoContext)

    const [usuario, setUsuario] = useState({ nombre: "", apellido: "", email: "" })
    const [idCompra, setIdCompra] = useState(0)
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    function handleChange(e) {
        setUsuario({ ...usuario, [e.target.name]: e.target.value })
    }

    async function orden() {

        if (usuario.nombre === "" || usuario.apellido === "" || usuario.email === "") {
            toast.error('Debes completar los campos para finalizar la compra')
            return
        }

        if (!isNaN(usuario.nombre) || !isNaN(usuario.email) || !isNaN(usuario.apellido)) {
            toast.error('Dígitos invalidos al completar los campos')
            return
        }
        if (!usuario.email.includes('@')) {
            toast.error('El gmail debe contener el caracter "@"')
            return
        }

        setLoading(true)

        let ordenCompra = {
            comprador: usuario,
            productos: carrito,
            total: total(),
            fecha: serverTimestamp()
        }

        const docRef = await addDoc(collection(db, "ordenes"), ordenCompra)

        setTimeout(() => {
            setIdCompra(docRef.id)
            vaciar()
            setLoading(false)
        }, 3000)

    }

    return (
        <>
            <ToastContainer position="top-center" />
            <div className='form-container'>

                {loading === true ? <h1>Procesando compra <ImSpinner2 className="loading" /></h1> :

                    <div>
                        {carrito.length === 0 && idCompra === 0 ? <h1><AlertTriangle className='Alert-Triangle'/> No puede realizar una compra con el carrito vacio <AlertTriangle className='Alert-Triangle'/></h1> :
                            <>
                                {idCompra !== 0 ? <div className='h1-h2-checkout'><h1>✨¡Gracias por su compra!✨</h1>  <h2>Identificador de la compra: {idCompra}</h2></div> :
                                    <form className='form' onSubmit={(e) => { e.preventDefault(); orden() }}>
                                        <h1 className='h1-form'>Ingrese los datos requeridos para finalizar su compra</h1>
                                        <input type="text" name='nombre' onChange={handleChange} placeholder='Ingrese su nombre' />
                                        <input type="text" name='apellido' onChange={handleChange} placeholder='Ingrese su apellido' />
                                        <input type="text" name='email' onChange={handleChange} placeholder='Ingrese su email' />
                                        <button className="boton-form" type='submit'>Confirmar compra</button>
                                    </form>
                                }
                            </>
                        }
                        <div className='btns-navegacion'>
                            <button className="boton-detail" onClick={() => navigate('/')}>Volver a home</button>
                            <button className="boton-detail" onClick={() => navigate('/Tienda')}>Volver a tienda</button>
                        </div>
                    </div>

                }

            </div>
        </>
    )
}
