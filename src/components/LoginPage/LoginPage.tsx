import React, {useEffect, useState} from 'react';
import {withRouter} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {History} from 'history';

import {Form} from './form';
import {Input} from './input';
import {authenticate} from '../../store/actions/auth';
import {validateLogin, validatePassword} from './validation';

import loader from "./loader.svg"

interface LoginPageProps {
  history: History;
}

interface FormCredentials {
  login: string;
  sublogin: string;
  password: string;
}

interface CredentialVerification {
  currentLogin?: boolean;
  currentPassword?: boolean;
}

const LoginPage: React.FC<LoginPageProps> = (props) => {

  const initialState = {currentLogin: true, currentPassword: true};
  const [isCorrectLoginCredentials, setIsCorrectLoginCredentials] = useState<CredentialVerification>(initialState);

  const {history} = props;
  const dispatch = useDispatch();
  const loading = useSelector((state: any) => state.auth.loading);
  const isLoggedIn = useSelector((state: any) => !!state.auth.sessionKey?.length);

  console.log('loading', loading);

  useEffect(() => {
    if (isLoggedIn) {
      history.push('/console');
    }
  }, [isLoggedIn]);


  const onSubmit = (values: FormCredentials) => {

    if (values.login) {
      const isLoginCorrect = validateLogin(values.login);
      if (isLoginCorrect) {
        setIsCorrectLoginCredentials((prev) => ({...prev, currentLogin: true}));
      } else {
        setIsCorrectLoginCredentials((prev) => ({...prev, currentLogin: false}));
      }
    }

    if (values.password) {
      const isPasswordCorrect = validatePassword(values.password);
      if (isPasswordCorrect) {
        setIsCorrectLoginCredentials((prev) => ({...prev, currentPassword: true}));
      } else {
        setIsCorrectLoginCredentials((prev) => ({...prev, currentPassword: false}));
      }
    }

    if (!values.login && !values.password) {
      setIsCorrectLoginCredentials((prev) => ({...prev, currentLogin: false, currentPassword: false}));
    }
    try {
      if (values.login && values.password && isCorrectLoginCredentials.currentLogin && isCorrectLoginCredentials.currentPassword) {
        dispatch(authenticate(values));
      }
    } catch(e) {
      console.log(e);
    }
  };

  return (
    <div className="wrapper">
      <img className="logo" src="/icons/logo.svg" alt="logo" />
      <Form onSubmit={onSubmit}>
        {(props: any) => (
          <>
            <div className="login-form__element-block">
              <div className="login-form__label-block">
                <label className={isCorrectLoginCredentials.currentLogin ? 'login-form__label' : 'login-form__label__no-valid'}>
                  Логин
                </label>
              </div>
              <Input
                type="text"
                className={isCorrectLoginCredentials.currentLogin ? 'login-form__input' : 'login-form__input login-form__input__no-valid'}
                name="login"
                placeholder="iamyourlogin@domain.xyz"
              />
            </div>
            <div className="login-form__element-block">
              <div className="login-form__label-block">
                <label className="login-form__label">Сублогин</label>
                <label className="login-form__label__optional">Опционально</label>
              </div>
              <Input type="text" className="login-form__input" name="sublogin" placeholder="sublogin-could-be-here" />
            </div>
            <div className="login-form__element-block">
              <div className="login-form__label-block">
                <label className={isCorrectLoginCredentials.currentPassword ? 'login-form__label' : 'login-form__label__no-valid'}>
                  Пароль
                </label>
              </div>
              <Input
                type="password"
                className={
                  isCorrectLoginCredentials.currentPassword
                    ? 'login-form__input login-form__input__placeholder-style'
                    : 'login-form__input login-form__input__no-valid'
                }
                name="password"
                placeholder="●●●●●●●●●●●●"
              />
            </div>
            <div>
              <button
                type="submit"
                className={props.submitting || props.pristine ? 'buttons buttons__login-form__disabled' : 'buttons'}
                disabled={props.submitting || props.pristine}
              >
                {loading ? <img src={loader} alt="loader-logo" /> : 'Войти'}
              </button>
            </div>
          </>
        )}
      </Form>
      <a className="login-form__link" href="https://github.com/YuryKurkin">
        Yury's GitHub account
      </a>
    </div>
  );
};

export default withRouter(LoginPage);
