import React from 'react';
import { useDispatch } from "react-redux";
import { AbrirModalTorneio } from '../../store/modules/torneio/actions';
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
            <div className="textoTorneio">
                <p>100 pessoas jogando</p>
                <p>20 torneios</p>
            </div>
        </div>
    );
}