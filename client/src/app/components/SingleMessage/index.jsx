import React, { useContext } from 'react'
import UserContext from '../../context/UserContext'
import styles from './index.module.css'

function SingleMessage ({ msg }) {
  const { userInfo } = useContext(UserContext)

  const isMine = msg.createdBy._id === userInfo._id
  return (
    <div className={isMine ? styles.message__right : styles.message}>
      {msg.body}
    </div>
  )
}

export default SingleMessage
