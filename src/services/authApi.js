import { baseurl } from '../../config/.env.ts'
import { endpoints } from '../../config/.endpoint.ts'

export async function healthCheck() {
  try {
    const response = await fetch(`${baseurl.apiBaseUrl.dev}${endpoints.healthCheck}`)
    const data = await response.json().catch(() => ({}))

    return [
        `database: ${data.database}`,
        `message: ${data.message}`,
        `status: ${data.status}`,
        `timestamp: ${data.timeStamp}`,
      ].join('\n')
  } catch (error) {
    console.error('Health check error:', error)
    return false
  }
}
 
export async function loginUser(username, password) {
  try {
    // Keep the API request outside the page component so authentication logic is reusable.
    const response = await fetch(`${baseurl.apiBaseUrl.dev}${endpoints.login}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })

    const data = await response.json().catch(() => ({}))

    if (!response.ok) {
      const errorResponse = {
        status: response.status,
        message: data.message || 'Login failed',
      }

      throw errorResponse
    }

    return data
  } catch (error) {
    if (error?.status) {
      throw error
    }

    throw {
      status: 500,
      message: 'Unable to connect to the login service',
    }
  }
}
