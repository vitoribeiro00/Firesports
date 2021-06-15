import {combineReducers} from "redux";

import auth from "./auth/reducer";
import jogo from "./jogo/reducer";
import torneio from './torneio/reducer';
import time from './time/reducer';
import rank from './rank/reducer';

 const allReducers = combineReducers({   
    auth,
    jogo,
    torneio,
    time,
    rank,
 });

 export default allReducers;