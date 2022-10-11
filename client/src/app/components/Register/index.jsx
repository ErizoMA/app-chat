import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import UserContext from '../../context/UserContext'
import styles from './index.module.css'

function Register ({ toggleScreen }) {
  const [form, setForm] = useState({ email: '', name: '', password: '', avatar: '' })
  const navigate = useNavigate()
  const { register } = useContext(UserContext)

  const handleSubmit = async (e) => {
    e.preventDefault()
    await register(form)
    const token = JSON.parse(localStorage.getItem('token'))
    if (token) navigate('/chats', { replace: true })
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Create Account</h1>
      <form className={styles.form}>
        <input className={styles.input} placeholder='Complete name' autoComplete='off' required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <input className={styles.input} placeholder='Email' type='email' value={form.email} required onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <input className={styles.input} placeholder='Avatar' value={form.avatar} onChange={(e) => setForm({ ...form, avatar: e.target.value })} />
        <input className={styles.input} placeholder='Password' type='password' value={form.password} minLength='6' required onChange={(e) => setForm({ ...form, password: e.target.value })} />
        {/* <input className={styles.input} placeholder='Confirm Password' type='password' value={form.cpassword} required minLength='6' onChange={(e) => setForm({ ...form, cpassword: e.target.value })} /> */}
        <button className={styles.btnSubmit} onClick={(e) => handleSubmit(e)}>
          CREATE ACCOUNT
        </button>
      </form>
      <h2 className={styles.footerMessage}>Already registered? <span onClick={() => toggleScreen()}>Login</span></h2>
    </div>
  )
}

export default Register
