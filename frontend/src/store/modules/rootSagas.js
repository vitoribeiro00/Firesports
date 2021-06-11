
import { all } from 'redux-saga/effects';

import { authSagas } from './auth/sagas';
import { jogoSagas } from './jogo/sagas';
import { torneioSagas } from './torneio/sagas';
import { timeSagas } from './time/sagas';
import { rankSagas } from './rank/sagas';

// const rootSaga = function* rootSaga() {
//   yield all([
//     authSagas(),
//     jogoSagas(),
//     torneioSagas(),
//     timeSagas(),
//     rankSagas(),
//   ]);
// };

export default function* rootSaga() {
  return yield all([authSagas(), jogoSagas(), torneioSagas(), timeSagas(), rankSagas()]);
}