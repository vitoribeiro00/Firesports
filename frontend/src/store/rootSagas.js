
import { all } from 'redux-saga/effects';

import { authSagas } from './modules/auth/sagas';
import { jogoSagas } from './modules/jogo/sagas';

const root = function* rootSaga() {
  yield all([
    authSagas(),
    jogoSagas(),
  ]);
};

export default root;