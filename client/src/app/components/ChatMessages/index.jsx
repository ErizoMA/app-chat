import React from 'react'
import styles from './index.module.css'
function ChatMessages () {
  return (
    <div className={styles.container}>
      <section>
        <div>
          Messages are end-to-end encrypted. No one outside of this chat, not even WhatsApp can read or listen to them click to learn more.
        </div>
        <div>
          SingleMessage
        </div>
      </section>
      <section>
        Footer
      </section>
    </div>
  )
}

export default ChatMessages
