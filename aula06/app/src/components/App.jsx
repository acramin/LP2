import React, { Component } from "react";
import Busca from "./Busca";
import Lista from "./Lista";
import PexelsLogo from "./PexelsLogo";
import pexelsClient from "../utils/PexelsClient";

class App extends Component {
  state = {
    pics: [],
  };
  onBuscaRealizada = (termo) => {
    pexelsClient
      .get("/search", {
        params: { query: termo },
      })
      .then((result) => {
        console.log(result);
        //data é um atributo definido pela axios
        //o conteúdo da resposta vem associado a essa chave
        this.setState({ pics: result.data.photos });
      });
  };

  render() {
    return (
      <div className="grid justify-content-center m-auto w-9 border-round border-1 border-400">
        <div className="col-12">
          <PexelsLogo />
        </div>
        <div className="col-12">
          <h1>Exibir uma lista de...</h1>
        </div>
        <div className="col-8">
          <Busca onBuscaRealizada={this.onBuscaRealizada} />
        </div>
        <div className="col-8">
          <Lista pics={this.state.pics} />
        </div>
      </div>
    );
  }
}
export default App;
