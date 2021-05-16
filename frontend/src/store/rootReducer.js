import {combineReducers} from "redux";

import auth from "./modules/auth/reducer";
import jogo from "./modules/jogo/reducer";
import torneio from './modules/torneio/reducer';
import time from './modules/time/reducer';

const rootReducer = combineReducers({
    auth,
    jogo,
    torneio,
    time,
});

export default rootReducer;