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

export function FecharModalTorneioSenha() {
  return {
    type: '@torneio/FECHAR_MODAL_TORNEIO_SENHA',
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

export function CadastrarTorneio(jogoid, nome, descricao, checkSalaPrivada, senha, qtdEquipes, qtdJogadores){
  return {
    type: '@torneio/CADASTRAR_TORNEIO',
    payload: {jogoid, nome, descricao, checkSalaPrivada, senha, qtdEquipes, qtdJogadores},
  };
}

export function CadastrarIdTorneio(idCadastrarTorneio){
  return {
    type: '@torneio/CADASTRAR_ID_TORNEIO',
    payload: {idCadastrarTorneio}
  };
}

export function AbrirModalTimeTorneio(){
  return {
    type: '@torneio/ABRIR_MODAL_TIME_TORNEIO',
  };
}

export function FecharModalTimeTorneio(){
  return {
    type: '@torneio/FECHAR_MODAL_TIME_TORNEIO',
  };
}

export function AdicionarTimeTorneio(usuarioid, torneioid){
  return {
    type: '@torneio/ADICIONAR_TIME_AO_TORNEIO',
    payload: {usuarioid, torneioid}
  };
}