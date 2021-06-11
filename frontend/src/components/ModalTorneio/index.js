import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { FecharModalTorneio, AbrirModalTimeTorneio } from '../../store/modules/torneio/actions';

import ModalTimeTorneio from "../../components/ModalTimeTorneio";

import './styles.css';

export default function ModalTorneio() {
    const dispatch = useDispatch();
    const torneios = useSelector(state => state.torneio.torneios);
    const partidasTorneio = useSelector(state => state.torneio.partidasTorneio)
    const openModal = useSelector(state => state.torneio.openModal); 
    const clickedTorneioId = useSelector(state => state.torneio.clickedTorneioId); 

    const closeModal = () => {
        dispatch(FecharModalTorneio())
    }

    const  abrirModalTime= () => {
        console.log("Abrir modal time")
        dispatch(AbrirModalTimeTorneio())
    }

    return (
        <div className={openModal ? "conteudoModalTorneio" : "conteudoModalTorneio hidden"}>
            <div className="fundoModalTorneio">
                <div className="modalModalTorneio">
                    <div className="modalHeaderModalTorneio">
                        <div>
                            Torneio: {clickedTorneioId}
                        </div>
                        <div className="adicionarTimeTorneio" onClick={abrirModalTime}>
                            <h5>
                                Adicionar Time
                            </h5>
                        </div>
                        <div className="fecharModalTorneio" onClick={closeModal}>
                            X
                        </div>
                    </div>

                    <div className="conteudoModalModalTorneio">
                        <ModalTimeTorneio />
                        <section id="suporteModalTorneio">
                            <div className="conteudoQuebraChaveTorneio">
                                <div className="quebraChaveTorneioModalTorneio split-one">
                                    
                                    {
                                        partidasTorneio && partidasTorneio.map(f => 
                                            <div className="faseModalTorneio"> 
                                                <div className="datalhesModalTorneio">FASE {f.Numero_Fase}<br /><span className="dataPartidaModalTorneio">-</span></div>
                                                {
                                                    f.Partidas.map(p => (
                                                        <ul className="partidaModalTorneio">
                                                            <li className={p.Time_Vencedor === p.time_a ? "timeModalTorneio-winner timeModalTorneio-cima" : "timeModalTorneio timeModalTorneio-cima" }>{p.time_a}</li>
                                                            <li className={p.Time_Vencedor === p.time_b ? "timeModalTorneio-winner timeModalTorneio-baixa": "timeModalTorneio timeModalTorneio-baixa"}>{p.time_b}</li>
                                                        </ul>
                                                    ) )
                                                }
                                            </div>)
                                    }
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}