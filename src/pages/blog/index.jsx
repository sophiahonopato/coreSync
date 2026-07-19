import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./style.css";

import CapaBlog from "../../assets/images/capaBlog.png";
import Blog1 from "../../assets/images/blog1.png";
import Blog2 from "../../assets/images/blog2.png";
import Blog3 from "../../assets/images/blog3.png";

gsap.registerPlugin(ScrollTrigger);

const Blog = () => {

    const page = useRef();

    useEffect(() => {

        const ctx = gsap.context(() => {

            gsap.from(".blog-hero > *", {
                y: 80,
                opacity: 0,
                duration: 1,
                stagger: .15,
                ease: "power4.out"
            });

            gsap.from(".blog-cover", {
                scale: .85,
                opacity: 0,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".blog-cover",
                    start: "top 85%"
                }
            });

            gsap.utils.toArray(".blog-content h2").forEach(title => {

                gsap.from(title, {
                    x: -60,
                    opacity: 0,
                    duration: .9,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: title,
                        start: "top 82%"
                    }
                });

            });

            gsap.utils.toArray(".blog-content p").forEach(text => {

                gsap.from(text, {
                    y: 35,
                    opacity: 0,
                    duration: .8,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: text,
                        start: "top 90%"
                    }
                });

            });

            gsap.from(".highlight-box", {
                scale: .9,
                opacity: 0,
                duration: 1,
                ease: "back.out(1.4)",
                scrollTrigger: {
                    trigger: ".highlight-box",
                    start: "top 80%"
                }
            });

            gsap.utils.toArray(".content-image").forEach(img => {

                gsap.from(img, {
                    opacity: 0,
                    y: 80,
                    scale: .9,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: img,
                        start: "top 82%"
                    }
                });

            });

            gsap.from(".related-card", {
                y: 80,
                opacity: 0,
                stagger: .18,
                duration: .9,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: ".related-grid",
                    start: "top 80%"
                }
            });

        }, page);

        return () => ctx.revert();

    }, []);

    return (

        <section ref={page} className="blog-page">

            <div className="blog-hero">

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

            </div>

            <div className="blog-cover">
                <img src={CapaBlog} alt="" />
            </div>

            <div className="blog-content">

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
                    "As empresas que adotarem IA primeiro serão as líderes da próxima década."
                </blockquote>

                <img className="content-image" src={Blog1} alt="" />

                <h2>Automação Inteligente</h2>

                <p>
                    Robôs inteligentes trabalham 24 horas por dia, coletando dados em
                    tempo real e tomando decisões automaticamente através de modelos de
                    aprendizado de máquina.
                </p>

                <div className="highlight-box">

                    <h3>Benefícios</h3>

                    <ul>
                        <li>Redução de custos operacionais.</li>
                        <li>Aumento da produtividade.</li>
                        <li>Previsão de falhas.</li>
                        <li>Monitoramento em tempo real.</li>
                        <li>Maior segurança.</li>
                    </ul>

                </div>

                <img className="content-image" src={Blog2} alt="" />

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

            </div>

            <section className="related-posts">

                <h2>Artigos relacionados</h2>

                <div className="related-grid">

                    <div className="related-card">
                        <img src={Blog1} alt="" />
                        <h3>Robótica Autônoma</h3>
                    </div>

                    <div className="related-card">
                        <img src={Blog2} alt="" />
                        <h3>IA na Indústria 4.0</h3>
                    </div>

                    <div className="related-card">
                        <img src={Blog3} alt="" />
                        <h3>Integração Inteligente</h3>
                    </div>

                </div>

            </section>

        </section>

    );

};

export default Blog;