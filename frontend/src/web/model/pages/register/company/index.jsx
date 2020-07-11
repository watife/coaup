/* eslint-disable object-curly-newline */
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useToasts } from 'react-toast-notifications'

import Image from '../image'

import '../style.scss'

import { Button, Input, Checkbox } from 'web/components/core'

import authService from 'core/logic/auth/use-cases'

const RegisterCheckbox = [
  {
    name: 'salary',
    label: 'salary',
    value: 'salary'
  },
  {
    name: 'invoicing',
    label: 'invoicing',
    value: 'invoicing'
  }
]

const Register = () => {
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
      const billing_method =
        data.salary && data.invoicing
          ? 'both'
          : data.salary || data.invoicing
      const registerData = { ...data, billing_method }
      const companyRegistered = await authService.registerAuthUser(
        registerData
      )

      addToast(companyRegistered.data.company, {
        appearance: 'success'
      })
      setSubmitted(true)
    } catch (e) {
      // if (e.message === 'create Network Error')
      //   history.push('/network')
      //
      if (e.message === 'company already exists')
        setError('company_name', 'validate', e.message)

      addToast(e.message, { appearance: 'error', autoDismiss: true })
    }
  }

  // @TODO validate billing
  // const validateBilling = _ => {
  //   const values = getValues({ nest: true });

  //   return (
  //     (values.salary || values.invoicing )|| "At least one billing method should be selected"
  //   );
  // };

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
            label="company name"
            name="company_name"
            className="register-input"
            ref={register({ required: `company name is required` })}
            error={errors['company_name']?.message}
          />
          <Input
            type="text"
            label="company address"
            name="company_address"
            className="register-input"
            ref={register({
              required: `company address is required`,
              minLength: 8
            })}
            error={
              (errors['company_address']?.type === 'minLength' &&
                'Company address must be minimum of 8') ||
              errors['company_address']?.message
            }
          />
          <Input
            type="email"
            label="email"
            name="email"
            className="register-input"
            ref={register({ required: `email is required` })}
            error={errors['email']?.message}
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

          <div className="register-billing">
            <p className="register-billing__title">
              Billing Method (Select both if they apply)
            </p>

            <div className="register-billing__checkbox">
              {RegisterCheckbox.map(check => (
                <Checkbox
                  key={check.name}
                  label={check.label}
                  name={check.name}
                  value={check.value}
                  ref={register()}
                />
              ))}
            </div>
          </div>

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

export default Register
