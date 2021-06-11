import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';

import { useDispatch, useSelector } from 'react-redux';

import { buscarTime } from '../../store/modules/time/actions';
import { updateUser } from '../../store/modules/auth/actions';

import './styles.css';

import Reactotron from 'reactotron-react-js';

const Perfil = ( { history } ) => {
    const dispatch = useDispatch();
    const times = useSelector(state => state.time.time);

    const auth = useSelector(state => state.auth);

    const [usuario, setUsuario] = useState(auth);

    useEffect(() => {

        if(!localStorage.getItem("userLogged")) {
            history.push("/entrar")
        }

        if (usuario?.id > 0){
            dispatch(buscarTime(usuario.id));
        }

    }, [])

    const atualizarUsuario = () => {
        dispatch(updateUser(usuario))
    }

    const sairTime = () => {
        Reactotron.log("Clicou para sair do time")
    }

    const deletarTime = () => {
        Reactotron.log("Clicou para deletar o time")
    }

    return(
        <div className="containerPerfil">
            <Header />

            <div className="conteudoPerfil">
                <div className="modalPerfil">
                    <div className="conteudoModalPerfil">
                        <div className="conteudoFormulario">
                            <div className="tituloFormulario">
                                <h4>Dados do Usuário</h4>
                            </div>
                            <div className="formulario">
                                <form>
                                    <div className="labelAtualizarUsuario">
                                        <label for="nome">Nome: </label>
                                    </div>
                                    <div className="inputAtualizarUsuario">
                                        <input type="text" value={usuario?.nome} onChange={(event) => { setUsuario({...usuario,  nome: event.target.value})}} />
                                    </div>
                                    <div className="labelAtualizarUsuario">
                                        <label for="Sobrenome">Sobrenome: </label>
                                    </div>
                                    <div className="inputAtualizarUsuario">
                                        <input type="text"  value={usuario?.sobrenome} onChange={(event) => { setUsuario({...usuario,  sobrenome: event.target.value}) }}/>
                                    </div>
                                    <div className="labelAtualizarUsuario">
                                        <label for="data_nasc">Data Nascimento: </label>
                                    </div>
                                    <div className="inputAtualizarUsuario">
                                        <input type="date" value={usuario?.dataNasc} onChange={(event) => {setUsuario({...usuario,  dataNasc: event.target.value})}} />
                                    </div>
                                    <div className="labelAtualizarUsuario">
                                        <label for="usuario">Usuario: </label>
                                    </div>

                                    <div className="inputAtualizarUsuario">
                                        <input type="text" id="inputQtdAtualizarTorneio" value={usuario?.usuario} onChange={(event) => { setUsuario({...usuario,  usuario: event.target.value}) }}/>
                                    </div>
                                    
                                    <div className="labelAtualizarUsuario">
                                        <label for="senha" >Senha: </label>
                                    </div>
                                    
                                    <div className="inputAtualizarUsuario">
                                        <input type="password"  onChange={(event) => { setUsuario({...usuario,  senha: event.target.value}) }} />
                                    </div>

                                    <div className="labelAtualizarUsuario">
                                        <label for="email">Email: </label>
                                    </div>
                                    <div className="inputAtualizarUsuario">
                                        <input type="email"  value={usuario?.email} onChange={(event) => { setUsuario({...usuario,  email: event.target.value}) }} />
                                    </div>
                                    
                                </form>

                            </div>
                            <div className="botaoAtualizarUsuarioPerfil" onClick={atualizarUsuario}>
                                    Atualizar
                            </div>
                        </div>
                        <div className="conteudoTimes">
                            <h4 className="meusTimesPerfil">Meus Times</h4>

                            {
                                times && times.map(t => (
                                    <div className="cardTimes">
                                            <div className="tituloCardTime">
                                                <h4>{t.Nome}</h4>
                                            </div>
                                            <div className="acoesTime">

                                                {
                                                    t.Usuario_Dono != usuario.id && <p onClick={sairTime}>sair</p>
                                                }
                                                {
                                                    t.Usuario_Dono == usuario.id  && <p onClick={deletarTime}>deletar</p>
                                                }
                                            </div>
                                    </div>                                        
                                ))
                            }
                        </div>                                        
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Perfil;