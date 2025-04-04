import React, { Component } from "react";
import Busca from "./Busca";
import Lista from "./Lista";

class App extends Component {
  onBuscaRealizada = (termo) => {
    console.log(termo);
  };

  render() {
    return (
      <div className="grid justify-content-center m-auto w-9 border-round border-1 border-400">
        <div className="col-12">
          <h1>Exibir uma lista de...</h1>
        </div>
        <div className="col-8">
          <Busca />
        </div>
        <div className="col-8">
          <Lista />
        </div>
        <p>{import.meta.env.VITE_PEXELS_KEY}</p>
      </div>
    );
  }
}
export default App;
