import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import { FecharModalCriacaoTorneio, CadastrarTorneio } from '../../store/modules/torneio/actions';

import './styles.css';

export default function ModalCriacaoTorneio() {
    const dispatch = useDispatch();
    let openModalCriacao = useSelector(state => state.torneio.openModalCriacao); 
    let idCadastrarTorneio = useSelector(state => state.torneio.idCadastrarTorneio)
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
        dispatch(CadastrarTorneio(jogoid, nome, descricao, checkSalaPrivada, senha, qtdEquipes, qtdJogadores));
        alert("Cadastrado com sucesso!");
        setNome("");
        setDescricao("");
        setCheckSalaPrivada(false);
        setSenha("");
        setQtdEquipes(0);
        setQtdJogadores(0);
        closeModalCriarTorneio();
    }

    
    useEffect(()=> {
        if(idCadastrarTorneio  > 0){
            console.log("Cadastrou com sucesso!");
        }else if(idCadastrarTorneio === 0){
            console.log("FALHA AO CADASTRAR");
        }
    }, [idCadastrarTorneio])

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
                            <input type="text"  id="inputCadastrarTorneio" value={nome} onChange={(event) => { setNome(event.target.value) }} />
                            <br />
                            <label for="descricao" id="labelCadastrarTorneio">Descrição:</label>
                            <input type="text" id="inputCadastrarTorneio"  value={descricao} onChange={(event) => { setDescricao(event.target.value) }}/>
                            <br />
                            <label for="sala_privada" id="labelCadastrarTorneio">Sala privada: </label>
                            <input type="checkbox" id="inputCheckCadastrarTorneio" defaultChecked={checkSalaPrivada} onChange={(event) => { setCheckSalaPrivada(!checkSalaPrivada) }} />
                            <label for="senha" id="labelCadastrarTorneio" >Senha: </label>
                            <input type="password" id="inputCadastrarTorneio"  value={senha} onChange={(event) => { setSenha(event.target.value) }} />
                            <br />
                            <label for="Quantidade de Equipes" id="labelCadastrarTorneio">Quantidade de Equipes:</label>
                            <input type="number" id="inputQtdCadastrarTorneio" value={qtdEquipes} onChange={(event) => { setQtdEquipes(event.target.value) }}/>
                            <br />
                            <label for="Quatidade de Jogadores" id="labelCadastrarTorneio">Quantidade de Jogadores:</label>
                            <input type="number" id="inputQtdCadastrarTorneio" value={qtdJogadores} onChange={(event) => { setQtdJogadores(event.target.value) }} />
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