import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import "./About.css";

const TIMELINE = [
  {
    year: "Graduated 2025",
    title: "Msc. Computer Science",
    place: "Providence Women's College, University of Calicut",
    desc: "Postgraduate studies focused on computer science fundamentals, software engineering principles, and modern web development, with practical exposure to full-stack application design and deployment.",
    type: "Education",
  },
  {
    year: "Graduated 2023",
    title: "B.Sc. Computer Science",
    place: "Little Flower Institute of Social Science and Health, University of Calicut",
    desc: "Foundations in computer science, data structures, and software development that led into full-stack web engineering.",
    type: "Education",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container about__grid">
        <motion.div
          className="about__intro"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >
          <p className="eyebrow">About</p>
          <h2 className="section-heading">
            Considered engineering,<br />quietly confident design.
          </h2>
          <p className="section-sub">
          I am a full-stack developer proficient in the MERN stack — React, Node.js, Express, and MongoDB. I focus on building applications that are both functionally robust and intuitive to use, with equal attention given to front-end design and back-end architecture. I am actively seeking opportunities to apply my skills in a professional environment and contribute to meaningful, real-world projects.
          </p>
          <a href="/Sajanya_Sudhakaran_Resume.pdf" download className="btn btn-primary about__cta magnetic">
            <FiDownload size={16} /> Download CV
          </a>
        </motion.div>

        <div className="about__timeline">
          {TIMELINE.map((item, i) => (
            <motion.div
              key={item.title}
              className="timeline-item glass"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.15 }}
            >
              <div className="timeline-item__marker">
                <span className="tag">{item.type}</span>
                <span className="timeline-item__year">{item.year}</span>
              </div>
              <h3 className="timeline-item__title">{item.title}</h3>
              <p className="timeline-item__place">{item.place}</p>
              <p className="timeline-item__desc">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}