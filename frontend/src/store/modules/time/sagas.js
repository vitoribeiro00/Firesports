import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '../../../services/api';

import { carregarTime } from './actions'

export function* buscarTime({ payload }) {
  try {
    const { usuarioid } = payload;

    if(usuarioid){
      const url_path = "time?usuarioId=" + usuarioid

      const response = yield call(api.get, url_path);
  
      const data = response.data;
      yield put(carregarTime(data));
    }
  } catch (error) {
    // passs
  }
}

export function *timeSagas() {
  yield all([
    takeLatest('@time/BUSCAR_TIME', buscarTime),
  ]);
}