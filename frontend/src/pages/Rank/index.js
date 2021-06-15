import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';

import Header from '../../components/Header';

import { SearchRank } from '../../store/modules/rank/actions';

import "./styles.css";


const Rank = () => {
    const dispatch = useDispatch();
    let ranks = useSelector(state => state.rank.rank);

    useEffect(() => {dispatch(SearchRank());}, [])

    return (
        <div className="ConteinerRank">

            <Header />

            <div className="ConteudoModalRank">
                <div className="conteudoTextoMotivacionalRank">
                    <p>O Significado da vida não é simplismente existir, mas seguir em frente, subir, alcançar e conquistar</p>
                    <p>Fique de pé até o fim e conquiste o topo!</p>
                </div>

                <div className="ConteudoRanking">
                    <div className="TimeRanking">
                        <div className="TextoTimeRanking">
                            <p>Ranking por Time</p>
                        </div>
                        <div className="ConteudoRankingTime">
                            <table>
                                <tbody>
                                    <tr>
                                        <th scope="col">Nome</th>
                                        <th scope="col">Vitórias</th>
                                    </tr>

                                    {ranks.map(rank => (
                                        <tr>
                                            <td>{rank.Nome}</td>
                                            <td>{rank.Vitoria}</td>
                                        </tr>
                                    ))}
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