import React, { Component } from "react";
import "./App.css";
import Comentario from "./components/Comentario";

class App extends Component {
  state = {
    coments: [
      {
        nome: "Joao",
        email: "joao@gmail.com",
        data: new Date(2023, 3, 29, 17, 30, 0),
        mensagem: "Eu sou um estudante da gataria.",
      },

      {
        nome: "Maria",
        email: "maria@gmail.com",
        data: new Date(2023, 3, 29, 17, 30, 0),
        mensagem: "Eu sou um estudante da gataria.",
      },
    ],

    novoComentario: {
      nome: "",
      email: "",
      mensagem: "",
    },
  };

  adicionarComentario = (evento) => {
    evento.preventDefault();
    const novoComentario = { ...this.state.novoComentario, data: new Date() };
    this.setState({
      coments: [...this.state.coments, novoComentario],
      novoComentario: { nome: "", email: "", mensagem: "" },
    });
  };

  removerComentario = (comentario) => {
    let lista = this.state.coments;
    lista = lista.filter((c) => c !== comentario);
    this.setState({ coments: lista });
  };

  digitacao = (evento) => {
    const { name, value } = evento.target;
    this.setState({
      novoComentario: { ...this.state.novoComentario, [name]: value },
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Gatariaaa miau miau caralho</h1>

        {this.state.coments.map((comentario, indice) => (
          <Comentario
            key={indice}
            nome={comentario.nome}
            email={comentario.email}
            data={comentario.data}
            onRemove={this.removerComentario.bind(this, comentario)}
          >
            {comentario.mensagem}
          </Comentario>
        ))}

        <form
          method="post"
          onSubmit={this.adicionarComentario}
          className="Novo-Comentario"
        >
          <h2>Adicionar Comentario</h2>

          <div>
            <input
              type="text"
              name="nome"
              value={this.state.novoComentario.nome}
              onChange={this.digitacao}
              required
              placeholder="Digite seu nome"
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              value={this.state.novoComentario.email}
              onChange={this.digitacao}
              required
              placeholder="Digite seu email"
            />
          </div>

          <div>
            <textarea
              type="mensagem"
              value={this.state.novoComentario.mensagem}
              onChange={this.digitacao}
              placeholder="Digite sua  mensagem"
              rows="4"
            />
          </div>

          <button type="submit">Adicionar Comentario</button>
        </form>
      </div>
    );
  }
}

export default App;
