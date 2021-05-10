import produce from 'immer';

const INITIAL_STATE = {
  torneios: []
};


export default function torneio(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SEARCH_TORNEIOS': {
        break;
      }
      case '@auth/CARREGAR_TORNEIOS': {
        draft.torneios = action.payload.torneios;
        break;
      }
      default:
    }
  });
}
