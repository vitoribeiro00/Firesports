import React from 'react';



import '../Home/styles.css';

const Home = () => {
    return (
        <div className="Container0">
            <div className="Menu">
                <div className="MenuBotao">
                    <div className="BotaoLogar">
                        <button className="BtnLogar">logar</button>
                    </div>
                    <div className="BotaoComunidade">
                        <button className="BtnComunidade">Comunidade</button>
                    </div>
                    <div className="BotaoJogos">
                        <button className="BtnJogos">Jogos</button>
                    </div>
                    <div className="Footer0">
                    <p>Todos os direitos reservados</p>
                    <p>Firesports@2021</p>
                </div>
                </div>
            </div>
            <div className="ContainerConteudo0">
                <div className="ModalHome0">
                    <form className="PaginaInicial">
                        <div className="ConteudoPaginaInicial">
                            <div className="TextoConteudo">
                                <p >Pronto para simplificar o gerenciamento de seu torneio?</p>
                                <p>Junte-se aos milhares de pessoas que confiam Firesports para gerir os seus torneios </p>    
                            </div>
                            
                            <div className="ButtonInicial">
                                <div className="ButtonTorneio">
                                    <button className="BtnCriarTorneio">Criar Torneio</button>
                                </div>
                                <div className="ButtonGerarCodigo">
                                    <button className="BtnGerarCodigo">Usar Gerador de Código</button>
                                </div>                                
                            </div>
                        </div>
                    </form>
                </div>
            </div>
                
        </div>
    )
}

export default Home;