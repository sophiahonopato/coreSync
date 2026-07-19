import "./style.css";
import { motion } from "framer-motion";

import Logo from "../../assets/images/logo.png";
import IconFooter from "../../assets/images/iconFooter.png";
import Linkedin from "../../assets/images/linkedin.png";
import Whatsapp from "../../assets/images/whatsapp.png";
import Youtube from "../../assets/images/youtube.png";
import Twitter from "../../assets/images/twitter.png";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-top">

        <motion.div
          className="footer-texto"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1>
            Pronto para automatizar sua operação?
          </h1>

          <p>
            Transforme sua empresa com automação inteligente,
            monitoramento em tempo real e uma plataforma criada
            para escalar junto com o seu negócio.
          </p>
        </motion.div>

        <div className="footer-conteudo">

          <motion.div
            className="footer-robo"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.img
              src={IconFooter}
              alt=""
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          <motion.div
            className="footer-form"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            viewport={{ once: true }}
          >

            <input type="text" placeholder="Nome completo" />
            <input type="email" placeholder="Email corporativo" />
            <input type="text" placeholder="Empresa" />
            <input type="text" placeholder="Telefone" />

            <textarea
              rows="4"
              placeholder="Mensagem (opcional)"
            />

            <motion.a
              href="https://www.linkedin.com/in/sophia-honorato-ribeiro-0114b936a/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.04,
                y: -2,
              }}
              whileTap={{
                scale: 0.96,
              }}
              style={{ textDecoration: "none" }}
            >
              <button>
                Solicitar demonstração
              </button>
            </motion.a>

            <span>
              Seus dados estão protegidos. Não enviamos spam.
            </span>

          </motion.div>

        </div>

      </div>

      <motion.div
        className="footer-bottom"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.2,
        }}
        viewport={{ once: true }}
      >

        <div className="footer-logo">
          <img src={Logo} alt="CoreSync AI" />
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

          <motion.a
            href="https://www.linkedin.com/in/sophia-honorato-ribeiro-0114b936a/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -6, scale: 1.15 }}
          >
            <motion.img
              src={Whatsapp}
              alt="WhatsApp"
              animate={{ y: [0, -4, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/sophia-honorato-ribeiro-0114b936a/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -6, scale: 1.15 }}
          >
            <motion.img
              src={Linkedin}
              alt="LinkedIn"
              animate={{ y: [0, -4, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: 0.2,
                ease: "easeInOut",
              }}
            />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/sophia-honorato-ribeiro-0114b936a/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -6, scale: 1.15 }}
          >
            <motion.img
              src={Youtube}
              alt="YouTube"
              animate={{ y: [0, -4, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: 0.4,
                ease: "easeInOut",
              }}
            />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/sophia-honorato-ribeiro-0114b936a/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -6, scale: 1.15 }}
          >
            <motion.img
              src={Twitter}
              alt="Twitter"
              animate={{ y: [0, -4, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: 0.6,
                ease: "easeInOut",
              }}
            />
          </motion.a>

        </div>

      </motion.div>

      <motion.div
        className="linha-footer"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        style={{ transformOrigin: "left" }}
      />

      <motion.div
        className="copyright"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 0.6,
          delay: 0.3,
        }}
        viewport={{ once: true }}
      >
        <p>© 2026 CoreSync. Todos os direitos reservados.</p>
      </motion.div>

    </footer>
  );
};

export default Footer;