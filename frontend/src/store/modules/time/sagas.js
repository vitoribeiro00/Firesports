import { takeLatest, call, put } from 'redux-saga/effects';

import api from '../../../services/api';

import { carregarTime } from './actions';

import Reactotron from 'reactotron-react-js';

export function* buscarTime({ payload }) {
  try {

    Reactotron.log("Erro -  usuarioid: " + payload)
    const { usuarioid } = payload;
    if(usuarioid){
      const url_path = "time?usuarioId=" + usuarioid

      const response = yield call(api.get, url_path);
  
      Reactotron.log(response)
      const data = response.data;
      yield put(carregarTime(data));
    }
  } catch (error) {
    // passs
  }
}

export function* timeSagas() {
  yield takeLatest('@auth/BUSCAR_TIME', buscarTime);
}