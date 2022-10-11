import React, { useEffect, useState } from 'react'
import LockIcon from '../Icons/Lock'
import SingleMessage from '../SingleMessage'
import styles from './index.module.css'
function ChatMessages ({ selectedChat, socket }) {
  const [messages, setMessages] = useState([])
  useEffect(() => {
    const fetchMessages = async () => {
      const response = await fetch(`http://localhost:4000/api/message/${selectedChat._id}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', Authorization: JSON.parse(localStorage.getItem('token')) }
      })
      const data = await response.json()
      setMessages(data.data)
    }

    fetchMessages()
  }, [selectedChat])

  useEffect(() => {
    socket.on('message received', (msg) => {
      console.log('message received => add msg to body', msg)
      setMessages([...messages, msg])
    })
    return () => {
      socket.off('message received')
    }
  })

  useEffect(() => {
    const scroll = document.getElementById('scrollbar')
    scroll.scrollTop = scroll.scrollHeight
  })
  return (
    <div className={styles.container} id='scrollbar'>
      {messages.length === 0 &&
        <div className={styles.encrypted}>
          <LockIcon />
          Messages are end-to-end encrypted. No one outside of this chat, not even <br /> WhatsApp can read or listen to them click to learn more.
        </div>}
      {messages.map(msg => {
        return (
          <SingleMessage msg={msg} key={msg._id} />
        )
      })}
    </div>
  )
}

export default ChatMessages
