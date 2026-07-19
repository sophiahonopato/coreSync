import "./style.css";
import ImageMain from "../../assets/images/imageMain.png";
import react from "react"


const Main = () => {
  return (
    <section className="container-main">

      <img
        src={ImageMain}
        alt=""
        className="background-main"
        draggable={false}
      />

      <div className="overlay"></div>

      <div className="conteudo-main">

        <div className="titulo-main">
          <h1>Controle o futuro</h1>
          <h1>da automação.</h1>
        </div>

        <div className="container-paragrafo-main">
          <p>
            Automação avançada com monitoramento em tempo real,
            análise de dados e controle total da operação.
          </p>
        </div>

        <div className="botoes-main">

          <button className="btn-main1">
            Começar agora
          </button>

          <button className="btn-main2">
            Explorar soluções
          </button>

        </div>

      </div>

    </section>
  );
};

export default Main;