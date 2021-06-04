import produce from 'immer';

const INITIAL_STATE = {
  id: -1,
  nome: "",
  sobrenome: "",
  data_nasc: "",
  usuario: "",
  email: ""
};


export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN_SUCCESS': {
        draft.id = action.payload.id;
        draft.nome = action.payload.nome;
        draft.sobrenome = action.payload.sobrenome;
        draft.data_nasc = action.payload.data_nasc;
        draft.usuario = action.payload.usuario;
        draft.email = action.payload.email;
        break;
      }
      case '@auth/SIGN_IN_REQUEST': {
        break;
      }
      case '@auth/SIGN_FAILURE': {
        break;
      }
      case '@auth/SIGN_LOGGOUT': {
        draft.id = -1;
        draft.nome = "";
        draft.sobrenome = "";
        draft.data_nasc = "";
        draft.usuario = "";
        draft.email = "";
        break;
      }
      default:
    }
  });
}
