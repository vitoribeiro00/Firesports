import { takeLatest, call, put } from 'redux-saga/effects';

import api from '../../../services/api';

import { carregarTime } from './actions';

import Reactotron from 'reactotron-react-js';

export function* buscarTime({ payload }) {
  try {
    const { usuarioId } = payload;

    const url_path = "time?usuarioId=" + usuarioId

    const response = yield call(api.get, url_path);

    Reactotron.log(response)
    const data = response.data;
    yield put(carregarTime(data));
  } catch (error) {
    // passs
  }
}

export function* timeSagas() {
  yield takeLatest('@auth/BUSCAR_TIME', buscarTime);
}