import React, { Suspense } from 'react'
import { Route } from 'react-router-dom';

import Home from './Home';
import Entrar from './Entrar';
import Cadastrar from './Cadastrar';
import Jogos from './Jogos';
import Torneios from './Torneios'

const App = () => {
    return (
        <div>
            <Suspense >
                <Route exact path='/' component={ Home }/>
                <Route exact path='/entrar' component={ Entrar } />
                <Route path='/cadastrar' component={Cadastrar} />
                <Route path='/jogos' component={Jogos} />
                <Route path='/torneios' component={Torneios} />
            </Suspense>        
        </div>
    )
}

export default App;