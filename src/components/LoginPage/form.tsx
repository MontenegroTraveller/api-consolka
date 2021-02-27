import React from 'react';
import {Form as FinalForm} from 'react-final-form';

export function Form(props: any) {
  return (
    <div className="login-form">
      <h1 className="login-form__h1">API-консолька</h1>
      <FinalForm
        onSubmit={props.onSubmit}
        render={(renderProps) => <form onSubmit={renderProps.handleSubmit}>{props.children(renderProps)}</form>}
      />
    </div>
  );
}
