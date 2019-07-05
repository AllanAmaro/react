import React, { Component } from 'react';

export default class InputCustomizado extends Component {

    render() {
        return (
            <div className={this.props.className} >                
                <input
                    className="custom-input"
                    id={this.props.id} 
                    type={this.props.type} 
                    name={this.props.name}
                    value={this.props.value} 
                    onChange={this.props.onChange}
                    placeholder={this.props.placeholder} />
            </div>
        );
    }
}
