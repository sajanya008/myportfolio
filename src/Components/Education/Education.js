import { motion } from "framer-motion";
import "./Education.css";

const MILESTONES = [
   {
    date: "2023",
    title: "B.Sc. Computer Science",
    org: "University of Calicut",
    points: [
      "Graduated from Little Flower Institute of Social Science and Health, West Kaithapoyil.",
      "Built the foundation in programming and systems that led into full-stack development.",
    ],
  },
 
  {
    date: "Dec 2025 — Jun 2026",
    title: "Msc. Computer Science",
    org: "Providence Women's College, University of Calicut",
    points: [ "Graduated with M.Sc. Computer Science from Providence Women's College, University of Calicut.",
  "Built a final year project using Python and Flutter, deepening full-stack and cross-platform development skills.",
],
      
   
  },
   {
    date: "May 2026",
    title: "MERN Stack Development Certification",
    org: "Zonemac Solutions, Calicut, Kerala",
    points: [
     "Completed a hands-on MERN stack certification program covering full-stack web development.",
    "Built reusable React components, improving maintainability and reducing development time.",
    "Integrated RESTful APIs and collaborated on backend development with Node.js, Express, and MongoDB.",
    "Owned debugging, testing, deployment, and version control using Git and GitHub.",
    "Deployed production applications with frontend hosted on Netlify and backend on Render.",
    "Validated end-to-end MERN proficiency by shipping two production-ready applications.",
  
    ],
  },
 
];

const cardVariant = (fromLeft) => ({
  hidden: { opacity: 0, x: fromLeft ? -40 : 40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
});

export default function Education() {
  return (
    <section id="education" className="education">
      <div className="container">
        <div className="education__header">
          <p className="eyebrow">Education</p>
          <h2 className="section-heading">A short timeline, deliberately dense with output.</h2>
        </div>

        <div className="education__timeline">
          <div className="education__line" />
          {MILESTONES.map((m, i) => (
            <motion.div
              className={`education__row ${i % 2 === 0 ? "education__row--right" : "education__row--left"}`}
              key={m.title}
              variants={cardVariant(i % 2 !== 0)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
            >
              <div className="education__dot" />
              <div className="education-card glass">
                <span className="tag">{m.date}</span>
                <h3 className="education-card__title">{m.title}</h3>
                <p className="education-card__org">{m.org}</p>
                <ul className="education-card__points">
                  {m.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}