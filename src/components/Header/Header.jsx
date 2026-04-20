
import { Link, useLocation } from 'react-router-dom'
import './Header.css'
import { Carrito } from '../Carrito/Carrito'
import { NavLink } from 'react-router-dom'

export const Header = ({ colorFondo }) => {
    const location = useLocation()

    const enLaTienda = location.pathname === '/Tienda' || location.pathname.includes('/Categoria')

    return (
        <header className="list-header" style={{ '--color-dinamico': colorFondo }}>
            <h1>E-Commerce</h1>
            <ul >
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/Tienda" className={enLaTienda ? 'active' : ''}>Tienda</NavLink></li>
                <li> Sobre Nosotros</li>
            </ul>
            <Carrito />
        </header>
    )
}
