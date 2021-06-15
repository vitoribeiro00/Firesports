import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { buscarTime } from '../../store/modules/time/actions';

import { FecharModalTimeTorneio, AdicionarTimeTorneio, LimparCampos } from '../../store/modules/torneio/actions';

import './styles.css';

import Reactotron from 'reactotron-react-js';

export default function ModalTimeTorneio(props) {
    const dispatch = useDispatch();
    const torneioid = props.torneioid;

    const times = useSelector(state => state.time.time);
    const auth = useSelector(state => state.auth);
    const openModalTime = useSelector(state => state.torneio.openModalTime); 
    const torneio = useSelector(state => state.torneio);

    const [failAddTime, setFailAddTime] = useState(torneio.failAddTime);
    const [sucessAddTime, setSucessAddTime] = useState(torneio.sucessAddTime);
    const [message, setMessage] = useState("");

    const [usuario, setUsuario] = useState(auth);

    const [time, setTime] = useState('')

    const closeModalTimeTorneio = () => {
        setMessage("");
        dispatch(FecharModalTimeTorneio())
    }

    useEffect(() => {
        setFailAddTime(torneio.failAddTime);
    }, [torneio.failAddTime])

    useEffect(() => {
        setSucessAddTime(torneio.sucessAddTime)
    }, [torneio.sucessAddTime])

    useEffect(() => {
        if (usuario?.id > 0){
            dispatch(buscarTime(usuario.id));
        }
    }, [])

    useEffect(() => {        
        if(sucessAddTime){
            setMessage("Torneio adicionado com sucesso!");
            setTime("");
            dispatch(LimparCampos()); 
            closeModalTimeTorneio();
        }
    }, [sucessAddTime])

    useEffect(() => {
        if(failAddTime){
            setMessage("Falha ao adicionar o torneio!");
            setTime("");
            dispatch(LimparCampos());
        }
    }, [failAddTime])

    const addTime = () => {
        
        if(time !== "" && usuario.id > 0 && torneioid > 0){
            setMessage("");
            dispatch(AdicionarTimeTorneio(usuario.id, torneioid, time));
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

                            <p>{message}</p>
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