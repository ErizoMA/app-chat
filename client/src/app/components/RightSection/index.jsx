import React, { useContext } from 'react'
import UserContext from '../../context/UserContext'
import ChatFooter from '../ChatFooter'
import ChatHeader from '../ChatHeader'
import ChatMessages from '../ChatMessages'
import styles from './index.module.css'

function RightSection () {
  const { selectedChat, userInfo } = useContext(UserContext)

  const name = selectedChat.users[0]._id === userInfo._id ? selectedChat.users[1].name : selectedChat.users[0].name
  return (
    <div className={styles.container}>
      <ChatHeader name={name} />
      <ChatMessages selectedChat={selectedChat} />
      <ChatFooter />
    </div>

  )
}

export default RightSection
