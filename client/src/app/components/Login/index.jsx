import React, { useState } from 'react'
import styles from './index.module.css'

function Login ({ toggleScreen }) {
  const [form, setForm] = useState({ email: '', password: '' })

  const handleSubmit = (e) => {
    console.log(form)
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Login</h1>
      <form className={styles.form}>
        <input className={styles.input} placeholder='Email' type='email' value={form.email} required onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <input className={styles.input} placeholder='Password' type='password' value={form.password} minLength='6' required onChange={(e) => setForm({ ...form, password: e.target.value })} />
        <button className={styles.btnSubmit} onClick={(e) => handleSubmit(e)}>
          LOGIN
        </button>
      </form>
      <h2 className={styles.footerMessage}>Don't have an account yet? <span onClick={toggleScreen}>Register</span></h2>
    </div>
  )
}

export default Login
