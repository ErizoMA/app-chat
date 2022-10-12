import { CREATE_CHAT, GET_CHATS } from './config'

export const createChat = async (id) => {
  try {
    const response = await fetch(CREATE_CHAT, {
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

export const getChats = async () => {
  try {
    const response = await fetch(GET_CHATS, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', Authorization: JSON.parse(localStorage.getItem('token')) }
    })
    return { status: response.status, ok: response.ok, data: await response.json() }
  } catch (error) {
    console.log(error.message)
    throw new Error(error.message)
  }
}
