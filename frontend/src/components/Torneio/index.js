import React from 'react';
import { useDispatch } from "react-redux";
import { AbrirModalTorneio, SearchPartidasTorneio } from '../../store/modules/torneio/actions';

import { Link } from 'react-router-dom';
import Reactotron from 'reactotron-react-js';
import './styles.css';

export default function Torneio(props) {
    const dispatch = useDispatch();
    const nome = props.nome;
    const torneioid = props.torneioid;

    const openModal = () => {
        dispatch(SearchPartidasTorneio(torneioid))
        dispatch(AbrirModalTorneio(torneioid))
    }

    return (
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
    );
} 