export const login = async (form) => {
  try {
    const response = await fetch(import.meta.env.VITE_APP_LOGIN, {
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
    const response = await fetch(import.meta.env.VITE_APP_REGISTER, {
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
    const response = await fetch(import.meta.env.VITE_APP_SEARCH_USER + query)
    return { status: response.status, ok: response.ok, data: await response.json() }
  } catch (error) {
    console.log(error)
    throw new Error(error.message)
  }
}
