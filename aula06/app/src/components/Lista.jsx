import React, { Component } from "react";
import Imagem from "./Imagem";

const Lista = ({ pics }) => {
  return pics.map((pic, key) => <Imagem pic={pic.src.small} key={key} />);
};
export default Lista;