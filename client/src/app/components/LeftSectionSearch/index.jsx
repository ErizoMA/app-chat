import React, { useState } from 'react'
import ArrowIcon from '../Icons/Arrow'
import CloseIcon from '../Icons/Close'
import styles from './index.module.css'

function LeftSectionSearch () {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const handleSearch = async (e) => {
    if (e.key === 'Enter') {
      const response = await fetch(`http://localhost:4000/api/user?search=${query}`)
      const data = await response.json()
      setResults(data.data)
    }
  }
  const handleClose = () => {
    setQuery('')
    setResults([])
  }
  return (
    <div className={styles.container}>
      <input className={styles.leftSectionSearch} placeholder='Search or start a new chat' onKeyDown={handleSearch} onChange={e => setQuery(e.target.value)} value={query} />
      {results.length > 0 && <div className={styles.resultsContainer}>
        {results.map(user => {
          return (
            <div className={styles.result} key={user._id}>
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
