import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'

// Componentes
import CadastroBox from './components/CadastroBox';
import BuscaBox from './components/BuscaBox';

ReactDOM.render(
    <BrowserRouter history={createBrowserHistory}>
        <div>
            <App>
                <Route exact path="/" component={CadastroBox} />
                <Route path="/busca" component={BuscaBox} /> 
                <Route path="/cadastro" component={CadastroBox} />
            </App>
        </div>
    </BrowserRouter>,
    document.getElementById('root')
);