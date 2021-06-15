import produce from 'immer';

const INITIAL_STATE = {
  jogos: []
};


export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@jogo/SEARCH_JOGOS': {
        break;
      }
      case '@jogo/CARREGAR_JOGOS': {
        draft.jogos = action.payload.jogos;
        break;
      }
      default:
    }
  });
}
