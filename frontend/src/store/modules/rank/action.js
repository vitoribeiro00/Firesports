export function SearchRank() {
    return {
      type: '@auth/SEARCH_RANK',
    };
}

export function CarregarRank(rank) {
  return {
    type: '@auth/CARREGAR_RANK',
    payload: { rank },
  };
}