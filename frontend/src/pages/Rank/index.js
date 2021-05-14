import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import Header from '../../components/Header';
import Jogo from '../../components/Jogo';


import "./styles.css";


const Rank = () => {
    const dispatch = useDispatch();

    return (
        <div className="ConteinerRank">

            <Header />

            <div className="ConteudoModalRank">
                <div className="conteudoTextoMotivacionalRank">
                    <p>O Significado da vida não é simplismente existir, mas seguir em frente, subir, alcançar e conquistar</p>
                    <p>Fique de pé até o fim e conquiste o topo!</p>
                </div>
               
                <div className="ConteudoRanking">
                    <div className="IndividualRanking">
                        <div className="TextoRankingIndividual">
                            <p >Ranking Individual</p>
                        </div>
                        <table>
                            <tbody>
                                <tr>
                                    <th scope="col">#Rank</th>
                                    <th scope="col">Username</th>
                                    <th scope="col">Vitórias</th>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Igor</td>
                                    <td>100</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Vitor</td>
                                    <td>90</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Guilherme</td>
                                    <td>80</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>JoaozinFreefire</td>
                                    <td>70</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>   
                    <div className="TimeRanking">
                        <div className="TextoTimeRanking">
                            <p>Ranking por Time</p>
                        </div>
                        <div className="ConteudoRankingTime">
                            <table>
                                <tbody>
                                    <tr>
                                        <th scope="col">#Rank</th>
                                        <th scope="col">Username</th>
                                        <th scope="col">Vitórias</th>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>Brasil</td>
                                        <td>100</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Argentina</td>
                                        <td>90</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Alemanha</td>
                                        <td>80</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Belgica</td>
                                        <td>70</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Rank;