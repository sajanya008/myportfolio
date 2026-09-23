import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import "./Navbar.css";

const LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      if (y > lastY && y > 160) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      lastY = y;

      const sections = LINKS.map((l) => document.getElementById(l.id)).filter(Boolean);
      const current = sections.find((sec) => {
        const rect = sec.getBoundingClientRect();
        return rect.top <= 140 && rect.bottom >= 140;
      });
      if (current) setActive(current.id);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}
      animate={{ y: visible ? 0 : -110 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="navbar__inner glass">
        <a className="navbar__logo" onClick={() => scrollTo("home")}>
          S<span className="navbar__logo-dot">.</span>Sudhakaran
        </a>

        <nav className="navbar__links">
          {LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`navbar__link ${active === link.id ? "navbar__link--active" : ""}`}
            >
              {link.label}
              {active === link.id && (
                <motion.span layoutId="nav-indicator" className="navbar__indicator" />
              )}
            </button>
          ))}
        </nav>

        <div className="navbar__actions">
          <ThemeToggle />
          <button className="navbar__burger" onClick={() => setMenuOpen(true)} aria-label="Open menu">
            <FiMenu size={20} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="navbar__mobile"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button className="navbar__mobile-close" onClick={() => setMenuOpen(false)} aria-label="Close menu">
              <FiX size={24} />
            </button>
            <motion.ul
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.06 } } }}
            >
              {LINKS.map((link) => (
                <motion.li
                  key={link.id}
                  variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
                >
                  <button onClick={() => scrollTo(link.id)}>{link.label}</button>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}