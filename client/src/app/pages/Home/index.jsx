import React, { useState } from 'react'
import Login from '../../components/Login'
import Register from '../../components/Register'
import styles from './index.module.css'

function Home () {
  const [loginScreen, setLoginScreen] = useState(true)
  const toggleScreen = () => {
    setLoginScreen(!loginScreen)
  }
  return (
    <div className={styles.container}>
      {loginScreen ? <Login toggleScreen={toggleScreen} /> : <Register toggleScreen={toggleScreen} />}
    </div>
  )
}

export default Home
