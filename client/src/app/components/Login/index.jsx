import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import UserContext from '../../context/UserContext'
import styles from './index.module.css'

function Login ({ toggleScreen }) {
  const [form, setForm] = useState({ email: '', password: '' })
  const navigate = useNavigate()
  const { login } = useContext(UserContext)

  const handleSubmit = async (e) => {
    e.preventDefault()
    await login(form)
    const token = JSON.parse(localStorage.getItem('token'))
    if (token) navigate('/chats')
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Login</h1>
      <form className={styles.form}>
        <input className={styles.input} placeholder='Email' type='email' value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <input className={styles.input} placeholder='Password' type='password' value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />
        <button className={styles.btnSubmit} onClick={handleSubmit}>
          LOGIN
        </button>
      </form>
      <h2 className={styles.footerMessage}>Don't have an account yet? <span onClick={toggleScreen}>Register</span></h2>
    </div>
  )
}

export default Login
