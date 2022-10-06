import React, { useState } from 'react'
import EmojiIcon from '../Icons/Emoji'
import PlusIcon from '../Icons/Plus'
import VoiceIcon from '../Icons/Voice'
import styles from './index.module.css'
function ChatFooter ({ selectedChat, socket }) {
  const [message, setMessage] = useState('')
  const handleMessage = async (e) => {
    if (e.key === 'Enter') {
      const response = await fetch('http://localhost:4000/api/message', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: JSON.parse(localStorage.getItem('token')) },
        body: JSON.stringify({
          body: message,
          chatId: selectedChat._id
        })
      })
      const data = await response.json()
      socket.emit('new message', data.data)
      setMessage('')
    }
  }
  return (
    <div className={styles.container}>
      <section className={styles.icons}>
        <EmojiIcon />
        <PlusIcon />
      </section>
      <section className={styles.newmessage}>
        <input placeholder='Say Something ...' onChange={(e) => setMessage(e.target.value)} onKeyDown={handleMessage} value={message} />
        <VoiceIcon />
      </section>
    </div>
  )
}

export default ChatFooter
