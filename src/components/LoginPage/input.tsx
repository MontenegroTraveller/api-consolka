import React from 'react';
import {useField} from 'react-final-form';

interface InputProps {
  type: "text" | "password"
  name: string;
  initialValue?: string;
  className?: string
  placeholder?: string
  validate?: (text: string) => void
}

export function Input(props: InputProps) {
  const {
    input,
  } = useField(props.name, {
    initialValue: props.initialValue,
  });

  const inputProps = {
    ...props,
    ...input
  };

  return (
    <>
      <input className="login-form__input" {...inputProps} />
    </>
  );
}
