import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { ContactFooter } from '../components/ContactFooter'

export function MainLayout() {
  const [userName, setUserName] = useState(() =>
    sessionStorage.getItem('isLogin') === 'true' ? sessionStorage.getItem('userName') : null
  )

  const handleLogout = () => {
    sessionStorage.setItem('isLogin', 'false')
    sessionStorage.removeItem('userName')
    sessionStorage.removeItem('authToken')
    setUserName(null)
  }

  return (
    <div className="flex min-h-screen flex-col bg-paper" data-testid="app-shell">
      <Navbar userName={userName} onLogout={handleLogout} />
      <Outlet context={{ setUserName }} />
      <ContactFooter />
    </div>
  )
}
