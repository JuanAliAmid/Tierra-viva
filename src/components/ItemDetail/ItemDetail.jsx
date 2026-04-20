
export const ItemDetail = ({item, navigate}) => {
  return (
    <div className="Detail-Container-img">

      {item ?
        < section className="Detail-Container">

          <div className="grid-container">
            <h1>{item.nombre}</h1>
            <img src={item.img} alt={item.nombre} />
          </div>
          <div className="grid-container">
            <h3>Descripción</h3>
            <p className="p-datail">{item.detalles.descripcion}</p>

            <h3 style={{ color: "tomato" }}>Riego</h3>
            <p className="p-datail">{item.detalles.riego}</p>

            <h3 style={{ color: "tomato" }}>Iluminación</h3>
            <p className="p-datail">{item.detalles.luz}</p>
            <button className="boton-home" onClick={() => navigate('/Tienda')}>Volver a tienda</button>
          </div>

        </section>
        : <h1>Buscando planta en el sistema...</h1>
      }
    </div>
  )
}
