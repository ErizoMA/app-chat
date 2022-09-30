import React, { useContext } from 'react'
import UserContext from '../../context/UserContext'
import styles from './index.module.css'

function ChatItem ({ chat }) {
  const { userInfo } = useContext(UserContext)
  const name = chat.users[0]._id === userInfo._id ? chat.users[1].name : chat.users[0].name
  return (
    <div className={styles.leftSectionChat}>
      <img src='https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=250' />
      <div>
        <div className={styles.chatDetails}>
          <p>{name}</p>
          <p>{chat?.lastMessage?.body}</p>
        </div>
        <span>05:14 pm</span>
      </div>
    </div>
  )
}

export default ChatItem
