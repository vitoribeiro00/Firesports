
import { all } from 'redux-saga/effects';

import { authSagas } from './modules/auth/sagas';
import { jogoSagas } from './modules/jogo/sagas';
import { torneioSagas } from './modules/torneio/sagas';
import { timeSagas } from './modules/time/sagas';

const root = function* rootSaga() {
  yield all([
    authSagas(),
    jogoSagas(),
    torneioSagas(),
    timeSagas(),
  ]);
};

export default root;