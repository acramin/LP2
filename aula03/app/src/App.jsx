import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import Pedido from "./Pedido";
function App() {
  return (
    // container principal
    <div className="container border rounded mt-2">
      {/* linha para o título */}
      <div className="row border-bottom m-2">
        <h1 className="display-5 text-center">Seus Pedidos</h1>
      </div>

      {/* linha para o primeiro pedido */}
      <div className="row">
        {/* controle de colunas para responsividade*/}
        <div className="col-sm-8 col-md-6 m-2">
          <Pedido
            data="22/04/2021"
            icone="fas fa-hdd fa-2x"
            titulo="SSD"
            descricao="SSD Kingston A400 - SATA"
          />
        </div>
      </div>

      {/* linha para o segundo pedido*/}
      <div className="row">
        {/* controle de colunas para responsividade*/}
        <div className="col-sm-8 col-md-6 m-2">
          <Pedido
            data="20/04/2021"
            icone="fas fa-book fa-2x"
            titulo="Livro"
            descricao="Concrete Mathematics - Donald Knuth"
          />
        </div>
      </div>

      {/* linha para o terceiro pedido*/}
      <div className="row">
        {/* controle de colunas para responsividade*/}
        <div className="col-sm-8 col-md-6 m-2">
          <Pedido
            data="21/01/2021"
            icone="fas fa-laptop fa-2x"
            titulo="Notebook"
            descricao="Notebook Dell - 8Gb - i5"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
