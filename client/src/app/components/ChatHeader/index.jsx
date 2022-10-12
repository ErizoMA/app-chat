import ArrowIcon from '../Icons/Arrow'
import CallIcon from '../Icons/Call'
import FavouriteIcon from '../Icons/Favoutire'
import OnlineIcon from '../Icons/Online'
import SearchIcon from '../Icons/Search'
import VideoCallIcon from '../Icons/VideoCall'
import styles from './index.module.css'

function ChatHeader ({ user }) {
  return (
    <div className={styles.header}>
      <div className={styles.header__info}>
        <img src={user.avatar} />
        <section>
          <div>
            <h2>{user.name}</h2>
            <FavouriteIcon />
          </div>
          <div>
            <OnlineIcon />
            <h3>Online</h3>
          </div>
        </section>
      </div>
      <div className={styles.header__icons}>
        <CallIcon />
        <VideoCallIcon />
        <SearchIcon />
        <ArrowIcon />
      </div>
    </div>
  )
}

export default ChatHeader
