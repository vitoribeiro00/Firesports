import produce from 'immer';

const INITIAL_STATE = {
  rank: []
};


export default function rank(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@rank/SEARCH_RANK': {
        break;
      }
      case '@rank/CARREGAR_RANK': {
        draft.rank = action.payload.rank;
        break;
      }
      default:
    }
  });
}
