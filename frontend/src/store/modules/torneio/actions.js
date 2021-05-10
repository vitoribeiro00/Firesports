export function SearchTorneios(jogoId) {
    return {
      type: '@auth/SEARCH_TORNEIOS',
      payload: { jogoId },
    };
}

export function CarregarTorneios(torneios) {
  return {
    type: '@auth/CARREGAR_TORNEIOS',
    payload: { torneios },
  };
}