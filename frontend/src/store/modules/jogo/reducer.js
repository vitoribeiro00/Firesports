import produce from 'immer';

const INITIAL_STATE = {
  jogos: []
};


export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SEARCH_JOGOS': {
        break;
      }
      case '@auth/CARREGAR_JOGOS': {
        draft.jogos = action.payload.jogos;
        break;
      }
      default:
    }
  });
}
