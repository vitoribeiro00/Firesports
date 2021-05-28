export function SearchTorneios(jogoId) {
    return {
      type: '@torneio/SEARCH_TORNEIOS',
      payload: { jogoId },
    };
}

export function CarregarTorneios(torneios) {
  return {
    type: '@torneio/CARREGAR_TORNEIOS',
    payload: { torneios },
  };
}

export function AbrirModalTorneio(torneioid) {
  return {
    type: '@torneio/ABRIR_MODAL_TORNEIO',
    payload: {torneioid}
  }
}

export function FecharModalTorneio() {
  return {
    type: '@torneio/FECHAR_MODAL_TORNEIO',
  }
}