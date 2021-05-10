import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Header from '../../components/Header';
import Torneio from '../../components/Torneio';

import "../Torneios/styles.css";

import { SearchTorneios } from '../../store/modules/torneio/actions';

import Reactotron from 'reactotron-react-js';

const Torneios = (props) => {
    const dispatch = useDispatch();
    const query = new URLSearchParams(props.location.search);
    const idJogo = query.get("idJogo");
    const torneios = useSelector(state => state.torneio.torneios);

    useEffect(() => {
        if(idJogo > 0){
            dispatch(SearchTorneios(idJogo));
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