import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PubSub from 'pubsub-js';

// Components
import InputCustomizado from './InputCustomizado';
import ListaDeTopicos from './ListaDeTopicos';

// Icones
import AdicionarIcone from '../assets/images/Adicionar_azul.png';
import LupaIconeLink from '../assets/images/Lupa_cinza.png'

class BuscaCabecalho extends Component {

    constructor() {
        super();
        this.state = { tag: '' };
        this.filtrar = this.filtrar.bind(this);
    }

    salvaAlteracao(nomeInput, evento) {
        var campoSendoAlterado = [];
        campoSendoAlterado[nomeInput] = evento.target.value;
        this.setState(campoSendoAlterado);
    }

    filtrar() {
        PubSub.publish('filtra-lista', this.state.tag);        
    }

    render() {
        return (
            <div className="cabecalho">
                <Link to="/cadastro"><img src={AdicionarIcone} alt="Adicionar" className="image"></img></Link>
                <a href="#" onClick={this.filtrar}><img src={LupaIconeLink} alt="Adicionar" className="image"></img></a>
                <form className="formulario">
                    <div className="linha">
                        <InputCustomizado className="col-1" id="tag" type="text" name="tag" value={this.state.tag} onChange={this.salvaAlteracao.bind(this, 'tag')} placeholder="Filter by tag" />                        
                    </div>
                </form>
            </div>
        );
    }
}

export default class BuscaBox extends Component {

    render() {
        return (
            <div>
                <BuscaCabecalho />
                <ListaDeTopicos />
            </div>
        );
    }
}