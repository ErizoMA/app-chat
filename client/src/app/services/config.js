export const SERVER_PORT = import.meta.env.VITE_SERVER_PORT || 'http://localhost:4000'
export const LOGIN = SERVER_PORT + import.meta.env.VITE_APP_LOGIN
export const REGISTER = SERVER_PORT + import.meta.env.VITE_APP_REGISTER
export const CREATE_CHAT = SERVER_PORT + import.meta.env.VITE_APP_CREATE_CHAT
export const GET_CHATS = SERVER_PORT + import.meta.env.VITE_APP_GET_CHATS
export const CREATE_MESSAGE = SERVER_PORT + import.meta.env.VITE_APP_CREATE_MESSAGE
export const GET_MESSAGES = SERVER_PORT + import.meta.env.VITE_APP_GET_MESSAGES
export const SEARCH_USER = SERVER_PORT + import.meta.env.VITE_APP_SEARCH_USER
