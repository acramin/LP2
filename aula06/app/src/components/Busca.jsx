import React, { Component } from "react";
import { InputText } from "primereact/inputtext";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { Button } from "primereact/button";

export default class Busca extends Component {
  state = {
    termoDeBusca: "",
  };

  onTermoAlterado = (event) => {
    //console.log(event.target.value);
    this.setState({ termoDeBusca: event.target.value });
  };

  onFormSubmit = (event) => {
    //não deixa o navegador submeter o form
    event.preventDefault();
    this.props.onBuscaRealizada(this.state.termoDeBusca);
  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        {
          // empilhando os filhos
        }
        <div className="flex flex-column">
          {/* ícone à esquerda, largura máxima */}
          <span className="p-input-icon-left w-full">
            <IconField iconPosition="left">
              <InputIcon className="pi pi-search"> </InputIcon>
              <InputText
                value={this.state.termoDeBusca}
                //largura máxima
                className="w-full"
                onChange={this.onTermoAlterado}
                placeholder={this.props.dica}
              />
            </IconField>
          </span>
          <Button label="OK" className="p-button-outlined mt-2" />
        </div>
      </form>
    );
  }
}
Busca.defaultProps = {
  dica: "Digite algo que deseja ver...",
};
