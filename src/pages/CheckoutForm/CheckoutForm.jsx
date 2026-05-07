import { useContext, useState } from 'react'
import { CarritoContext } from '../../context/CartContext'
import './CheckoutForm.css'
import { useNavigate } from 'react-router-dom'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from "../../components/firebase/config"

export const CheckoutForm = () => {

    const { total, carrito, vaciar } = useContext(CarritoContext)

    const [usuario, setUsuario] = useState({ nombre: "", apellido: "", email: "" })
    const [idCompra, setIdCompra] = useState(0)
    const [error, setError] = useState("")
    const [mostrarError, setMostrarError] = useState(false)
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    function handleChange(e) {
        setUsuario({ ...usuario, [e.target.name]: e.target.value })
    }

    async function orden() {

        if (usuario.nombre === "" || usuario.apellido === "" || usuario.email === "") {
            setMostrarError(true)
            setError('Debes completar los campos para finalizar la compra ⚠️')
            setTimeout(() => { setMostrarError(false) }, 2000) //controla la opacidad
            setTimeout(() => { setError("") }, 4000) //controla la duracion del texto en pantalla
            return
        }

        if (!isNaN(usuario.nombre) || !isNaN(usuario.email) || !isNaN(usuario.apellido)) {
            setMostrarError(true)
            setError('Digitos invalido al completar los campos ⚠️')
            setTimeout(() => { setMostrarError(false) }, 2000) //controla la opacidad
            setTimeout(() => { setError("") }, 4000) //controla la duracion del texto en pantalla
            return
        }
        if (!usuario.email.includes('@')) {
            setMostrarError(true)
            setError('El gmail debe contener el caracter "@" ⚠️')
            setTimeout(() => { setMostrarError(false) }, 2000) //controla la opacidad
            setTimeout(() => { setError("") }, 4000) //controla la duracion del texto en pantalla
            return
        }

        setError(null)
        setLoading(true)
        let ordenCompra = {
            comprador: usuario,
            productos: carrito,
            total: total(),
            fecha: serverTimestamp()
        }
        const docRef = await addDoc(collection(db, "ordenes"), ordenCompra)
        setIdCompra(docRef.id)
        vaciar()
        setLoading(false)

    }

    return (
        <div className='form-container'>
            {carrito.length === 0 && idCompra === 0 ? <h1>No puede realizar una compra con el carrito vacio</h1> :
                <>
                    {idCompra !== 0 ? <><h1>¡Gracias por su compra! / Compra N°: {idCompra}</h1></> :
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
            <p className={mostrarError ? 'error' : 'campos-vacios'}>{error}</p>
        </div>
    )
}
