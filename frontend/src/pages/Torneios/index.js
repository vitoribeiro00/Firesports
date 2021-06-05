import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { SearchTorneios, AbrirModalCriacaoTorneio} from '../../store/modules/torneio/actions';

import Header from '../../components/Header';
import Torneio from '../../components/Torneio';

import "../Torneios/styles.css";
import ModalTorneio from "../../components/ModalTorneio";
import ModalCriacaoTorneio from '../../components/ModalCriacaoTorneio';

const Torneios = () => {
    const dispatch = useDispatch();

    const { jogoid } = useParams()
    const torneios = useSelector(state => state.torneio.torneios);


    useEffect(() => {
        if(jogoid > 0){
            dispatch(SearchTorneios(jogoid));
        }
    }, [])

    const abrirModalCriarTorneio = () => {
        dispatch(AbrirModalCriacaoTorneio())
    }

    return (
        <div className="conteudoTorneios">
            <Header />
            <div className="conteudoModalTorneios">
                <div className="conteudoTextoMotivacionalTorneios">
                    <p>Coisas incríveis não acontecem dentro da zona de conforto!</p>
                    <p>Supere seus limites, e fique no topo!</p>
                </div>
                <div className="conteudoCriarTorneio">
                    <button onClick={abrirModalCriarTorneio} id="botaoCriarTorneio">Criar Torneio</button>
                    <ModalCriacaoTorneio />
                </div>

                <div className="listaDeTorneios">
                    {torneios &&
                        torneios.map(
                            torneio => (
                                <Torneio nome={torneio.Nome} torneioid={torneio.TorneioId} data_criacao={torneio.Data_criacao} descricao= {torneio.Descricao} qtd_por_equipe= {torneio.Qtd_por_equipe} qtd_equipe= {torneio.Qtd_equipe}/>
                            )
                        )}
                </div>
                <ModalTorneio />
            </div>
        </div>
    );
}

export default Torneios;