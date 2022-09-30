import { useContext } from 'react'
import LeftSection from '../../components/LeftSection'
import RightSection from '../../components/RightSection'
import RightSectionEmpty from '../../components/RightSectionEmpty'
import UserContext from '../../context/UserContext'
import styles from './index.module.css'

function Chat () {
  const { selectedChat } = useContext(UserContext)
  return (
    <div className={styles.container}>
      <LeftSection />
      {!selectedChat && <RightSectionEmpty />}
      {selectedChat && <RightSection />}
    </div>
  )
}

export default Chat
