import React from "react";

import Header from '../../components/Header';

import "../Torneios/styles.css";

const Torneios = () => {
    return (
        <div className="conteudoTorneio">
            <Header />
            <div className="conteudoModalTorneio">
                <div className="conteudoTextoMotivacionalTorneio">
                    <p>Coisas incríveis não acontecem dentro da zona de conforto!</p>
                    <p>Supere seus limites, e fique no topo!</p>
                </div>
                <div className="conteudoImagemTorneio">
                    <div className="imagemTesteTorneio"></div>
                    <div className="imagemTesteTorneio"></div>
                    <div className="imagemTesteTorneio"></div>
                    <div className="imagemTesteTorneio"></div>
                    <div className="imagemTesteTorneio"></div>
                    <div className="imagemTesteTorneio"></div>
                    <div className="imagemTesteTorneio"></div>
                    <div className="imagemTesteTorneio"></div>
                    <div className="imagemTesteTorneio"></div>
                    <div className="imagemTesteTorneio"></div>
                    <div className="imagemTesteTorneio"></div>
                    <div className="imagemTesteTorneio"></div> 
                </div>
            </div>
        </div>
    );
}

export default Torneios;