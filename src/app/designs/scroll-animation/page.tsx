"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Zap, Shield, Cpu, Globe } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: Zap,
    title: "Lightning Performance",
    description:
      "Engineered for speed. Every interaction responds in under 16ms, delivering buttery-smooth 60fps animations across all devices.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "Bank-grade encryption with zero-knowledge architecture. Your data stays yours — always encrypted, never compromised.",
  },
  {
    icon: Cpu,
    title: "AI-Powered Engine",
    description:
      "An intelligent core that learns and adapts. Predictive workflows that anticipate your needs before you even think of them.",
  },
  {
    icon: Globe,
    title: "Global Scale",
    description:
      "Deployed across 42 edge locations worldwide. Sub-50ms latency no matter where your users are on the planet.",
  },
];

const stats = [
  { value: 100, suffix: "+", label: "Projects Delivered" },
  { value: 50, suffix: "K", label: "Active Users" },
  { value: 99, suffix: "%", label: "Satisfaction Rate" },
  { value: 42, suffix: "", label: "Edge Locations" },
];

const timelineItems = [
  {
    year: "2020",
    title: "The Beginning",
    description: "Founded with a vision to redefine digital experiences.",
  },
  {
    year: "2021",
    title: "First Milestone",
    description: "Reached 10,000 users and secured Series A funding.",
  },
  {
    year: "2022",
    title: "Global Expansion",
    description: "Launched in 15 new markets across Europe and Asia.",
  },
  {
    year: "2023",
    title: "AI Integration",
    description: "Introduced AI-powered features that changed the game.",
  },
  {
    year: "2024",
    title: "Industry Leader",
    description: "Recognized as the #1 platform in our category.",
  },
];

const revealWords = [
  "We",
  "build",
  "experiences",
  "that",
  "transcend",
  "the",
  "ordinary.",
];

export default function ScrollAnimationPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLHeadingElement>(null);
  const heroOverlayRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const featureItemsRef = useRef<HTMLDivElement[]>([]);
  const parallaxRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const statNumbersRef = useRef<HTMLSpanElement[]>([]);
  const timelineRef = useRef<HTMLDivElement>(null);
  const timelineItemsRef = useRef<HTMLDivElement[]>([]);
  const typographyRef = useRef<HTMLDivElement>(null);
  const wordRefs = useRef<HTMLSpanElement[]>([]);
  const ctaRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      // --- Hero Pin & Zoom ---
      const heroTl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "+=150%",
          pin: true,
          scrub: 1,
        },
      });

      heroTl
        .to(heroTextRef.current, {
          scale: 0.5,
          opacity: 0.3,
          duration: 1,
        })
        .to(
          heroOverlayRef.current,
          {
            opacity: 0.8,
            duration: 1,
          },
          0
        )
        .to(
          ".hero-subtitle",
          {
            y: -60,
            opacity: 0,
            duration: 0.6,
          },
          0
        )
        .to(
          ".hero-badge",
          {
            scale: 0.8,
            opacity: 0,
            duration: 0.5,
          },
          0
        );

      // --- Feature Reveal ---
      featureItemsRef.current.forEach((item, i) => {
        if (!item) return;
        const direction = i % 2 === 0 ? -120 : 120;

        gsap.from(item, {
          x: direction,
          opacity: 0,
          duration: 1,
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            end: "top 40%",
            scrub: 1,
          },
        });

        // Animate the icon
        gsap.from(item.querySelector(".feature-icon"), {
          scale: 0,
          rotation: -180,
          duration: 0.8,
          scrollTrigger: {
            trigger: item,
            start: "top 75%",
            end: "top 50%",
            scrub: 1,
          },
        });

        // Animate the description line
        gsap.from(item.querySelector(".feature-desc"), {
          y: 30,
          opacity: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: item,
            start: "top 70%",
            end: "top 45%",
            scrub: 1,
          },
        });
      });

      // --- Parallax Section ---
      if (parallaxRef.current) {
        const layers = parallaxRef.current.querySelectorAll(".parallax-layer");
        layers.forEach((layer, i) => {
          const speed = (i + 1) * 80;
          gsap.to(layer, {
            y: -speed,
            scrollTrigger: {
              trigger: parallaxRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          });
        });

        // Floating text
        gsap.fromTo(
          ".parallax-text",
          { scale: 0.6, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            scrollTrigger: {
              trigger: parallaxRef.current,
              start: "top 60%",
              end: "center center",
              scrub: 1,
            },
          }
        );

        gsap.to(".parallax-text", {
          scale: 1.3,
          opacity: 0,
          scrollTrigger: {
            trigger: parallaxRef.current,
            start: "center center",
            end: "bottom 40%",
            scrub: 1,
          },
        });
      }

      // --- Stats Counter ---
      statNumbersRef.current.forEach((el, i) => {
        if (!el) return;
        const target = stats[i].value;

        gsap.fromTo(
          el,
          { innerText: 0 },
          {
            innerText: target,
            duration: 2,
            snap: { innerText: 1 },
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // Scale-in animation for stat cards
        gsap.from(el.closest(".stat-card")!, {
          y: 60,
          opacity: 0,
          scale: 0.9,
          duration: 0.8,
          delay: i * 0.15,
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        });
      });

      // --- Timeline ---
      // Animate the timeline line drawing
      gsap.from(".timeline-line", {
        scaleY: 0,
        transformOrigin: "top center",
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top 70%",
          end: "bottom 60%",
          scrub: 1,
        },
      });

      timelineItemsRef.current.forEach((item, i) => {
        if (!item) return;
        const direction = i % 2 === 0 ? -80 : 80;

        gsap.from(item, {
          x: direction,
          opacity: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            end: "top 60%",
            scrub: 1,
          },
        });

        // Dot pulse
        gsap.from(item.querySelector(".timeline-dot"), {
          scale: 0,
          duration: 0.4,
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      });

      // --- Large Typography Reveal ---
      wordRefs.current.forEach((word, i) => {
        if (!word) return;

        gsap.fromTo(
          word,
          {
            opacity: 0.1,
            scale: 0.85,
            y: 20,
          },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.6,
            scrollTrigger: {
              trigger: word,
              start: "top 80%",
              end: "top 50%",
              scrub: 1,
            },
          }
        );
      });

      // Pin the typography section
      gsap.timeline({
        scrollTrigger: {
          trigger: typographyRef.current,
          start: "top top",
          end: "+=200%",
          pin: true,
          scrub: 1,
        },
      });

      // --- CTA Fade In ---
      gsap.from(ctaRef.current, {
        y: 80,
        opacity: 0,
        scale: 0.9,
        duration: 1,
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 85%",
          end: "top 55%",
          scrub: 1,
        },
      });

      // Glow pulse on CTA button
      gsap.to(".cta-glow", {
        opacity: 0.6,
        scale: 1.2,
        repeat: -1,
        yoyo: true,
        duration: 2,
        ease: "sine.inOut",
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="bg-[#050505] text-white overflow-hidden">
      {/* Back Navigation */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="fixed top-6 left-6 z-50"
      >
        <Link
          href="/"
          className="group flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white/60 hover:text-white hover:bg-white/10 transition-all duration-300"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium">Back</span>
        </Link>
      </motion.div>

      {/* ============================== */}
      {/* SECTION 1: HERO - Pin & Zoom  */}
      {/* ============================== */}
      <section
        ref={heroRef}
        className="relative h-screen flex flex-col items-center justify-center overflow-hidden"
      >
        {/* Background gradient layers */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(120,80,255,0.15)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,200,255,0.08)_0%,transparent_50%)]" />

        {/* Overlay that darkens on scroll */}
        <div
          ref={heroOverlayRef}
          className="absolute inset-0 bg-black opacity-0 z-10"
        />

        {/* Animated grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hero-badge relative z-20 mb-8 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm"
        >
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-white/50">
            Scroll to Explore
          </span>
        </motion.div>

        {/* Main Hero Text */}
        <h1
          ref={heroTextRef}
          className="relative z-20 text-[clamp(3rem,12vw,12rem)] font-black leading-[0.85] tracking-tighter text-center"
        >
          <span className="block bg-clip-text text-transparent bg-gradient-to-b from-white via-white/90 to-white/40">
            NOVA
          </span>
          <span className="block bg-clip-text text-transparent bg-gradient-to-b from-white/60 to-white/10 text-[0.4em] tracking-wide mt-2">
            EXPERIENCE
          </span>
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="hero-subtitle relative z-20 mt-8 text-lg md:text-xl text-white/40 max-w-md text-center leading-relaxed"
        >
          The future of digital interaction.
          <br />
          Scroll down to discover.
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="hero-subtitle absolute bottom-12 z-20 flex flex-col items-center gap-2"
        >
          <span className="text-xs font-mono text-white/30 tracking-widest uppercase">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" as const }}
            className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center pt-1.5"
          >
            <div className="w-1 h-1.5 rounded-full bg-white/50" />
          </motion.div>
        </motion.div>
      </section>

      {/* ============================== */}
      {/* SECTION 2: FEATURE REVEAL     */}
      {/* ============================== */}
      <section ref={featuresRef} className="relative py-40 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-32">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs font-mono uppercase tracking-[0.3em] text-white/30"
            >
              What We Offer
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold mt-4 tracking-tight"
            >
              Built for the{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
                future
              </span>
            </motion.h2>
          </div>

          {/* Feature cards */}
          <div className="space-y-24">
            {features.map((feature, i) => (
              <div
                key={i}
                ref={(el) => {
                  if (el) featureItemsRef.current[i] = el;
                }}
                className={`flex flex-col ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-center gap-12 md:gap-20`}
              >
                {/* Icon */}
                <div className="feature-icon flex-shrink-0 w-24 h-24 rounded-2xl bg-gradient-to-br from-white/10 to-white/[0.02] border border-white/10 flex items-center justify-center">
                  <feature.icon className="w-10 h-10 text-purple-400/80" />
                </div>

                {/* Content */}
                <div
                  className={`flex-1 ${
                    i % 2 === 0 ? "text-left" : "md:text-right"
                  }`}
                >
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="feature-desc text-base md:text-lg text-white/40 leading-relaxed max-w-lg">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================== */}
      {/* SECTION 3: PARALLAX LAYERS    */}
      {/* ============================== */}
      <section
        ref={parallaxRef}
        className="relative h-[120vh] overflow-hidden flex items-center justify-center"
      >
        {/* Parallax Layer 1 - Far background */}
        <div className="parallax-layer absolute inset-0 flex items-center justify-center">
          <div className="w-[600px] h-[600px] rounded-full bg-gradient-to-br from-purple-900/20 to-transparent blur-3xl" />
        </div>

        {/* Parallax Layer 2 - Mid */}
        <div className="parallax-layer absolute inset-0">
          <div className="absolute top-[15%] left-[10%] w-2 h-2 rounded-full bg-purple-400/40" />
          <div className="absolute top-[25%] right-[20%] w-3 h-3 rounded-full bg-cyan-400/30" />
          <div className="absolute bottom-[30%] left-[25%] w-1.5 h-1.5 rounded-full bg-white/20" />
          <div className="absolute top-[40%] right-[35%] w-2.5 h-2.5 rounded-full bg-purple-300/25" />
          <div className="absolute bottom-[20%] right-[15%] w-2 h-2 rounded-full bg-cyan-300/20" />
          <div className="absolute top-[60%] left-[40%] w-1 h-1 rounded-full bg-white/30" />
        </div>

        {/* Parallax Layer 3 - Geometric shapes */}
        <div className="parallax-layer absolute inset-0">
          <div className="absolute top-[20%] left-[15%] w-32 h-32 border border-white/5 rounded-2xl rotate-45" />
          <div className="absolute bottom-[25%] right-[10%] w-40 h-40 border border-white/[0.03] rounded-full" />
          <div className="absolute top-[50%] left-[60%] w-24 h-24 border border-purple-500/10 rounded-xl rotate-12" />
        </div>

        {/* Parallax Layer 4 - Near foreground */}
        <div className="parallax-layer absolute inset-0">
          <div className="absolute top-[10%] right-[30%] w-48 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent rotate-[30deg]" />
          <div className="absolute bottom-[35%] left-[20%] w-64 h-[1px] bg-gradient-to-r from-transparent via-purple-400/10 to-transparent -rotate-[20deg]" />
        </div>

        {/* Center floating text */}
        <div className="parallax-text relative z-10 text-center">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter">
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-cyan-300 to-purple-400">
              Immersive
            </span>
            <span className="block text-white/80 mt-2">Experience</span>
          </h2>
          <p className="mt-6 text-white/30 text-lg font-light tracking-wide">
            Every pixel tells a story
          </p>
        </div>
      </section>

      {/* ============================== */}
      {/* SECTION 4: NUMBER COUNTER     */}
      {/* ============================== */}
      <section ref={statsRef} className="relative py-40 px-6 md:px-12 lg:px-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(120,80,255,0.08)_0%,transparent_70%)]" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-white/30">
              By the Numbers
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 tracking-tight">
              Impact at scale
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="stat-card group text-center p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/15 transition-colors duration-500"
              >
                <div className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-3">
                  <span
                    ref={(el) => {
                      if (el) statNumbersRef.current[i] = el;
                    }}
                    className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60"
                  >
                    0
                  </span>
                  <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
                    {stat.suffix}
                  </span>
                </div>
                <p className="text-sm text-white/30 font-medium tracking-wide uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================== */}
      {/* SECTION 5: TIMELINE           */}
      {/* ============================== */}
      <section ref={timelineRef} className="relative py-40 px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-24">
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-white/30">
              Our Journey
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 tracking-tight">
              Milestones
            </h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="timeline-line absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent" />

            <div className="space-y-20">
              {timelineItems.map((item, i) => (
                <div
                  key={i}
                  ref={(el) => {
                    if (el) timelineItemsRef.current[i] = el;
                  }}
                  className={`relative flex items-center ${
                    i % 2 === 0 ? "justify-start" : "justify-end"
                  }`}
                >
                  {/* Dot on timeline */}
                  <div className="timeline-dot absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-purple-500 shadow-[0_0_12px_rgba(168,85,247,0.5)] z-10" />

                  {/* Content card */}
                  <div
                    className={`w-[calc(50%-40px)] p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] ${
                      i % 2 === 0 ? "text-right mr-auto" : "text-left ml-auto"
                    }`}
                  >
                    <span className="text-xs font-mono text-purple-400/70 tracking-wider">
                      {item.year}
                    </span>
                    <h3 className="text-xl font-bold mt-2 mb-2 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-sm text-white/40 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================== */}
      {/* SECTION 6: LARGE TYPOGRAPHY   */}
      {/* ============================== */}
      <section
        ref={typographyRef}
        className="relative h-screen flex items-center justify-center px-6"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(120,80,255,0.06)_0%,transparent_60%)]" />

        <div className="relative z-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 max-w-5xl">
          {revealWords.map((word, i) => (
            <span
              key={i}
              ref={(el) => {
                if (el) wordRefs.current[i] = el;
              }}
              className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight"
              style={{
                background:
                  i === 2 || i === 4
                    ? "linear-gradient(135deg, #a855f7, #22d3ee)"
                    : "linear-gradient(180deg, #fff, rgba(255,255,255,0.5))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {word}
            </span>
          ))}
        </div>
      </section>

      {/* ============================== */}
      {/* SECTION 7: CTA                */}
      {/* ============================== */}
      <section className="relative py-40 px-6 md:px-12 lg:px-20">
        <div
          ref={ctaRef}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-white/30">
            Ready?
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mt-6 mb-8 tracking-tight leading-[0.95]">
            Start building
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
              the future
            </span>
          </h2>
          <p className="text-lg text-white/40 mb-12 max-w-lg mx-auto leading-relaxed">
            Join thousands of teams already using Nova to create
            extraordinary digital experiences.
          </p>

          {/* CTA Button */}
          <div className="relative inline-block">
            <div className="cta-glow absolute inset-0 bg-gradient-to-r from-purple-500/30 to-cyan-500/30 rounded-full blur-xl opacity-40" />
            <button className="relative px-10 py-4 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold text-lg tracking-wide hover:shadow-[0_0_40px_rgba(168,85,247,0.4)] transition-shadow duration-500 flex items-center gap-3">
              Get Started
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 px-6 md:px-12 lg:px-20">
        <div className="flex items-center justify-between text-sm text-white/20 max-w-6xl mx-auto">
          <span className="font-mono">NOVA</span>
          <span className="font-mono">GSAP ScrollTrigger + Framer Motion</span>
        </div>
      </footer>
    </div>
  );
}
