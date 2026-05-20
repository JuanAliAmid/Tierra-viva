
import { Header } from './components/Header/Header.jsx'
import { Home } from './pages/Home/Home.jsx'
import { TiendaContainer } from './pages/Tienda/TiendaContainer.jsx'
import { Routes, Route } from 'react-router-dom'
import { DrawerCarrito } from './components/Carrito/DrawerCarrito.jsx'
import { NotFound } from './components/NotFound.jsx'
import { ItemDetailContainer } from './pages/ItemDetail/ItemDetailContainer.jsx'
import { CheckoutForm } from './pages/CheckoutForm/CheckoutForm.jsx'
import { useState } from 'react'


function App() {

  return (
    <>
      <Header />
      <DrawerCarrito />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Tienda' element={<TiendaContainer />} />
        <Route path='/Tienda/:orden' element={<TiendaContainer />} />
        <Route path='/Categoria/:categoryId' element={<TiendaContainer />} />
        <Route path='/Categoria/:categoryId/:orden' element={<TiendaContainer />} />
        <Route path="/product/:productId" element={<ItemDetailContainer />} />
        <Route path="/checkout" element={<CheckoutForm />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
  
}

export default App
