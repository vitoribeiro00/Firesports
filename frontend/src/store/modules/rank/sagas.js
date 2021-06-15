import {
  all, call, takeLatest, put,
} from 'redux-saga/effects';

import api from '../../../services/api';

import Reactotron from 'reactotron-react-js';

import { CarregarRank } from './actions';

export function* SearchRank() {
  try {
    const response = yield call(api.get,'rank');
    const data = response.data;
    yield put(CarregarRank(data));
  } catch (error) {
    Reactotron.log("FALHA AO BUSCAR RANK")
    // yield put(signFailure());
  }
}

export function *rankSagas() {
  yield all([
    takeLatest('@rank/SEARCH_RANK', SearchRank),
  ]);
}