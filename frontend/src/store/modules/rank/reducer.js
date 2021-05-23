import produce from 'immer';

const INITIAL_STATE = {
  rank: []
};


export default function rank(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SEARCH_RANK': {
        break;
      }
      case '@auth/CARREGAR_RANK': {
        draft.rank = action.payload.rank;
        break;
      }
      default:
    }
  });
}
