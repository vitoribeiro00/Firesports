import React from 'react';
import { useDispatch } from "react-redux";
import { AbrirModalTorneio } from '../../store/modules/torneio/actions';

import { Link } from 'react-router-dom';

import './styles.css';

export default function Torneio(props) {
    const dispatch = useDispatch();
    const nome = props.nome;
    const torneioid = props.torneioid;

    const openModal = () => {
        console.log("Puta que pariu: " + nome)
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