import React from 'react'
import ChatFooter from '../ChatFooter'
import ChatHeader from '../ChatHeader'
import ChatMessages from '../ChatMessages'
import styles from './index.module.css'

function RightSection () {
  return (
    <div className={styles.container}>
      <ChatHeader />
      <ChatMessages />
      <ChatFooter />
    </div>

  )
}

export default RightSection
