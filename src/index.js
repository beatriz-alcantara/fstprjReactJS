import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const [estado, setEstado] = useState("ENTRADA"); // declara uma variavel com nome estado e uma fução pra alterar o seu valor com o nome setEstado. o useState define o valor inicial da variável
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(300);

  const [palpite, setPalpite] = useState(150);

  const iniciarJogo = () => {
    setEstado("RODANDO"); // Altera o valor da variável estado para "RODANDO"
  };

  const finalizarJogo = () => {
    setEstado("FIM"); // Altera o valor da variável estado para "FIM"
  };

  const menor = () => {
    setMax(palpite);
    const proxPalpite = parseInt((palpite - min) / 2 + min, 10);
    setPalpite(proxPalpite);
  };

  const maior = () => {
    setMin(palpite);
    const proxPalpite = parseInt((max - palpite) / 2 + palpite, 10);
    setPalpite(proxPalpite);
  };

  if (estado === "ENTRADA") {
    return <button onClick={iniciarJogo}>Iniciar Jogo</button>;
  }

  if (estado === "FIM") {
    return (
      <div>
        <h1> Jogo finalizado </h1>
        <button onClick={iniciarJogo}> Reiniciar Jogo </button>
      </div>
    );
  }

  return (
    <div className="App">
      {" "}
      {/* A propriedade className define o nome da tag que irá representar esse componente */}
      <h2>{palpite}</h2>
      <h5>
        Min: {min} / Max: {max} {/* As chaves incorporam o ambiente JS */}
      </h5>
      <button onClick={maior}>Maior</button>
      <button onClick={finalizarJogo}>Acertou</button>
      <button onClick={menor}>Menor</button>
    </div>
  );
}

const rootElement = document.getElementById("root"); // Esse id root ta no index.html na pasta public
ReactDOM.render(<App />, rootElement);

/* um elemento é uma tag html
   um componente é a junção de dois ou mais elementos
   não podemos retornar dois elementos sem estarem agrupados
   ex.: Não pode
   <h1> Olá </h1>
   <h2> Seja Bem-vindo </h2>

   ex.: Pode
   <div>
    <h1> Olá </h1>
    <h2> Seja Bem-vindo </h2>
   </div>
  */
