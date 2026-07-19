import React, { useState, useEffect, useRef } from "react";
import "./style.css";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import IconPerguntas from "../../assets/images/iconPerguntas.png";
import Mais from "../../assets/images/mais.png";
import Menos from "../../assets/images/menos.png";

gsap.registerPlugin(ScrollTrigger);

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

  const page = useRef();

  useEffect(() => {

    const ctx = gsap.context(() => {

      gsap.from(".faq-header > *", {
        y: 60,
        opacity: 0,
        stagger: .15,
        duration: 1,
        ease: "power4.out"
      });

      gsap.from(".faq-item", {
        scrollTrigger: {
          trigger: ".faq-lista",
          start: "top 80%"
        },
        y: 70,
        opacity: 0,
        stagger: .12,
        duration: .8,
        ease: "power3.out"
      });

      gsap.utils.toArray(".faq-item").forEach(card => {

        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            y: -6,
            duration: .3
          });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            y: 0,
            duration: .3
          });
        });

      });

    }, page);

    return () => ctx.revert();

  }, []);

  return (

    <section className="faq" ref={page}>

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

  const resposta = useRef();

  useEffect(() => {

    if (!resposta.current) return;

    if (aberto) {

      gsap.fromTo(
        resposta.current,
        {
          height: 0,
          opacity: 0
        },
        {
          height: "auto",
          opacity: 1,
          duration: .45,
          ease: "power2.out"
        }
      );

    }

  }, [aberto]);

  return (

    <div className={`faq-item ${aberto ? "ativo" : ""}`}>

      <button onClick={onClick}>

        <span>{item.titulo}</span>

        <img
          src={aberto ? Menos : Mais}
          alt=""
        />

      </button>

      {aberto && (

        <div
          className="faq-resposta"
          ref={resposta}
        >
          <p>{item.texto}</p>
        </div>

      )}

    </div>

  );

}

export default Perguntas;