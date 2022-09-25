import React from 'react'
import ArrowIcon from '../Icons/Arrow'
import CallIcon from '../Icons/Call'
import FavouriteIcon from '../Icons/Favoutire'
import OnlineIcon from '../Icons/Online'
import SearchIcon from '../Icons/Search'
import VideoCallIcon from '../Icons/VideoCall'
import styles from './index.module.css'

function ChatHeader () {
  return (
    <div className={styles.header}>
      <div className={styles.header__info}>
        <img src='https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=250' />
        <section>
          <div>
            <h2>Jane Cooper</h2>
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
