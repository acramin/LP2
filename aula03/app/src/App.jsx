import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
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
          {/* Cartão */}
          <div className="card">
            {/* Cabeçalho */}
            <div className="card-header text-muted">22/04/2021</div>
            {/* Corpo */}
            <div className="card-body d-flex">
              <div className="d-flex align-items-center">
                <i className="fas fa-hdd fa-2x" />
              </div>
              {/* flex-grow 1 : tomar espaço remanescente */}
              <div className="flex-grow-1 ms-2 border">
                <h4 className="text-center">SSD</h4>
                <p className="text-center">SSD Kingston A400-SATA</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* linha para o segundo pedido*/}
      <div className="row">
        {/* controle de colunas para responsividade*/}
        <div className="col-sm-8 col-md-6 m-2">
          {/* Cartão */}
          <div className="card">
            {/* Cabeçalho */}
            <div className="card-header text-muted">20/04/2021</div>
            {/* Corpo */}
            <div className="card-body d-flex">
              <div className="d-flex align-items-center">
                <i className="fas fa-book fa-2x" />
              </div>
              {/* flex-grow 1 : tomar espaço remanescente */}
              <div className="flex-grow-1 ms-2 border">
                <h4 className="text-center">Livro</h4>
                <p className="text-center">
                  Concrete Mathematics - Donald Knuth
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* linha para o terceiro pedido*/}
      <div className="row">
        {/* controle de colunas para responsividade*/}
        <div className="col-sm-8 col-md-6 m-2">
          {/* Cartão */}
          <div className="card">
            {/* Cabeçalho */}
            <div className="card-header text-muted">22/04/2021</div>
            {/* Corpo */}
            <div className="card-body d-flex">
              <div className="d-flex align-items-center">
                <i className="fas fa-laptop fa-2x" />
              </div>
              {/* flex-grow 1 : tomar espaço remanescente */}
              <div className="flex-grow-1 ms-2 border">
                <h4 className="text-center">Notebook</h4>
                <p className="text-center">Notebook Dell - 8Gb - i5</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
