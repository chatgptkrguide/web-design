"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown, ArrowLeft, ArrowUpRight, Mail, MapPin } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Lumina Studio",
    category: "Brand Identity",
    description:
      "A comprehensive brand identity system for a boutique design studio specializing in light installations and immersive experiences.",
    year: "2024",
    accent: "from-amber-500/30 to-orange-600/20",
    accentBorder: "border-amber-500/20",
    accentText: "text-amber-400",
    number: "01",
  },
  {
    title: "Terrain Collective",
    category: "Web Design",
    description:
      "Designing a digital platform for a landscape architecture firm that bridges the gap between nature and urban development.",
    year: "2024",
    accent: "from-emerald-500/30 to-teal-600/20",
    accentBorder: "border-emerald-500/20",
    accentText: "text-emerald-400",
    number: "02",
  },
  {
    title: "Voidform",
    category: "Art Direction",
    description:
      "Art direction and visual identity for an experimental music label pushing the boundaries of electronic and ambient sound.",
    year: "2024",
    accent: "from-violet-500/30 to-purple-600/20",
    accentBorder: "border-violet-500/20",
    accentText: "text-violet-400",
    number: "03",
  },
  {
    title: "Aether Works",
    category: "Product Design",
    description:
      "Product design and UX strategy for a next-generation spatial computing platform redefining how we interact with digital objects.",
    year: "2023",
    accent: "from-cyan-500/30 to-blue-600/20",
    accentBorder: "border-cyan-500/20",
    accentText: "text-cyan-400",
    number: "04",
  },
  {
    title: "Solstice Media",
    category: "Motion Design",
    description:
      "Motion graphics and animation system for a media company creating documentaries about climate science and sustainability.",
    year: "2023",
    accent: "from-rose-500/30 to-pink-600/20",
    accentBorder: "border-rose-500/20",
    accentText: "text-rose-400",
    number: "05",
  },
  {
    title: "Monolith Architecture",
    category: "Web Development",
    description:
      "A fully immersive portfolio website for an architectural firm known for their brutalist approach to modern residential design.",
    year: "2023",
    accent: "from-stone-400/30 to-zinc-600/20",
    accentBorder: "border-stone-400/20",
    accentText: "text-stone-400",
    number: "06",
  },
  {
    title: "Flux Dynamics",
    category: "Interactive",
    description:
      "An interactive data visualization platform transforming complex financial datasets into beautiful, navigable 3D landscapes.",
    year: "2024",
    accent: "from-sky-500/30 to-indigo-600/20",
    accentBorder: "border-sky-500/20",
    accentText: "text-sky-400",
    number: "07",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

export default function HorizontalScrollPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!horizontalRef.current || !trackRef.current) return;

      const track = trackRef.current;
      const scrollWidth = track.scrollWidth - window.innerWidth;

      gsap.to(track, {
        x: -scrollWidth,
        ease: "none",
        scrollTrigger: {
          trigger: horizontalRef.current,
          pin: true,
          scrub: 1,
          end: () => `+=${scrollWidth}`,
          invalidateOnRefresh: true,
        },
      });

      // Animate each card as it enters viewport
      const cards = track.querySelectorAll(".project-card");
      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0.3, scale: 0.92 },
          {
            opacity: 1,
            scale: 1,
            duration: 1,
            scrollTrigger: {
              trigger: card,
              containerAnimation: gsap.getById?.("horizontal") || undefined,
              start: "left 80%",
              end: "left 40%",
              scrub: 0.5,
              horizontal: true,
            },
          }
        );
      });

      // Progress bar
      gsap.to(".scroll-progress-fill", {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: horizontalRef.current,
          start: "top top",
          end: () => `+=${scrollWidth}`,
          scrub: 0.3,
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="bg-[#060608] text-white min-h-screen">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-6 mix-blend-difference">
        <Link
          href="/"
          className="flex items-center gap-2 text-white/60 hover:text-white transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-mono tracking-wider uppercase">
            Back
          </span>
        </Link>
        <span className="text-sm font-mono tracking-[0.3em] uppercase text-white/40">
          Portfolio
        </span>
      </nav>

      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-[2px] bg-white/5">
        <div className="scroll-progress-fill h-full bg-white/40 origin-left scale-x-0" />
      </div>

      {/* ============================================ */}
      {/* SECTION 1: Intro (Vertical)                 */}
      {/* ============================================ */}
      <section className="relative h-screen flex flex-col items-center justify-center px-6">
        {/* Background grain */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMSIvPjwvc3ZnPg==')] pointer-events-none" />

        <motion.div
          className="text-center max-w-4xl"
          initial="initial"
          animate="animate"
          transition={{ staggerChildren: 0.15 }}
        >
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.8 }}
            className="font-mono text-xs tracking-[0.4em] uppercase text-white/30 mb-8"
          >
            Selected Works 2023 — 2024
          </motion.p>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9]"
          >
            <span className="block">Creative</span>
            <span className="block text-white/15">Portfolio</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 text-lg md:text-xl text-white/30 max-w-lg mx-auto leading-relaxed"
          >
            A curated collection of works spanning brand identity, web design,
            art direction, and interactive experiences.
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-6 flex items-center justify-center gap-8 text-sm text-white/20 font-mono"
          >
            <span>7 Projects</span>
            <span className="w-px h-4 bg-white/10" />
            <span>Scroll to explore</span>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-12 flex flex-col items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-white/20">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" as const }}
          >
            <ArrowDown className="w-4 h-4 text-white/20" />
          </motion.div>
        </motion.div>

        {/* Decorative lines */}
        <div className="absolute top-1/2 left-12 w-px h-24 -translate-y-1/2 bg-gradient-to-b from-transparent via-white/10 to-transparent hidden lg:block" />
        <div className="absolute top-1/2 right-12 w-px h-24 -translate-y-1/2 bg-gradient-to-b from-transparent via-white/10 to-transparent hidden lg:block" />
      </section>

      {/* ============================================ */}
      {/* SECTION 2: Horizontal Scroll Gallery         */}
      {/* ============================================ */}
      <section ref={horizontalRef} className="relative overflow-hidden">
        {/* Horizontal track */}
        <div ref={trackRef} className="flex items-stretch h-screen will-change-transform">
          {/* Leading spacer with section title */}
          <div className="flex-shrink-0 w-[40vw] flex items-center justify-center px-12">
            <div>
              <p className="font-mono text-xs tracking-[0.3em] uppercase text-white/20 mb-4">
                Gallery
              </p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white/80">
                Selected
                <br />
                <span className="text-white/20">Projects</span>
              </h2>
              <div className="mt-6 flex items-center gap-3 text-white/20">
                <div className="w-12 h-px bg-white/20" />
                <span className="text-xs font-mono">Swipe</span>
              </div>
            </div>
          </div>

          {/* Project Cards */}
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card flex-shrink-0 w-[80vw] md:w-[65vw] lg:w-[50vw] h-screen flex items-center px-6 md:px-10"
            >
              <div
                className={`relative w-full h-[75vh] rounded-2xl border ${project.accentBorder} bg-white/[0.02] backdrop-blur-sm overflow-hidden group cursor-pointer transition-colors duration-500 hover:bg-white/[0.04]`}
              >
                {/* Card background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-40`}
                />

                {/* Subtle grid pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

                {/* Large project number */}
                <div className="absolute top-8 right-8 md:top-10 md:right-10">
                  <span className="text-[8rem] md:text-[12rem] font-bold leading-none text-white/[0.03] select-none">
                    {project.number}
                  </span>
                </div>

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-between p-8 md:p-12">
                  {/* Top: Category and Year */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <span
                        className={`text-xs font-mono tracking-[0.2em] uppercase ${project.accentText}`}
                      >
                        {project.category}
                      </span>
                    </div>
                    <span className="text-sm font-mono text-white/20">
                      {project.year}
                    </span>
                  </div>

                  {/* Center: Placeholder image area */}
                  <div className="flex-1 flex items-center justify-center my-8">
                    <div
                      className={`w-full max-w-md aspect-[4/3] rounded-xl bg-gradient-to-br ${project.accent} border ${project.accentBorder} flex items-center justify-center`}
                    >
                      <div className="text-center">
                        <div
                          className={`w-16 h-16 mx-auto rounded-full border ${project.accentBorder} flex items-center justify-center mb-4`}
                        >
                          <span className={`text-2xl font-bold ${project.accentText}`}>
                            {project.number}
                          </span>
                        </div>
                        <p className="text-xs font-mono text-white/20 tracking-wider">
                          Project Image
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Bottom: Title and Description */}
                  <div>
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 group-hover:translate-x-2 transition-transform duration-500">
                      {project.title}
                    </h3>
                    <p className="text-base md:text-lg text-white/40 max-w-lg leading-relaxed mb-6">
                      {project.description}
                    </p>
                    <div className="flex items-center gap-2 text-white/30 group-hover:text-white/60 transition-colors">
                      <span className="text-sm font-mono">View Project</span>
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </div>
                  </div>
                </div>

                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-t from-white/[0.03] to-transparent pointer-events-none" />
              </div>
            </div>
          ))}

          {/* Trailing spacer */}
          <div className="flex-shrink-0 w-[30vw] flex items-center justify-center">
            <div className="text-center">
              <p className="font-mono text-xs tracking-[0.3em] uppercase text-white/20 mb-3">
                End of gallery
              </p>
              <ArrowDown className="w-4 h-4 text-white/20 mx-auto" />
              <p className="mt-3 text-xs text-white/10 font-mono">
                Keep scrolling
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 3: About                             */}
      {/* ============================================ */}
      <section className="relative py-32 md:py-48 px-6 md:px-12 lg:px-20">
        {/* Decorative top line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-white/10" />

        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-mono text-xs tracking-[0.4em] uppercase text-white/20 mb-8">
              About
            </p>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-12">
              About the
              <br />
              <span className="text-white/20">Creator</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <p className="text-lg md:text-xl text-white/50 leading-relaxed mb-6">
                We are a multidisciplinary design studio focused on creating
                meaningful digital experiences. Our approach combines strategic
                thinking with meticulous craft.
              </p>
              <p className="text-lg md:text-xl text-white/50 leading-relaxed">
                Every project is an opportunity to push boundaries and explore
                new territories in design, technology, and storytelling.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-sm font-mono tracking-[0.2em] uppercase text-white/30 mb-4">
                  Services
                </h3>
                <ul className="space-y-3 text-white/60">
                  {[
                    "Brand Identity & Strategy",
                    "Web Design & Development",
                    "Art Direction",
                    "Motion Design",
                    "Interactive Experiences",
                  ].map((service, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 group/item"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover/item:bg-white/40 transition-colors" />
                      <span className="group-hover/item:text-white/80 transition-colors">
                        {service}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-mono tracking-[0.2em] uppercase text-white/30 mb-4">
                  Recognition
                </h3>
                <ul className="space-y-2 text-white/40 text-sm font-mono">
                  <li>Awwwards — Site of the Day x3</li>
                  <li>FWA — Site of the Month</li>
                  <li>CSS Design Awards — Best UI</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 4: Contact                           */}
      {/* ============================================ */}
      <section className="relative py-32 md:py-48 px-6 md:px-12 lg:px-20 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-mono text-xs tracking-[0.4em] uppercase text-white/20 mb-8">
              Contact
            </p>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
              Get in
              <br />
              <span className="text-white/20">Touch</span>
            </h2>
            <p className="text-lg text-white/30 max-w-lg mb-16">
              Have a project in mind? We would love to hear about it. Drop us a
              line and let us create something extraordinary together.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
            {/* Contact form placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="space-y-6"
            >
              <div>
                <label className="block text-xs font-mono tracking-[0.2em] uppercase text-white/30 mb-3">
                  Name
                </label>
                <div className="w-full h-12 border-b border-white/10 bg-transparent flex items-end pb-3">
                  <span className="text-white/20 text-sm">Your name</span>
                </div>
              </div>
              <div>
                <label className="block text-xs font-mono tracking-[0.2em] uppercase text-white/30 mb-3">
                  Email
                </label>
                <div className="w-full h-12 border-b border-white/10 bg-transparent flex items-end pb-3">
                  <span className="text-white/20 text-sm">your@email.com</span>
                </div>
              </div>
              <div>
                <label className="block text-xs font-mono tracking-[0.2em] uppercase text-white/30 mb-3">
                  Project Details
                </label>
                <div className="w-full h-32 border-b border-white/10 bg-transparent flex items-start pt-3">
                  <span className="text-white/20 text-sm">
                    Tell us about your project...
                  </span>
                </div>
              </div>
              <button className="mt-8 px-8 py-4 border border-white/20 text-sm font-mono tracking-[0.2em] uppercase text-white/60 hover:text-white hover:border-white/40 hover:bg-white/5 transition-all duration-300 rounded-none">
                Send Message
              </button>
            </motion.div>

            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-10"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Mail className="w-4 h-4 text-white/30" />
                  <h3 className="text-sm font-mono tracking-[0.2em] uppercase text-white/30">
                    Email
                  </h3>
                </div>
                <a
                  href="mailto:hello@studio.com"
                  className="text-xl text-white/60 hover:text-white transition-colors"
                >
                  hello@studio.com
                </a>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-4 h-4 text-white/30" />
                  <h3 className="text-sm font-mono tracking-[0.2em] uppercase text-white/30">
                    Location
                  </h3>
                </div>
                <p className="text-xl text-white/60">
                  Seoul, South Korea
                </p>
              </div>

              <div>
                <h3 className="text-sm font-mono tracking-[0.2em] uppercase text-white/30 mb-4">
                  Socials
                </h3>
                <div className="flex flex-wrap gap-4">
                  {["Twitter", "Instagram", "Dribbble", "LinkedIn"].map(
                    (social) => (
                      <span
                        key={social}
                        className="text-sm text-white/40 hover:text-white/70 transition-colors cursor-pointer font-mono"
                      >
                        {social}
                      </span>
                    )
                  )}
                </div>
              </div>

              <div className="pt-8 border-t border-white/5">
                <p className="text-sm text-white/20 font-mono leading-relaxed">
                  Available for freelance projects and long-term collaborations.
                  Response time is typically within 24 hours.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 5: Footer                            */}
      {/* ============================================ */}
      <footer className="relative border-t border-white/5 px-6 md:px-12 lg:px-20 py-12">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="text-sm font-mono text-white/30 mb-1">
              Creative Portfolio
            </p>
            <p className="text-xs font-mono text-white/15">
              Horizontal Scroll Experience
            </p>
          </div>

          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="text-xs font-mono tracking-[0.2em] uppercase text-white/20 hover:text-white/50 transition-colors"
            >
              Home
            </Link>
            <span className="w-px h-3 bg-white/10" />
            <span className="text-xs font-mono text-white/15">
              GSAP + Framer Motion
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
