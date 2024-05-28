import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Login } from './pages/Login/index'
import { Menu } from './pages/Menu'

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route exact path='/menu' element={<Menu />} />
      </Routes>
    </Router>
  )
}
