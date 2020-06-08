import React from 'react';
import { Button, Input, Checkbox } from '../../../components';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import Image from './image';

import './style.scss';

// import {createCompany, getCompany} from "../../../../core/company/presentation/redux";
import companyService from '../../../../core/company/use-cases';

const RegisterCheckbox = [
  {
    name: 'salary',
    label: 'salary',
    value: 'salary',
  },
  {
    name: 'invoicing',
    label: 'invoicing',
    value: 'invoicing',
  },
];

const Register = () => {
  const { register, handleSubmit, errors, formState, watch } = useForm({
    mode: 'onChange',
    validateCriteriaMode: 'all',
  });
  const { isSubmitting, isValid } = formState;
  const history = useHistory();

  const onSubmit = async (data) => {
    try {
      console.log('data', data);
      const createUs = await companyService.postCompany(data);
    } catch (e) {
      if (e.message === 'create Network Error') history.push('/network');
    }
  };

  // @TODO validate billing
  // const validateBilling = _ => {
  //   const values = getValues({ nest: true });
  //
  //   return (
  //     (values.salary || values.invoicing )|| "At least one billing method should be selected"
  //   );
  // };

  return (
    <div className="register">
      <header>
        <h1>Sign Up</h1>
        <p className="register-subtitle">Let's get your company started</p>
      </header>
      <div className="register-main">
        <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="text"
            label="company name"
            name="company_name"
            className="register-input"
            ref={register({ required: `company name is required` })}
            error={errors['company_name'] && errors['company_name'].message}
          />
          <Input
            type="text"
            label="company address"
            name="company_address"
            className="register-input"
            ref={register({
              required: `company address is required`,
              minLength: 8,
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
            ref={register({ required: `password is required` })}
            error={errors['email'] && errors['email'].message}
          />
          <Input
            type="password"
            label="password"
            name="password"
            className="register-input"
            ref={register({
              required: `password is required`,
              pattern: /^[a-zA-Z0-9]{3,30}$/,
            })}
            error={
              (errors['password']?.type === 'pattern' &&
                'password is not valid ') ||
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
              validate: (value) =>
                value === watch('password') || "password doesn't match",
            })}
            error={
              errors['password_confirm']?.message
            }
          />

          <div className="register-billing">
            <p className="register-billing__title">
              Billing Method (Select both if they apply)
            </p>

            <div className="register-billing__checkbox">
              {RegisterCheckbox.map((check) => (
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
            disabled={!isValid || isSubmitting}
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
  );
};

export default Register;
