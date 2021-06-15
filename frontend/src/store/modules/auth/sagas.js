import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '../../../services/api';

import { signInSuccess, signFailure } from './actions';

import Reactotron from 'reactotron-react-js';

export function* signIn({ payload }) {
  try {
    const { usuario, senha } = payload;
    const params = new URLSearchParams()
    params.append("usuario", usuario)
    params.append("senha", senha)

    const options = {
      headers: { 'content-type': 'application/x-www-form-urlencoded' }
    }
    const response = yield call(api.post, 'entrar', params, options);

    if(response.data){
        const { Id, Nome, Sobrenome, Data_Nasc, Usuario, Email } = response.data;
        yield put(signInSuccess(Id, Nome, Sobrenome, Data_Nasc, Usuario, Email));
        localStorage.setItem("userLogged", Usuario);
    }
  } catch (error) {
    yield put(signFailure());
  }
}

export function* updateUser( { payload }){
  try{
    const {usuario} = payload;

    const params = new URLSearchParams()
    
    params.append("id", usuario.id)
    params.append("nome", usuario.nome)
    params.append("sobrenome", usuario.sobrenome)
    params.append("dataNasc", usuario.dataNasc)
    params.append("usuario", usuario.usuario)
    params.append("email", usuario.email)

    const options = {
      headers: { 
        'Content-Type': 'application/x-www-form-urlencoded',
      }
    }

    const response = yield call(api.put, 'usuario', params, options);

    Reactotron.log(response)
  }catch(error){
    Reactotron.log(error)
  }
}

export function *authSagas() {
  yield all([
    takeLatest('@auth/SIGN_IN_REQUEST', signIn),
    takeLatest('@auth/ATUALIZAR_USUARIO', updateUser),
  ]);
}