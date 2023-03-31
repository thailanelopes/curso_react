import React, { Component } from 'react';
import './App.css';
import Comentario from './components/Comentario';

class App extends Component {

  state = {
    coments: [
      {
        nome: 'Joao',
        email: 'joao@gmail.com',
        data: new Date(2023, 3, 29),
        mensagem: 'Eu sou um estudante da gataria.'
      },

      {
        nome: 'Maria',
        email: 'maria@gmail.com',
        data: new Date(2023, 3, 29),
        mensagem: 'Eu sou um estudante da gataria.'
      }
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>Gatariaaa miau miau caralho</h1>

        {this.state.coments.map((comentario, indice) => (
      <Comentario
        key= {indice}
        nome= {comentario.nome}
        email= {comentario.email} 
        data= {comentario.data}>
       {comentario.mensagem}
      </Comentario>
        ))}
      </div>
    ); 
  }
}

export default App;
