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
                <p className="textoTitulo">Título</p>
                <p>100 pessoas jogando</p>
                <p>20 torneios</p>
            </div>
        </div>
    );
} 