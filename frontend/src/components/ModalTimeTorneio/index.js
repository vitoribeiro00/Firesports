import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import { buscarTime } from '../../store/modules/time/actions';

import { FecharModalTimeTorneio, AdicionarTimeTorneio } from '../../store/modules/torneio/actions';

import './styles.css';

import Reactotron from 'reactotron-react-js';

export default function ModalTimeTorneio(props) {
    const dispatch = useDispatch();
    const torneioid = props.torneioid;

    const times = useSelector(state => state.time.time);
    const auth = useSelector(state => state.auth);
    const torneio = useSelector(state => state.torneio)
    
    const openModalTime = useSelector(state => state.torneio.openModalTime); 

    const [usuario, setUsuario] = useState(auth);
    const [failAddTime, setFailAddTime] = useState(torneio.failAddTime);
    const [sucessAddTime, setSucessAddTime] = useState(torneio.sucessAddTime);
    const [codeStatusTime, setCodeStatusTime] = useState(torneio.codeAddTime);

    const [time, setTime] = useState('')

    const closeModalTimeTorneio = () => {
        dispatch(FecharModalTimeTorneio())
    }

    // useEffect(() => {
    //     console.log("torneio fail " + torneio.failAddTime)
    //     console.log("torneio sucess " + torneio.sucessAddTime)

    //     if(torneio.failAddTime) {
    //         alert("ERROR")
    //     }

    //     if(torneio.sucessAddTime){
    //         closeModalTimeTorneio()
    //         alert("SUCESS")
    //     }
    // }, [torneio.failAddTime, torneio.sucessAddTime, ])

    useEffect(() => {
        Reactotron.log(sucessAddTime)
    }, [sucessAddTime])

    useEffect(() => {

        if (usuario?.id > 0){
            dispatch(buscarTime(usuario.id));
        }

    }, [])

    const addTime = () => {
        console.log(time + " - " + usuario.id + " - " + torneioid)
        if(time !== "" && usuario.id > 0 && torneioid > 0){
            dispatch(AdicionarTimeTorneio(usuario.id, torneioid, time))
        }
    }

    return (
        <div className={openModalTime ? "conteudoModalTimeTorneio" : "conteudoModalTimeTorneio hidden"}>
            <div className="fundoModalTimeTorneio">
                <div className="modalModalTimeTorneio">
                    <div className="modalHeaderModalTimeTorneio">
                        <div>
                            Adionar time ao torneio - {torneioid}
                        </div>
                        <div className="fecharModalTimeTorneio" onClick={closeModalTimeTorneio}>
                            X
                        </div>
                    </div>

                    <div className="modalConteudoModalTimeTorneio">
                        <form>
                            <label>Times: </label>
                            <input name="time" id="timeModalTimeTorneio" list="times" value={time} onChange={(event) => {setTime(event.target.value)}}/>
                            <div className="addTimeModalTimeTorneio" onClick={addTime}>
                                <h5>
                                    Adicionar 
                                </h5>
                            </div>
                        </form>
                        <datalist id="times">
                            {
                                times && times.map(t => t.Usuario_Dono === usuario.id &&<option>{t.Nome}</option>)
                            }
                        </datalist>
                    </div>
                </div>
            </div>
        </div>
    );
}