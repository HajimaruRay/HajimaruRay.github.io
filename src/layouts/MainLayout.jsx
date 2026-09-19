import { Outlet } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { ContactFooter } from '../components/ContactFooter'

export function MainLayout() {
  return (
    <div className="app-shell" data-testid="app-shell">
      <Navbar />
      <Outlet />
      <ContactFooter />
    </div>
  )
}
