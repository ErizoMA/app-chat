import React, { useContext } from 'react'
import UserContext from '../../context/UserContext'
import ChatFooter from '../ChatFooter'
import ChatHeader from '../ChatHeader'
import ChatMessages from '../ChatMessages'
import styles from './index.module.css'

function RightSection ({ socket }) {
  const { selectedChat, userInfo } = useContext(UserContext)

  const user = selectedChat.users[0]._id === userInfo._id ? selectedChat.users[1] : selectedChat.users[0]

  return (
    <div className={styles.container}>
      <ChatHeader user={user} socket={socket} />
      <ChatMessages selectedChat={selectedChat} socket={socket} />
      <ChatFooter selectedChat={selectedChat} socket={socket} />
    </div>

  )
}

export default RightSection
