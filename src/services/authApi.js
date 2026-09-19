const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000'
const LOGIN_ENDPOINT = import.meta.env.VITE_LOGIN_ENDPOINT || '/api/login'

export async function loginUser(username, password) {
  // Keep the API request outside the page component so authentication logic is reusable.
  const response = await fetch(`${API_URL}${LOGIN_ENDPOINT}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  })

  const data = await response.json().catch(() => ({}))

  if (!response.ok) {
    throw new Error(data.message || 'Invalid username or password')
  }

  return data
}
