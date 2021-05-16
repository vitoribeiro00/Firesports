export function signInRequest(usuario, senha) {
    return {
      type: '@auth/SIGN_IN_REQUEST',
      payload: { usuario, senha },
    };
  }
  
export function signInSuccess(id, nome, sobrenome, data_Nasc, usuario, email) {
    return {
      type: '@auth/SIGN_IN_SUCCESS',
      payload: { id, nome, sobrenome, data_Nasc, usuario, email },
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