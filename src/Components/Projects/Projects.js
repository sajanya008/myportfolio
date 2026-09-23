import { motion } from "framer-motion";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import "./Projects.css";

import topshineImg from "../../Components/Images/topshine.png";
import zivexImg from "../../Components/Images/image.png";
import portfolioImg from "../../Components/Images/portfolio.png"

const PROJECTS = [
  {
    title: "TopShine",
    subtitle: "Cleaning Service Platform",
    desc: "A full-stack cleaning service platform with secure admin authentication, complete service and provider management with CRUD operations, Cloudinary-powered image uploads, WhatsApp-integrated customer booking, and a responsive browsing experience backed by a MongoDB database.",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Cloudinary"],
    live: "https://topshine-cleaning-service.netlify.app/",
    github: "https://github.com/sajanya008/TopShine-Cleaning-Service",
    image: topshineImg, 
  },
  {
    title: "Zivex",
    subtitle: "Courier Service Platform",
      desc: "A front-end courier service platform built with React, featuring shipment booking, tracking, and delivery status displays through a clean, responsive interface.",
  stack: ["React.js","Bootstrap", "CSS"],
    live: "https://zivexx.netlify.app/",
    github: "https://github.com/sajanya008/Zivex-Delivery",
    image: zivexImg,
  }, 
  {
    title: "This Portfolio",
    subtitle: "Personal Portfolio Website",
    desc: "The luxury minimal site you're viewing right now — a glassmorphic, motion-driven portfolio built to present full-stack work with an agency-grade level of craft.",
    stack: ["React.js", "Framer Motion", "React Router"],
    live: "https://portfolio.netlify.app/",
    github: "https://github.com/sajanya008/myportfolio",
    image: portfolioImg,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 34 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
};

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="projects__header">
          <p className="eyebrow">Featured Projects</p>
          <h2 className="section-heading">Selected work, engineered end to end.</h2>
          <p className="section-sub">
            From authenticated e-commerce to healthcare scheduling — four builds that show
            the same care applied to different problems.
          </p>
        </div>

        <div className="projects__list">
          {PROJECTS.map((p, i) => (
            <motion.article
              className="project-card glass"
              key={p.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: (i % 2) * 0.1 }}
            >
              <div className="project-card__media">
                <img src={p.image} alt={p.title} className="project-card__img" />
                <span className="project-card__index">0{i + 1}</span>
              </div>

              <div className="project-card__body">
                <h3 className="project-card__title">{p.title}</h3>
                <p className="project-card__subtitle">{p.subtitle}</p>
                <p className="project-card__desc">{p.desc}</p>

                <div className="project-card__stack">
                  {p.stack.map((t) => (
                    <span className="tag" key={t}>{t}</span>
                  ))}
                </div>

                <div className="project-card__links">
                  <a href={p.live} className="btn btn-primary magnetic" target="_blank" rel="noreferrer">
                    Live Demo <FiArrowUpRight size={16} />
                  </a>
                  <a href={p.github} className="btn btn-outline magnetic" target="_blank" rel="noreferrer">
                    <FiGithub size={16} /> GitHub
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
