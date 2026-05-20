import { NavLink } from "react-router-dom"
import { AlertTriangle } from "lucide-react";
import "./NotFound.css"



export const NotFound = () => {
  return (
    <div className="not-found-container">
        <h1><AlertTriangle className="warning-not-found"/> 404 - Página no enocntrada <AlertTriangle className="warning-not-found"/></h1>
        <h2>La página que buscas no existe</h2>
        <NavLink to="/" className="route-home">Volver a home</NavLink>
    </div>
  )
}
