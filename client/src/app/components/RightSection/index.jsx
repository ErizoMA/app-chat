import React, { useContext } from 'react'
import UserContext from '../../context/UserContext'
import ChatFooter from '../ChatFooter'
import ChatHeader from '../ChatHeader'
import ChatMessages from '../ChatMessages'
import styles from './index.module.css'

function RightSection ({ socket }) {
  const { selectedChat, userInfo } = useContext(UserContext)

  const name = selectedChat.users[0]._id === userInfo._id ? selectedChat.users[1].name : selectedChat.users[0].name

  return (
    <div className={styles.container}>
      <ChatHeader name={name} socket={socket} />
      <ChatMessages selectedChat={selectedChat} socket={socket} />
      <ChatFooter selectedChat={selectedChat} socket={socket} />
    </div>

  )
}

export default RightSection
