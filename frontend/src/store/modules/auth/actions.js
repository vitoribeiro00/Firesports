export function signInRequest(usuario, senha) {
    return {
      type: '@auth/SIGN_IN_REQUEST',
      payload: { usuario, senha },
    };
  }
  
export function signInSuccess(statusCode) {
    return {
      type: '@auth/SIGN_IN_SUCCESS',
      payload: { statusCode },
    };
  }
  
export function signFailure() {
  return {
    type: '@auth/SIGN_FAILURE',
  };
}