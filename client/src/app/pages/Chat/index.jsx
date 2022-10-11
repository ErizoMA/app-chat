import { useEffect, useContext } from 'react'
import { io } from 'socket.io-client'

import LeftSection from '../../components/LeftSection'
import RightSection from '../../components/RightSection'
import RightSectionEmpty from '../../components/RightSectionEmpty'
import UserContext from '../../context/UserContext'
import styles from './index.module.css'

const socket = io('http://localhost:4000')

function Chat () {
  const { selectedChat, userInfo } = useContext(UserContext)
  useEffect(() => {
    socket.emit('setup', userInfo)
    socket.on('connected', () => {
      console.log('connected')
    })
    return () => {
      socket.off('connected')
    }
  }, [])

  return (
    <div className={styles.container}>
      <LeftSection socket={socket} />
      {!selectedChat && <RightSectionEmpty />}
      {selectedChat && <RightSection socket={socket} />}
    </div>
  )
}

export default Chat
