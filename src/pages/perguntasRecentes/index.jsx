import React, { useState } from "react";
import "./style.css";

import IconPerguntas from "../../assets/images/iconPerguntas.png";
import Mais from "../../assets/images/mais.png";
import Menos from "../../assets/images/menos.png";

const perguntas = [
  {
    titulo: "O que é a CoreSync AI?",
    texto:
      "Uma plataforma que conecta robôs, inteligência artificial e monitoramento em tempo real para automatizar operações empresariais."
  },
  {
    titulo: "A plataforma funciona para qualquer empresa?",
    texto:
      "Sim. Nossa solução pode ser adaptada para logística, indústria, centros de distribuição, hospitais e diversos segmentos."
  },
  {
    titulo: "É possível integrar com ERP ou CRM?",
    texto:
      "Sim. Possuímos integração com diversos sistemas empresariais através de APIs."
  },
  {
    titulo: "Como funciona a implementação?",
    texto:
      "Nossa equipe realiza o planejamento, instalação, integração e treinamento da operação."
  },
  {
    titulo: "O sistema é seguro?",
    texto:
      "Toda comunicação é criptografada e seguimos boas práticas de segurança e proteção de dados."
  },
  {
    titulo: "Como posso solicitar uma demonstração?",
    texto:
      "Basta preencher o formulário no final da página para que nossa equipe entre em contato."
  }
];

const Perguntas = () => {

  const [ativo, setAtivo] = useState(0);

  return (

    <section className="faq">

      <div className="faq-header">

        <div>

          <span>FAQ</span>

          <h1>Perguntas Frequentes</h1>

          <p>
            Tire suas dúvidas sobre automação,
            inteligência artificial e nossa plataforma.
          </p>

        </div>

        <img src={IconPerguntas} alt="" />

      </div>

      <div className="faq-lista">

        {perguntas.map((item, index) => (

          <FAQItem
            key={index}
            item={item}
            aberto={ativo === index}
            onClick={() => setAtivo(ativo === index ? -1 : index)}
          />

        ))}

      </div>

    </section>

  );

};

function FAQItem({ item, aberto, onClick }) {

  return (

    <div className={`faq-item ${aberto ? "ativo" : ""}`}>

      <button onClick={onClick}>

        <span>{item.titulo}</span>

        <img
          src={aberto ? Menos : Mais}
          alt=""
        />

      </button>

      <div className={`faq-resposta ${aberto ? "aberta" : ""}`}>

        <p>{item.texto}</p>

      </div>

    </div>

  );

}

export default Perguntas;