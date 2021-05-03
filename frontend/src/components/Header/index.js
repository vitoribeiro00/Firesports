import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.css';

class Button extends Component {
    render() {
        return (
            <div className="menu">
                <div className="conteudoMenu">
                    <div className="botaoComunidadeMenu">
                        <button><Link to="/comunidade">Comunidade</Link></button>
                    </div>
                    <div className="botaoJogosMenu">
                        <button><Link to="/jogos">Jogos</Link></button>
                    </div>
                    <div className="botaoEntrarMenu">
                        <button><Link to="/entrar">Entrar</Link></button>
                    </div>
                    <div className="footerMenu">
                        <p>Todos os direitos reservados</p>
                        <p>Firesports@2021</p>
                    </div>
                </div>
            </div>
        )
  }
}

export default Button;