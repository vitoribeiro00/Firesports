import React, { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { AbrirModalTorneio, FecharModalTorneioSenha, SearchPartidasTorneio } from '../../store/modules/torneio/actions';

import { Link } from 'react-router-dom';
import Reactotron from 'reactotron-react-js';
import './styles.css';

export default function Torneio(props) {
    const dispatch = useDispatch();
    const nome = props.nome;
    const torneioid = props.torneioid;
    const senha = props.senha;
    const sala_com_senha = props.sala_com_senha;
    const [inputSenha, setInputSenha] = useState("")
    const [textoSalaSenha, setTextoSalaSenha] = useState("conteudoSenhaTorneio hidden")

    const openModal = () => {
        if (sala_com_senha) {
            setTextoSalaSenha("conteudoSenhaTorneio")
        }
        else {
            dispatch(SearchPartidasTorneio(torneioid))
            dispatch(AbrirModalTorneio(torneioid))
        }
    }
    const validarSenha = () => {
        if (inputSenha === senha) {
            setTextoSalaSenha("conteudoSenhaTorneio hidden")
            dispatch(SearchPartidasTorneio(torneioid))
            dispatch(AbrirModalTorneio(torneioid))
        } else {
            alert("Senha inválida")
        }
    }
    const closeModal = () => {
        dispatch(FecharModalTorneioSenha())
    }
    return (
        <>
            <div className={textoSalaSenha} >
                <div className="fundoModalTorneioSenha">
                    <div className="modalModalTorneioSenha">
                        <div className="modalHeaderModalTorneioSenha">
                            <p className="torneioSenha">Insira a senha do {props.nome}:</p>
                            <input type="password" name="password" onChange={(event) => { setInputSenha(event.target.value) }} />
                            <button className="botaoSenha" onClick={validarSenha}>Entrar</button>
                            <div className="fecharModalTorneio" onClick={closeModal}>
                                X
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="conteudoTorneio" onClick={openModal}>
                <img className="ImagemJogo" src={"/images/sova-valorant.jpg"} />
                <div className="textoTorneio">
                    <p className="textoTitulo">{props.nome}</p>
                    <p>{props.descricao}</p>
                    <p>Quantidade por Equipe:{props.qtd_por_equipe}</p>
                    <p>Quantidade de Equipe:{props.qtd_equipe}</p>
                    <p>Data Criação:{props.data_criacao}</p>
                </div>
            </div>
        </>
    );
}