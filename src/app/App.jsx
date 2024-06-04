import { ToastContainer } from 'react-toastify'

import AppRoutes from './Routes'
import { CartProvider } from './context/CartContext'
import { UserProvider } from './context/UserContext'
import { GlobalStyle } from '../main/styles/global'

import 'react-toastify/dist/ReactToastify.css';

export function App() {
  return (
    <UserProvider>
      <CartProvider>
        <AppRoutes />
        <GlobalStyle />
        <ToastContainer />
      </CartProvider>
    </UserProvider>
  )
}
