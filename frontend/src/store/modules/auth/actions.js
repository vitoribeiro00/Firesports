export function signInRequest(usuario, senha) {
    return {
      type: '@auth/SIGN_IN_REQUEST',
      payload: { usuario, senha },
    };
  }
  
export function signInSuccess(id, nome, sobrenome, dataNasc, usuario, email) {
    return {
      type: '@auth/SIGN_IN_SUCCESS',
      payload: { id, nome, sobrenome, dataNasc, usuario, email },
    };
  }
  
export function signFailure() {
  return {
    type: '@auth/SIGN_FAILURE',
  };
}

export function signLoggout(){
  return {
    type: '@auth/SIGN_LOGGOUT',
  };
}

export function updateUser(usuario){
  return {
    type: '@auth/ATUALIZAR_USUARIO',
    payload: {usuario}
  };
}

export function updateUserSuccess(){
  return {
    type: '@auth/ATUALIZAR_USUARIO_SUCCESS',
  };
}