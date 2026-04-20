import './Home.css'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';

export const Home = ({ setHeaderColor }) => {

    useEffect(() => {
        // Al entrar a esta página, cambiamos el color (ej: Tomato con transparencia)
        setHeaderColor('#327546');

        // IMPORTANTE: Al salir de la página, volvemos al color original
        return () => setHeaderColor('#1a1a1a');
    }, [setHeaderColor]);

    const navigate = useNavigate()
    return (
        <div className='home'>
            <section className="img-inicio" style={{ backgroundImage: `url(/img-home.png)` }}>
                <div className='home-content'>
                    <h1>Llená tu casa de vida</h1>
                    <p>Las mejores plantas para tu espacio</p>
                    <button className="boton-home" onClick={() => navigate('/Tienda')}>Ver productos</button>
                </div>
            </section>
        </div>

    )
}
