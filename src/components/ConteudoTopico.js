import React, { Component } from 'react';

// Components
import TagTopico from './TagTopico';

// Icones
import ExcluirICone from '../assets/images/Trash.png';

export default class ConteudoTopico extends Component {

    render() {
        return (
            <div className="linha">
                <div className="col-1" >

                    <div className="conteudo-topico">
                        <label className="titulo-topico">{this.props.topico.title}</label>
                        <div className="link-topico">
                            <label>{this.props.topico.link}</label>
                            <a href="#"><img src={ExcluirICone} alt="Adicionar" className="delete-topico"></img></a>
                        </div>
                        <div className="tags-topico">
                            {
                                this.props.topico.tags.map(tag => {
                                    return (
                                        <TagTopico key={tag.id} tag={tag} />
                                    );
                                })
                            }
                        </div>

                    </div>

                </div>
            </div>
        );
    }
}