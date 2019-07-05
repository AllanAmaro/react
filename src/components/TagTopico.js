import React, { Component } from 'react';
import FecharIcone from '../assets/images/X.png';

export default class TagTopico extends Component {

    render() {
        return (
            <div className="tag">
                <label>{this.props.tag.descTag}</label>
                <a href="#"><img src={FecharIcone} alt="Adicionar"></img></a>
            </div>
        );
    }
}
