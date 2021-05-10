import { takeLatest, call, put } from 'redux-saga/effects';

import api from '../../../services/api';

import { CarregarTorneios } from './actions';


import Reactotron from 'reactotron-react-js';

export function* SearchTorneios({ payload }) {
  try {

    const { jogoId } = payload;

    const url_path = "torneios?jogoId=" + jogoId

    const response = yield call(api.get, url_path);
    const data = response.data;
    Reactotron.log(data)
    yield put(CarregarTorneios(data));
  } catch (error) {
    Reactotron.log("FALHA AO BUSCAR TORNEIOS")
    // yield put(signFailure());
  }
}

export function* torneioSagas() {
  yield takeLatest('@auth/SEARCH_TORNEIOS', SearchTorneios);
}