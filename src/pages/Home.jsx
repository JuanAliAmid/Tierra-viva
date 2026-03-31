import './Home.css'
import { useNavigate } from 'react-router-dom'

export const Home = () => {

    const navigate = useNavigate()
    return (
        <div className='home'>
            <section className="img-inicio" style={{ backgroundImage: `url(/img-home.png)` }}>
                <div className='home-content'>
                    <h1>Llená tu casa de vida</h1>
                    <p>Las mejores plantas para tu espacio</p>
                    <button className="boton-home" onClick={() => navigate('/ProductsList')}>Ver productos</button>

                </div>
            </section>
        </div>

    )
}
