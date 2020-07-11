import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'

import LoginImage from './image/login.jpg'

import './style.scss'
import { Input, Button } from 'web/components/core'
import { updateCompanyRequest } from 'core/logic/company/presentation/redux'
import companyService from 'core/logic/company/use-cases'
import { setAuthRequest } from 'core/logic/auth/redux'

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    errors,
    setError,
    formState
  } = useForm({
    mode: 'onChange',
    validateCriteriaMode: 'all'
  })
  const { isSubmitting, isValid } = formState

  const dispatch = useDispatch()

  const onSubmit = async data => {
    //@todo make user type dynamic {for now just personal}
    // const {}
    try {
      const loginSuccess = await companyService.loginCompany(data)
      dispatch(updateCompanyRequest(loginSuccess.data.response))
      dispatch(setAuthRequest(loginSuccess.data.response.token))
      return
    } catch (e) {
      setError('email', 'validate', e.message)
    }
  }
  return (
    <section className="login">
      <aside className="login-aside">
        <img
          src={LoginImage}
          alt="login-image"
          className="login-image"
        />
      </aside>
      <main className="login-main">
        <header>
          <h1>Welcome to Coaup</h1>
        </header>
        <form
          className="login-form"
          onSubmit={handleSubmit(onSubmit)}
          autoComplete="off"
        >
          <Input
            type="email"
            label="email"
            name="email"
            className="login-input"
            ref={register({ required: `email is required` })}
            error={errors['email'] && errors['email'].message}
            autoComplete="off"
          />
          <Input
            type="password"
            label="password"
            name="password"
            className="login-input"
            ref={register({
              required: `password is required`,
              pattern: /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/
            })}
            error={
              (errors['password']?.type === 'pattern' &&
                'password should contain capital & small letters with one number and a special character') ||
              errors['password']?.message
            }
            autoComplete="new-password"
          />

          <Button
            type="submit"
            className="login-btn"
            disabled={!isValid || isSubmitting}
            size="big"
          >
            Sign Up
          </Button>
        </form>
      </main>
    </section>
  )
}

export default LoginPage
