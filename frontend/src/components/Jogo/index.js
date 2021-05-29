import React from 'react';

import { Link } from 'react-router-dom';

import './styles.css';

class Jogo extends React.Component{    
    
    render() {
        return (
            <div className="conteudoJogo">
                <Link to={"/torneios/" + this.props.idJogo}>
                    <div className="imagemJogo">
                        <img src={"/images/jogos/" + this.props.image} alt="Jogo"/>
                        <div className="camadaImagem"></div>
                    </div>
                    <div className="textoJogo">
                        <p>{this.props.nome}</p>
                        <p>{this.props.descricao}</p>
                        <p>{this.props.genero}</p>
                    </div>
                </Link>
            </div>
        )
    }
}

export default Jogo;