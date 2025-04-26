import React, { Component } from "react";
import Busca from "./Busca";
import Lista from "./Lista";
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
          <h1>Exibir uma lista de...</h1>
        </div>
        <div className="col-8">
          <Busca onBuscaRealizada={this.onBuscaRealizada} />
        </div>
        <div className="col-8">
          {this.state.pics.map((pic, key) => (
            <div key={key}>
              <img src={pic.src.small} />
            </div>
          ))}
        </div>
        <div className="col-8">
          <Lista />
        </div>
      </div>
    );
  }
}
export default App;
