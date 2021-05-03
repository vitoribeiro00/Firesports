import React, { useState } from 'react';

import axios from 'axios';

import ImagemVava from '../../images/sova-valorant.jpg';

import './styles.css';

import Reactotron from 'reactotron-react-js';

const Cadastrar = () => {
    const [nome, setNome] = useState('')
    const [sobrenome, setSobrenome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [confirmarSenha, setConfirmarSenha] = useState('')
    const [dataNascimento, setDataNascimento] = useState('')
    const [usuario, setUsuario] = useState('')
    const [termoUso, setTermoUso] = useState(true)
    const [mensagemErro, setMensagemErro] =useState('')

    const Cadastrar = () => {
        if (mensagemErro !== "") {
            setMensagemErro("")
        }

        if (termoUso) {
            if (senha === confirmarSenha) {
                const params = new URLSearchParams()
                params.append("nome", nome)
                params.append("sobrenome", sobrenome)
                params.append("usuario", usuario)
                params.append("email", email)
                params.append("senha", senha)
                params.append("dataNascimento", dataNascimento)

                const options = {
                    headers: { 'content-type': 'application/x-www-form-urlencoded' }
                }

                axios.post("http://localhost:8090/cadastrar", params, options)
                    .then(resp => {
                        if (resp.data.statusCode) {
                            Reactotron.log("Cadastrar")
                        } else {
                            setMensagemErro("Os dados preenchidos estão incorretos.")
                        }
                    })
                    .catch(err => {
                        Reactotron.log(err)
                        setMensagemErro("Erro interno: " + err.mensage)
                    })
            } else {
                setMensagemErro("As senhas preenchidas não batem...\nVerifique o seu preenchimento.")
            }
        }
    }

    return (
        <div className="Container">
            <div className="ContainerImage">
                <img src={ImagemVava} alt="Meu champion do vava" className="ImagemFundo"/>
            </div>
            <div className="ContainerConteudo">
                <div className="ModalCadastrar">
                    <div className="ConteudoFormularioCadastro">
                        <label>Nome</label>
                        <input type="text" name="InputNome" onChange={(event) => { setNome(event.target.value) }} />
                        <label>Sobrenome</label>
                        <input type="text" name="InputSobrenome" onChange={ (event) => {setSobrenome(event.target.value)}}/>
                        <label>E-mail</label>
                        <input type="email" name="inputEmail" onChange={ (event) => {setEmail(event.target.value)}} required/>
                        <label >Usuario</label>
                        <input type="text" name="usuario" onChange={ (event) => {setUsuario(event.target.value)}} required/>
                        <label >Senha</label>
                        <input type="password" name="inputSenha" onChange={ (event) => {setSenha(event.target.value)}} required />
                        <label>Confirmar senha</label>
                        <input type="password" name="inputConfirmarSenha" onChange={ (event) => {setConfirmarSenha(event.target.value)}} required />
                        <label>Data de Nascimento</label>
                        <input type="date" name="inputDataNasc" onChange={ (event) => {setDataNascimento(event.target.value)}}/>
                    </div>
                    <p><input type="checkbox" checked={true} />Aceito os termos de uso</p>
                    <div className="ButtonCadastrar">
                        <button onClick={()=> {Cadastrar()}}>Cadastrar</button>
                    </div>
                    <div className="ButtonEntrar">
                        <p>Entrar</p>
                    </div>
                </div>
                <p>{mensagemErro}</p>
                <div className="Footer">
                    <p>Todos os direitos reservados</p>
                    <p>Firesports@2021</p>
                </div>
            </div>
        </div>
    )
}

export default Cadastrar;