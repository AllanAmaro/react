
import React, { Component } from 'react';
import './css/App.css';
// import CadastroBox from './components/CadastroBox';

class App extends Component {

  constructor() {
    super();
    this.state = { listaTopico: [] };
    localStorage.setItem('topicos', JSON.stringify(this.state.listaTopico));
  }

  render() {
    return (
      <div className="app-plano-de-fundo">
        {this.props.children}        
      </div>
    );
  }
}

export default App;