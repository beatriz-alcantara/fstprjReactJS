import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const [estado, setEstado] = useState("ENTRADA");
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(300);

  const [palpite, setPalpite] = useState(150);

  const iniciarJogo = () => {
    setEstado("RODANDO");
  };

  const finalizarJogo = () => {
    setEstado("FIM");
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
      <h2>{palpite}</h2>
      <h5>
        Min: {min} / Max: {max}
      </h5>
      <button onClick={maior}>Maior</button>
      <button onClick={finalizarJogo}>Acertou</button>
      <button onClick={menor}>Menor</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
