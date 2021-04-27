import React, { useState } from 'react';

import Reactotron from 'reactotron-react-js'

import axios from 'axios';

import ImagemVava from '../../images/sova-valorant.jpg';
import '../Entrar/styles.css';

const Entrar = () => {
    const [inputUsuario, setInputUsuario] = useState("")
    const [inputSenha, setInputSenha] = useState("")
    const [statusLogin, setStatusLogin] = useState(0)
    const [mensagemErro, setMensagemErro] = useState("")

    function VerificarEntrar() {
        
        setMensagemErro("")

        if (inputUsuario === "" || inputSenha === "") {
            setMensagemErro("O campo usuario/senha não estão preenchidos.")
        }

        // const data =  { "usuario": "admin", "senha": "admin" }
        
        const params = new URLSearchParams()
        params.append("usuario", inputUsuario)
        params.append("senha", inputSenha)

        const options = {
            headers: { 'content-type': 'application/x-www-form-urlencoded' }
        }

        axios.post("http://localhost:8090/entrar", params, options)
            .then(resp => {
                Reactotron.log(resp.data)
                if(resp.data.statusCode){
                    setStatusLogin(resp.data.statusCode)
                } else {
                    setMensagemErro("Os dados preenchidos estão incorretos.")
                }
            })
            .catch(err => {
                Reactotron.log(err)
                setMensagemErro("Erro interno: " + err.mensage)
            })
    }


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
                        <button onClick={VerificarEntrar}>Entrar</button>
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