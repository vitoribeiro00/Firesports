import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { FecharModalCriacaoTorneio } from '../../store/modules/torneio/actions';

import './styles.css';

export default function ModalCriacaoTorneio() {
    const dispatch = useDispatch();
    const openModalCriacao = useSelector(state => state.torneio.openModalCriacao); 

    const closeModal = () => {
        dispatch(FecharModalCriacaoTorneio())
    }


    const closeModalCriarTorneio = () => {
        dispatch(FecharModalCriacaoTorneio())
    }

    return (
        <div className={openModalCriacao ? "conteudoModalCriarTorneio" : "conteudoModalCriarTorneio hidden"}>
            <div className="fundoModalCriarTorneio">
                <div className="modalModalCriarTorneio">
                    <div className="modalHeaderModalCriarTorneio">
                        <div>
                            Jogo: 1
                        </div>
                        <div className="fecharModalCriarTorneio" onClick={closeModalCriarTorneio}>
                            X
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}