import React, { useEffect, useRef } from "react";
import "./style.css";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import IconNews from "../../assets/images/iconNews.png";
import Blog1 from "../../assets/images/blog1.png";
import Blog2 from "../../assets/images/blog2.png";
import Blog3 from "../../assets/images/blog3.png";

gsap.registerPlugin(ScrollTrigger);

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

  const page = useRef();

  useEffect(() => {

    const ctx = gsap.context(() => {

      gsap.from(".news-left > *", {
        y: 70,
        opacity: 0,
        stagger: .15,
        duration: 1,
        ease: "power4.out"
      });

      gsap.from(".news-right", {
        x: 120,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out"
      });

      gsap.from(".blog-card", {
        scrollTrigger: {
          trigger: ".blog-grid",
          start: "top 75%"
        },
        y: 100,
        opacity: 0,
        scale: .9,
        stagger: .18,
        duration: 1,
        ease: "power4.out"
      });

      gsap.from(".pagination", {
        scrollTrigger: {
          trigger: ".pagination",
          start: "top 90%"
        },
        y: 40,
        opacity: 0,
        duration: .8
      });

      gsap.from(".newsletter > *", {
        scrollTrigger: {
          trigger: ".newsletter",
          start: "top 80%"
        },
        y: 60,
        opacity: 0,
        stagger: .15,
        duration: .9
      });

      gsap.utils.toArray(".blog-card").forEach((card) => {

        const img = card.querySelector("img");

        card.addEventListener("mouseenter", () => {

          gsap.to(card, {
            y: -15,
            duration: .35,
            boxShadow: "0 25px 60px rgba(0,180,255,.15)"
          });

          gsap.to(img, {
            scale: 1.08,
            duration: .35
          });

        });

        card.addEventListener("mouseleave", () => {

          gsap.to(card, {
            y: 0,
            duration: .35,
            boxShadow: "0 0 0 rgba(0,0,0,0)"
          });

          gsap.to(img, {
            scale: 1,
            duration: .35
          });

        });

      });

    }, page);

    return () => ctx.revert();

  }, []);

  return (

    <section className="news-page" ref={page}>

      <section className="news-hero">

        <div className="news-hero-content">

          <div className="news-left">

            <h1>
              News &
              <br />
              Insights
            </h1>

            <p>
              Tendências em robótica, inteligência artificial e automação
              empresarial.
            </p>

          </div>

          <div className="news-right">
            <img src={IconNews} alt="" />
          </div>

        </div>

      </section>

      <section className="blog-grid">

        {blogs.map((blog, index) => (

          <div className="blog-card" key={index}>

            <img src={blog.imagem} alt="" />

            <div className="blog-info">

              <span className="blog-tag">
                {blog.categoria}
              </span>

              <h2>{blog.titulo}</h2>

              <p>{blog.descricao}</p>

              <button>Ler artigo</button>

            </div>

          </div>

        ))}

      </section>

      <div className="pagination">

        <div className="page-number active">1</div>
        <div className="page-number">2</div>
        <div className="page-number">3</div>

      </div>

      <section className="newsletter">

        <h2>Receba novos conteúdos</h2>

        <p>
          Inscreva-se gratuitamente e acompanhe todas as novidades da CoreSync.
        </p>

        <div className="newsletter-form">

          <input
            type="email"
            placeholder="Seu melhor e-mail"
          />

          <button>Inscrever-se</button>

        </div>

      </section>

    </section>

  );
};

export default News;