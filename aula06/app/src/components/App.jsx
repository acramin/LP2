import React, { Component } from "react";
import Busca from "./Busca";
import Lista from "./Lista";
import PexelsLogo from "./PexelsLogo";
import { createClient } from "pexels";

class App extends Component {
  state = {
    pics: [],
  };
  pexelsClient = null;
  PEXELS_KEY = import.meta.env.VITE_PEXELS_KEY;

  onBuscaRealizada = (termo) => {
    this.pexelsClient.photos
      .search({
        query: termo,
      })
      .then((pics) => this.setState({ pics: pics.photos }));
  };

  componentDidMount() {
    this.pexelsClient = createClient(this.PEXELS_KEY);
  }

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
