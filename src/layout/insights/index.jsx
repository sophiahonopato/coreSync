import React from "react";
import { motion } from "framer-motion";
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

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: {
    opacity: 0,
    y: 60
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut"
    }
  }
};

const Insights = () => {
  return (
    <section className="container-insights">

      <motion.div
        className="titulo-insights"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >

        <h1>Insights sobre o futuro da automação.</h1>

        <p>
          Tendências, pesquisas e inovações em robótica,
          inteligência artificial e transformação digital.
        </p>

      </motion.div>

      <motion.div
        className="cards-insights"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >

        {cards.map((card, index) => (

          <motion.div
            key={index}
            className="card-insight"
            variants={item}
            whileHover={{
              y: -12,
              scale: 1.02,
            }}
            transition={{
              type: "spring",
              stiffness: 260,
            }}
          >

            <div className="image">

              <motion.img
                src={card.image}
                alt=""
                animate={{
                  y: [0, -8, 0]
                }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

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

              <motion.button
                whileHover={{
                  scale: 1.05
                }}
                whileTap={{
                  scale: 0.95
                }}
              >
                Ler artigo
              </motion.button>

            </div>

          </motion.div>

        ))}

      </motion.div>

    </section>
  );
};

export default Insights;