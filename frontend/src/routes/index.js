import React from 'react'
import { Route, Switch } from 'react-router-dom';

import { Home, Entrar, Cadastrar, Jogos, Torneios, Perfil, Rank } from '../pages/';


const App = () => {

    return (
        <Switch >
            <Route exact path='/' component={ Home }/>
            <Route exact path='/entrar' component={ Entrar } />
            <Route path='/cadastrar' component={ Cadastrar } />
            <Route path='/jogos' component={ Jogos } />
            <Route path='/torneios/:jogoid' component={ Torneios } />
            <Route path='/perfil' component={ Perfil } />
            <Route path='/rank' component={ Rank } />
        </Switch>
    )
}

export default App;