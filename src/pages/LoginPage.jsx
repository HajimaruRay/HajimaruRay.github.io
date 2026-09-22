import { useState } from 'react'
import { Navigate, useNavigate, useOutletContext } from 'react-router-dom'
import { loginUser, healthCheck } from '../services/authApi'

export function LoginPage() {
  const navigate = useNavigate()
  const { setUserId } = useOutletContext()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [healthStatus, setHealthStatus] = useState('')
  const [isHealthClick, setIsHealthClick] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    setMessage('')
    setIsSubmitting(true)

    try {
      const data = await loginUser(username, password)
      if (data.status !== 'success') {
        throw new Error(data.message || 'Login failed')
      }
      if (data.token) {
        sessionStorage.setItem('authToken', data.token)
      }
      const userId = data.user?.id ?? null
      if (userId !== null) {
        sessionStorage.setItem('userId', userId)
      } else {
        sessionStorage.removeItem('userId')
      }
      setUserId(userId)
      sessionStorage.setItem('isLogin', 'true')
      navigate('/', { replace: true })
    } catch (error) {
      if (error.status === 404) {
        setMessage('Login endpoint was not found')
      } else if (error.status === 500) {
        setMessage(error.message || 'Login server error')
      } else if (error.message === 'Failed to fetch') {
        setMessage('Unable to connect to the login service')
      } else {
        setMessage(error.message || 'Unable to connect to the login service')
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  const checkHealth = async () => {
    try {
      setIsHealthClick(true)

      const healthMessage = await healthCheck()
      await new Promise((resolve) => {
        setTimeout(resolve, 1 * 1000)
      }) // Simulate a delay for better UX
      setHealthStatus(healthMessage)
    } catch (error) {
      setHealthStatus('Health check failed')
    } finally {
      setIsHealthClick(false)
    }
  }

  if (sessionStorage.getItem('isLogin') === 'true') {
    return <Navigate to="/" replace />
  }

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 items-center justify-center px-5 py-12 sm:px-8" data-testid="login-page">
      <div className="w-full max-w-lg">
        <form className="rounded-xl border border-line/70 bg-white p-6 shadow-xl shadow-slate-900/5 sm:p-8" onSubmit={handleSubmit} data-testid="login-card">
          <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-center sm:gap-3" data-testid="login-username-field">
            <label className="text-sm font-semibold text-ink sm:min-w-40 sm:text-right" htmlFor="login-username" data-testid="login-username-label">User Name :</label>
            <input
              className="min-w-0 flex-1 rounded-md border border-line bg-white px-3 py-2 text-ink outline-none placeholder:text-slate-400 focus:border-accent focus:ring-2 focus:ring-orange-100"
              id="login-username"
              type="text"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              placeholder="User Name"
              data-testid="login-username-input"
            />
          </div>

          <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-center sm:gap-3" data-testid="login-password-field">
            <label className="text-sm font-semibold text-ink sm:min-w-40 sm:text-right" htmlFor="login-password" data-testid="login-password-label">Password :</label>
            <input
              className="min-w-0 flex-1 rounded-md border border-line bg-white px-3 py-2 text-ink outline-none placeholder:text-slate-400 focus:border-accent focus:ring-2 focus:ring-orange-100"
              id="login-password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Password"
              data-testid="login-password-input"
            /> 
            <button
              type="button"
              className="cursor-pointer rounded-md border border-line bg-white px-5 py-3 text-sm font-semibold text-ink transition-all hover:-translate-y-0.5 hover:border-ink"
              onClick={() => setShowPassword((status) => !status)}
              data-testid="login-password-toggle">
              {showPassword ? (
                <span>visible</span>
              ) : (
                <span>hidden</span>
              )}
            </button>
          </div>

          <button type="submit" className="mx-auto mt-4 block cursor-pointer rounded-md border border-ink bg-ink px-5 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-60" disabled={isSubmitting} data-testid="login-submit-button">
            {isSubmitting ? 'Logging in...' : 'Login'}
          </button>

          {message && (
            <p
              className="mt-4 text-center font-medium text-muted"
              data-testid="login-message"
              role="alert"
            >
              {message}
            </p>
          )}
        </form>

        <button className="mx-auto mt-4 block cursor-pointer rounded-md border border-ink bg-ink px-5 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-60" data-testid="login-health-button" onClick={checkHealth}>
          {isHealthClick ? 'Checking health...' : 'Check Health'}
        </button>

        {healthStatus && (
          <p
            className="mt-4 text-center font-medium text-muted"
            data-testid="login-health-status"
            role="alert"
            style={{ whiteSpace: 'pre-line' }}
          >
            {healthStatus}
          </p>
        )}
      </div>
    </main>
  )
}
