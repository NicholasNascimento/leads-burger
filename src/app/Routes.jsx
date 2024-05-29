import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Login } from './pages/Login'
import { Menu } from './pages/Menu'
import { Cart } from './pages/Cart'

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route exact path='/menu' element={<Menu />} />
        <Route exact path='/cart' element={<Cart />} />
      </Routes>
    </Router>
  )
}
