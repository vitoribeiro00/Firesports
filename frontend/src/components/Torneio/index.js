import React from 'react';

import { Link } from 'react-router-dom';

import './styles.css';


class Torneio extends React.Component {

    render() {
        return (
            <div className="conteudoTorneio">
                <img className="ImagemJogo" src={"/images/sova-valorant.jpg"} />
                <div className="textoTorneio">
                    <p>{this.props.nome}</p>
                    <p className="textoTitulo">Título</p>
                    <p>Pessoas Jogando: 20</p>
                    <p>Torneio Nº: 1</p>
                </div>

            </div>
        )
    }
}

export default Torneio;