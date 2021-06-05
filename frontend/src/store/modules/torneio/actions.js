export function SearchTorneios(jogoId) {
    return {
      type: '@torneio/SEARCH_TORNEIOS',
      payload: { jogoId },
    };
}

export function SearchPartidasTorneio(torneioid) {
  return {
    type: '@torneio/SEARCH_PARTIDAS_TORNEIO',
    payload: { torneioid }
  };
}

export function CarregarTorneios(torneios) {
  return {
    type: '@torneio/CARREGAR_TORNEIOS',
    payload: { torneios },
  };
}

export function CarregarPartidasTorneio(partidasTorneio) {
  return {
    type: '@torneio/CARREGAR_PARTIDAS_TORNEIO',
    payload: {partidasTorneio}
  };
}

export function AbrirModalTorneio(torneioid) {
  return {
    type: '@torneio/ABRIR_MODAL_TORNEIO',
    payload: {torneioid}
  };
}

export function FecharModalTorneio() {
  return {
    type: '@torneio/FECHAR_MODAL_TORNEIO',
  };
}

export function AbrirModalCriacaoTorneio(){
  return {
    type: '@torneio/ABRIR_MODAL_CRIACAO_TORNEIO',
  };
}

export function FecharModalCriacaoTorneio(){
  return {
    type: '@torneio/FECHAR_MODAL_CRIACAO_TORNEIO',
  };
}