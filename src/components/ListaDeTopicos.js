import React, { Component } from 'react';
import PubSub from 'pubsub-js';

// Componentes
import ConteudoTopico from './ConteudoTopico';

export default class ListaDeTopicos extends Component {

    constructor() {
        super();
        this.state = { listaDeTopicos: [], descTag: '' };
        this.atualizaListaDeTopicos = this.atualizaListaDeTopicos.bind(this);
        this.filtraListaPorTag = this.filtraListaPorTag.bind(this);
        this.filtraTag = this.filtraTag.bind(this);
    }

    componentDidMount() {
        this.atualizaListaDeTopicos();
        PubSub.subscribe('novo-topico', function () {
            this.atualizaListaDeTopicos();                     
        }.bind(this))

        PubSub.subscribe('filtra-lista', function (msg, descTag) {
            this.filtraListaPorTag(descTag);
            this.setState({ listaDeTopicos: this.state.listaDeTopicos });   
        }.bind(this))        
    }

    atualizaListaDeTopicos() {        
        var listaDeTopicos = JSON.parse(localStorage.getItem('topicos'));
        this.state.listaDeTopicos = listaDeTopicos;
        this.setState({ listaDeTopicos: this.state.listaDeTopicos }); 
    }

    filtraListaPorTag(descTag) {
        if (descTag === '') {
            this.atualizaListaDeTopicos();
        }
        this.state.descTag = descTag;
        var listaFiltrada = this.state.listaDeTopicos.filter(this.filtraTag);
        this.state.listaDeTopicos = listaFiltrada;
        this.setState({ listaDeTopicos: this.state.listaDeTopicos }); 
    }

    filtraTag(topico) {
        var possuiTag = false;
        topico.tags.forEach(tag => {
            if (tag.descTag.includes(this.state.descTag)) {
                possuiTag = true;
            }
        });
        return possuiTag;
    }

    render() {
        return (
            <table className="lista-topicos">
                <tbody>
                    {
                        this.state.listaDeTopicos.map(topico => {
                            return (
                                <tr key={topico.id}>
                                    <td>
                                        <ConteudoTopico topico={topico} />
                                    </td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        );
    }
}