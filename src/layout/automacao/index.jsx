import React from "react";
import "./style.css";

import Eficiencia from "../../assets/images/sectionAutomacao1.png";
import Processos from "../../assets/images/sectionAutomacao2.png";
import Sistemas from "../../assets/images/sectionAutomacao3.png";

const Automacao = () => {
  return (
    <section className="container-automacao">

      <div className="titulo-automacao">

        <h1>A automação tradicional não é suficiente.</h1>

        <p>
          Os desafios operacionais modernos exigem mais do que processos
          automatizados isolados. É preciso inteligência, integração e
          controle em tempo real.
        </p>

      </div>

      <div className="cards-automacao">

        <div className="card-automacao">

          <img src={Eficiencia} alt="" />

          <h2>Baixa Eficiência</h2>

          <p>
            Falta de monitoramento inteligente e análise de dados compromete
            a performance e impede decisões estratégicas em tempo real.
          </p>

        </div>

        <div className="card-automacao destaque">

          <img src={Processos} alt="" />

          <h2>Processos Manuais</h2>

          <p>
            Empresas ainda dependem de tarefas repetitivas e intervenções
            humanas que reduzem produtividade e aumentam custos.
          </p>

        </div>

        <div className="card-automacao">

          <img src={Sistemas} alt="" />

          <h2>Sistemas Desconectados</h2>

          <p>
            Robôs, softwares e equipes operam sem integração, criando falhas
            de comunicação e perda de controle operacional.
          </p>

        </div>

      </div>

    </section>
  );
};

export default Automacao;