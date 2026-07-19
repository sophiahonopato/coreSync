import "./style.css";
import ImageMain from "../../assets/images/imageMain.png";
import { motion } from "framer-motion";

const Main = () => {
  return (
    <section className="container-main">
      
<motion.img
  src={ImageMain}
  alt=""
  className="background-main"
  draggable={false}
  initial={{ scale: 1.15, opacity: 0 }}
  animate={{
    scale: 1,
    opacity: 1,
    y: [0, -12, 0],
  }}
  transition={{
    opacity: {
      duration: 1.2,
    },
    scale: {
      duration: 1.8,
      ease: "easeOut",
    },
    y: {
      duration: 6,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut",
    },
  }}
/>
      <div className="overlay"></div>

      <motion.div
        className="conteudo-main"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.18,
            },
          },
        }}
      >

        <motion.div
          className="titulo-main"
          variants={{
            hidden: {
              opacity: 0,
              y: 60,
            },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.8,
                ease: "easeOut",
              },
            },
          }}
        >
          <h1>Controle o futuro</h1>
          <h1>da automação.</h1>
        </motion.div>

        <motion.div
          className="container-paragrafo-main"
          variants={{
            hidden: {
              opacity: 0,
              y: 40,
            },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.7,
              },
            },
          }}
        >
          <p>
            Automação avançada com monitoramento em tempo real,
            análise de dados e controle total da operação.
          </p>
        </motion.div>

        <motion.div
          className="botoes-main"
          variants={{
            hidden: {
              opacity: 0,
              y: 40,
            },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.7,
              },
            },
          }}
        >

          <motion.button
            className="btn-main1"
            whileHover={{
              scale: 1.05,
              y: -3,
            }}
            whileTap={{
              scale: 0.95,
            }}
          >
            Começar agora
          </motion.button>

          <motion.button
            className="btn-main2"
            whileHover={{
              scale: 1.05,
              y: -3,
            }}
            whileTap={{
              scale: 0.95,
            }}
          >
            Explorar soluções
          </motion.button>

        </motion.div>

      </motion.div>

    </section>
  );
};

export default Main;