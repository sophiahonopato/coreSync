import React, { useRef } from "react";
import "./style.css";

import RoboEco from "../../assets/images/sectionRobo1.png";
import IntegracaoEco from "../../assets/images/sectionIntegracao2.png";
import PlataformaEco from "../../assets/images/sectionPlataforma3.png";
import AnaliseEco from "../../assets/images/sectionAnalise4.png";

import Plasma from "../../plasma/Plasma";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Ecossistema = () => {

    const sectionRef = useRef();

    useGSAP(() => {

        gsap.from(".titulo-ecossistema h1", {
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 75%"
            },
            y: 80,
            opacity: 0,
            duration: 1,
            ease: "power4.out"
        });

        gsap.from(".texto-ecossistema", {
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 75%"
            },
            y: 40,
            opacity: 0,
            duration: .8,
            delay: .2
        });

        gsap.from(".quadro-eco", {
            scrollTrigger: {
                trigger: ".cards-eco",
                start: "top 75%"
            },
            y: 120,
            opacity: 0,
            stagger: .18,
            duration: .9,
            ease: "power4.out"
        });

        gsap.to(".quadro-eco img", {
            y: -10,
            duration: 2,
            repeat: -1,
            yoyo: true,
            stagger: .2,
            ease: "sine.inOut"
        });

        gsap.fromTo(".plasma-container",
            {
                opacity: .15
            },
            {
                opacity: .45,
                duration: 2,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%"
                }
            }
        );

        gsap.utils.toArray(".quadro-eco").forEach((card) => {

            card.addEventListener("mousemove", (e) => {

                const rect = card.getBoundingClientRect();

                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const rotateY = (x / rect.width - .5) * 12;
                const rotateX = -(y / rect.height - .5) * 12;

                gsap.to(card, {
                    rotateX,
                    rotateY,
                    transformPerspective: 1200,
                    duration: .35
                });

            });

            card.addEventListener("mouseenter", () => {

                gsap.to(card, {
                    y: -12,
                    boxShadow: "0 0 45px rgba(55,199,255,.25)",
                    duration: .3
                });

            });

            card.addEventListener("mouseleave", () => {

                gsap.to(card, {
                    rotateX: 0,
                    rotateY: 0,
                    y: 0,
                    boxShadow: "0 0 0 rgba(0,0,0,0)",
                    duration: .4
                });

            });

        });

    }, []);

    return (

        <section className="container-eco" ref={sectionRef}>

            <Plasma
                color="#00bfff"
                speed={0.3}
                opacity={0.35}
                scale={1.4}
            />

            <div className="conteudo-eco">

                <div className="container-textos">

                    <div className="titulo-ecossistema">
                        <h1>Um ecossistema completo de automação</h1>
                        <h1>inteligente.</h1>
                    </div>

                    <div className="texto-ecossistema">
                        <p>
                            Unimos robótica autônoma, inteligência artificial e uma
                            plataforma SaaS integrada para transformar operações
                            empresariais com eficiência, controle e escalabilidade.
                        </p>
                    </div>

                </div>

                <div className="cards-eco">

    <div className="quadro-eco">

        <div className="eco-top">
            <img src={RoboEco} alt="" />
            <span>01</span>
        </div>

        <h2>Robótica Autônoma</h2>

        <p>
            Robôs inteligentes com sensores avançados, navegação autônoma e
            decisões em tempo real.
        </p>

        <div className="eco-line"></div>

        <small>Disponibilidade • 24/7</small>

    </div>

    <div className="quadro-eco">

        <div className="eco-top">
            <img src={IntegracaoEco} alt="" />
            <span>02</span>
        </div>

        <h2>Integração Empresarial</h2>

        <p>
            Conecte ERPs, CRMs e plataformas corporativas através de APIs
            inteligentes.
        </p>

        <div className="eco-line"></div>

        <small>APIs • Cloud • ERP</small>

    </div>

    <div className="quadro-eco">

        <div className="eco-top">
            <img src={PlataformaEco} alt="" />
            <span>03</span>
        </div>

        <h2>Controle Centralizado</h2>

        <p>
            Dashboard completo para acompanhar operações, robôs e indicadores
            em tempo real.
        </p>

        <div className="eco-line"></div>

        <small>Dashboard Inteligente</small>

    </div>

    <div className="quadro-eco">

        <div className="eco-top">
            <img src={AnaliseEco} alt="" />
            <span>04</span>
        </div>

        <h2>Análise Inteligente</h2>

        <p>
            IA identifica padrões operacionais e antecipa falhas antes que
            aconteçam.
        </p>

        <div className="eco-line"></div>

        <small>Machine Learning</small>

    </div>

</div>

            </div>

        </section>

    );
};

export default Ecossistema;