import React from "react";
import "./App.css";
import n1 from "./assets/n1.jpeg";

function App() {
  //console.log("Imagem carregada:", import.meta.env.VITE_IMG);
  const container = () => {
    return {
      margin: "auto",
      width: 1280,
      backgroundColor: "#EEE",
      padding: 12,
      borderRadius: 8,
      border: "1px solid black",
      textAlign: "center",
      color: "black",
    };
  };

  const nomes = {
    n1: "José da Silva",
    n2: "Maria da Silva",
    n3: "Jaqueline Mendes",
  };

  return (
    <>
      <div style={container()}>
        <h2>Profissionais da Saúde</h2>
        <div
          style={{
            margin: "auto",
            width: "-webkit-fill-available",
            backgroundColor: "#EEE",
            padding: 12,
            borderRadius: 8,
            border: "1px solid black",
            color: "black",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <div className="card">
            <img src={n1} />
            <p>{nomes.n1}</p>
          </div>
          <div className="card">
          <img src={import.meta.env.VITE_IMG} />
            <p>{nomes.n2}</p>
          </div>
          <div className="card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTx1_fMv7Jw00zeFzF2B657rTdgzkdEgkTBVOztH2Hwkpa5iArxKV1KGo&s" />
            <p>{nomes.n3}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
