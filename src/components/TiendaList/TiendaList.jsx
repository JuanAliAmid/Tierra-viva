import { CardsTienda } from "../ItemDetail/CardsTienda"
import "./Tienda.css"
import { ImSpinner2 } from "react-icons/im"

export const TiendaList = ({ categoryId, handleCategoriaChange, nombreFiltrado, setMontoElegido, montoElegido, loading, filtrados, setNombreFiltrado, ordenados, handlePreciosChange,orden }) => {
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

                    {/* Input de búsqueda por nombre*/}
                    <input className="input-tienda" type="text" value={nombreFiltrado} onChange={(e) => setNombreFiltrado(e.target.value)} placeholder="Buscar por nombre" />

                    {/* Select de precios */}
                    <select name="" id="" value={orden|| "Aleatorio"} onChange={handlePreciosChange} className="select-filter">
                        <option value="" disabled hidden>Filtrado por precio</option>
                        <option value="Aleatorio">Aleatorio</option>
                        <option value="Mayor-a-menor">Mayor a menor precio</option>
                        <option value="Menor-a-mayor">Menor a mayor precio</option>
                    </select> 

                </div>
                {loading ? <div className="tienda-loading"><h2><strong>Cargando <ImSpinner2 className="loading" /></strong></h2></div> : filtrados.length === 0 ? <h2 className="tienda-loading">No se encontraron plantas con ese nombre</h2> : <ul> {ordenados.map((a) => (<CardsTienda key={a.id} {...a} />))}</ul>}
            </div>
        </div>
    )
}
