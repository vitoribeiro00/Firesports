export function buscarTime(usuarioid) {
    return {
      type: '@auth/BUSCAR_TIME',
      payload: { usuarioid },
    };
}

export function carregarTime(time) {
    return {
      type: '@auth/CARREGAR_TIME',
      payload: { time },
    };
}