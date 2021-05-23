import produce from 'immer';

const INITIAL_STATE = {
  time: [],
};


export default function time(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/BUSCAR_TIME': {
        break;
      }

      case '@auth/CARREGAR_TIME': {
        draft.time = action.payload.time;
        break;
      }
      default:
    }
  });
}
