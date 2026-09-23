import { motion } from "framer-motion";
import {
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub, FaBootstrap,
} from "react-icons/fa";
import {
  SiExpress, SiMongodb, SiJavascript, SiMongoose, SiPostman, SiJsonwebtokens,
  SiNetlify, SiRender, SiCloudinary,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import "./Skills.css";

const CATEGORIES = [
  {
    name: "Frontend",
    skills: [
      { label: "React.js", icon: <FaReact />, level: 90 },
      { label: "JavaScript (ES6+)", icon: <SiJavascript />, level: 88 },
      { label: "HTML5", icon: <FaHtml5 />, level: 92 },
      { label: "CSS3", icon: <FaCss3Alt />, level: 90 },
      { label: "Bootstrap", icon: <FaBootstrap />, level: 82 },
    ],
  },
  {
    name: "Backend",
    skills: [
      { label: "Node.js", icon: <FaNodeJs />, level: 85 },
      { label: "Express.js", icon: <SiExpress />, level: 85 },
      { label: "REST APIs", icon: <SiJsonwebtokens />, level: 87 },
    ],
  },
  {
    name: "Database",
    skills: [
      { label: "MongoDB", icon: <SiMongodb />, level: 84 },
      { label: "Mongoose", icon: <SiMongoose />, level: 80 },
    ],
  },
  {
    name: "Tools",
    skills: [
      { label: "Git", icon: <FaGitAlt />, level: 86 },
      { label: "GitHub", icon: <FaGithub />, level: 88 },
      { label: "VS Code", icon: <VscVscode />, level: 92 },
      { label: "Postman", icon: <SiPostman />, level: 80 },
      { label: "Cloudinary", icon: <SiCloudinary />, level: 78 },
      { label: "Netlify", icon: <SiNetlify />, level: 82 },
      { label: "Render", icon: <SiRender />, level: 80 },
    ],
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="skills__header">
          <p className="eyebrow">Skills</p>
          <h2 className="section-heading">A stack built for shipping fast, without cutting corners.</h2>
        </div>

        <motion.div
          className="skills__grid"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          {CATEGORIES.map((cat) => (
            <motion.div className="skill-card glass" key={cat.name} variants={item}>
              <h3 className="skill-card__title">{cat.name}</h3>
              <div className="skill-card__list">
                {cat.skills.map((s) => (
                  <div className="skill-row" key={s.label}>
                    <div className="skill-row__label">
                      <span className="skill-row__icon">{s.icon}</span>
                      <span>{s.label}</span>
                    </div>
                    <div className="skill-row__bar">
                      <motion.div
                        className="skill-row__fill"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}