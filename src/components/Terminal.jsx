import { useState } from "react";
import { motion } from "framer-motion";
import { Terminal as TerminalIcon } from "lucide-react";

const responses = {
  "sudo hire maha":
    "Access granted. Reasons: AI builder, scout leader, international mindset, excellent bug negotiation skills.",
  help: "Available commands: sudo hire maha, coffee, clear",
  coffee: "Coffee counter incremented. Current state: optimistic, over-caffeinated, still professional.",
};

export function Terminal() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([
    "Mahaverse terminal v5.0",
    "Type `help` or try the legendary command.",
  ]);

  function submit(event) {
    event.preventDefault();
    const command = input.trim().toLowerCase();
    if (!command) return;
    if (command === "clear") {
      setHistory([]);
      setInput("");
      return;
    }
    setHistory((current) => [
      ...current,
      `> ${input}`,
      responses[command] || "Command not found. Try `sudo hire maha`.",
    ]);
    setInput("");
  }

  return (
    <motion.div
      className="terminal-panel"
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
    >
      <div className="mb-4 flex items-center gap-3 text-mint">
        <TerminalIcon size={18} />
        <span className="font-mono text-sm">/usr/mahaverse/recruiter-console</span>
      </div>
      <div className="min-h-40 space-y-2 font-mono text-sm text-slate-200">
        {history.map((line, index) => (
          <p key={`${line}-${index}`}>{line}</p>
        ))}
      </div>
      <form onSubmit={submit} className="mt-5 flex gap-3">
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
          className="terminal-input"
          aria-label="Mahaverse terminal command"
          placeholder="sudo hire maha"
        />
        <button className="command-button" type="submit">
          Run
        </button>
      </form>
    </motion.div>
  );
}
