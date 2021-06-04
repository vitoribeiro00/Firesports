import { takeLatest, call, put } from 'redux-saga/effects';

import api from '../../../services/api';

import { CarregarTorneios, CarregarPartidasTorneio } from './actions';


import Reactotron from 'reactotron-react-js';
import React from 'react';

export function* SearchTorneios({ payload }) {
  try {

    const { jogoId } = payload;

    const url_path = "torneios?jogoId=" + jogoId

    const response = yield call(api.get, url_path);
    const data = response.data;
    yield put(CarregarTorneios(data));
  } catch (error) {
    Reactotron.log("FALHA AO BUSCAR TORNEIOS")
    // yield put(signFailure());
  }
}


export function* SearchPartidasTorneio({payload}) {
  try {
    const { torneioid } = payload;

    const url_path = "torneio_partidas?torneioid=" + torneioid

    const response = yield call(api.get, url_path)

    const data = response.data;

    yield put(CarregarPartidasTorneio(data));

  } catch (error) {
    Reactotron.log("FALHA AO BUSCAR AS PARTIDAS DO TORNEIO")
  }
}

export function* torneioSagas() {
  yield takeLatest('@torneio/SEARCH_TORNEIOS', SearchTorneios);
  yield takeLatest('@torneio/SEARCH_PARTIDAS_TORNEIO', SearchPartidasTorneio);
}