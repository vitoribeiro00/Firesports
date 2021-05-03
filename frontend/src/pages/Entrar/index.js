import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { signInRequest } from '../../store/modules/auth/actions';

import Reactotron from 'reactotron-react-js';

import ImagemVava from '../../images/sova-valorant.jpg';
import '../Entrar/styles.css';

const Entrar = ({history}) => {
    const dispatch = useDispatch();
    let statusCode = useSelector(state => state.auth.statusCode)

    const [inputUsuario, setInputUsuario] = useState("");
    const [inputSenha, setInputSenha] = useState("");
    const [statusLogin, setStatusLogin] = useState(0);
    const [mensagemErro, setMensagemErro] = useState("");

    const handleSubmit = () => {
        setMensagemErro("")
    
        if (inputUsuario === "" || inputSenha === "") {
            setMensagemErro("O campo usuario/senha não estão preenchidos.");
        }

        dispatch(signInRequest(inputUsuario, inputSenha));
    }

    useEffect(() => {
        if (statusCode == 1) {
            Reactotron.log("Logado com sucesso! - " + statusCode)
            history.push("/")
        } else {
            setMensagemErro("Usuario ou senha incorreta.")
        }
    }, [statusCode])

    return (
        <div className="Container">
            <div className="ContainerImage">
                <img src={ImagemVava} alt="Meu champion do vava" className="ImagemFundo"/>
            </div>
            <div className="ContainerConteudo">
                <div className="ModalEntrar">
                    <div className="ConteudoFormulario">
                        <label>Usuario</label>
                        <input type="text" name="usuario" onChange={(event)=> {setInputUsuario(event.target.value)}} />
                        <label>Senha</label>
                        <input type="password" name="password" onChange={ (event) => {setInputSenha(event.target.value)}}/>
                    </div>
                    <div className="ButtonEntrar">
                        <button onClick={handleSubmit}>Entrar</button>
                    </div>
                    <div className="ConteudoLink">
                        <p>Esqueci a senha</p>
                        <p>Cadastrar</p>
                    </div>
                    <div className="MensagemError">
                        <p>
                            { mensagemErro !== "" && mensagemErro }
                        </p>
                    </div>
                </div>
                <div className="Footer">
                    <p>Todos os direitos reservados</p>
                    <p>Firesports@2021</p>
                </div>
            </div>
        </div>
    )
}

export default Entrar;