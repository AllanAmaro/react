import React, { Component } from 'react';
import PubSub from 'pubsub-js';
import { Link } from 'react-router-dom';

// Components
import InputCustomizado from './InputCustomizado';
import ListaDeTopicos from './ListaDeTopicos';

// Icones
import AdicionarIcone from '../assets/images/Adicionar_azul.png';
import LupaIconeLink from '../assets/images/Lupa_cinza.png'

class FormularioCadastro extends Component {

    constructor() {
        super();
        this.state = { title: '', link: '', tag: '', tags: [] };
        this.addicionar = this.addicionar.bind(this);
        this.separaTag = this.separaTag.bind(this);
        this.S4 = this.S4.bind(this);
    }

    addicionar() {
        this.separaTag();
        var topico = ({ 'id': this.gerarId(), 'title': this.state.title, 'link': this.state.link, 'tags': this.state.tags });
        var listaDeTopico = JSON.parse(localStorage.getItem('topicos'));

        listaDeTopico.push(topico);

        localStorage.setItem('topicos', JSON.stringify(listaDeTopico));

        PubSub.publish('novo-topico');
        this.setState({ title: '', link: '', tag: '', tags: [] });
    }

    gerarId() {
        var guid = (this.S4() + 
                    this.S4() + "-" + 
                    this.S4() + "-4" + 
                    this.S4().substr(0,3) + "-" + 
                    this.S4() + "-" + 
                    this.S4() + this.S4() + 
                    this.S4()).toLowerCase();
        return guid;
    }

    S4() {
        return (((1+Math.random())*0x10000)|0).toString(16).substring(1); 
    }

    separaTag() {
        var splitedTag = this.state.tag.split(";");
        if (splitedTag.length > 1) {
            splitedTag.forEach(tag => {
                this.state.tags.push({'id': this.gerarId(), 'descTag': tag});
            });
        } else {
            this.state.tags.push({'id': this.gerarId(), 'descTag': this.state.tag});
        }
    }

    salvaAlteracao(nomeInput, evento) {
        var campoSendoAlterado = [];
        campoSendoAlterado[nomeInput] = evento.target.value;
        this.setState(campoSendoAlterado);
    }

    render() {
        return (
            <div className="cabecalho">
                <Link to="/busca"><img src={LupaIconeLink} alt="Adicionar" className="image"></img></Link>
                <a href="#" onClick={this.addicionar}><img src={AdicionarIcone} alt="Adicionar" className="image"></img></a>
                <form className="formulario">
                    <div className="linha">
                        <InputCustomizado className="col-3" id="title" type="text" name="title" value={this.state.title} onChange={this.salvaAlteracao.bind(this, 'title')} placeholder="Title" />
                        <InputCustomizado className="col-3" id="link" type="text" name="link" value={this.state.link} onChange={this.salvaAlteracao.bind(this, 'link')} placeholder="Link" />
                        <InputCustomizado className="col-3" id="tags" type="text" name="tags" value={this.state.tag} onChange={this.salvaAlteracao.bind(this, 'tag')} placeholder="Tag" />
                    </div>
                </form>
            </div>
        );
    }
}

export default class CadastroBox extends Component {

    render() {
        return (
            <div>
                <FormularioCadastro />
                <ListaDeTopicos />
            </div>
        );
    }
}