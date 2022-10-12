import UserContext from './UserContext'
import UserReducer from './UserReducer'
import { useReducer } from 'react'
import * as AuthService from '../services/Auth'
import * as ChatService from '../services/Chat'
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
    const { status, ok, data } = await ChatService.getChats()
    if (ok && status === 200) {
      dispatch({ type: GET_CHATS, payload: data.data })
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
