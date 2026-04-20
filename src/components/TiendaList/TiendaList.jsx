import { CardsTienda } from "../ItemDetail/CardsTienda"
import "./Tienda.css"
export const TiendaList = ({categoryId, handleCategoriaChange, nombreFiltrado, setMontoElegido, montoElegido, loading, filtrados, setNombreFiltrado, ordenados}) => {
    return (
        <div className="tienda-img">
            <div className='tienda'>
                <div className="filtros">

                    {/* Select de ambiente */}
                    <select value={categoryId || "todas"} onChange={handleCategoriaChange} className="select-filter">
                        <option value="" disabled hidden>Filtrado por tipo de ambiente</option>
                        <option value="todas">Todas</option>
                        <option value="Interior">Interior</option>
                        <option value="Exterior">Exterior</option>

                    </select>

                    {/* Input de búsqueda */}
                    <input type="text" value={nombreFiltrado} onChange={(e) => setNombreFiltrado(e.target.value)} placeholder="Buscar por nombre" />

                    {/* Select de precio */}
                    <select name="" id="" value={montoElegido} onChange={(e) => e.target.value === 'Aleatorio' ? setMontoElegido(null) : setMontoElegido(e.target.value)} className="select-filter">
                        <option value="" disabled hidden>Filtrado por precio</option>
                        <option value="Aleatorio">Aleatorio</option>
                        <option value="Mayor">Mayor a menor precio</option>
                        <option value="Menor">Menor a mayor precio</option>
                    </select>

                </div>
                {loading && <p><strong>Cargando...</strong></p>}
                <ul>
                    {filtrados.length === 0 ? <p>No se encontraron palntas con ese nombre </p> : ordenados.map((a) => (<CardsTienda key={a.id} {...a} />))}{/* desparrama todas las propiedades del objeto a como props individuales*/}
                </ul>
            </div>
        </div>
    )
}
