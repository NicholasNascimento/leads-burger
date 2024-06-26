import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Cart } from './pages/Cart'
import { CreateItem } from './pages/CreateItem'
import { Login } from './pages/Login'
import { Menu } from './pages/Menu'
import { Orders } from './pages/Orders'

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route exact path='/menu' element={<Menu />} />
        <Route exact path='/cart' element={<Cart />} />
        <Route exact path='/orders' element={<Orders />} />
        <Route exact path='/create_item' element={<CreateItem />} />
      </Routes>
    </Router>
  )
}
