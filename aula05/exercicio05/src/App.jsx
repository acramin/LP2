import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import React, { Component } from "react";
import { Button } from "react-bootstrap";

export class App extends Component {
  render() {
    return (
      <div className="container mt-2">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <Card>
              <Card.Header>Mega sena</Card.Header>
              <Card.Body style={{ height: "6rem" }}>

                <Button variant="light"> Gerar Jogo </Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
