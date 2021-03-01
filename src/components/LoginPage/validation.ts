export function validateLogin(login: string): boolean | void {
  const regEmail = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
  const regLogin = /^[a-z0-9_]{3,}$/;
  if (login) {
    return regEmail.test(login) || regLogin.test(login);
  }
}

export function validatePassword(password: string): boolean | void {
  const regPassword = /^[\w~'`!@#№?$%^&*()=+<>|/\\.,:;[\]{} \x22-]{8,}$/;
  if (password) {
    return regPassword.test(password);
  }
}
