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
                    </Link>
                    <div className="textoJogo">
                    <p className="jogoNome">{this.props.nome}</p>
                    <div className="jogoDescricao">
                        <p>{this.props.descricao}</p>
                     </div>
                        <p>{this.props.genero}</p>
                   
                    </div>
            </div>
        )
    }
}

export default Jogo;