import React from "react";
import "./style.css";
import { motion } from "framer-motion";

import IconNews from "../../assets/images/iconNews.png";
import Blog1 from "../../assets/images/blog1.png";
import Blog2 from "../../assets/images/blog2.png";
import Blog3 from "../../assets/images/blog3.png";

const blogs = [
  {
    imagem: Blog3,
    categoria: "Integração",
    titulo: "O Futuro da Integração Empresarial",
    descricao:
      "Como conectar sistemas inteligentes para criar operações totalmente integradas.",
  },
  {
    imagem: Blog1,
    categoria: "Robótica",
    titulo: "Robótica Autônoma em Escala",
    descricao:
      "Conheça como robôs inteligentes estão revolucionando centros logísticos.",
  },
  {
    imagem: Blog2,
    categoria: "IA",
    titulo: "IA na Indústria 4.0",
    descricao:
      "Descubra como a inteligência artificial está aumentando produtividade e eficiência.",
  },
  {
    imagem: Blog3,
    categoria: "Tecnologia",
    titulo: "Automação Inteligente",
    descricao:
      "As principais tendências que irão transformar empresas nos próximos anos.",
  },
];

const News = () => {
  return (
    <section className="news-page">

      <section className="news-hero">

        <div className="news-hero-content">

          <motion.div
            className="news-left"
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            <h1>
              News &
              <br />
              Insights
            </h1>

            <p>
              Tendências em robótica, inteligência artificial e automação
              empresarial.
            </p>

          </motion.div>

          <motion.div
            className="news-right"
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: .2 }}
            animate={{
              y: [0, -10, 0],
            }}
          >
            <img src={IconNews} alt="" />
          </motion.div>

        </div>

      </section>

      <motion.section
        className="blog-grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: {
            transition: {
              staggerChildren: .18,
            },
          },
        }}
      >

        {blogs.map((blog, index) => (

          <motion.div
            className="blog-card"
            key={index}
            variants={{
              hidden: {
                y: 70,
                opacity: 0,
                scale: .9,
              },
              visible: {
                y: 0,
                opacity: 1,
                scale: 1,
                transition: {
                  duration: .7,
                },
              },
            }}
            whileHover={{
              y: -15,
              scale: 1.03,
              boxShadow: "0 25px 60px rgba(0,180,255,.15)",
            }}
          >

            <motion.img
              src={blog.imagem}
              alt=""
              whileHover={{
                scale: 1.08,
              }}
              transition={{ duration: .3 }}
            />

            <div className="blog-info">

              <span className="blog-tag">
                {blog.categoria}
              </span>

              <h2>{blog.titulo}</h2>

              <p>{blog.descricao}</p>

              <motion.button
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: .95,
                }}
              >
                Ler artigo
              </motion.button>

            </div>

          </motion.div>

        ))}

      </motion.section>

      <motion.div
        className="pagination"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: .6 }}
      >

        <div className="page-number active">1</div>
        <div className="page-number">2</div>
        <div className="page-number">3</div>

      </motion.div>

      <motion.section
        className="newsletter"
        initial={{ y: 70, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: .8 }}
      >

        <h2>Receba novos conteúdos</h2>

        <p>
          Inscreva-se gratuitamente e acompanhe todas as novidades da CoreSync.
        </p>

        <div className="newsletter-form">

          <input
            type="email"
            placeholder="Seu melhor e-mail"
          />

          <motion.button
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: .95,
            }}
          >
            Inscrever-se
          </motion.button>

        </div>

      </motion.section>

    </section>
  );
};

export default News;