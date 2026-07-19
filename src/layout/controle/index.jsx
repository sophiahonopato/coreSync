import React from "react";
import { motion } from "framer-motion";
import "./style.css";

import Relogio from "../../assets/images/blocoRelogio1.png";
import Analise from "../../assets/images/blocoAnalise2.png";
import Gestao from "../../assets/images/blocoGestao3.png";
import Integracao from "../../assets/images/blocoIntegracao4.png";

const cards = [
  {
    lado: "left",
    imagem: Relogio,
    titulo: "Monitoramento 24/7",
    texto:
      "Todos os robôs conectados em tempo real com alertas, métricas e dashboards inteligentes.",
  },
  {
    lado: "right",
    imagem: Analise,
    titulo: "Análise Preditiva",
    texto:
      "IA identifica padrões antes que problemas aconteçam.",
  },
  {
    lado: "left",
    imagem: Gestao,
    titulo: "Gestão Centralizada",
    texto:
      "Controle unidades, operadores e robôs em um único painel.",
  },
  {
    lado: "right",
    imagem: Integracao,
    titulo: "Integração Inteligente",
    texto:
      "ERP, CRM e sistemas industriais conectados sem esforço.",
  },
];

const Controle = () => {
  return (
    <section className="controle">

      <motion.div
        className="controle-header"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <span>PLATAFORMA SaaS</span>

        <h1>
          Um painel inteligente para
          <br />
          controlar toda sua operação.
        </h1>

        <p>
          Monitoramento, análise e integração reunidos em uma única
          plataforma preparada para escalar junto com sua empresa.
        </p>
      </motion.div>

      <div className="timeline">

        <motion.div
          className="linha"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          style={{ transformOrigin: "top" }}
        />

        {cards.map((card, index) => (

          <motion.div
            key={index}
            className={`card ${card.lado}`}
            initial={{
              opacity: 0,
              x: card.lado === "left" ? -80 : 80,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
              delay: index * 0.15,
              ease: "easeOut",
            }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{
              y: -10,
              scale: 1.02,
            }}
          >

            <motion.img
              src={card.imagem}
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

            <div>

              <h2>{card.titulo}</h2>

              <p>{card.texto}</p>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
};

export default Controle;