import {combineReducers} from "redux";

import auth from "./modules/auth/reducer";
import jogo from "./modules/jogo/reducer";

const rootReducer = combineReducers({
    auth,
    jogo,
});

export default rootReducer;