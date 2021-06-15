import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { AbrirModalTorneio, SearchPartidasTorneio } from '../../store/modules/torneio/actions';

import './styles.css';

export default function Torneio(props) {
    const dispatch = useDispatch();
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
            setInputSenha("")
            dispatch(SearchPartidasTorneio(torneioid))
            dispatch(AbrirModalTorneio(torneioid))
        } else {
            alert("Senha inválida")
            setInputSenha("")
        }
    }

    const closeModalSenha = () => {
        setTextoSalaSenha("conteudoSenhaTorneio hidden")
    }

    return (
        <>
            <div className={textoSalaSenha} >
                <div className="fundoModalTorneioSenha">
                    <div className="modalModalTorneioSenha">
                        <div className="modalHeaderModalTorneioSenha">
                            <div className="fecharModalTorneio" onClick={closeModalSenha}>
                                X
                            </div>
                            <p className="torneioSenha">Insira a senha do {props.nome}:</p>
                            <input type="password" name="password" value={inputSenha} onChange={(event) => { setInputSenha(event.target.value) }} />
                            <button className="botaoSenha" onClick={validarSenha}>Entrar</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="conteudoTorneio" onClick={openModal}>
                <img className="ImagemJogo" src={"/images/sova-valorant.jpg"} alt="Imagem"/>
                <div className="textoTorneio">
                    <p className="textoTitulo">{props.nome}</p>
                    <p>Quantidade por Equipe:{props.qtd_por_equipe}</p>
                    <p>Quantidade de Equipe:{props.qtd_equipe}</p>
                    <p>Data Criação:{props.data_criacao}</p>
                </div>
            </div>
        </>
    );
}