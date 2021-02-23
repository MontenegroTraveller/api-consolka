import React from 'react';
import {Form, Field} from 'react-final-form';
import TextInput from './TextInput';

interface Values {
  login: string;
  sublogin?: string;
  password: string;
}

const onSubmit = (values: Values) => {
  console.log(JSON.stringify(values, undefined, 2));
};

const LoginPage: React.FC = () => (
  <div className="wrapper">
    <img className="logo" src="/icons/logo.svg" alt="logo" />
    <Form
      onSubmit={onSubmit}
      render={({handleSubmit, form, submitting, pristine, values}) => (
        <form onSubmit={handleSubmit} className="login-form">
          <h1 className="login-form__h1">API-консолька</h1>
          <div className="login-form__element-block">
            <div className="login-form__label-block">
              <label className="login-form__label">Логин</label>
            </div>

            <Field<string> className="login-form__input" name="login" component={TextInput} placeholder="iamyourlogin@domain.xyz" />
          </div>
          <div className="login-form__element-block">
            <div className="login-form__label-block">
              <label className="login-form__label">Сублогин</label>
              <label className="login-form__label__optional">Опционально</label>
            </div>
            <Field<string> className="login-form__input" name="subLogin" component={TextInput} placeholder="sublogin-could-be-here" />
          </div>
          <div className="login-form__element-block">
            <div className="login-form__label-block">
              <label className="login-form__label">Пароль</label>
            </div>
            <Field<string> className="login-form__input" name="password" component={TextInput} />
          </div>
          <div>
            <button className="buttons" type="submit" disabled={submitting || pristine}>
              Войти
            </button>
          </div>
        </form>
      )}
    />
    <p className="login-form__link">@link-to-your-github</p>
  </div>
);

export default LoginPage;
