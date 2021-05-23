import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';

import { useDispatch, useSelector } from 'react-redux';

import { buscarTime } from '../../store/modules/time/actions';

import './styles.css';

const Perfil = () => {
    const dispatch = useDispatch();
    const usuarioId = useSelector(state => state.auth.id);

    const times = useSelector(state => state.time.time);

    useEffect(() => {
        if(usuarioId > 0){
            dispatch(buscarTime(usuarioId));
        }

    }, [])

    return(
        <div className="containerPerfil">
            <Header />

            <div className="conteudoPerfil">
                <h1>{localStorage.getItem("userLogged")}</h1>
                <div>
                    <h1 className="meusTimesPerfil">Meus times</h1>
                </div>
                
                <div className="menuTimes">
                    <button className="btnAdicionarTime">+</button>
                </div>

                {
                    times.map(t => (
                        <h1>{t.Nome}</h1>
                    ))
                }
            </div>
        </div>


    );
}

export default Perfil;