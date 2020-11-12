import React, { useState, useEffect } from 'react'
import { Footer, LoginHeader, Input, FormStatus } from '@/presentation/components'
import styles from './login-styles.scss'
import Context from '@/presentation/contexts/form/form-context'
import { Validation } from '@/presentation/protocols/validation'

type Props = {
  validation: Validation
}

const Login: React.FC<Props> = ({ validation }: Props) => {
  const [state, setState] = useState({
    isLoading: false,
    email: '',
    password: '',
    emailError: 'Campo obrigatório',
    passwordError: 'Campo obrigatório',
    mainErros: ''
  })

  useEffect(() => {
    validation.validate('email', state.email)
  }, [state.email])

  useEffect(() => {
    validation.validate('password', state.password)
  }, [state.password])

  return (
    <div className={styles.login}>
      <LoginHeader/>
      <Context.Provider value={{ state, setState }}>
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
