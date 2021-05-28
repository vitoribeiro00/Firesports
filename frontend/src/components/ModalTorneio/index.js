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
            <div className="fundo">
                <div className="modal">
                    <div className="modalHeader">
                        <div>
                            Torneio: {clickedTorneioId}
                        </div>
                        <div className="fecharModal" onClick={closeModal}>
                            X
                        </div>
                    </div>

                    <div className="conteudoModal">
                        <section id="bracket">
                            <div className="container">
                            <div className="split split-one">
                                <div className="round round-one current">
                                <div className="round-details">Round 1<br /><span className="date">March 16</span></div>
                                    <ul className="matchup">
                                        <li className="team team-top">TIME A<span className="score">76</span></li>
                                        <li className="team team-bottom">TIME B<span className="score">82</span></li>
                                    </ul>
                                    <ul className="matchup">
                                        <li className="team team-top">TIME C<span className="score">64</span></li>
                                        <li className="team team-bottom">TIME D<span className="score">56</span></li>
                                    </ul>
                                    <ul className="matchup">
                                        <li className="team team-top">TIME E<span className="score">68</span></li>
                                        <li className="team team-bottom">TIME F<span className="score">54</span></li>
                                    </ul>
                                    <ul className="matchup">
                                        <li className="team team-top">TIME G<span className="score">68</span></li>
                                        <li className="team team-bottom">TIME H<span className="score">54</span></li>
                                    </ul>
                                    
                                </div>
                        
                                <div className="round round-two">
                                <div className="round-details">Round 2<br /><span className="date">March 18</span></div>
                                <ul className="matchup">
                                    <li className="team team-top">TIME A<span className="score">35</span></li>
                                    <li className="team team-bottom">TIME C<span className="score">42</span></li>
                                </ul>
                                <ul className="matchup">
                                    <li className="team team-top">TIME E<span className="score">25</span></li>
                                    <li className="team team-bottom">TIME H<span className="score">28</span></li>
                                </ul>
                                </div>
                        
                                <div className="round round-three">
                                <div className="round-details">Round 3<br /><span className="date">March 22</span></div>
                                <ul className="matchup">
                                    <li className="team team-top">TIME A<span className="score">12</span></li>
                                    <li className="team team-bottom">TIME E<span className="score">8</span></li>
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