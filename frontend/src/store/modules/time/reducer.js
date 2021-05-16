import produce from 'immer';

const INITIAL_STATE = {
  id: 0,
  nome: ""
};


export default function time(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/BUSCAR_TIME': {
        break;
      }

      case '@auth/CARREGAR_TIME': {
        draft.id = action.payload.id;
        draft.nome = action.payload.nome;
      }
      default:
    }
  });
}
