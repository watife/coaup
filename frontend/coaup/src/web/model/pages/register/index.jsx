import React from "react";
import { Button, Input, Checkbox } from "../../../components";
import { useForm, ErrorMessage } from "react-hook-form";
import Image from "./image";

import "./style.scss";

export const Register = () => {
  const { register, handleSubmit, errors, getValues, formState } = useForm({mode: "onChange"});
  const { isSubmitting } = formState;
  const onSubmit = data => console.log(data);

  const RegisterInputs = [
    {
      name: "company_name",
      label: "company name",
      type: "text"
    },
    {
      name: "company_address",
      label: "company address",
      type: "text"
    },
    {
      name: "email",
      label: "email",
      type: "text"
    },
    {
      name: "password",
      label: "password",
      type: "password"
    },
    {
      name: "password_confirm",
      label: "confirm password",
      type: "password"
    },
  ]

  const RegisterCheckbox = [
    {
      name:"salary",
      label: "salary",
      value: "salary",
    },
    {
      name:"invoicing",
      label: "invoicing",
      value: "invoicing"
    }
  ]

  // @TODO validate billing 
  // const validateBilling = _ => {
  //   const values = getValues({ nest: true });
  //
  //   return (
  //     (values.salary || values.invoicing )|| "At least one billing method should be selected"
  //   );
  // };

  console.log(errors)

  return (
    <div className="register">
      <header>
        <h1>Sign Up</h1>
        <p className="register-subtitle">Let's get your company started</p>
      </header>
      <div className="register-main">
        <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
          {RegisterInputs.map(inp => (
            <Input
              key={inp.name}
              type={inp.type}
              name={inp.name}
              label={inp.label}
              className="register-input"
              ref={register({ required: `${inp.label} is required` })}
              error={errors[inp.name] && errors[inp.name].message}
            />
          ))}

          <div className="register-billing">
            <p className="register-billing__title">
              Billing Method (Select both if they apply)
            </p>

            <div className="register-billing__checkbox">
              {RegisterCheckbox.map(check => (
                <Checkbox
                  label={check.label}
                  name={check.name}
                  value={check.value}
                  ref={register()}
                />
              ))}
            </div>
          </div>

          <Button type="submit" className="register-btn" disabled={!formState.isValid || isSubmitting}>
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
