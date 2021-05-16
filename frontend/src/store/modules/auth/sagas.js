import { takeLatest, call, put } from 'redux-saga/effects';

import api from '../../../services/api';

import { signInSuccess, signFailure } from './actions';

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
    const { Id, Nome, Sobrenome, Data_Nasc, Usuario, Email } = response.data;
    yield put(signInSuccess(Id, Nome, Sobrenome, Data_Nasc, Usuario, Email));
  } catch (error) {
    yield put(signFailure());
  }
}

export function* authSagas() {
  yield takeLatest('@auth/SIGN_IN_REQUEST', signIn);
}