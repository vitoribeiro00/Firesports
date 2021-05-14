import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { SearchTorneios } from '../../store/modules/torneio/actions';

import Header from '../../components/Header';
import Torneio from '../../components/Torneio';

import "../Torneios/styles.css";

const Torneios = () => {
    const dispatch = useDispatch();

    const { jogoid } = useParams()
    const torneios = useSelector(state => state.torneio.torneios);

    useEffect(() => {
        if(jogoid > 0){
            dispatch(SearchTorneios(jogoid));
        }
    }, [])

    return (
        <div className="conteudoTorneios">
            <Header />
            <div className="conteudoModalTorneios">
                <div className="conteudoTextoMotivacionalTorneios">
                    <p>Coisas incríveis não acontecem dentro da zona de conforto!</p>
                    <p>Supere seus limites, e fique no topo!</p>
                </div>

                <div className="listaDeTorneios">
                    {torneios &&
                        torneios.map(
                            torneio => (
                                <Torneio nome={torneio.nome} />
                            )
                        )}
                </div>
            </div>
        </div>
    );
}

export default Torneios;