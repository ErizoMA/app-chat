import React, { useEffect, useContext } from 'react'
import UserContext from '../../context/UserContext'
import ChatItem from '../ChatItem'

function ChatList ({ socket }) {
  const { chats, getChats } = useContext(UserContext)

  useEffect(() => {
    socket.on('message received', (msg) => {
      console.log('message received => update last msg')
      const fetchData = async () => {
        await getChats()
      }
      fetchData()
    })
    return () => {
      socket.off('message received')
    }
  })
  useEffect(() => {
    const fetchData = async () => {
      await getChats()
    }
    fetchData()
  }, [])

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
