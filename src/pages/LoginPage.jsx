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
      error.message === 'Failed to fetch' ? setMessage('Unable to connect to the login service') :
      setMessage(error.message || 'Unable to connect to the login service')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="page-shell login-page" data-testid="login-page">
      <form className="login-card" onSubmit={handleSubmit} data-testid="login-card">
        <div className="field-row" data-testid="login-username-field">
          <label htmlFor="login-username" data-testid="login-username-label">User Name :</label>
          <input
            id="login-username"
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            placeholder="User Name"
            data-testid="login-username-input"
          />
        </div>

        <div className="field-row" data-testid="login-password-field">
          <label htmlFor="login-password" data-testid="login-password-label">Password :</label>
          <input
            id="login-password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Password"
            data-testid="login-password-input"
          />
          <button type="button" className="show-password-btn" onClick={() => setShowPassword((v) => !v)} data-testid="login-password-toggle">
            👁️
          </button>
        </div>

        <button type="submit" className="primary-button login-btn" disabled={isSubmitting} data-testid="login-submit-button">
          {isSubmitting ? 'Logging in...' : 'Login'}
        </button>

        {message && <p className="login-message" data-testid="login-message">{message}</p>}
      </form>
    </main>
  )
}
