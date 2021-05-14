import React from 'react';
import Header from '../../components/Header';

import './styles.css';

const Perfil = () => {
    return(
        <div className="containerPerfil">
            <Header />

            <div className="conteudoPerfil">
                <div>
                    <h1 className="meusTimesPerfil">Meus times</h1>
                </div>
                
                <div className="menuTimes">
                    <button className="btnAdicionarTime">+</button>
                </div>
                
            </div>
        </div>


    );
}

export default Perfil;