import { motion } from "framer-motion";

export function PortalCard({ portal, active, unlocked, onSelect }) {
  const Icon = portal.icon;

  return (
    <motion.button
      type="button"
      layout
      onClick={() => onSelect(portal.id)}
      className={`portal-button group ${active ? "is-active" : ""}`}
      whileHover={{ y: -8, rotate: active ? 0 : -1 }}
      whileTap={{ scale: 0.97 }}
      aria-pressed={active}
    >
      <span className={`portal-orb bg-gradient-to-br ${portal.color}`}>
        <Icon size={28} />
      </span>
      <span className="text-left">
        <span className="block font-display text-lg font-bold text-white">{portal.title}</span>
        <span className="mt-2 block text-sm leading-6 text-slate-300">{portal.tagline}</span>
      </span>
      <span className="mt-5 flex items-center justify-between gap-3 text-xs uppercase tracking-[0.18em] text-mint">
        <span>{unlocked ? "Unlocked" : portal.unlock}</span>
        <span className="puzzle-notch" />
      </span>
    </motion.button>
  );
}
