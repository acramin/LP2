import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import Pedido from "./Pedido";
import Cartao from "./Cartao";
import Feedback from "./Feedback";

function App() {
  const textoOK = "Já chegou";
  const textoNOK = "Ainda não chegou";
  const funcaoOK = () => alert("Agradecemos a confirmação!");
  const funcaoNOK = () => alert("Verificaremos o ocorrido!");
  const componenteFeedback = // isso aqui é um componente em uma variável, basta colocar ela no return
    (
      <Feedback
        textoOK={textoOK}
        funcaoOK={funcaoOK}
        textoNOK={textoNOK}
        funcaoNOK={funcaoNOK}
      />
    );

  return (
    // container principal
    <div className="container border rounded mt-2">
      {/* linha para o título */}
      <div className="row border-bottom m-2">
        <h1 className="display-5 text-center">Seus Pedidos</h1>
      </div>

      {/* linha 1 */}
      <div className="row my-2">
        {/* controle de colunas para responsividade*/}
        <div className="col-sm-8 col-md-6 m2">
          <Cartao cabecalho="22/04/2021">
            <Pedido
              icone="fas fa-hdd fa-2x"
              titulo="SSD"
              descricao="SSD Kingston A400 - SATA"
            />
            {componenteFeedback}
          </Cartao>
        </div>
        {/* controle de colunas para responsividade*/}
        <div className="col-sm-8 col-md-6 m2">
          <Cartao cabecalho="20/04/2021">
            <Pedido
              icone="fas fa-book fa-2x"
              titulo="Livro"
              descricao="Concrete Mathematics - Donald Knuth"
            />
            {componenteFeedback}
          </Cartao>
        </div>
      </div>

      {/* linha 2 */}
      <div className="row my-2">
        {/* controle de colunas para responsividade*/}
        <div className="col-sm-8 col-md-6 m2">
          <Cartao cabecalho="21/01/2021">
            <Pedido
              icone="fas fa-laptop fa-2x"
              titulo="Notebook"
              descricao="Notebook Dell - 8Gb - i5"
            />
            {componenteFeedback}
          </Cartao>
        </div>
        {/* controle de colunas para responsividade*/}
        <div className="col-sm-8 col-md-6 m2">
          <Cartao cabecalho="28/02/2025">
            <Pedido
              icone="fas fa-mobile fa-2x"
              titulo="Samsung S25"
              descricao="Samsung S25 - 256Gb - azul"
            />
            {componenteFeedback}
          </Cartao>
        </div>
      </div>
    </div>
  );
}

export default App;
