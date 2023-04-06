import React from "react";
import { formatRelative } from "date-fns";
import { ptBR } from "date-fns/locale";

import "./Comentario.css";
import imagemUsuario from "./images.jpg";
//jsx
const Comentario = (props) => {
  //   const estilo = {
  //     color: "red",
  //     padding: "10px",
  //     fontSize: "30px",
  //   };
  return (
    <div className="Comentario">
      <img class="avatar" src={imagemUsuario} alt={props.nome} />
      <div class="conteudo">
        <h2 class="nome">{props.nome}</h2>
        <p className="email">{props.email}</p>
        <p class="mensagem">{props.children}</p>
        <p class="data">
          {formatRelative(props.data, new Date(), { locale: ptBR })}
        </p>
        <button onClick={props.onRemove}>&times;</button>
      </div>
    </div>
  );
};

export default Comentario;
