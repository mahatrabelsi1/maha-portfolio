import { motion } from "framer-motion";

export function SectionShell({ id, eyebrow, title, children }) {
  return (
    <motion.section
      id={id}
      className="section-band"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="section-title">{title}</h2>
        {children}
      </div>
    </motion.section>
  );
}
