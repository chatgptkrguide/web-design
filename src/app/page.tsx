"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";
import FilterBar from "@/components/gallery/FilterBar";
import DesignCard from "@/components/gallery/DesignCard";
import { designs } from "@/lib/designs";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredDesigns = useMemo(() => {
    if (activeCategory === "All") return designs;
    return designs.filter((d) => d.category.includes(activeCategory));
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Subtle grid background */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

      {/* Header */}
      <header className="relative z-10 pt-16 pb-12 px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="w-5 h-5 text-white/30" />
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-white/30">
              Design Collection
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-4">
            Web Design
            <br />
            <span className="text-white/20">Gallery</span>
          </h1>
          <p className="text-lg text-white/40 max-w-xl leading-relaxed">
            A curated collection of diverse web designs. From cinematic video heroes to
            minimal zen aesthetics — explore various styles and interactions.
          </p>
        </motion.div>
      </header>

      {/* Filter */}
      <section className="relative z-10 px-6 md:px-12 lg:px-20 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <FilterBar
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </motion.div>
      </section>

      {/* Design Grid */}
      <section className="relative z-10 px-6 md:px-12 lg:px-20 pb-20">
        <AnimatePresence mode="popLayout">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredDesigns.map((design, index) => (
              <DesignCard key={design.id} design={design} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredDesigns.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 text-white/30"
          >
            No designs found in this category.
          </motion.div>
        )}
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 px-6 md:px-12 lg:px-20 py-8">
        <div className="flex items-center justify-between text-sm text-white/20">
          <span className="font-mono">{designs.length} designs</span>
          <span className="font-mono">Next.js + Tailwind + Framer Motion + GSAP</span>
        </div>
      </footer>
    </div>
  );
}
