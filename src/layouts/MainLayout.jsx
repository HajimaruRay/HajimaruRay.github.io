import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { ContactFooter } from '../components/ContactFooter'

export function MainLayout() {
  const [userId, setUserId] = useState(() =>
    sessionStorage.getItem('isLogin') === 'true' ? sessionStorage.getItem('userId') : null
  )

  const handleLogout = () => {
    sessionStorage.setItem('isLogin', 'false')
    sessionStorage.removeItem('userId')
    sessionStorage.removeItem('authToken')
    setUserId(null)
  }

  return (
    <div className="flex min-h-screen flex-col bg-paper" data-testid="app-shell">
      <Navbar userId={userId} onLogout={handleLogout} />
      <Outlet context={{ setUserId }} />
      <ContactFooter />
    </div>
  )
}
