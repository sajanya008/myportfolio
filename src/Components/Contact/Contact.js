import { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheckCircle } from "react-icons/fi";
import "./Contact.css";

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus("sending");
    window.setTimeout(() => {
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    }, 1100);
  };

  return (
    <section id="contact" className="contact">
      <div className="container contact__grid">
        <motion.div
          className="contact-card glass"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >
          <p className="eyebrow">Contact</p>
          <h2 className="section-heading">Let's build something considered.</h2>
          <p className="section-sub">
            Open to full-time roles and freelance collaborations. Reach out and I'll get back
            to you within a day or two.
          </p>

          <div className="contact-card__status">
            <span className="contact-status-dot" />
            Currently available for work
          </div>

          <div className="contact-card__info">
            <a href="mailto:sajanyasudhakaran@gmail.com" className="contact-info-row">
              <span className="icon-btn"><FiMail size={16} /></span>
              <div>
                <p className="contact-info-row__label">Email</p>
                <p className="contact-info-row__value">sajanyasudhakaran@gmail.com</p>
              </div>
            </a>
            <a href="tel:+917907801226" className="contact-info-row">
              <span className="icon-btn"><FiPhone size={16} /></span>
              <div>
                <p className="contact-info-row__label">Phone</p>
                <p className="contact-info-row__value">+91 79078 01226</p>
              </div>
            </a>
            <div className="contact-info-row">
              <span className="icon-btn"><FiMapPin size={16} /></span>
              <div>
                <p className="contact-info-row__label">Location</p>
                <p className="contact-info-row__value">Calicut, Kerala, India</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.form
          className="contact-form glass"
          onSubmit={handleSubmit}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: 0.15 }}
        >
          <div className="contact-form__field">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" placeholder="Your name" value={form.name} onChange={handleChange} required />
          </div>
          <div className="contact-form__field">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" placeholder="you@example.com" value={form.email} onChange={handleChange} required />
          </div>
          <div className="contact-form__field">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" placeholder="Tell me about your project" value={form.message} onChange={handleChange} required />
          </div>

          <button type="submit" className="btn btn-primary contact-form__submit magnetic" disabled={status === "sending"}>
            {status === "sent" ? (
              <><FiCheckCircle size={16} /> Message sent</>
            ) : status === "sending" ? (
              "Sending…"
            ) : (
              <><FiSend size={16} /> Send message</>
            )}
          </button>
        </motion.form>
      </div>
    </section>
  );
}