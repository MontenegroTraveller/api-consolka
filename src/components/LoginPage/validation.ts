export function validateLogin(login: string) {
  const regEmail = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
  const regLogin = /^[a-z0-9_]{3,}$/;
  if (login) {
    if (regEmail.test(login) || regLogin.test(login)) {
      return console.log('Login is correct');
    }
    return console.log('Login is not correct');
  }
}

export function validatePassword(password: string) {
  const regPassword = /^[\w~'`!@#№?$%^&*()=+<>|/\\.,:;[\]{} \x22-]{8,}$/;
  if (regPassword.test(password)) {
    return console.log('Password is correct');
  }
  return console.log('Password is not correct');
}
