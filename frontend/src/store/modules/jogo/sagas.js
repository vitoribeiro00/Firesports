import { takeLatest, call, put } from 'redux-saga/effects';

import api from '../../../services/api';

import { CarregarJogos } from './actions';


import Reactotron from 'reactotron-react-js';

export function* SearchJogos() {
  try {

    const response = yield call(api.get, 'jogos');
    const data = response.data;
    Reactotron.log(data)
    yield put(CarregarJogos(data));
  } catch (error) {
    Reactotron.log("FALHA AO BUSCAR JOGOS")
    // yield put(signFailure());
  }
}

export function* jogoSagas() {
  yield takeLatest('@auth/SEARCH_JOGOS', SearchJogos);
}