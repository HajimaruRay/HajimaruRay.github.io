import { HashRouter } from 'react-router-dom'
import './App.css'
import { AppRoutes } from './routes/AppRoutes'

function App() {
  return (
    <HashRouter>
      <AppRoutes />
    </HashRouter>
  )
}

export default App
