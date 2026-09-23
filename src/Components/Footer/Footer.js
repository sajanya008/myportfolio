import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from "react-icons/fi";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__logo">S<span>.</span>Sudhakaran</p>

        <div className="footer__socials">
          <a className="icon-btn" href="https://github.com/sajanya008" target="_blank" rel="noreferrer" aria-label="GitHub">
            <FiGithub size={16} />
          </a>
          <a className="icon-btn" href="https://www.linkedin.com/in/sajanya-sudhakaran" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FiLinkedin size={16} />
          </a>
          <a className="icon-btn" href="mailto:sajanyasudhakaran@gmail.com" aria-label="Email">
            <FiMail size={16} />
          </a>
        </div>

        <p className="footer__copy">© {year} Sajanya Sudhakaran. All rights reserved.</p>

        <button className="footer__top magnetic" onClick={scrollTop} aria-label="Back to top">
          <FiArrowUp size={16} />
        </button>
      </div>
    </footer>
  );
}