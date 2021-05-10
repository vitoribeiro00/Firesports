export function SearchJogos() {
    return {
      type: '@auth/SEARCH_JOGOS',
    };
}

export function CarregarJogos(jogos) {
  return {
    type: '@auth/CARREGAR_JOGOS',
    payload: { jogos },
  };
}