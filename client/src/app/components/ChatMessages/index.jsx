import React from 'react'
import LockIcon from '../Icons/Lock'
import styles from './index.module.css'
function ChatMessages () {
  return (
    <div className={styles.container}>
      <div className={styles.encrypted}>
        <LockIcon />
        Messages are end-to-end encrypted. No one outside of this chat, not even <br /> WhatsApp can read or listen to them click to learn more.
      </div>
      <div className={styles.message}>
        Here are some photos. you were asking about.
      </div>
      <div className={styles.message__right}>
        Here are some photos. you were asking about.
      </div>
      <div className={styles.message}>
        Here are some photos. you were asking about.
      </div>
      <div className={styles.message}>
        Here are some photos. you were asking about.
      </div>
      <div className={styles.message}>
        Here are some photos. you were asking about.
      </div>

    </div>
  )
}

export default ChatMessages
