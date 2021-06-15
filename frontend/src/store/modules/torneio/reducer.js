import produce from 'immer';

const INITIAL_STATE = {
  torneios: [],
  
  partidasTorneio: [],
  
  openModal: false,
  
  openModalCriacao: false,
  
  openModalTime: false,
  
  clickedTorneioId: 0,
  
  idCadastrarTorneio: -1,

  failAddTime: false,
  sucessAddTime: false,
};


export default function torneio(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@torneio/SEARCH_TORNEIOS': {
        break;
      }
      case '@torneio/SEARCH_PARTIDAS_TORNEIO': {
        break;
      }
      case '@torneio/CARREGAR_TORNEIOS': {
        draft.torneios = action.payload.torneios;
        break;
      }
      case '@torneio/CARREGAR_PARTIDAS_TORNEIO': {
        draft.partidasTorneio = action.payload.partidasTorneio;
        break;
      }
      case '@torneio/ABRIR_MODAL_TORNEIO': {
        draft.openModal = true;
        draft.clickedTorneioId = action.payload.torneioid;
        break;
      }
      case '@torneio/FECHAR_MODAL_TORNEIO': {
        draft.openModal = false;
        draft.clickedTorneioId = 0;
        break;
      }
      
      case '@torneio/ABRIR_MODAL_CRIACAO_TORNEIO': {
        draft.openModalCriacao = true;
        break;
      }

      case '@torneio/FECHAR_MODAL_CRIACAO_TORNEIO': {
        draft.openModalCriacao = false;
        break;
      }

      case '@torneio/ABRIR_MODAL_TIME_TORNEIO': {
        draft.openModalTime = true;
        break;
      }

      case '@torneio/FECHAR_MODAL_TIME_TORNEIO': {
        draft.openModalTime = false;
        break;
      }

      case '@torneio/CADASTRAR_TORNEIO': {
        break;
      }

      case '@torneio/CADASTRAR_ID_TORNEIO': {
        draft.idCadastrarTorneio = action.payload.idCadastrarTorneio;
        break;
      }

      case '@torneio/FALHA_ADICIONAR_TIME_TORNEIO': {
        draft.failAddTime = true;
        break;
      }

      case '@torneio/SUCESSO_ADICIONAR_TIME_TORNEIO': {
        draft.sucessAddTime = true;
        break;
      }

      case '@torneio/ADICIONAR_TIME_AO_TORNEIO': {
        break;
      }

      case '@torneio/LIMPAR_CAMPOS_TIME_TORNEIO': {
        draft.failAddTime =  false;
        draft.sucessAddTime = false;
        break;
      }

      default:
    }
  });
}
