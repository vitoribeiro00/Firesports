import React, { Suspense} from 'react'
import { Route, Switch } from 'react-router-dom';

import { Home, Entrar, Cadastrar, Jogos, Torneios } from '../pages/'


const App = () => {

    return (
        <Switch >
            <Route exact path='/' component={ Home }/>
            <Route exact path='/entrar' component={ Entrar } />
            <Route path='/cadastrar' component={ Cadastrar } />
            <Route path='/jogos' component={ Jogos } />
            <Route path='/torneios' component={ Torneios } />
        </Switch>
    )
}

export default App;