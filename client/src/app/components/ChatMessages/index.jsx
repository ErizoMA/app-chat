import React, { useEffect, useState } from 'react'
import { getMessages } from '../../services/Message'
import LockIcon from '../Icons/Lock'
import SingleMessage from '../SingleMessage'
import styles from './index.module.css'
function ChatMessages ({ selectedChat, socket }) {
  const [messages, setMessages] = useState([])
  useEffect(() => {
    const fetchMessages = async () => {
      const { data } = await getMessages(selectedChat)
      setMessages(data.data)
    }

    fetchMessages()
  }, [selectedChat])

  useEffect(() => {
    socket.on('message received', async (msg) => {
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
