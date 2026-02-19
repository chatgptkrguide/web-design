"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Instagram, Twitter, Linkedin, Github } from "lucide-react";

// --- Custom Cursor ---
function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setHidden(false);
    };
    const over = () => setHovered(true);
    const out = () => setHovered(false);
    const leave = () => setHidden(true);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", leave);

    const hoverables = document.querySelectorAll("a, button, [data-hover]");
    hoverables.forEach((el) => {
      el.addEventListener("mouseenter", over);
      el.addEventListener("mouseleave", out);
    });

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", leave);
      hoverables.forEach((el) => {
        el.removeEventListener("mouseenter", over);
        el.removeEventListener("mouseleave", out);
      });
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border-2 border-[#84CC16] mix-blend-difference"
      animate={{
        x: pos.x - (hovered ? 32 : 12),
        y: pos.y - (hovered ? 32 : 12),
        width: hovered ? 64 : 24,
        height: hovered ? 64 : 24,
        opacity: hidden ? 0 : 1,
      }}
      transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
    />
  );
}

// --- Animated Counter ---
function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const stepTime = 16;
    const steps = duration / stepTime;
    const increment = target / steps;
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

// --- Letter Stagger Animation ---
function StaggerText({ text, className = "" }: { text: string; className?: string }) {
  return (
    <motion.span className={`inline-block ${className}`}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: i * 0.03,
            ease: [0.215, 0.61, 0.355, 1],
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
}

// --- Section Reveal ---
function RevealSection({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
    >
      {children}
    </motion.div>
  );
}

// --- Project Data ---
const projects = [
  { num: "01", title: "Nebula Studio", category: "Branding / Web Design", color: "#2563EB" },
  { num: "02", title: "Prism Digital", category: "E-Commerce / UX", color: "#84CC16" },
  { num: "03", title: "Vertex Labs", category: "Identity / Motion", color: "#2563EB" },
  { num: "04", title: "Aurora Finance", category: "Fintech / Web App", color: "#84CC16" },
];

const services = [
  { num: 150, suffix: "+", title: "Projects Delivered", desc: "Crafting digital products across brand, web, and motion design." },
  { num: 12, suffix: "", title: "Years of Experience", desc: "A decade of pushing creative boundaries for global clients." },
  { num: 40, suffix: "+", title: "Awards Won", desc: "Recognized by Awwwards, FWA, CSS Design Awards, and more." },
  { num: 98, suffix: "%", title: "Client Satisfaction", desc: "Building long-term relationships through exceptional craft." },
];

const team = [
  { name: "Alex Rivera", role: "Creative Director" },
  { name: "Sam Chen", role: "Lead Developer" },
  { name: "Jordan Kim", role: "Design Lead" },
  { name: "Taylor Nguyen", role: "Motion Designer" },
  { name: "Morgan Blake", role: "Strategist" },
  { name: "Casey Wu", role: "UX Researcher" },
];

const awards = [
  "Awwwards SOTD x12",
  "FWA Winner x8",
  "CSS Design Awards x5",
  "Red Dot Award 2024",
  "Webby Award 2023",
  "D&AD Pencil 2024",
];

// --- Main Page ---
export default function CreativeAgencyPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const heroScale = useTransform(scrollYProgress, [0, 0.15], [1, 0.95]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0.3]);

  return (
    <div ref={containerRef} className="bg-black text-white min-h-screen cursor-none overflow-x-hidden">
      <CustomCursor />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-16 py-6 mix-blend-difference">
        <Link href="/" className="text-sm font-mono tracking-[0.3em] uppercase text-white">
          Gallery
        </Link>
        <div className="flex items-center gap-8">
          <span className="text-sm font-mono tracking-wider text-white/60 hidden md:block">
            Creative Agency
          </span>
          <div className="w-8 h-8 flex flex-col justify-center gap-1.5" data-hover>
            <div className="w-full h-[2px] bg-white" />
            <div className="w-2/3 h-[2px] bg-white" />
          </div>
        </div>
      </nav>

      {/* ========== HERO ========== */}
      <motion.section
        style={{ scale: heroScale, opacity: heroOpacity }}
        className="relative h-screen flex flex-col justify-center px-8 md:px-16 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(132,204,22,0.06),transparent_70%)]" />
        <div className="relative z-10">
          <motion.p
            className="text-sm font-mono tracking-[0.4em] uppercase text-[#84CC16] mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Digital Creative Studio
          </motion.p>
          <h1 className="font-bold leading-[0.85] tracking-tighter">
            <span className="block text-[10vw] md:text-[8vw]">
              <StaggerText text="WE CREATE" />
            </span>
            <span className="block text-[10vw] md:text-[8vw] text-transparent [-webkit-text-stroke:2px_white]">
              <StaggerText text="DIGITAL" />
            </span>
            <span className="block text-[10vw] md:text-[8vw]">
              <StaggerText text="EXPERIENCES" />
            </span>
          </h1>
          <motion.p
            className="mt-10 text-lg md:text-xl text-white/50 max-w-lg font-light leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            We are a bold creative agency building brands and digital products
            that break conventions and push boundaries.
          </motion.p>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <span className="text-xs font-mono tracking-widest text-white/30 uppercase">Scroll</span>
          <motion.div
            className="w-[1px] h-8 bg-white/30"
            animate={{ scaleY: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" as const }}
            style={{ transformOrigin: "top" }}
          />
        </motion.div>
      </motion.section>

      {/* ========== MARQUEE ========== */}
      <section className="py-6 border-y border-white/10 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="text-[5vw] md:text-[3vw] font-bold tracking-tight mx-4 flex-shrink-0">
              DESIGN <span className="text-[#84CC16]">&mdash;</span> DEVELOP{" "}
              <span className="text-[#84CC16]">&mdash;</span> DELIVER{" "}
              <span className="text-[#84CC16]">&mdash;</span>{" "}
            </span>
          ))}
        </div>
        <style jsx>{`
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-marquee {
            animation: marquee 12s linear infinite;
          }
        `}</style>
      </section>

      {/* ========== SELECTED WORKS ========== */}
      <section className="py-24 md:py-40 px-8 md:px-16">
        <RevealSection>
          <p className="text-sm font-mono tracking-[0.4em] uppercase text-[#84CC16] mb-4">
            Selected Works
          </p>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-20">
            Featured<br />Projects
          </h2>
        </RevealSection>

        <div className="space-y-0">
          {projects.map((project, idx) => (
            <RevealSection key={idx}>
              <motion.div
                className="group border-t border-white/10 py-10 md:py-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 cursor-pointer relative overflow-hidden"
                data-hover
                whileHover="hover"
              >
                {/* Hover background reveal */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${project.color}15, transparent 60%)`,
                  }}
                />

                <div className="flex items-center gap-8 md:gap-16 relative z-10">
                  <span className="text-sm font-mono text-white/30">{project.num}</span>
                  <motion.h3
                    className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight"
                    variants={{
                      hover: { scale: 1.05, x: 20 },
                    }}
                    transition={{ duration: 0.4, ease: [0.215, 0.61, 0.355, 1] }}
                  >
                    {project.title}
                  </motion.h3>
                </div>

                <div className="flex items-center gap-6 md:gap-12 relative z-10">
                  <span className="text-sm text-white/40 font-mono">{project.category}</span>
                  <motion.div
                    className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center"
                    variants={{
                      hover: { scale: 1.2, borderColor: "#84CC16" },
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </motion.div>
                </div>

                {/* Hover Image Placeholder */}
                <motion.div
                  className="absolute right-16 top-1/2 -translate-y-1/2 w-[300px] h-[200px] rounded-lg overflow-hidden pointer-events-none hidden lg:block"
                  initial={{ opacity: 0, scale: 0.8 }}
                  variants={{
                    hover: { opacity: 1, scale: 1 },
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <div
                    className="w-full h-full"
                    style={{
                      background: `linear-gradient(135deg, ${project.color}, ${project.color}40)`,
                    }}
                  />
                </motion.div>
              </motion.div>
            </RevealSection>
          ))}
          <div className="border-t border-white/10" />
        </div>
      </section>

      {/* ========== ABOUT ========== */}
      <section className="py-24 md:py-40 px-8 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <RevealSection>
            <p className="text-sm font-mono tracking-[0.4em] uppercase text-[#84CC16] mb-4">
              About Us
            </p>
            <h2 className="text-6xl md:text-8xl lg:text-[9vw] font-bold tracking-tighter leading-[0.9]">
              About<br />
              <span className="text-transparent [-webkit-text-stroke:2px_white]">Us</span>
            </h2>
          </RevealSection>

          <RevealSection className="flex flex-col justify-center">
            <p className="text-xl md:text-2xl text-white/60 leading-relaxed mb-8">
              We are a team of designers, developers, and strategists who believe
              in the power of bold ideas. Since 2012, we have been crafting
              digital experiences that challenge the status quo and redefine
              what&apos;s possible on the web.
            </p>
            <p className="text-lg text-white/40 leading-relaxed mb-10">
              Our philosophy is simple: every pixel matters, every interaction
              tells a story, and every project is an opportunity to create
              something extraordinary. We do not follow trends — we set them.
            </p>
            <motion.div
              className="inline-flex items-center gap-3 text-[#84CC16] group"
              data-hover
              whileHover={{ x: 10 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-sm font-mono tracking-wider uppercase">Learn More</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:rotate-45" />
            </motion.div>
          </RevealSection>
        </div>
      </section>

      {/* ========== SERVICES / STATS ========== */}
      <section className="py-24 md:py-40 px-8 md:px-16 bg-white/[0.02]">
        <RevealSection>
          <p className="text-sm font-mono tracking-[0.4em] uppercase text-[#84CC16] mb-4">
            What We Do
          </p>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-20">
            Services &<br />Numbers
          </h2>
        </RevealSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
          {services.map((service, idx) => (
            <RevealSection key={idx}>
              <div className="border-t border-white/10 pt-8">
                <div className="text-5xl md:text-6xl font-bold text-[#84CC16] mb-4">
                  <AnimatedCounter target={service.num} suffix={service.suffix} />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed">{service.desc}</p>
              </div>
            </RevealSection>
          ))}
        </div>
      </section>

      {/* ========== TEAM ========== */}
      <section className="py-24 md:py-40 px-8 md:px-16">
        <RevealSection>
          <p className="text-sm font-mono tracking-[0.4em] uppercase text-[#84CC16] mb-4">
            The Team
          </p>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-20">
            Meet the<br />Creatives
          </h2>
        </RevealSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, idx) => (
            <RevealSection key={idx}>
              <motion.div
                className="group relative"
                data-hover
                whileHover="hover"
              >
                {/* Avatar Placeholder */}
                <div className="aspect-[3/4] bg-white/5 rounded-lg mb-5 overflow-hidden relative">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-[#84CC16]/20 to-[#2563EB]/20"
                    variants={{ hover: { scale: 1.1 } }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center">
                      <span className="text-2xl font-bold text-white/30">
                        {member.name.split(" ").map((n) => n[0]).join("")}
                      </span>
                    </div>
                  </div>
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-[#84CC16]"
                    initial={{ scaleX: 0 }}
                    variants={{ hover: { scaleX: 1 } }}
                    transition={{ duration: 0.4 }}
                    style={{ transformOrigin: "left" }}
                  />
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-sm text-white/40 font-mono">{member.role}</p>
              </motion.div>
            </RevealSection>
          ))}
        </div>
      </section>

      {/* ========== AWARDS ========== */}
      <section className="py-24 md:py-32 px-8 md:px-16 border-y border-white/10">
        <RevealSection>
          <p className="text-sm font-mono tracking-[0.4em] uppercase text-[#84CC16] mb-4">
            Recognition
          </p>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-16">
            Awards
          </h2>
        </RevealSection>

        <div className="flex flex-wrap gap-4">
          {awards.map((award, idx) => (
            <RevealSection key={idx}>
              <motion.div
                className="px-6 py-4 border border-white/10 rounded-full text-sm font-mono text-white/60 hover:border-[#84CC16] hover:text-[#84CC16] transition-colors duration-300"
                data-hover
                whileHover={{ scale: 1.05 }}
              >
                {award}
              </motion.div>
            </RevealSection>
          ))}
        </div>
      </section>

      {/* ========== CONTACT CTA ========== */}
      <section className="min-h-screen flex flex-col justify-center px-8 md:px-16 py-24 md:py-40 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(37,99,235,0.08),transparent_70%)]" />

        <RevealSection className="relative z-10">
          <p className="text-sm font-mono tracking-[0.4em] uppercase text-[#84CC16] mb-8">
            Start a Project
          </p>
          <h2 className="text-[12vw] md:text-[10vw] font-bold tracking-tighter leading-[0.85] mb-16">
            Let&apos;s<br />
            <span className="text-transparent [-webkit-text-stroke:2px_white]">Talk</span>
          </h2>

          <div className="flex flex-col md:flex-row gap-12 md:gap-24">
            <div>
              <p className="text-sm font-mono text-white/30 uppercase tracking-wider mb-3">Email</p>
              <motion.a
                href="mailto:hello@agency.com"
                className="text-2xl md:text-3xl font-bold relative inline-block group"
                data-hover
                whileHover={{ x: 10 }}
              >
                hello@agency.com
                <motion.span
                  className="absolute bottom-0 left-0 h-[2px] bg-[#84CC16]"
                  initial={{ width: "0%" }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.4 }}
                />
              </motion.a>
            </div>

            <div>
              <p className="text-sm font-mono text-white/30 uppercase tracking-wider mb-3">Phone</p>
              <motion.a
                href="tel:+1234567890"
                className="text-2xl md:text-3xl font-bold relative inline-block group"
                data-hover
                whileHover={{ x: 10 }}
              >
                +1 (234) 567-890
                <motion.span
                  className="absolute bottom-0 left-0 h-[2px] bg-[#84CC16]"
                  initial={{ width: "0%" }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.4 }}
                />
              </motion.a>
            </div>
          </div>

          <div className="mt-16">
            <p className="text-sm font-mono text-white/30 uppercase tracking-wider mb-3">Location</p>
            <p className="text-lg text-white/60">New York — Seoul — London</p>
          </div>
        </RevealSection>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="border-t border-white/10 px-8 md:px-16 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p className="text-sm font-mono text-white/30 mb-2">
              &copy; 2026 Creative Agency. All rights reserved.
            </p>
            <Link
              href="/"
              className="text-sm font-mono text-[#84CC16] hover:underline"
              data-hover
            >
              &larr; Back to Gallery
            </Link>
          </div>

          <div className="flex items-center gap-6">
            {[
              { icon: Instagram, label: "Instagram" },
              { icon: Twitter, label: "Twitter" },
              { icon: Linkedin, label: "LinkedIn" },
              { icon: Github, label: "GitHub" },
            ].map(({ icon: Icon, label }) => (
              <motion.a
                key={label}
                href="#"
                aria-label={label}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-[#84CC16] hover:border-[#84CC16] transition-colors duration-300"
                data-hover
                whileHover={{ scale: 1.15, rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
