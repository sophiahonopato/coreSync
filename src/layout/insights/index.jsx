import React from "react";
import "./style.css";

import Blog1 from "../../assets/images/blog1.png";
import Blog2 from "../../assets/images/blog2.png";
import Blog3 from "../../assets/images/blog3.png";

const cards = [
  {
    image: Blog1,
    category: "Robótica",
    title: "Robótica Autônoma\nem Escala",
    text: "O impacto da automação inteligente na logística e gerenciamento de armazéns modernos."
  },
  {
    image: Blog2,
    category: "IA",
    title: "IA na Indústria\n4.0",
    text: "Como a inteligência artificial está redefinindo eficiência operacional e reduzindo custos."
  },
  {
    image: Blog3,
    category: "Integração",
    title: "O Futuro da\nIntegração",
    text: "Por que empresas precisam conectar hardware e software para alcançar vantagem competitiva."
  }
];

const Insights = () => {
  return (
    <section className="container-insights">

      <div className="titulo-insights">

        <h1>Insights sobre o futuro da automação.</h1>

        <p>
          Tendências, pesquisas e inovações em robótica,
          inteligência artificial e transformação digital.
        </p>

      </div>

      <div className="cards-insights">

        {cards.map((card, index) => (

          <div className="card-insight" key={index}>

            <div className="image">

              <img src={card.image} alt="" />

            </div>

            <div className="conteudo-card">

              <span>{card.category}</span>

              <h2>
                {card.title.split("\n").map((linha, i) => (
                  <React.Fragment key={i}>
                    {linha}
                    <br />
                  </React.Fragment>
                ))}
              </h2>

              <p>{card.text}</p>

              <button>Ler artigo</button>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
};

export default Insights;