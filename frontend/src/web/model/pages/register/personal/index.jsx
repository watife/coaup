/* eslint-disable object-curly-newline */
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useToasts } from 'react-toast-notifications'

import Image from '../image'

import '../style.scss'

import { Button, Input } from 'web/components/core'

import authService from 'core/logic/auth/use-cases'

const RegisterPersonal = () => {
  const {
    register,
    handleSubmit,
    errors,
    setError,
    formState,
    watch
  } = useForm({
    mode: 'onChange',
    validateCriteriaMode: 'all'
  })
  const { isSubmitting, isValid } = formState
  const { addToast } = useToasts()
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = async data => {
    try {
      const user_type = 'personal'
      const registerData = { ...data, user_type }

      console.log(registerData)
      const registered = await authService.registerAuthUser(
        registerData
      )

      addToast(registered.data.company, {
        appearance: 'success',
        autoDismiss: false
      })
      setSubmitted(true)
    } catch (e) {
      addToast(e.message, { appearance: 'error', autoDismiss: false })
    }
  }

  return (
    <div className="register">
      <header>
        <h1>Sign Up</h1>
        <p className="register-subtitle">
          Let&apos;s get your company started
        </p>
      </header>
      <div className="register-main">
        <form
          className="register-form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            type="text"
            label="first name"
            name="first_name"
            className="register-input"
            ref={register({ required: `first name is required` })}
            error={errors['first_name']?.message}
          />
          <Input
            type="text"
            label="last name"
            name="last_name"
            className="register-input"
            ref={register({ required: `last name is required` })}
            error={errors['last_name']?.message}
          />

          <Input
            type="email"
            label="email"
            name="email"
            className="register-input"
            ref={register({ required: `email is required` })}
            error={errors['email'] && errors['email'].message}
          />
          <Input
            type="password"
            label="password"
            name="password"
            className="register-input"
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
          <Input
            type="password"
            label="confirm password"
            name="password_confirm"
            className="register-input"
            ref={register({
              validate: value =>
                value === watch('password') ||
                "password doesn't match"
            })}
            error={errors['password_confirm']?.message}
          />

          <Button
            type="submit"
            className="register-btn"
            disabled={!isValid || isSubmitting || submitted}
            size="big"
          >
            Sign Up
          </Button>
        </form>
        <section className="register-image">
          <Image />
          <p className="register-image__privacy">
            By registering you agree to the <span>terms</span> and
            <span> conditions</span>
          </p>
          <p className="register-image__login">
            Already have an account? <span>Login</span>
          </p>
        </section>
      </div>
    </div>
  )
}

export default RegisterPersonal
