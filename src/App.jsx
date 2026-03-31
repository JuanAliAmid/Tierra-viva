
import { Header } from './components/Header'
import { Home } from './pages/Home'
import { ProductsList } from './components/ProductsList'
import { Routes, Route } from 'react-router-dom'
import { DrawerCarrito } from './components/DrawerCarrito'

function App() {

  return (
    <>
      <Header />
      <DrawerCarrito />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/ProductsList' element={<ProductsList />} />
      </Routes>
    </>
  )
}

export default App
