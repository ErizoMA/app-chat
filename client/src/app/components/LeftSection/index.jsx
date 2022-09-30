import styles from './index.module.css'
import ArrowIcon from '../Icons/Arrow'
import { useContext, useEffect } from 'react'
import UserContext from '../../context/UserContext'
import LeftSectionSearch from '../LeftSectionSearch'
import ChatItem from '../ChatItem'

function LeftSection () {
  const { getChats, chats } = useContext(UserContext)

  useEffect(() => {
    const fetchData = async () => {
      await getChats()
    }
    fetchData()
  }, [])
  return (
    <section className={styles.leftSection}>
      <div className={styles.leftSectionHeader}>
        <img src='https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=250' />
        <ArrowIcon />
      </div>
      <LeftSectionSearch />
      <div className={styles.leftSectionTabs}>
        <div>Favourites</div>
        <div>Friends</div>
        <div>Groups</div>
      </div>
      <div>
        {chats.map(chat => {
          return (
            <ChatItem chat={chat} key={chat._id} />
          )
        })}
      </div>
    </section>
  )
}

export default LeftSection
