import React, { useState, useContext } from 'react'
import UserContext from '../../context/UserContext'
import { searchUser } from '../../services/Auth'
import { createChat } from '../../services/Chat'
import CloseIcon from '../Icons/Close'
import styles from './index.module.css'

function LeftSectionSearch () {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const { getChats, userInfo } = useContext(UserContext)
  const handleSearch = async (e) => {
    if (e.key === 'Enter') {
      const { data } = await searchUser(query)
      setResults(data.data.filter(e => {
        return e._id !== userInfo._id
      }))
    }
  }
  const handleClose = () => {
    setQuery('')
    setResults([])
  }
  const createNewChat = async (id) => {
    await createChat(id)
    await getChats()
    handleClose()
  }
  return (
    <div className={styles.container}>
      <input className={styles.leftSectionSearch} placeholder='Search or start a new chat' onKeyDown={handleSearch} onChange={e => setQuery(e.target.value)} value={query} />
      {results.length > 0 &&
        <div className={styles.resultsContainer}>
          {results.map(user => {
            return (
              <div className={styles.result} key={user._id} onClick={(e) => createNewChat(user._id)}>
                <img src={user.avatar} />
                <h2>{user.name}</h2>
              </div>
            )
          })}
        </div>}
      {results.length > 0 && <CloseIcon onClick={handleClose} />}
    </div>
  )
}

export default LeftSectionSearch
