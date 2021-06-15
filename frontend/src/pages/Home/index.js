import React from 'react';

import Header from '../../components/Header';

import '../Home/styles.css';

const Home = () => {

    return (
        <div className="containerHome">
            <Header />
            <div className="modalHome">
                <div className="conteudoTextoHome">
                    <p >Pronto para simplificar o gerenciamento do seu torneio?</p>
                    <p>Junte-se a milhares de pessoas que confiam Firesports para gerir os seus torneios </p>    
                </div>
            </div>
        </div>
    )
}

export default Home;