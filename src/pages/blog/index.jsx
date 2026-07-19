import React from "react";
import { motion } from "framer-motion";
import "./style.css";

import CapaBlog from "../../assets/images/capaBlog.png";
import Blog1 from "../../assets/images/blog1.png";
import Blog2 from "../../assets/images/blog2.png";
import Blog3 from "../../assets/images/blog3.png";

const relatedPosts = [
  {
    image: Blog1,
    title: "Robótica Autônoma",
  },
  {
    image: Blog2,
    title: "IA na Indústria 4.0",
  },
  {
    image: Blog3,
    title: "Integração Inteligente",
  },
];

const Blog = () => {
  return (
    <section className="blog-page">

      <motion.div
        className="blog-hero"
        initial={{ opacity: 0, y: 70 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >

        <span className="blog-category">
          Inteligência Artificial
        </span>

        <h1>
          Como a Inteligência Artificial está transformando
          a indústria moderna.
        </h1>

        <div className="blog-meta">
          <span>CoreSync AI</span>
          <span>•</span>
          <span>18 Julho 2026</span>
          <span>•</span>
          <span>8 min de leitura</span>
        </div>

      </motion.div>

      <motion.div
        className="blog-cover"
        initial={{ opacity: 0, scale: .92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: .8 }}
        viewport={{ once: true }}
      >

        <img src={CapaBlog} alt="" />

      </motion.div>

      <motion.div
        className="blog-content"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .8 }}
        viewport={{ once: true }}
      >

        <p className="blog-intro">
          A inteligência artificial deixou de ser uma tendência futurista para
          se tornar um dos pilares da transformação digital. Empresas que
          adotam IA conseguem reduzir custos, aumentar produtividade e tomar
          decisões muito mais rápidas.
        </p>

        <h2>Por que a IA está mudando tudo?</h2>

        <p>
          Algoritmos modernos conseguem analisar milhões de informações em
          segundos, identificando padrões impossíveis para seres humanos.
        </p>

        <p>
          Isso permite automatizar processos, prever falhas, reduzir perdas e
          aumentar significativamente a eficiência operacional.
        </p>

        <blockquote>
          "As empresas que adotarem IA primeiro serão as líderes da próxima
          década."
        </blockquote>

        <motion.img
          className="content-image"
          src={Blog1}
          alt=""
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
        />

        <h2>Automação Inteligente</h2>

        <p>
          Robôs inteligentes trabalham 24 horas por dia, coletando dados em
          tempo real e tomando decisões automaticamente através de modelos de
          aprendizado de máquina.
        </p>

        <motion.div
          className="highlight-box"
          initial={{ opacity: 0, scale: .95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
        >

          <h3>Benefícios</h3>

          <ul>
            <li>Redução de custos operacionais.</li>
            <li>Aumento da produtividade.</li>
            <li>Previsão de falhas.</li>
            <li>Monitoramento em tempo real.</li>
            <li>Maior segurança.</li>
          </ul>

        </motion.div>

        <motion.img
          className="content-image"
          src={Blog2}
          alt=""
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
        />

        <h2>O futuro da automação</h2>

        <p>
          Com a evolução da IA Generativa e dos robôs autônomos, a tendência é
          que cada vez mais empresas utilizem plataformas inteligentes para
          controlar operações completas.
        </p>

        <p>
          Sistemas integrados serão capazes de aprender continuamente,
          reduzindo desperdícios e aumentando a competitividade das empresas.
        </p>

      </motion.div>

      <section className="related-posts">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
        >
          Artigos relacionados
        </motion.h2>

        <div className="related-grid">

          {relatedPosts.map((post, index) => (

            <motion.div
              key={index}
              className="related-card"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: .6,
                delay: index * .15,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
            >

              <motion.img
                src={post.image}
                alt={post.title}
                animate={{
                  y: [0, -6, 0],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * .2,
                }}
              />

              <h3>{post.title}</h3>

            </motion.div>

          ))}

        </div>

      </section>

    </section>
  );
};

export default Blog;