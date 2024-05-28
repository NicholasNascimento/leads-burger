import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Login } from './pages/Login/index'

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Login />} />
      </Routes>
    </Router>
  )
}