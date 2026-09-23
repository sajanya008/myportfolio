import { motion } from "framer-motion";
import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "../../Context/ThemeContext";
import "./ThemeToggle.css";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      className="theme-toggle magnetic"
      onClick={toggleTheme}
      aria-label="Toggle color theme"
    >
      <motion.div
        className="theme-toggle__thumb"
        animate={{ x: isDark ? 24 : 2 }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 28,
        }}
      >
        {isDark ? <FiMoon size={12} /> : <FiSun size={12} />}
      </motion.div>
    </button>
  );
}