import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import Header from '../../components/Header';
import Jogo from '../../components/Jogo';

import { SearchJogos } from '../../store/modules/jogo/actions';

import "./styles.css";


const Jogos = () => {
    const dispatch = useDispatch();
    let jogos = useSelector(state => state.jogo.jogos);

    useEffect(() => {
        dispatch(SearchJogos());
    }, [])

    return (
        <div className="conteudoJogos">
            <Header/>
            <div className="conteudoModalJogos">
                <div className="conteudoTextoMotivacionalJogos">
                    <p>Coisas incríveis não acontecem dentro da zona de conforto!</p>
                    <p>Supere seus limites, e fique no topo!</p>
                </div>

                <div className="listaDeJogos">
                    {jogos.map(jogo => (
                        <Jogo className="jogoJogos" idJogo={jogo.JogoId} nome={jogo.Nome} image={jogo.Image}/>
                    ))}
                </div>
            </div>
        </div>
    )
}


export default Jogos;