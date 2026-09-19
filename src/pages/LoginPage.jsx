import { useState } from 'react'

export function LoginPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = () => {
    if (username === 'admin' && password === 'admin') {
      sessionStorage.setItem('isLogin', 'true')
      setMessage('Login successful')
      return
    }

    setMessage('Invalid username or password')
  }

  return (
    <main className="page-shell login-page" data-testid="login-page">
      <div className="login-card" data-testid="login-card">
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

        <button type="button" className="primary-button login-btn" onClick={handleSubmit} data-testid="login-submit-button">
          Login
        </button>

        {message && <p className="login-message" data-testid="login-message">{message}</p>}
      </div>
    </main>
  )
}
