"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 1.0, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
};

const slowFadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 1.2, ease: "easeOut" as const },
};

const products = [
  { name: "Ceramic Bowl", price: "¥4,200" },
  { name: "Linen Towel", price: "¥2,800" },
  { name: "Oak Tray", price: "¥6,500" },
];

const materials = [
  {
    name: "Natural Cotton",
    description:
      "Sourced from organic farms, our unbleached cotton retains its natural warmth and texture. Each fiber tells the story of patient cultivation and mindful harvesting.",
  },
  {
    name: "White Oak",
    description:
      "Sustainably harvested Japanese white oak, aged for two years before crafting. The gentle grain patterns reveal the quiet beauty of time and natural growth.",
  },
  {
    name: "Stoneware Clay",
    description:
      "Hand-selected clay from the Shigaraki region, fired at high temperatures to achieve its characteristic depth. Each piece carries the unique imprint of earth and fire.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Source",
    description:
      "We begin by carefully selecting raw materials from trusted artisans and sustainable sources across Japan.",
  },
  {
    number: "02",
    title: "Craft",
    description:
      "Each piece is shaped by hand, following traditional techniques refined over generations of dedicated practice.",
  },
  {
    number: "03",
    title: "Refine",
    description:
      "Through patient iteration we remove the unnecessary, until only the essential form remains — nothing more, nothing less.",
  },
];

export default function MinimalistZenPage() {
  return (
    <div className="min-h-screen bg-[#FAFAF5] text-[#1a1a1a] selection:bg-[#1a1a1a]/10 overflow-x-hidden">
      {/* Back Navigation */}
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="fixed top-0 left-0 right-0 z-50 px-8 md:px-16 py-8"
      >
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[#1a1a1a]/40 hover:text-[#1a1a1a]/70 transition-colors duration-500 text-xs tracking-[0.2em] uppercase"
        >
          <ArrowLeft className="w-3.5 h-3.5" strokeWidth={1.5} />
          <span>Return</span>
        </Link>
      </motion.nav>

      {/* ======================================== */}
      {/* HERO SECTION */}
      {/* ======================================== */}
      <section className="relative flex flex-col items-center justify-center min-h-screen px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number], delay: 0.3 }}
          className="text-center"
        >
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-extralight tracking-[0.15em] text-[#1a1a1a]"
            style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
          >
            Essence
          </h1>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.0, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number], delay: 0.8 }}
          className="w-12 h-px bg-[#1a1a1a]/20 mt-10 origin-center"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.0, delay: 1.2 }}
          className="mt-8 text-[11px] tracking-[0.35em] uppercase text-[#1a1a1a]/30 font-light"
        >
          The art of less
        </motion.p>
      </section>

      {/* ======================================== */}
      {/* PHILOSOPHY SECTION */}
      {/* ======================================== */}
      <section className="px-8 md:px-16 lg:px-24 py-40 md:py-56">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24 lg:gap-32">
          <motion.div {...fadeIn} className="md:col-span-3">
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#1a1a1a]/35 font-light">
              Our Philosophy
            </span>
          </motion.div>

          <motion.div
            {...fadeIn}
            transition={{ duration: 1.0, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number], delay: 0.15 }}
            className="md:col-span-7"
          >
            <p className="text-lg md:text-xl leading-[1.9] text-[#1a1a1a]/70 font-light">
              We believe that true beauty emerges from restraint. By removing the
              unnecessary, we reveal the essential nature of each object. Our
              approach to design begins with emptiness — a respect for space,
              silence, and the quiet power of simplicity.
            </p>

            <p className="mt-10 text-lg md:text-xl leading-[1.9] text-[#1a1a1a]/70 font-light">
              Every material is chosen with intention. Every form is reduced to
              its purest expression. What remains is not minimal for the sake of
              style, but minimal because nothing else is needed.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ======================================== */}
      {/* PRODUCT GRID */}
      {/* ======================================== */}
      <section className="px-8 md:px-16 lg:px-24 py-32 md:py-44">
        <motion.div {...fadeIn} className="max-w-6xl mx-auto mb-20 md:mb-28">
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#1a1a1a]/35 font-light">
            Collection
          </span>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 lg:gap-12">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.9,
                ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
                delay: index * 0.12,
              }}
              className="group cursor-pointer"
            >
              {/* Image Placeholder */}
              <div className="aspect-[4/5] bg-[#F0EFE9] mb-6 transition-opacity duration-700 group-hover:opacity-80" />

              <div className="flex items-baseline justify-between">
                <h3 className="text-sm tracking-[0.08em] text-[#1a1a1a]/80 font-light">
                  {product.name}
                </h3>
                <span className="text-sm text-[#1a1a1a]/40 font-light tabular-nums">
                  {product.price}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ======================================== */}
      {/* MANIFESTO / QUOTE SECTION */}
      {/* ======================================== */}
      <section className="flex flex-col items-center justify-center min-h-screen px-8 py-40">
        <motion.div
          {...slowFadeIn}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }}
            className="w-8 h-px bg-[#1a1a1a]/15 mx-auto mb-16 origin-center"
          />

          <blockquote
            className="text-3xl md:text-4xl lg:text-5xl font-extralight leading-[1.4] tracking-[0.04em] text-[#1a1a1a]/80"
            style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
          >
            Less, but better
          </blockquote>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number], delay: 0.3 }}
            className="w-8 h-px bg-[#1a1a1a]/15 mx-auto mt-16 origin-center"
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, delay: 0.5 }}
            className="mt-12 text-[11px] tracking-[0.3em] uppercase text-[#1a1a1a]/25 font-light"
          >
            Dieter Rams
          </motion.p>
        </motion.div>
      </section>

      {/* ======================================== */}
      {/* MATERIALS SECTION */}
      {/* ======================================== */}
      <section className="py-32 md:py-44">
        <motion.div
          {...fadeIn}
          className="px-8 md:px-16 lg:px-24 max-w-6xl mx-auto mb-24 md:mb-32"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#1a1a1a]/35 font-light">
            Materials
          </span>
        </motion.div>

        <div className="space-y-0">
          {materials.map((material, index) => (
            <motion.div
              key={material.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 1.0,
                ease: "easeOut" as const,
                delay: 0.1,
              }}
              className="border-t border-[#1a1a1a]/[0.06]"
            >
              <div className="px-8 md:px-16 lg:px-24 max-w-6xl mx-auto">
                <div
                  className={`grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 py-20 md:py-28 items-center ${
                    index % 2 !== 0 ? "md:direction-rtl" : ""
                  }`}
                >
                  {/* Image Placeholder */}
                  <div
                    className={`md:col-span-5 ${
                      index % 2 !== 0 ? "md:col-start-8 md:direction-ltr" : ""
                    }`}
                  >
                    <div className="aspect-[3/2] bg-[#EDECE6]" />
                  </div>

                  {/* Text Content */}
                  <div
                    className={`md:col-span-5 ${
                      index % 2 !== 0
                        ? "md:col-start-1 md:row-start-1 md:direction-ltr"
                        : "md:col-start-7"
                    }`}
                  >
                    <h3 className="text-base tracking-[0.06em] text-[#1a1a1a]/80 font-light mb-5">
                      {material.name}
                    </h3>
                    <p className="text-sm leading-[2] text-[#1a1a1a]/50 font-light">
                      {material.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-[#1a1a1a]/[0.06]" />
        </div>
      </section>

      {/* ======================================== */}
      {/* PROCESS SECTION */}
      {/* ======================================== */}
      <section className="px-8 md:px-16 lg:px-24 py-32 md:py-44">
        <motion.div {...fadeIn} className="max-w-6xl mx-auto mb-24 md:mb-32">
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#1a1a1a]/35 font-light">
            Process
          </span>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.9,
                ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
                delay: index * 0.1,
              }}
              className="border-t border-[#1a1a1a]/[0.06]"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-16 py-14 md:py-20">
                {/* Number */}
                <div className="md:col-span-2">
                  <span className="text-[11px] tracking-[0.2em] text-[#1a1a1a]/20 font-light tabular-nums">
                    {step.number}
                  </span>
                </div>

                {/* Title */}
                <div className="md:col-span-3">
                  <h3 className="text-base tracking-[0.06em] text-[#1a1a1a]/80 font-light">
                    {step.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="md:col-span-5 md:col-start-7">
                  <p className="text-sm leading-[2] text-[#1a1a1a]/50 font-light">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-[#1a1a1a]/[0.06]" />
        </div>
      </section>

      {/* ======================================== */}
      {/* SPACER */}
      {/* ======================================== */}
      <div className="h-32 md:h-48" />

      {/* ======================================== */}
      {/* FOOTER */}
      {/* ======================================== */}
      <footer className="border-t border-[#1a1a1a]/[0.06] px-8 md:px-16 lg:px-24 py-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span
            className="text-xs tracking-[0.2em] uppercase text-[#1a1a1a]/30 font-light"
            style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
          >
            Essence
          </span>
          <span className="text-[10px] tracking-[0.15em] text-[#1a1a1a]/20 font-light">
            &copy; {new Date().getFullYear()}
          </span>
        </div>
      </footer>
    </div>
  );
}
