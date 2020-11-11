import React from 'react'
import Spinner from '@/presentation/components/spinner/spinner'
import styles from './login-styles.scss'
import Footer from '@/presentation/components/footer/footer'
import LoginHeader from '@/presentation/components/login-header/login-header'
import Input from '@/presentation/components/input/input'

const Login: React.FC = () => {
  return (
    <div className={styles.login}>
      <LoginHeader/>
      <form className={styles.form}>
        <h2>Login</h2>
        <Input type='email' name='email' placeholder='Digite seu email' />
        <Input type='password' name='password' placeholder='Digite sua senha' />
        <button className={styles.submit} type='submit'>Entrar</button>
        <span className={styles.link}>Criar conta</span>
        <div className={styles.errorWrap}>
          <Spinner className={styles.spinner}/>
          <span className={styles.error}>Error</span>
        </div>
      </form>
      <Footer />
    </div>
  )
}

export default Login