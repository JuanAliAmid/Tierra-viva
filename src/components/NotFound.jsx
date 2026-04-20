import { NavLink } from "react-router-dom"


export const NotFound = () => {
  return (
    <div>
        <h2>404 - Página no enocntrada</h2>
        <p>La página que buscas no existe</p>
        <NavLink to="/">Volver a inicio</NavLink>
    </div>
  )
}
