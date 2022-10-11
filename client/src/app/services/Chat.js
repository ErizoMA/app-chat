export const createChat = async (id) => {
  try {
    const response = await fetch(import.meta.env.VITE_APP_CREATE_CHAT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: JSON.parse(localStorage.getItem('token')) },
      body: JSON.stringify({ userId: id }),
      mode: 'cors'
    })
    return { status: response.status, ok: response.ok, data: await response.json() }
  } catch (error) {
    throw new Error(error.message)
  }
}
