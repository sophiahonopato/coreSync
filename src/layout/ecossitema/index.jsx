import React from "react";
import "./style.css";
import { motion } from "framer-motion";

import RoboEco from "../../assets/images/sectionRobo1.png";
import IntegracaoEco from "../../assets/images/sectionIntegracao2.png";
import PlataformaEco from "../../assets/images/sectionPlataforma3.png";
import AnaliseEco from "../../assets/images/sectionAnalise4.png";

const cards = [
  {
    img: RoboEco,
    numero: "01",
    titulo: "Robótica Autônoma",
    texto:
      "Robôs inteligentes com sensores avançados, navegação autônoma e decisões em tempo real.",
    footer: "Disponibilidade • 24/7",
  },
  {
    img: IntegracaoEco,
    numero: "02",
    titulo: "Integração Empresarial",
    texto:
      "Conecte ERPs, CRMs e plataformas corporativas através de APIs inteligentes.",
    footer: "APIs • Cloud • ERP",
  },
  {
    img: PlataformaEco,
    numero: "03",
    titulo: "Controle Centralizado",
    texto:
      "Dashboard completo para acompanhar operações, robôs e indicadores em tempo real.",
    footer: "Dashboard Inteligente",
  },
  {
    img: AnaliseEco,
    numero: "04",
    titulo: "Análise Inteligente",
    texto:
      "IA identifica padrões operacionais e antecipa falhas antes que aconteçam.",
    footer: "Machine Learning",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
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

const Ecossistema = () => {
  return (
    <section className="container-eco">

      <div className="conteudo-eco">

        <motion.div
          className="container-textos"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true, amount: .3 }}
        >

          <div className="titulo-ecossistema">
            <h1>Um ecossistema completo de automação inteligente.</h1>
          </div>

          <div className="texto-ecossistema">
            <p>
              Unimos robótica autônoma, inteligência artificial e uma
              plataforma SaaS integrada para transformar operações
              empresariais com eficiência, controle e escalabilidade.
            </p>
          </div>

        </motion.div>

        <motion.div
          className="cards-eco"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: .2 }}
        >

          {cards.map((card) => (

            <motion.div
              key={card.numero}
              className="quadro-eco"
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

              <div className="eco-top">

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

                <span>{card.numero}</span>

              </div>

              <h2>{card.titulo}</h2>

              <p>{card.texto}</p>

              <div className="eco-line"></div>

              <small>{card.footer}</small>

            </motion.div>

          ))}

        </motion.div>

      </div>

    </section>
  );
};

export default Ecossistema;