import React from "react";
import { motion } from "framer-motion";
import "./style.css";

import Eficiencia from "../../assets/images/sectionAutomacao1.png";
import Processos from "../../assets/images/sectionAutomacao2.png";
import Sistemas from "../../assets/images/sectionAutomacao3.png";

const cards = [
  {
    img: Eficiencia,
    titulo: "Baixa Eficiência",
    texto:
      "Falta de monitoramento inteligente e análise de dados compromete a performance e impede decisões estratégicas em tempo real.",
    destaque: false,
  },
  {
    img: Processos,
    titulo: "Processos Manuais",
    texto:
      "Empresas ainda dependem de tarefas repetitivas e intervenções humanas que reduzem produtividade e aumentam custos.",
    destaque: true,
  },
  {
    img: Sistemas,
    titulo: "Sistemas Desconectados",
    texto:
      "Robôs, softwares e equipes operam sem integração, criando falhas de comunicação e perda de controle operacional.",
    destaque: false,
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const Automacao = () => {
  return (
    <section className="container-automacao">

      <motion.div
        className="titulo-automacao"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h1>A automação tradicional não é suficiente.</h1>

        <p>
          Os desafios operacionais modernos exigem mais do que processos
          automatizados isolados. É preciso inteligência, integração e
          controle em tempo real.
        </p>
      </motion.div>

      <motion.div
        className="cards-automacao"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className={`card-automacao ${card.destaque ? "destaque" : ""}`}
            variants={item}
            whileHover={{
              y: -10,
              scale: 1.02,
            }}
            transition={{
              type: "spring",
              stiffness: 250,
            }}
          >
            <motion.img
              src={card.img}
              alt={card.titulo}
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <h2>{card.titulo}</h2>

            <p>{card.texto}</p>
          </motion.div>
        ))}
      </motion.div>

    </section>
  );
};

export default Automacao;