import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import { FecharModalTimeTorneio, AdicionarTimeTorneio } from '../../store/modules/torneio/actions';

import './styles.css';

export default function ModalTimeTorneio() {
    const dispatch = useDispatch();
    const { torneioid } = useParams()

    const times = useSelector(state => state.time.time);
    const auth = useSelector(state => state.auth);
    const openModalTime = useSelector(state => state.torneio.openModalTime); 

    const [usuario, setUsuario] = useState(auth);

    const closeModalTimeTorneio = () => {
        dispatch(FecharModalTimeTorneio())
    }


    return (
        <div className={openModalTime ? "conteudoModalTimeTorneio" : "conteudoModalTimeTorneio hidden"}>
            <div className="fundoModalTimeTorneio">
                <div className="modalModalTimeTorneio">
                    <div className="modalHeaderModalTimeTorneio">
                        <div>
                            Adionar time ao torneio
                        </div>
                        <div className="fecharModalTimeTorneio" onClick={closeModalTimeTorneio}>
                            X
                        </div>
                    </div>

                    <div className="modalConteudoModalTimeTorneio">
                        <form>
                            <label>Times: </label>
                            <input name="time" id="timeModalTimeTorneio" list="times" />
                            <div className="" >
                                <h5>
                                    Adicionar 
                                </h5>
                            </div>
                        </form>
                        <datalist id="times">
                        </datalist>
                    </div>
                </div>
            </div>
        </div>
    );
}