import { useState } from 'react'
import { loginUser } from '../services/authApi'

export function LoginPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    setMessage('')
    setIsSubmitting(true)

    try {
      // The API should return a token when authentication succeeds.
      const data = await loginUser(username, password)
      if (data.token) {
        sessionStorage.setItem('authToken', data.token)
      }
      sessionStorage.setItem('isLogin', 'true')
      setMessage('Login successful')
    } catch (error) {
      if (error.message === 'Failed to fetch') {
        setMessage('Unable to connect to the login service')
      } else {
        setMessage(error.message || 'Unable to connect to the login service')
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 items-center justify-center px-5 py-12 sm:px-8" data-testid="login-page">
      <form className="w-full max-w-lg rounded-xl border border-line/70 bg-white p-6 shadow-xl shadow-slate-900/5 sm:p-8" onSubmit={handleSubmit} data-testid="login-card">
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
          <button type="button" className="cursor-pointer rounded-md border border-line bg-white px-5 py-3 text-sm font-semibold text-ink transition-all hover:-translate-y-0.5 hover:border-ink" onClick={() => setShowPassword((v) => !v)} data-testid="login-password-toggle">
            👁️
          </button>
        </div>

        <button type="submit" className="mx-auto mt-4 block cursor-pointer rounded-md border border-ink bg-ink px-5 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-60" disabled={isSubmitting} data-testid="login-submit-button">
          {isSubmitting ? 'Logging in...' : 'Login'}
        </button>

        {message && <p className="mt-4 text-center font-medium text-muted" data-testid="login-message">{message}</p>}
      </form>
    </main>
  )
}
