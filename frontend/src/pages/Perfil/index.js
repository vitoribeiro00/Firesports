import React from 'react';
import Header from '../../components/Header';

import { useSelector } from 'react-redux';

import './styles.css';

const Perfil = () => {
    const usuarioId = useSelector(state => state.auth.id);

    const idTime = useSelector(state => state.time.id);
    const nomeTime = useSelector(state => state.time.nome);


    return(
        <div className="containerPerfil">
            <Header />

            <div className="conteudoPerfil">
                <h1>{usuarioId}</h1>
                <div>
                    <h1 className="meusTimesPerfil">Meus times</h1>
                </div>
                
                <div className="menuTimes">
                    <button className="btnAdicionarTime">+</button>
                </div>

                <h1>{idTime}</h1>
                <h1>{nomeTime}</h1>
                
            </div>
        </div>


    );
}

export default Perfil;