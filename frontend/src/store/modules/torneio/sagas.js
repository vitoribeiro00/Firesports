import { takeLatest, call, put } from 'redux-saga/effects';

import api from '../../../services/api';

import { CarregarTorneios, CarregarPartidasTorneio, CadastrarIdTorneio } from './actions';

import Reactotron from 'reactotron-react-js';

export function* SearchTorneios({ payload }) {
  try {

    const { jogoId } = payload;

    const url_path = "torneios?jogoId=" + jogoId

    const response = yield call(api.get, url_path);
    const data = response.data;
    yield put(CarregarTorneios(data));
  } catch (error) {
    Reactotron.log("FALHA AO BUSCAR TORNEIOS")
    // yield put(signFailure());
  }
}

export function* SearchPartidasTorneio({payload}) {
  try {
    const { torneioid } = payload;

    const url_path = "torneio_partidas?torneioid=" + torneioid

    const response = yield call(api.get, url_path)

    const data = response.data;

    yield put(CarregarPartidasTorneio(data));

  } catch (error) {
    Reactotron.log("FALHA AO BUSCAR AS PARTIDAS DO TORNEIO")
  }
}

export function* CadastrarTorneio({payload}) {
  try {
    const { jogoid, nome, descricao, checkSalaPrivada, senha, qtdEquipes, qtdJogadores } = payload;
    
    const params = new URLSearchParams()
    params.append("jogoid", jogoid)
    params.append("nome", nome)
    params.append("descricao", descricao)
    params.append("sala_com_senha", checkSalaPrivada)
    params.append("senha", senha)
    params.append("qtd_equipe", qtdEquipes)
    params.append("qtd_por_equipe", qtdJogadores)

    const options = {
        headers: { 'content-type': 'application/x-www-form-urlencoded' }
    }

    const response = yield call(api.post, "torneio", params, options )

    const data = response.data;
    if(data.StatusCode > 0){
      yield put(CadastrarIdTorneio(data.StatusCode));
    }

  } catch (error) {
    Reactotron.log("FALHA AO BUSCAR AS PARTIDAS DO TORNEIO")
  }
}


export function* torneioSagas() {
  yield takeLatest('@torneio/SEARCH_TORNEIOS', SearchTorneios);
  yield takeLatest('@torneio/SEARCH_PARTIDAS_TORNEIO', SearchPartidasTorneio);
  yield takeLatest('@torneio/CADASTRAR_TORNEIO', CadastrarTorneio);
}