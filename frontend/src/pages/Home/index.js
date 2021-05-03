import React from 'react';

import Header from '../../components/Header';

import '../Home/styles.css';

const Home = () => {
    return (
        <div className="containerHome">
            <Header />
            <div className="modalHome">
                <div className="conteudoTextoHome">
                    <p >Pronto para simplificar o gerenciamento de seu torneio?</p>
                    <p>Junte-se aos milhares de pessoas que confiam Firesports para gerir os seus torneios </p>    
                </div>
                
                <div className="conteudoBotaoHome">
                    <div className="botaoCriarTorneioHome">
                        <button>Criar Torneio</button>
                    </div>
                    <div className="botaoGerarCodigoHome">
                        <button>Usar Gerador de Código</button>
                    </div>                                
                </div>
            </div>
        </div>
    )
}

export default Home;