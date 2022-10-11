import React, { useContext } from 'react'
import UserContext from '../../context/UserContext'
import styles from './index.module.css'

function ChatItem ({ chat }) {
  const { userInfo, selectChat } = useContext(UserContext)
  const user = chat.users[0]._id === userInfo._id ? chat.users[1] : chat.users[0]
  return (
    <div className={styles.leftSectionChat} onClick={(e) => selectChat(chat)}>
      <img src={user.avatar} />
      <div>
        <div className={styles.chatDetails}>
          <p>{user.name}</p>
          <p>{chat?.lastMessage?.body}</p>
        </div>
        <span>05:14 pm</span>
      </div>
    </div>
  )
}

export default ChatItem
