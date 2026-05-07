import './Home.css'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';

export const Home = () => {

    const navigate = useNavigate()
    return (
        <div className='home'>
            <section className="img-inicio" style={{ backgroundImage: `url(/img-home21.png)` }}>
                <div className='home-content'>
                    <h1>Naturaleza que transforma espacios</h1>
                    <h2 className='h3-home'>Sumate al mundo verde</h2>
                    <button className="boton-home" onClick={() => navigate('/Tienda')}>Explorá nuestra colección</button>
                </div>
            </section>
        </div>
    )
}
