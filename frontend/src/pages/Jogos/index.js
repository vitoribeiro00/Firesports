import React from "react";

import Header from '../../components/Header';

import "./styles.css";

const Jogos = () => {

    return (
        <div className="conteudoJogos">
            <Header />
            <div className="conteudoModalJogos">
                <div className="conteudoTextoMotivacionalJogos">
                    <p>Coisas incríveis não acontecem dentro da zona de conforto!</p>
                    <p>Supere seus limites, e fique no topo!</p>
                </div>

                <div className="conteudoImagemJogos">
                    <div className="imagemTesteJogo"></div>
                    <div className="imagemTesteJogo"></div>
                    <div className="imagemTesteJogo"></div>
                    <div className="imagemTesteJogo"></div>
                    <div className="imagemTesteJogo"></div>
                    <div className="imagemTesteJogo"></div>
                    <div className="imagemTesteJogo"></div>
                    <div className="imagemTesteJogo"></div>
                    <div className="imagemTesteJogo"></div>
                    <div className="imagemTesteJogo"></div>
                    <div className="imagemTesteJogo"></div>
                    <div className="imagemTesteJogo"></div> 
                </div>
            </div>
        </div>
    )
}


export default Jogos;