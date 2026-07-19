import "./style.css";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Logo from "../../assets/images/logo.png";
import IconFooter from "../../assets/images/iconFooter.png";
import Linkedin from "../../assets/images/linkedin.png";
import Whatsapp from "../../assets/images/whatsapp.png";
import Youtube from "../../assets/images/youtube.png";
import Twitter from "../../assets/images/twitter.png";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef();

  useGSAP(() => {

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top 75%",
        toggleActions: "play none none reverse",
      }
    });

    tl.from(".footer-texto", {
      x: -120,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    })

    .from(".footer-robo", {
      scale: .5,
      rotate: -20,
      opacity: 0,
      duration: .8,
      ease: "back.out(1.8)"
    }, "-=.5")

    .from(".footer-form input, .footer-form textarea, .footer-form button, .footer-form span", {
      y: 40,
      opacity: 0,
      stagger: .08,
      duration: .6,
      ease: "power2.out"
    }, "-=.4")

    .from(".footer-logo", {
      opacity: 0,
      y: 30,
      duration: .7
    })

    .from(".footer-links > div", {
      opacity: 0,
      y: 30,
      stagger: .15,
      duration: .7
    }, "-=.4")

    .from(".footer-redes img", {
      opacity: 0,
      scale: 0,
      stagger: .1,
      duration: .5,
      ease: "back.out(2)"
    }, "-=.4")

    .from(".linha-footer", {
      scaleX: 0,
      transformOrigin: "left",
      duration: .8
    })

    .from(".copyright", {
      opacity: 0,
      y: 20,
      duration: .5
    });

    gsap.to(".footer-robo img", {
      y: -12,
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    gsap.to(".footer-redes img", {
      y: -6,
      duration: 1.8,
      repeat: -1,
      yoyo: true,
      stagger: .15,
      ease: "sine.inOut"
    });

  }, []);

  return (
    <footer className="footer" ref={footerRef}>

      <div className="footer-top">

        <div className="footer-texto">

          <h1>
            Pronto para automatizar sua operação?
          </h1>

          <p>
            Transforme sua empresa com automação inteligente,
            monitoramento em tempo real e uma plataforma criada
            para escalar junto com o seu negócio.
          </p>

        </div>

        <div className="footer-conteudo">

          <div className="footer-robo">
            <img src={IconFooter} alt="" />
          </div>

          <div className="footer-form">

            <input type="text" placeholder="Nome completo" />
            <input type="email" placeholder="Email corporativo" />
            <input type="text" placeholder="Empresa" />
            <input type="text" placeholder="Telefone" />

            <textarea
              rows="4"
              placeholder="Mensagem (opcional)"
            />

            <button>
              Solicitar demonstração
            </button>

            <span>
              Seus dados estão protegidos. Não enviamos spam.
            </span>

          </div>

        </div>

      </div>

      <div className="footer-bottom">

        <div className="footer-logo">
          <img src={Logo} alt="" />
        </div>

        <div className="footer-links">

          <div>
            <h3>Soluções</h3>
            <a href="">Monitoramento em Tempo Real</a>
            <a href="">Integração de Sistemas</a>
            <a href="">Automação Inteligente</a>
          </div>

          <div>
            <h3>Empresa</h3>
            <a href="">Sobre Nós</a>
            <a href="">Blog & Insights</a>
            <a href="">Carreiras</a>
          </div>

          <div>
            <h3>Regulamentação</h3>
            <a href="">Boas Práticas</a>
            <a href="">Política de Privacidade</a>
            <a href="">Termos de Uso</a>
          </div>

        </div>

        <div className="footer-redes">

          <img src={Whatsapp} alt="" />
          <img src={Linkedin} alt="" />
          <img src={Youtube} alt="" />
          <img src={Twitter} alt="" />

        </div>

      </div>

      <div className="linha-footer"></div>

      <div className="copyright">
        <p>2026 CoreSync.</p>
      </div>

    </footer>
  );
};

export default Footer;