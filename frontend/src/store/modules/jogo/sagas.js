import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '../../../services/api';

import Reactotron from 'reactotron-react-js';

import { CarregarJogos } from './actions';

export function* SearchJogos() {
  try {

    const response = yield call(api.get, 'jogos');
    const data = response.data;
    yield put(CarregarJogos(data));
  } catch (error) {
    Reactotron.log("FALHA AO BUSCAR JOGOS")
    // yield put(signFailure());
  }
}

export function *jogoSagas() {
  yield all([
    takeLatest('@jogo/SEARCH_JOGOS', SearchJogos),
  ]);
}