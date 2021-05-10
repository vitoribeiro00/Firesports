import React from "react";

import Header from '../../components/Header';
import Torneio from '../../components/Torneio';

import "../Torneios/styles.css";

import Reactotron from 'reactotron-react-js';

const Torneios = (props) => {
    const query = new URLSearchParams(props.location.search);
    const idJogo = query.get("idJogo")
    const torneios = []

    Reactotron.log(idJogo)
    return (
        <div className="conteudoTorneio">
            <Header />
            <div className="conteudoModalTorneio">
                <div className="conteudoTextoMotivacionalTorneio">
                    <p>Coisas incríveis não acontecem dentro da zona de conforto!</p>
                    <p>Supere seus limites, e fique no topo!</p>
                </div>
                <div className="conteudoTorneio">
                    {torneios.map(torneio => (
                        <Torneio />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Torneios;