import produce from 'immer';

const INITIAL_STATE = {
  torneios: [],
  partidasTorneio: [],
  openModal: false,
  clickedTorneioId: 0,
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
      default:
    }
  });
}
