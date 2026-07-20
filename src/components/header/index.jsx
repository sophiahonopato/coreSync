import "./style.css";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Logo from "../../assets/images/logo.png";

const MotionLink = motion(Link);
const MotionNavLink = motion(NavLink);

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { nome: "Home", link: "/" },
    { nome: "FAQ", link: "/perguntas" },
    { nome: "News", link: "/news" },
    { nome: "Blog", link: "/blog" },
  ];

  return (
    <header className="header">
      <div className="header-glow"></div>

      <motion.div
        className="container-header"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: .8 }}
      >
        <MotionLink
          to="/"
          className="logo"
          onClick={() => setMenuOpen(false)}
        >
          <img src={Logo} alt="CoreSync AI" />
        </MotionLink>

        <nav className="desktop-nav">
          {links.map((item) => (
            <MotionNavLink key={item.nome} to={item.link}>
              {item.nome}
            </MotionNavLink>
          ))}
        </nav>

        <motion.button
          className="btn-header"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: .96 }}
        >
          Solicitar Demo
        </motion.button>

        {/* Botão Hamburger */}
        <button
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </motion.div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            transition={{ duration: .3 }}
          >
            {links.map((item) => (
              <NavLink
                key={item.nome}
                to={item.link}
                onClick={() => setMenuOpen(false)}
              >
                {item.nome}
              </NavLink>
            ))}

            <button className="btn-mobile">
              Solicitar Demo
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;