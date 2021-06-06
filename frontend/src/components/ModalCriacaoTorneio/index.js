import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import { FecharModalCriacaoTorneio, CadastrarTorneio, LimparSucesso } from '../../store/modules/torneio/actions';

import './styles.css';

export default function ModalCriacaoTorneio() {
    const dispatch = useDispatch();
    const openModalCriacao = useSelector(state => state.torneio.openModalCriacao); 
    const sucessCadastrarTorneio = useSelector(state => state.torneio.sucessCadastrarTorneio)
    const { jogoid } = useParams()
    
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [checkSalaPrivada, setCheckSalaPrivada] = useState(false);
    const [senha, setSenha] = useState('');
    const [qtdEquipes, setQtdEquipes] = useState(0);
    const [qtdJogadores, setQtdJogadores] = useState(0);

    const closeModalCriarTorneio = () => {
        dispatch(FecharModalCriacaoTorneio())
    }

    const cadastrarTorneio = () => {
        dispatch(CadastrarTorneio(jogoid, nome, descricao, checkSalaPrivada, senha, qtdEquipes, qtdJogadores))
    }

    return (
        <div className={openModalCriacao ? "conteudoModalCriarTorneio" : "conteudoModalCriarTorneio hidden"}>
            <div className="fundoModalCriarTorneio">
                <div className="modalModalCriarTorneio">
                    <div className="modalHeaderModalCriarTorneio">
                        <div>
                            Jogo: {jogoid}
                        </div>
                        <div className="fecharModalCriarTorneio" onClick={closeModalCriarTorneio}>
                            X
                        </div>
                    </div>
                    <div className="conteudoModalPreenchimentoCriarTorneio">
                        <form id="formCadastroCriarTorneio">
                            <label for="nome" id="labelCadastrarTorneio">Nome:</label>
                            <input type="text"  id="inputCadastrarTorneio"  onChange={(event) => { setNome(event.target.value) }} />
                            <br />
                            <label for="descricao" id="labelCadastrarTorneio">Descrição:</label>
                            <input type="text" id="inputCadastrarTorneio"  onChange={(event) => { setDescricao(event.target.value) }}/>
                            <br />
                            <label for="sala_privada" id="labelCadastrarTorneio">Sala privada: </label>
                            <input type="checkbox" id="inputCheckCadastrarTorneio" defaultChecked={checkSalaPrivada} onChange={(event) => { setCheckSalaPrivada(!checkSalaPrivada) }} />
                            <label for="senha" id="labelCadastrarTorneio">Senha: </label>
                            <input type="password" id="inputCadastrarTorneio" onChange={(event) => { setSenha(event.target.value) }} />
                            <br />
                            <label for="Quantidade de Equipes" id="labelCadastrarTorneio">Quantidade de Equipes:</label>
                            <input type="number" id="inputQtdCadastrarTorneio" onChange={(event) => { setQtdEquipes(event.target.value) }}/>
                            <br />
                            <label for="Quatidade de Jogadores" id="labelCadastrarTorneio">Quantidade de Jogadores:</label>
                            <input type="number" id="inputQtdCadastrarTorneio" onChange={(event) => { setQtdJogadores(event.target.value) }} />
                            <div id="botaoCadastrarCriarTorneio" onClick={cadastrarTorneio}>
                                <p>Cadastrar</p>
                            </div>

                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
}