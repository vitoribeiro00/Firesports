export function buscarTime(usuarioid) {
    return {
      type: '@time/BUSCAR_TIME',
      payload: { usuarioid },
    };
}

export function carregarTime(time) {
    return {
      type: '@time/CARREGAR_TIME',
      payload: { time },
    };
}