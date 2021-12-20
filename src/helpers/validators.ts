const checkPasswordRegister = (password: string, confirmPassword: string) => {
  if (password.length === 0) {
    return {
      error: true,
      message: 'Veuillez entrer un mot de passe',
    };
  } else if (!password.match(/[a-z]/)) {
    return {
      error: true,
      message: 'Votre mot de passe doit comporter au moins une minuscule',
    };
  } else if (!password.match(/[A-Z]/)) {
    return {
      error: true,
      message: 'Votre mot de passe doit comporter au moins une majuscule',
    };
  } else if (!password.match(/(\d+)/)) {
    return {
      error: true,
      message: 'Votre mot de passe doit comporter au moins un chiffre',
    };
  } else if (!password.match(/\W+/)) {
    return {
      error: true,
      message:
        'Votre mot de passe doit comporter au moins un caractère spécial',
    };
  } else if (password.length < 8) {
    return {
      error: true,
      message: 'Votre mot de passe doit comporter au moins 8 caractères',
    };
  } else if (confirmPassword.length === 0) {
    return {
      errorConfirm: true,
      messageConfirm: 'Veuillez confirmer le mot de passe',
    };
  } else if (password !== confirmPassword) {
    return {
      errorConfirm: true,
      messageConfirm: 'Les mots de passe ne correspondent pas.',
    };
  } else {
    return {
      error: false,
      message: '',
    };
  }
};

const checkPasswordLogin = (password: string) => {
  if (password.length === 0) {
    return {
      error: true,
      message: '',
    };
  } else if (!password.match(/[a-z]/)) {
    return {
      error: true,
      message: 'Votre mot de passe doit comporter au moins une minuscule',
    };
  } else if (!password.match(/[A-Z]/)) {
    return {
      error: true,
      message: 'Votre mot de passe doit comporter au moins une majuscule',
    };
  } else if (!password.match(/(\d+)/)) {
    return {
      error: true,
      message: 'Votre mot de passe doit comporter au moins un chiffre',
    };
  } else if (!password.match(/\W+/)) {
    return {
      error: true,
      message:
        'Votre mot de passe doit comporter au moins un caractère spécial',
    };
  } else if (password.length < 8) {
    return {
      error: true,
      message: 'Votre mot de passe doit comporter au moins 8 caractères',
    };
  } else {
    return {
      error: false,
      message: '',
    };
  }
};

const checkEmail = (email: string) => {
  if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    return {
      error: true,
      message: 'incorrect email format',
    };
  } else {
    return {
      error: false,
      message: '',
    };
  }
};

export {checkPasswordLogin, checkPasswordRegister, checkEmail};
