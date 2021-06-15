import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '../../../services/api';

import Reactotron from 'reactotron-react-js';

import {  CarregarTorneios, CarregarPartidasTorneio, CadastrarIdTorneio, FalhaAdicionarTimeTorneio, SucessoAdicionarTimeTorneio } from './actions';

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

export function* addTimeToTorneio( { payload } ){
  try {
    const { usuarioid, torneioid, time } = payload;
    const params = new URLSearchParams()
    params.append("usuarioid", usuarioid)
    params.append("torneioid", torneioid)
    params.append("time", time)

    const options = {
        headers: { 'content-type': 'application/x-www-form-urlencoded' }
    }

    const response = yield call(api.post, "addTimeTorneio", params, options )

    const data =  response.data 
    
    if(data.StatusCode <= 0){
      yield put(FalhaAdicionarTimeTorneio());
    }else {
      yield put(SucessoAdicionarTimeTorneio());
    }
  }  catch(error){
    Reactotron.log("FALHA AO BUSCAR addTimeToTorneio: " + error)
  }
}

export function *torneioSagas() {
  yield all([
    takeLatest('@torneio/SEARCH_TORNEIOS', SearchTorneios),
    takeLatest('@torneio/SEARCH_PARTIDAS_TORNEIO', SearchPartidasTorneio),
    takeLatest('@torneio/CADASTRAR_TORNEIO', CadastrarTorneio),
    takeLatest('@torneio/ADICIONAR_TIME_AO_TORNEIO', addTimeToTorneio),
  ]);
}