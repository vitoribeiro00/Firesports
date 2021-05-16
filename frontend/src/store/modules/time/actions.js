export function buscarTime(usuarioid) {
    return {
      type: '@auth/BUSCAR_TIME',
      payload: { usuarioid },
    };
}

export function carregarTime(id, nome) {
    return {
      type: '@auth/CARREGAR_TIME',
      payload: { id, nome },
    };
}