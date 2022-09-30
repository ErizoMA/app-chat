import { GET_CHATS, LOGIN, LOGOUT, REGISTER, SELECT_CHAT } from './types'

export default (state, action) => {
  const { payload, type } = action

  switch (type) {
    case LOGIN:
      return {
        ...state, userInfo: payload
      }
    case REGISTER:
      return {
        ...state, userInfo: payload
      }
    case LOGOUT:
      return {
        ...state, userInfo: ''
      }
    case GET_CHATS:
      return {
        ...state, chats: payload
      }
    case SELECT_CHAT:
      return {
        ...state, selectedChat: payload
      }

    default:
      break
  }
}
