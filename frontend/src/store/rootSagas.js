
import { all } from 'redux-saga/effects';

import { authSagas } from './modules/auth/sagas';

const root = function* rootSaga() {
  yield all([
    authSagas(),
  ]);
};

export default root;