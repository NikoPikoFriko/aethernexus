"use client";

import { motion } from "framer-motion";

const pillars = [
  {
    title: "Hawaiian Wayfinding",
    body: "Navigate knowledge by the stars — reading currents, winds, and signs instead of rigid maps.",
    glyph: "\u2312",
  },
  {
    title: "Cosmic Exploration",
    body: "A lattice that expands outward, connecting distant ideas the way constellations link stars.",
    glyph: "\u2726",
  },
  {
    title: "Functor Harmony",
    body: "Structure-preserving maps keep meaning intact as knowledge is transformed between domains.",
    glyph: "\u222E",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center gap-16 px-6 py-24">
      <motion.section
        className="flex flex-col items-center text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.span
          className="mb-6 rounded-full border border-aether-glow/40 bg-aether-glow/10 px-4 py-1.5 text-sm tracking-widest text-aether-cyan uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Living Knowledge Lattice
        </motion.span>

        <h1 className="bg-gradient-to-r from-aether-star via-aether-cyan to-aether-glow bg-clip-text text-5xl font-bold text-transparent sm:text-7xl">
          AetherNexus
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-aether-star/70 sm:text-xl">
          Harmonizing the Cosmos — a multi-agent system where Hawaiian
          wayfinding, cosmic exploration, and functor harmony converge into one
          navigable universe of knowledge.
        </p>

        <motion.div
          className="mt-8 h-px w-40 bg-gradient-to-r from-transparent via-aether-glow to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        />
      </motion.section>

      <motion.section
        className="grid w-full gap-6 sm:grid-cols-3"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {pillars.map((pillar) => (
          <motion.article
            key={pillar.title}
            variants={item}
            whileHover={{ y: -6, scale: 1.02 }}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-colors hover:border-aether-glow/40"
          >
            <div className="mb-4 text-3xl text-aether-cyan">{pillar.glyph}</div>
            <h2 className="text-xl font-semibold text-aether-star">
              {pillar.title}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-aether-star/60">
              {pillar.body}
            </p>
          </motion.article>
        ))}
      </motion.section>

      <motion.footer
        className="text-center text-sm text-aether-star/40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        Built by 16 specialized agents · Next.js 15 · React 19
      </motion.footer>
    </main>
  );
}
