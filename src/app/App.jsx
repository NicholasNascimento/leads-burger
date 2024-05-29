import AppRoutes from './Routes'
import { CartProvider } from './context/CartContext'
import { UserProvider } from './context/UserContext'
import { GlobalStyle } from '../main/styles/global'

export function App() {
  return (
    <UserProvider>
      <CartProvider>
        <AppRoutes />
        <GlobalStyle />
      </CartProvider>
    </UserProvider>
  )
}
