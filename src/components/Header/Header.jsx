
import { Link, useLocation } from 'react-router-dom'
import './Header.css'
import { Carrito } from '../Carrito/Carrito'
import { NavLink } from 'react-router-dom'

export const Header = () => {
    const location = useLocation()

    const ocultarTienda = location.pathname.includes('/product') || location.pathname.includes('/checkout')
    const ocultarHome = location.pathname.includes('/checkout')

    return (
        <header className="list-header">
            <h1 className='h1-header'>Tierra Viva</h1>
            <ul>
                {!ocultarHome &&  <li><NavLink to="/">Home</NavLink></li>}
                {!ocultarTienda &&  <li><NavLink to="/Tienda">Tienda</NavLink></li>}
            </ul>
            <Carrito />
        </header>
    )
}
