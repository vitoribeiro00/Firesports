import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { FecharModalCriacaoTorneio } from '../../store/modules/torneio/actions';

import './styles.css';

export default function ModalCriacaoTorneio() {
    const dispatch = useDispatch();
    const openModalCriacao = useSelector(state => state.torneio.openModalCriacao); 

    const closeModal = () => {
        dispatch(FecharModalCriacaoTorneio())
    }


    const closeModalCriarTorneio = () => {
        dispatch(FecharModalCriacaoTorneio())
    }

    return (
        <div className={openModalCriacao ? "conteudoModalCriarTorneio" : "conteudoModalCriarTorneio hidden"}>
            <div className="fundoModalCriarTorneio">
                <div className="modalModalCriarTorneio">
                    <div className="modalHeaderModalCriarTorneio">
                        <div>
                            Jogo: 1
                        </div>
                        <div className="fecharModalCriarTorneio" onClick={closeModalCriarTorneio}>
                            X
                        </div>
                    </div>
                    <div className="conteudoModalPreenchimentoCriarTorneio">
                        <form>
                            <label for="nome" id="labelCadastrarTorneio">Nome:</label>
                            <input type="text"  id="inputCadastrarTorneio"/>
                            <label for="descricao" id="labelCadastrarTorneio">Descrição:</label>
                            <input type="text" id="inputCadastrarTorneio"/>
                            <label for="sala_privada" id="labelCadastrarTorneio">Sala privada: </label>
                            <input type="checkbox" id="inputCadastrarTorneio"/>
                            <br />
                            <label for="senha" id="labelCadastrarTorneio">Senha: </label>
                            <input type="password" id="inputCadastrarTorneio"/>
                            <label for="Quantidade de Equipes" id="labelCadastrarTorneio">Quantidade de Equipes:</label>
                            <input type="number" id="inputCadastrarTorneio" />
                            <br />
                            <label for="Quatidade de Jogadores" id="labelCadastrarTorneio">Quantidade de Jogadores:</label>
                            <input type="number" id="inputCadastrarTorneio" />
                            <br />
                            <br />
                            <button type="submit">Cadastrar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}