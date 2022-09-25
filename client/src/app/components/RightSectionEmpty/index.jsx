import React from 'react'
import EmptyChatIcon from '../Icons/EmptyChat'
import styles from './index.module.css'

function RightSectionEmpty () {
  return (
    <div className={styles.rightSection}>
      <EmptyChatIcon />
      <h2>Keep your phone <br /> connected</h2>
      <section>
        <p>AppChat connects to your phone to sync messages. To reduce <br />data usage. Connect your phone to Wi-Fi</p>
      </section>
    </div>
  )
}

export default RightSectionEmpty
