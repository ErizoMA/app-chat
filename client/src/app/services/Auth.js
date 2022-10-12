import { LOGIN, REGISTER, SEARCH_USER } from './config'

export const login = async (form) => {
  try {
    const response = await fetch(LOGIN, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
      mode: 'cors'
    })
    return { status: response.status, ok: response.ok, data: await response.json() }
  } catch (error) {
    throw new Error(error.message)
  }
}

export const register = async (form) => {
  try {
    const response = await fetch(REGISTER, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
      mode: 'cors'
    })
    return { status: response.status, ok: response.ok, data: await response.json() }
  } catch (error) {
    throw new Error(error.message)
  }
}

export const searchUser = async (query) => {
  try {
    const response = await fetch(SEARCH_USER + query)
    return { status: response.status, ok: response.ok, data: await response.json() }
  } catch (error) {
    console.log(error)
    throw new Error(error.message)
  }
}
