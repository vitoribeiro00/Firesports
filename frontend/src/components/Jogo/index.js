import React from 'react';

import './styles.css';


class Jogo extends React.Component{
    render() {
        return (
            <div className="conteudoJogo">
                <div className="imagemJogo">
                    <img src="/images/jogos/gta5.jpg" width="100%" height="100%" />
                </div>
                <div className="textoJogo">
                    <p>Titulo do jogo</p>
                    <p>100 pessoas jogando</p>
                    <p>20 torneios</p>
                </div>
            </div>
        )
    }
}

export default Jogo;