import produce from 'immer';

const INITIAL_STATE = {
  id: -1,
  nome: "",
  sobrenome: "",
  dataNasc: "",
  senha: "",
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
        draft.dataNasc = action.payload.dataNasc;
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
        draft.dataNasc = "";
        draft.usuario = "";
        draft.email = "";
        break;
      }
      case '@auth/ATUALIZAR_USUARIO': {
        break;
      }
      case '@auth/ATUALIZAR_USUARIO_SUCCESS': {
        break;
      }
      default:
    }
  });
}
