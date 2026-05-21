import { AuthProvider } from "./context/AuthContext"
import Root from "./middleware/Root"

const App = () => {
  return (
    <AuthProvider>
     <Root/>
    </AuthProvider>
  )
}

export default App