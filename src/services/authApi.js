import { baseurl } from '../../config/.env.ts'
import { endpoints } from '../../config/.endpoint.ts'

const API_URL = baseurl.apiBaseUrl.sit

export async function loginUser(username, password) {
  // Keep the API request outside the page component so authentication logic is reusable.
  const response = await fetch(`${API_URL}${endpoints.login}`, {
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
