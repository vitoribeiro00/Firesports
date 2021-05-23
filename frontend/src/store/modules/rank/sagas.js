import { takeLatest, call, put } from 'redux-saga/effects';

import api from '../../../services/api';

import { CarregarTorneios } from './actions';


import Reactotron from 'reactotron-react-js';

export function* SearchRank() {
  try {

    const response = yield call(api.get,'rank');
    const data = response.data;
    Reactotron.log(data)
    yield put(CarregarRank(data));
  } catch (error) {
    Reactotron.log("FALHA AO BUSCAR RANK")
    // yield put(signFailure());
  }
}

export function* rankSagas() {
  yield takeLatest('@auth/SEARCH_RANK', SearchRank);
}