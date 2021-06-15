export function SearchRank() {
    return {
      type: '@rank/SEARCH_RANK',
    };
}

export function CarregarRank(rank) {
  return {
    type: '@rank/CARREGAR_RANK',
    payload: { rank },
  };
}