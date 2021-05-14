import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { signInRequest } from '../../store/modules/auth/actions';

import Reactotron from 'reactotron-react-js';

import '../Entrar/styles.css';

const Entrar = ({history}) => {
    const dispatch = useDispatch();
    let statusCode = useSelector(state => state.auth.statusCode)

    const [inputUsuario, setInputUsuario] = useState("")
    const [inputSenha, setInputSenha] = useState("")
    const [mensagemErro, setMensagemErro] = useState("")

    const handleSubmit = () => {
        setMensagemErro("")
    
        if (inputUsuario === "" || inputSenha === "") {
            setMensagemErro("O campo usuario/senha não estão preenchidos.");
        }

        dispatch(signInRequest(inputUsuario, inputSenha));
    }

    useEffect(() => {
        if (statusCode == 0){
            Reactotron.log("Falha ao logar no sistema - " + statusCode)
            setMensagemErro("Usuário e Senha errada!")
        }

        else if (statusCode === 1) {
            Reactotron.log("Logado com sucesso! - " + statusCode);
            history.push("/")}
        }, [statusCode]
    )

    return (
        <div className="ContainerEntrar">
            <div className="ContainerImageEntrar">
                <img src="/images/sova-valorant.jpg" alt="Meu champion do vava" className="ImagemFundoEntrar"/>
            </div>
            <div className="ContainerConteudoEntrar">
                <div className="ModalEntrar">
                    <div className="ConteudoFormularioEntrar">
                        <label>Usuario</label>
                        <input type="text" name="usuario" onChange={(event)=> {setInputUsuario(event.target.value)}} />
                        <label>Senha</label>
                        <input type="password" name="password" onChange={ (event) => {setInputSenha(event.target.value)}}/>
                    </div>
                    <div className="ButtonEntrar">
                        <button onClick={handleSubmit}>Entrar</button>
                    </div>
                    <div className="ConteudoLinkEntrar">
                        <p>Esqueci a senha</p>
                        <p>Cadastrar</p>
                    </div>
                    <div className="MensagemErrorEntrar">
                        <p>
                            { mensagemErro !== "" && mensagemErro }
                        </p>
                    </div>
                </div>
                <div className="FooterEntrar">
                    <p>Todos os direitos reservados</p>
                    <p>Firesports@2021</p>
                </div>
            </div>
        </div>
    )
}

export default Entrar;