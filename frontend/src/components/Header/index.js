import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';



class Header extends React.Component {
    render() {
        return (
            <div className="menu">
                <div className="cabecalhoMenu">
                    <Link to="/"><div className="logoMenu"></div></Link>
                </div>
                <div className="conteudoMenu">
                    <Link to="/rank"><div>Rank</div></Link>
                    <Link to="/comunidade"><div>Comunidade</div></Link>
                    <Link to="/jogos"><div>Jogos</div></Link>
                    <Link to="/entrar"><div>Entrar</div></Link>
                </div>
                <div className="rodapeMenu">
                    <p>Todos os direitos reservados</p>
                    <p>Firesports@2021</p>
                </div>
            </div>
        )
  }
}

export default Header;