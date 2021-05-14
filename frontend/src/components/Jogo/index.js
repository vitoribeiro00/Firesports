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
                    </div>
                    <div className="textoJogo">
                        <p>{this.props.nome}</p>
                        <p>100 pessoas jogando</p>
                        <p>20 torneios</p>
                    </div>
                </Link>
            </div>
        )
    }
}

export default Jogo;