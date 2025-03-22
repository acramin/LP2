import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

const App = () => {
  window.navigator.geolocation.getCurrentPosition((position) =>
    console.log(position) // pede permissão para usar localização em tempo real
  );

  return <div>App</div>;
};

export default App;
