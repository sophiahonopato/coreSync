import "./style.css";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import Logo from "../../assets/images/logo.png";

const MotionLink = motion(Link);
const MotionNavLink = motion(NavLink);

const Header = () => {
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
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
      >

        <MotionLink
          to="/"
          className="logo"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            delay: 0.2,
            duration: 0.5,
          }}
        >
          <img src={Logo} alt="CoreSync AI" />
        </MotionLink>

        <nav>
          {links.map((item, index) => (
            <MotionNavLink
              key={item.nome}
              to={item.link}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.35 + index * 0.1,
                duration: 0.4,
              }}
            >
              {item.nome}
            </MotionNavLink>
          ))}
        </nav>

        <motion.button
          className="btn-header"
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.8,
            duration: 0.5,
          }}
          whileHover={{
            scale: 1.05,
            y: -2,
          }}
          whileTap={{
            scale: 0.96,
          }}
        >
          Solicitar Demo
        </motion.button>

      </motion.div>

    </header>
  );
};

export default Header;