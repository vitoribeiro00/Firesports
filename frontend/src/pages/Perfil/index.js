import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';

import { useDispatch, useSelector } from 'react-redux';

import { buscarTime } from '../../store/modules/time/actions';

import Reactotron from 'reactotron-react-js';

import './styles.css';

const Perfil = ( { history } ) => {
    const dispatch = useDispatch();
    const times = useSelector(state => state.time.time);

    useEffect(() => {

        if(!localStorage.getItem("userLogged")) {
            history.push("/entrar")
        }
        if(localStorage.getItem("userIdLogged")){
            if(localStorage.getItem("userIdLogged") > 0){
                Reactotron.log(localStorage.getItem("userIdLogged"))
                dispatch(buscarTime(localStorage.getItem("userIdLogged")));
            }
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