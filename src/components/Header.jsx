
import { Link } from 'react-router-dom'
import '../components/Header.css'
import { Carrito } from './Carrito'
export const Header = () => {
    return (
        <header className="list-header">
            <h1>E-Commerce</h1>
            <ul >
                <li><Link to="/">Home</Link></li>
                <li>Sobre Nosotros</li>
            </ul>
            <Carrito />
        </header>
    )
}
