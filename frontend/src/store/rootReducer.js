import {combineReducers} from "redux";

import auth from "./modules/auth/reducer";
import jogo from "./modules/jogo/reducer";
import torneio from './modules/torneio/reducer';
import time from './modules/time/reducer';
import rank from './modules/rank/reducer';

const rootReducer = combineReducers({
    auth,
    jogo,
    torneio,
    time,
    rank,
});

export default rootReducer;