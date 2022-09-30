import UserContext from './UserContext'
import UserReducer from './UserReducer'
import { useReducer } from 'react'
import { GET_CHATS, LOGIN, SELECT_CHAT } from './types'

const UserProvider = (props) => {
  const initialState = { userInfo: '', chats: [], selectedChat: null }

  const [state, dispatch] = useReducer(UserReducer, initialState)

  const login = async (form) => {
    try {
      const response = await fetch('http://localhost:4000/api/user/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
        mode: 'cors'
      })
      const data = await response.json()
      if (response.ok) {
        dispatch({ type: LOGIN, payload: data.data })
        localStorage.setItem('token', JSON.stringify(data.token))
      }
    } catch (error) {
      console.log(error.message)
    }
  }
  const getChats = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/chat', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', Authorization: JSON.parse(localStorage.getItem('token')) }
      })
      const data = await response.json()
      if (response.ok) {
        dispatch({ type: GET_CHATS, payload: data.data })
      }
      console.log(data)
    } catch (error) {
      console.log(error.message)
    }
  }

  const selectChat = (chat) => {
    dispatch({ type: SELECT_CHAT, payload: chat })
  }

  return (
    <UserContext.Provider value={{ login, userInfo: state.userInfo, getChats, chats: state.chats, selectChat, selectedChat: state.selectedChat }}>
      {props.children}
    </UserContext.Provider>
  )
}

export default UserProvider
