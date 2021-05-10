
import { all } from 'redux-saga/effects';

import { authSagas } from './modules/auth/sagas';
import { jogoSagas } from './modules/jogo/sagas';
import { torneioSagas } from './modules/torneio/sagas';

const root = function* rootSaga() {
  yield all([
    authSagas(),
    jogoSagas(),
    torneioSagas(),
  ]);
};

export default root;