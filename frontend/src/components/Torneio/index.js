import React from 'react';

import { Link } from 'react-router-dom';

import './styles.css';


class Torneio extends React.Component{    
    
    render() {
        return (
            <div className="conteudoTorneio">
                <div className="textoTorneio">
                    <p>{this.props.nome}</p>
                    <p>100 pessoas jogando</p>
                    <p>20 torneios</p>
                </div>
            </div>
        )
    }
}

export default Torneio;