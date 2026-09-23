import {
  FiArrowUpRight,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";
import { motion } from "framer-motion";
import "./Hero.css";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};
const item = {
  hidden: {
    y: 35,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Hero() {
  return (
    <section className="hero section" id="home">
      <div className="hero-bg-text">ANEENA</div>
      <div className="hero-gradient" />
      <motion.div
        className="hero-wrapper"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.p
          className="hero-tag"
          variants={item}
        >
          HELLO, I'M
        </motion.p>
        <motion.h1
          className="hero-name"
          variants={item}
        >
          Sajanya Sudhakaran
        </motion.h1>

        <motion.div
          className="hero-role"
          variants={item}
        >
          MERN STACK DEVELOPER
        </motion.div>

        {/* <motion.h2
          className="hero-heading"
          variants={item}
        >
          Crafting elegant digital experiences
          <br />
          through modern web technologies.
        </motion.h2> */}

        {/* <motion.p
          className="hero-description"
          variants={item}
        >
          I design and build modern web applications
          using React, Node.js, Express and MongoDB—
          combining thoughtful design,
          smooth interactions and clean engineering.
        </motion.p> */}

        <motion.div
          className="hero-buttons"
          variants={item}
        >
          <a
            href="#projects"
            className="primary-btn"
          >
            Explore Work

            <FiArrowUpRight />
          </a>

          <a
            href="/Aneena-Shahla-Resume.pdf"
            download
            className="glass-btn"
          >
            Resume

            <FiDownload />
          </a>
        </motion.div>

        <motion.div
          className="hero-socials"
          variants={item}
        >
          <a
            href="https://github.com/sajanya008"
            target="_blank"
            rel="noreferrer"
          >
            <FiGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/sajanya-sudhakaran"
            target="_blank"
            rel="noreferrer"
          >
            <FiLinkedin />
          </a>

          <a href="mailto:sajanyasudhakaran@gmail.com">
            <FiMail />
          </a>
        </motion.div>

        <motion.div
          className="scroll"
          variants={item}
        >
         

          <div className="line">
            <div className="ball"></div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}