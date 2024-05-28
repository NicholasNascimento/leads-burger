import { GlobalStyle } from '../main/styles/global'
import AppRoutes from './Routes'
import { UserProvider } from './context/UserContext'

export function App() {
  return (
    <UserProvider>
      <AppRoutes />
      <GlobalStyle />
    </UserProvider>
  )
}
