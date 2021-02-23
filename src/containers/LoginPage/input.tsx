import React from 'react';
import {useField} from 'react-final-form';


export function Input(props: any) {
  const {
    input,
    meta: {error, touched, submitError},
  } = useField(props.name, {
    initialValue: props.initialValue,
    validate: props.validate,
  });

  const inputProps = {
    ...props,
    error: touched && error && true,
    ...input,
  };

  return (
    <>
      <input className="login-form__input" {...inputProps} />
    </>
  );
}
