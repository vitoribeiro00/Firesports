import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { signLoggout } from '../../store/modules/auth/actions';

import './styles.css';

export default function Header() {
    const dispatch = useDispatch();

    const usuario = useSelector(state => state.auth.usuario); 

    const logout = () => {
        dispatch(signLoggout())
    }

    return (
        <div className="menu">
            <div className="cabecalhoMenu">
                <Link to="/"><div className="logoMenu"></div></Link>
            </div>
            <div className="conteudoMenu">
                <Link to="/rank"><div className="rankMenu">Rank</div></Link>
                <Link to="/comunidade"><div className="comunidadeMenu">Comunidade</div></Link>
                <Link to="/jogos"><div className="jogosMenu">Jogos</div></Link>
                {
                    usuario === "" ? (
                        <>
                        <Link to="/entrar"><div className="entrarMenu">Entrar</div></Link>
                        <Link to="/cadastrar"><div className="cadastrarMenu">Cadastrar</div></Link>
                        </>
                    ) : (
                        <div className="perfilMenu">
                            <img src="/images/avatar.png" alt={usuario} className="imagemAvatar"/>
                            <p onClick={logout}>Sair</p>
                        </div>
                    )
                }
            </div>
            <div className="rodapeMenu">
                <p>Todos os direitos reservados</p>
                <p>Firesports@2021</p>
            </div>
        </div>
    );
}