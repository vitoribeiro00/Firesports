import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { FecharModalTorneio } from '../../store/modules/torneio/actions';

import './styles.css';

export default function ModalTorneio() {
    const dispatch = useDispatch();
    const torneios = useSelector(state => state.torneio.torneios); 
    const openModal = useSelector(state => state.torneio.openModal); 
    const clickedTorneioId = useSelector(state => state.torneio.clickedTorneioId); 

    const closeModal = () => {
        dispatch(FecharModalTorneio())
    }
    return (
        <div className={openModal ? "conteudoModalTorneio" : "conteudoModalTorneio hidden"}>
            <div className="fundoModalTorneio">
                <div className="modalModalTorneio">
                    <div className="modalHeaderModalTorneio">
                        <div>
                            Torneio: {clickedTorneioId}
                        </div>
                        <div className="fecharModalTorneio" onClick={closeModal}>
                            X
                        </div>
                    </div>

                    <div className="conteudoModalModalTorneio">
                        <section id="suporteModalTorneio">
                            <div className="conteudoQuebraChaveTorneio">
                            <div className="quebraChaveTorneioModalTorneio split-one">
                                <div className="faseModalTorneio faseModalTorneio-one current">
                                <div className="datalhesModalTorneio">FASE 1<br /><span className="dataPartidaModalTorneio">26/05/2021</span></div>
                                    <ul className="partidaModalTorneio">
                                        <li className="timeModalTroneio timeModalTroneio-cima">TIME A<span className="pontuacaoModalTorneio">76</span></li>
                                        <li className="timeModalTroneio timeModalTroneio-baixa">TIME B<span className="pontuacaoModalTorneio">82</span></li>
                                    </ul>
                                    <ul className="partidaModalTorneio">
                                        <li className="timeModalTroneio timeModalTroneio-cima">TIME C<span className="pontuacaoModalTorneio">64</span></li>
                                        <li className="timeModalTroneio timeModalTroneio-baixa">TIME D<span className="pontuacaoModalTorneio">56</span></li>
                                    </ul>
                                    <ul className="partidaModalTorneio">
                                        <li className="timeModalTroneio timeModalTroneio-cima">TIME E<span className="pontuacaoModalTorneio">68</span></li>
                                        <li className="timeModalTroneio timeModalTroneio-baixa">TIME F<span className="pontuacaoModalTorneio">54</span></li>
                                    </ul>
                                    <ul className="partidaModalTorneio">
                                        <li className="timeModalTroneio timeModalTroneio-cima">TIME G<span className="pontuacaoModalTorneio">68</span></li>
                                        <li className="timeModalTroneio timeModalTroneio-baixa">TIME H<span className="pontuacaoModalTorneio">54</span></li>
                                    </ul>                                    
                                </div>
                        
                                <div className="faseModalTorneio faseModalTorneio-two">
                                <div className="datalhesModalTorneio">FASE 2<br /><span className="dataPartidaModalTorneio">27/05/2021</span></div>
                                <ul className="partidaModalTorneio">
                                    <li className="timeModalTroneio timeModalTroneio-cima">TIME A<span className="pontuacaoModalTorneio">35</span></li>
                                    <li className="timeModalTroneio timeModalTroneio-baixa">TIME C<span className="pontuacaoModalTorneio">42</span></li>
                                </ul>
                                <ul className="partidaModalTorneio">
                                    <li className="timeModalTroneio timeModalTroneio-cima">TIME E<span className="pontuacaoModalTorneio">25</span></li>
                                    <li className="timeModalTroneio timeModalTroneio-baixa">TIME H<span className="pontuacaoModalTorneio">28</span></li>
                                </ul>
                                </div>
                        
                                <div className="faseModalTorneio faseModalTorneio-three">
                                <div className="datalhesModalTorneio">FASE 3<br /><span className="dataPartidaModalTorneio">28/05/2021</span></div>
                                <ul className="partidaModalTorneio">
                                    <li className="timeModalTroneio timeModalTroneio-cima">TIME A<span className="pontuacaoModalTorneio">12</span></li>
                                    <li className="timeModalTroneio timeModalTroneio-baixa">TIME E<span className="pontuacaoModalTorneio">8</span></li>
                                </ul>
                                </div>
                            </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}