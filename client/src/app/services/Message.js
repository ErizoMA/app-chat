import { CREATE_MESSAGE, GET_MESSAGES } from './config'

export const createMessage = async (selectedChat, message) => {
  try {
    const response = await fetch(CREATE_MESSAGE, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: JSON.parse(localStorage.getItem('token')) },
      body: JSON.stringify({
        body: message,
        chatId: selectedChat._id
      })
    })
    return { status: response.status, ok: response.ok, data: await response.json() }
  } catch (error) {
    console.error(error)
    throw new Error(error.message)
  }
}

export const getMessages = async (selectedChat) => {
  try {
    const response = await fetch(GET_MESSAGES + '/' + selectedChat._id, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', Authorization: JSON.parse(localStorage.getItem('token')) }
    })
    return { status: response.status, ok: response.ok, data: await response.json() }
  } catch (error) {
    console.error(error.message)
    throw new Error(error.message)
  }
}
