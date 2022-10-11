import UserContext from './UserContext'
import UserReducer from './UserReducer'
import { useReducer } from 'react'
import * as AuthService from '../services/Auth'
import { GET_CHATS, LOGIN, REGISTER, SELECT_CHAT } from './types'

const UserProvider = (props) => {
  const initialState = { userInfo: '', chats: [], selectedChat: null }

  const [state, dispatch] = useReducer(UserReducer, initialState)

  const login = async (form) => {
    const { status, ok, data } = await AuthService.login(form)
    if (ok && status === 200) {
      dispatch({ type: LOGIN, payload: data.data })
      localStorage.setItem('token', JSON.stringify(data.token))
    }
  }
  const register = async (form) => {
    const { status, ok, data } = await AuthService.register(form)
    if (ok && status === 201) {
      dispatch({ type: REGISTER, payload: data.data })
      localStorage.setItem('token', JSON.stringify(data.token))
    }
  }
  const getChats = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/chat', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', Authorization: JSON.parse(localStorage.getItem('token')) }
      })
      const data = await response.json()
      console.log('data new fetched', data)
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
    <UserContext.Provider value={{ login, register, userInfo: state.userInfo, getChats, chats: state.chats, selectChat, selectedChat: state.selectedChat }}>
      {props.children}
    </UserContext.Provider>
  )
}

export default UserProvider
