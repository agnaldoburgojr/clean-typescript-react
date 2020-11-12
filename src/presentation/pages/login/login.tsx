import React, { useState } from 'react'
import { Footer, LoginHeader, Input, FormStatus } from '@/presentation/components'
import styles from './login-styles.scss'
import Context from '@/presentation/contexts/form/form-context'

const Login: React.FC = () => {
  const [state] = useState({
    isLoading: false,
  })

  const [errorState] = useState({
    email: 'Campo obrigatório',
    password: 'Campo obrigatório',
    main: '',
  })

  return (
    <div className={styles.login}>
      <LoginHeader/>
      <Context.Provider value={{ state, errorState }}>
        <form className={styles.form}>
          <h2>Login</h2>
          <Input type='email' name='email' placeholder='Digite seu email' />
          <Input type='password' name='password' placeholder='Digite sua senha' />
          <button className={styles.submit} type='submit' disabled data-testid='submit'>Entrar</button>
          <span className={styles.account}>Criar conta</span>
          <FormStatus />
        </form>
      </Context.Provider>
      <Footer />
    </div>
  )
}

export default Login
