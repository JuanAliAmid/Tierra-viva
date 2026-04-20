
import { Header } from './components/Header/Header.jsx'
import { Home } from './pages/Home/Home.jsx'
import { TiendaContainer } from './pages/Tienda/TiendaContainer.jsx'
import { Routes, Route } from 'react-router-dom'
import { DrawerCarrito } from './components/Carrito/DrawerCarrito.jsx'
import { NotFound } from './components/NotFound.jsx'
import { ItemDetailContainer } from './pages/ItemDetail/ItemDetailContainer.jsx'
import { useState } from 'react'

function App() {

  const [headerColor, setHeaderColor] = useState('#1a1a1a')

  return (
    <>
      <Header colorFondo={headerColor}/>
      <DrawerCarrito />
      <Routes>
        <Route path='/' element={<Home setHeaderColor={setHeaderColor}/>} />
        <Route path='/Tienda' element={<TiendaContainer setHeaderColor={setHeaderColor}/>} />
        <Route path='/Categoria/:categoryId' element={<TiendaContainer setHeaderColor={setHeaderColor}/>} />
        <Route path="/product/:productId" element={<ItemDetailContainer setHeaderColor={setHeaderColor}/>} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
