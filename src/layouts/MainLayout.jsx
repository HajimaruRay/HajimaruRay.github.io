import { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { ContactFooter } from '../components/ContactFooter'
import { logoutUser } from '../services/authApi'

export function MainLayout() {
  const navigate = useNavigate()
  const [userName, setUserName] = useState(() =>
    sessionStorage.getItem('isLogin') === 'true' ? sessionStorage.getItem('userName') : null
  )
  const [isLoggingOut, setIsLoggingOut] = useState(false)
  const [logoutMessage, setLogoutMessage] = useState('')

  const clearSavedSession = () => {
    sessionStorage.setItem('isLogin', 'false')
    sessionStorage.removeItem('userName')
    sessionStorage.removeItem('userId')
    sessionStorage.removeItem('authToken')
    localStorage.removeItem('isLogin')
    localStorage.removeItem('userName')
    localStorage.removeItem('userId')
    localStorage.removeItem('authToken')
    setUserName(null)
  }

  const handleLogout = async () => {
    const userId = sessionStorage.getItem('userId') || localStorage.getItem('userId')

    if (!userId) {
      setLogoutMessage('Logout failed. Please try again.')
      return
    }

    setIsLoggingOut(true)
    setLogoutMessage('')

    try {
      const data = await logoutUser(userId)

      if (data.status !== 'success') {
        throw {
          status: 500,
          message: 'Logout failed. Please try again.',
        }
      }

      clearSavedSession()
      navigate('/login', { replace: true })
    } catch (error) {
      if (error.status === 404) {
        setLogoutMessage('User not found.')
      } else if (error.status === 0 || error.message === 'Failed to fetch') {
        setLogoutMessage('Unable to connect to server.')
      } else {
        setLogoutMessage('Logout failed. Please try again.')
      }
    } finally {
      setIsLoggingOut(false)
    }
  }

  return (
    <div className="flex min-h-screen flex-col bg-paper" data-testid="app-shell">
      <Navbar
        userName={userName}
        isLoggingOut={isLoggingOut}
        onLogout={handleLogout}
      />
      {logoutMessage === 'User not found.' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 px-5" role="presentation" data-testid="logout-error-modal-backdrop">
          <div className="w-full max-w-sm rounded-lg border border-line bg-white p-6 text-center shadow-xl" role="dialog" aria-modal="true" aria-labelledby="logout-error-title" data-testid="logout-error-modal">
            <h2 className="text-lg font-semibold text-ink" id="logout-error-title">
              Logout failed
            </h2>
            <p className="mt-3 text-sm font-medium text-muted" role="alert">
              {logoutMessage}
            </p>
            <button
              type="button"
              className="mt-5 cursor-pointer rounded-md border border-ink bg-ink px-5 py-2 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-slate-700"
              onClick={() => setLogoutMessage('')}
              data-testid="logout-error-close"
            >
              Close
            </button>
          </div>
        </div>
      )}
      <Outlet context={{ setUserName }} />
      <ContactFooter />
    </div>
  )
}
