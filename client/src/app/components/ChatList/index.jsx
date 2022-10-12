import React, { useEffect, useContext } from 'react'
import UserContext from '../../context/UserContext'
import ChatItem from '../ChatItem'

function ChatList ({ socket }) {
  const { chats, getChats } = useContext(UserContext)
  useEffect(() => {
    const fetchData = async () => {
      await getChats()
    }
    fetchData()
  }, [])

  useEffect(() => {
    socket.on('notification', () => {
      const fetchAgain = async () => {
        await getChats()
      }
      fetchAgain()
    })
    return () => {
      socket.off('notification')
    }
  })

  return (
    <div>
      {chats.map(chat => {
        return (
          <ChatItem chat={chat} key={chat._id} />
        )
      })}
    </div>
  )
}

export default ChatList
