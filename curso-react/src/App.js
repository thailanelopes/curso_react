import React from 'react';
import './App.css';
import Comentario from './components/Comentario';


function App() {
  return (
    <div className="App">
      <h1>Gatariaaa miau miau caralho</h1>
      <Comentario nome="Joao" email="joao@gmail.com" data={new Date(2023, 3, 29)}>
        Eu sou um estudante da gataria.
        </Comentario>
      <Comentario nome="Maria" email="maria@gmail.com" data={new Date(2023, 3, 29)}>
      gataria is my religion
        </Comentario>
    </div>
  );
}

export default App;
