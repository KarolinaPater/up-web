export function validEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  // return !re.test(email);
  if (!re.test(email)) {
    return 'Nieprawidłowy format email';
  } else if (!email.includes('@edu.pl')) {
    return 'Tylko dla domeny @edu.pl';
  }
  return null;
}

export function validPassword(password) {
  const valid = password.length > 5 && password.length < 12;
  if (!valid) {
    return 'Nieprawidłowe hasło';
  }
  return null;
}

export function validName(name) {
  if (name.length === 0 || !name) {
    return 'Pole wymagane';
  }
  if (name.length < 2) {
    return 'Minimalna ilość znaków 2';
  }
  if (name.length > 20) {
    return 'Maksymalna ilość znaków 20';
  }
  return null;
}

export function validRegisterPassword(password) {
  if (password.length === 0 || !password) {
    return 'Pole wymagane';
  }
  if (password.length < 8) {
    return 'Minimalna ilość znaków 8';
  }
  if (password.length > 20) {
    return 'Maksymalna ilość znaków 20';
  }
  if (!password.match(/[0-9]/)) {
    return 'Haslo musi zawierac 1 cyfre';
  }
  return null;
}

export function validConfirmPassword(password, confirm_password) {
  if (confirm_password.length === 0 || !confirm_password) {
    return 'Pole wymagane';
  }
  if (password !== confirm_password )
  {
    return 'Hasła różnią się od siebie';
  }
  return null;
}
