import React, { useRef } from "react";
import "./style.css";

import Relogio from "../../assets/images/blocoRelogio1.png";
import Analise from "../../assets/images/blocoAnalise2.png";
import Gestao from "../../assets/images/blocoGestao3.png";
import Integracao from "../../assets/images/blocoIntegracao4.png";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Controle = () => {

    const sectionRef = useRef();

    useGSAP(() => {

        gsap.from(".controle-header span", {
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 75%"
            },
            opacity: 0,
            y: 25,
            duration: .6
        });

        gsap.from(".controle-header h1", {
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 75%"
            },
            opacity: 0,
            y: 70,
            duration: 1
        });

        gsap.from(".controle-header p", {
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 75%"
            },
            opacity: 0,
            y: 40,
            duration: .8,
            delay: .2
        });

        gsap.from(".linha", {
            scrollTrigger: {
                trigger: ".timeline",
                start: "top 80%",
                end: "bottom 70%",
                scrub: true
            },
            scaleY: 0,
            transformOrigin: "top"
        });

        gsap.from(".card.left", {
            scrollTrigger: {
                trigger: ".timeline",
                start: "top 75%"
            },
            x: -120,
            opacity: 0,
            stagger: .25,
            duration: .9,
            ease: "power4.out"
        });

        gsap.from(".card.right", {
            scrollTrigger: {
                trigger: ".timeline",
                start: "top 75%"
            },
            x: 120,
            opacity: 0,
            stagger: .25,
            duration: .9,
            ease: "power4.out"
        });

        gsap.to(".card img", {
            y: -8,
            duration: 2,
            repeat: -1,
            yoyo: true,
            stagger: .2,
            ease: "sine.inOut"
        });

        gsap.utils.toArray(".card").forEach((card) => {

            card.addEventListener("mouseenter", () => {

                gsap.to(card, {
                    y: -10,
                    boxShadow: "0 0 40px rgba(0,180,255,.25)",
                    duration: .3
                });

            });

            card.addEventListener("mouseleave", () => {

                gsap.to(card, {
                    y: 0,
                    boxShadow: "0 0 0 rgba(0,0,0,0)",
                    duration: .3
                });

            });

        });

    }, []);

    return (
        <section className="controle" ref={sectionRef}>

            <div className="controle-header">

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

            </div>

            <div className="timeline">

                <div className="linha"></div>

                <div className="card left">

                    <img src={Relogio} alt="" />

                    <div>

                        <h2>Monitoramento 24/7</h2>

                        <p>
                            Todos os robôs conectados em tempo real com alertas,
                            métricas e dashboards inteligentes.
                        </p>

                    </div>

                </div>

                <div className="card right">

                    <img src={Analise} alt="" />

                    <div>

                        <h2>Análise Preditiva</h2>

                        <p>
                            IA identifica padrões antes que problemas aconteçam.
                        </p>

                    </div>

                </div>

                <div className="card left">

                    <img src={Gestao} alt="" />

                    <div>

                        <h2>Gestão Centralizada</h2>

                        <p>
                            Controle unidades, operadores e robôs em um único painel.
                        </p>

                    </div>

                </div>

                <div className="card right">

                    <img src={Integracao} alt="" />

                    <div>

                        <h2>Integração Inteligente</h2>

                        <p>
                            ERP, CRM e sistemas industriais conectados sem esforço.
                        </p>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default Controle;