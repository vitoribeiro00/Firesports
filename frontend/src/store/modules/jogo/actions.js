export function SearchJogos() {
    return {
      type: '@jogo/SEARCH_JOGOS',
    };
}

export function CarregarJogos(jogos) {
  return {
    type: '@jogo/CARREGAR_JOGOS',
    payload: { jogos },
  };
}