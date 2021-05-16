import { takeLatest, call, put } from 'redux-saga/effects';

import api from '../../../services/api';

import { carregarTime } from './actions';

export function* buscarTime({ payload }) {
  try {
    const { usuarioid } = payload;

    const params = new URLSearchParams()
    params.append("usuarioid", usuarioid)

    const options = {
      headers: { 'content-type': 'application/x-www-form-urlencoded' }
    }
    const response = yield call(api.post, 'time', params, options);
    const { Id, Nome } = response.data;
    yield put(carregarTime(Id, Nome));
  } catch (error) {
    // passs
  }
}

export function* timeSagas() {
  yield takeLatest('@auth/BUSCAR_TIME', buscarTime);
}