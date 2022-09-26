import React from 'react'
import EmojiIcon from '../Icons/Emoji'
import PlusIcon from '../Icons/Plus'
import VoiceIcon from '../Icons/Voice'
import styles from './index.module.css'

function ChatFooter () {
  return (
    <div className={styles.container}>
      <section className={styles.icons}>
        <EmojiIcon />
        <PlusIcon />
      </section>
      <section className={styles.newmessage}>
        <input placeholder='Say Something ...' />
        <VoiceIcon />
      </section>
    </div>
  )
}

export default ChatFooter
