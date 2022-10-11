import styles from './index.module.css'
import ArrowIcon from '../Icons/Arrow'
import { useContext } from 'react'
import UserContext from '../../context/UserContext'
import LeftSectionSearch from '../LeftSectionSearch'
import ChatList from '../ChatList'

function LeftSection ({ socket }) {
  const { userInfo } = useContext(UserContext)

  return (
    <section className={styles.leftSection}>
      <div className={styles.leftSectionHeader}>
        <img src={userInfo.avatar} />
        <ArrowIcon />
      </div>
      <LeftSectionSearch />
      <div className={styles.leftSectionTabs}>
        <div>Favourites</div>
        <div>Friends</div>
        <div>Groups</div>
      </div>
      <ChatList socket={socket} />
    </section>
  )
}

export default LeftSection
