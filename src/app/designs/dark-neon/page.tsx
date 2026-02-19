"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Zap,
  Shield,
  Cpu,
  Wifi,
  ArrowLeft,
  Star,
  ChevronRight,
  Terminal,
  Github,
  Twitter,
  MessageCircle,
  Globe,
} from "lucide-react";
import { useEffect, useState, useRef } from "react";

/* ─── Animated Counter Hook ─── */
function useCounter(target: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) setStarted(true);
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const step = target / (duration / 16);
    const id = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(id);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(id);
  }, [started, target, duration]);

  return { count, ref };
}

/* ─── Neon Glow Text Component ─── */
function NeonText({
  children,
  color = "#00FF41",
  className = "",
  as: Tag = "span",
}: {
  children: React.ReactNode;
  color?: string;
  className?: string;
  as?: "span" | "h1" | "h2" | "h3" | "p";
}) {
  return (
    <Tag
      className={className}
      style={{
        color,
        textShadow: `0 0 7px ${color}, 0 0 10px ${color}, 0 0 21px ${color}, 0 0 42px ${color}, 0 0 82px ${color}`,
      }}
    >
      {children}
    </Tag>
  );
}

/* ─── Animated Grid Background ─── */
function AnimatedGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Horizontal lines */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={`h-${i}`}
          className="absolute left-0 right-0 h-px"
          style={{
            top: `${(i + 1) * 5}%`,
            background:
              "linear-gradient(90deg, transparent, rgba(0,255,65,0.15), transparent)",
          }}
          animate={{ opacity: [0.1, 0.4, 0.1] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.15,
            ease: "easeInOut" as const,
          }}
        />
      ))}
      {/* Vertical lines */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={`v-${i}`}
          className="absolute top-0 bottom-0 w-px"
          style={{
            left: `${(i + 1) * 5}%`,
            background:
              "linear-gradient(180deg, transparent, rgba(0,255,65,0.15), transparent)",
          }}
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 0.2,
            ease: "easeInOut" as const,
          }}
        />
      ))}
      {/* Corner glow accents */}
      <div
        className="absolute top-0 left-0 w-96 h-96"
        style={{
          background:
            "radial-gradient(circle, rgba(191,0,255,0.08) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-96 h-96"
        style={{
          background:
            "radial-gradient(circle, rgba(0,255,255,0.08) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}

/* ─── Rotating Neon Ring ─── */
function NeonRing() {
  return (
    <div className="relative w-80 h-80 md:w-[28rem] md:h-[28rem] mx-auto">
      {/* Outer ring */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          border: "2px solid transparent",
          background:
            "conic-gradient(from 0deg, #00FF41, #BF00FF, #00FFFF, #FF00FF, #00FF41) border-box",
          WebkitMask:
            "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" as const }}
      />
      {/* Middle ring */}
      <motion.div
        className="absolute inset-6 rounded-full"
        style={{
          border: "1px solid rgba(0,255,65,0.3)",
          boxShadow:
            "0 0 15px rgba(0,255,65,0.2), inset 0 0 15px rgba(0,255,65,0.1)",
        }}
        animate={{ rotate: -360 }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" as const }}
      />
      {/* Inner ring */}
      <motion.div
        className="absolute inset-12 rounded-full"
        style={{
          border: "1px dashed rgba(191,0,255,0.4)",
          boxShadow: "0 0 10px rgba(191,0,255,0.15)",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" as const }}
      />
      {/* Center content */}
      <div className="absolute inset-16 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center border border-white/5">
        <div className="text-center px-4">
          <p
            className="text-xs tracking-[0.3em] uppercase mb-2"
            style={{ color: "#00FFFF" }}
          >
            Product Showcase
          </p>
          <p className="text-white/40 text-sm font-mono">
            [Product specifications placeholder]
          </p>
        </div>
      </div>
      {/* Orbiting dots */}
      {[0, 90, 180, 270].map((deg) => (
        <motion.div
          key={deg}
          className="absolute w-2 h-2 rounded-full"
          style={{
            background: "#00FF41",
            boxShadow: "0 0 8px #00FF41, 0 0 20px #00FF41",
            top: "50%",
            left: "50%",
          }}
          animate={{ rotate: [deg, deg + 360] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" as const }}
          // Position via transform-origin trick
        />
      ))}
    </div>
  );
}

/* ─── Feature Card ─── */
function FeatureCard({
  icon: Icon,
  title,
  description,
  color,
  delay,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative"
    >
      {/* Glow border wrapper */}
      <div
        className="absolute -inset-px rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"
        style={{ background: `linear-gradient(135deg, ${color}, transparent)` }}
      />
      <div
        className="relative rounded-xl p-6 md:p-8 border border-white/5 backdrop-blur-md"
        style={{
          background: "rgba(10, 10, 10, 0.8)",
          boxShadow: `inset 0 1px 0 rgba(255,255,255,0.05)`,
        }}
      >
        {/* Icon */}
        <motion.div
          className="w-12 h-12 rounded-lg flex items-center justify-center mb-5"
          style={{
            border: `1px solid ${color}40`,
            boxShadow: `0 0 20px ${color}20`,
          }}
          whileHover={{
            boxShadow: `0 0 30px ${color}60, 0 0 60px ${color}30`,
          }}
        >
          <Icon size={24} style={{ color }} />
        </motion.div>
        <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
        <p className="text-white/50 text-sm leading-relaxed">{description}</p>
        {/* Bottom accent line */}
        <motion.div
          className="absolute bottom-0 left-6 right-6 h-px"
          style={{ background: color }}
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.4 }}
        />
      </div>
    </motion.div>
  );
}

/* ─── Stat Card ─── */
function StatCard({
  value,
  suffix,
  label,
  color,
  delay,
}: {
  value: number;
  suffix: string;
  label: string;
  color: string;
  delay: number;
}) {
  const { count, ref } = useCounter(value);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="relative p-6 md:p-8 rounded-xl border border-white/5 text-center"
      style={{ background: "rgba(10,10,10,0.9)" }}
    >
      <div
        className="text-4xl md:text-5xl font-black font-mono mb-2"
        style={{
          color,
          textShadow: `0 0 10px ${color}, 0 0 30px ${color}80, 0 0 60px ${color}40`,
        }}
      >
        {count}
        {suffix}
      </div>
      <p className="text-white/40 text-sm uppercase tracking-widest">
        {label}
      </p>
      {/* Corner accents */}
      <div
        className="absolute top-0 left-0 w-4 h-4 border-t border-l"
        style={{ borderColor: color }}
      />
      <div
        className="absolute top-0 right-0 w-4 h-4 border-t border-r"
        style={{ borderColor: color }}
      />
      <div
        className="absolute bottom-0 left-0 w-4 h-4 border-b border-l"
        style={{ borderColor: color }}
      />
      <div
        className="absolute bottom-0 right-0 w-4 h-4 border-b border-r"
        style={{ borderColor: color }}
      />
    </motion.div>
  );
}

/* ─── Tech Spec Row ─── */
function SpecRow({
  label,
  value,
  delay,
}: {
  label: string;
  value: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="flex justify-between items-center py-3 border-b border-white/5 font-mono text-sm"
    >
      <span style={{ color: "#00FF41" }}>
        {">"} {label}
      </span>
      <span className="text-white/70">{value}</span>
    </motion.div>
  );
}

/* ─── Review Card ─── */
function ReviewCard({
  name,
  handle,
  text,
  rating,
  delay,
}: {
  name: string;
  handle: string;
  text: string;
  rating: number;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -4 }}
      className="p-6 rounded-xl border border-white/5 backdrop-blur-sm"
      style={{ background: "rgba(10,10,10,0.85)" }}
    >
      <div className="flex items-center gap-1 mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={14}
            fill={i < rating ? "#FF00FF" : "transparent"}
            style={{ color: i < rating ? "#FF00FF" : "rgba(255,255,255,0.2)" }}
          />
        ))}
      </div>
      <p className="text-white/60 text-sm leading-relaxed mb-4">{text}</p>
      <div className="flex items-center gap-3">
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
          style={{
            background: "linear-gradient(135deg, #BF00FF, #00FFFF)",
          }}
        >
          {name[0]}
        </div>
        <div>
          <p className="text-white text-sm font-medium">{name}</p>
          <p className="text-white/30 text-xs">{handle}</p>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Scanline Overlay ─── */
function Scanlines() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-50"
      style={{
        background:
          "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)",
      }}
    />
  );
}

/* ═══════════════════════════════════════════════
   MAIN PAGE COMPONENT
   ═══════════════════════════════════════════════ */
export default function DarkNeonPage() {
  const features = [
    {
      icon: Zap,
      title: "[Quantum Processing]",
      description:
        "[Harness the power of next-gen quantum cores for unparalleled computation speeds and zero-latency response times.]",
      color: "#00FF41",
    },
    {
      icon: Shield,
      title: "[Neural Shield Defense]",
      description:
        "[AI-powered adaptive security that evolves with threats. Military-grade encryption meets machine learning.]",
      color: "#BF00FF",
    },
    {
      icon: Cpu,
      title: "[Hyperthreaded Core]",
      description:
        "[128-core architecture delivering raw computational power. Built for the demands of tomorrow.]",
      color: "#00FFFF",
    },
    {
      icon: Wifi,
      title: "[Zero-Latency Mesh]",
      description:
        "[Decentralized mesh network with sub-1ms latency. Stay connected at the speed of thought.]",
      color: "#FF00FF",
    },
  ];

  const stats = [
    { value: 99, suffix: "%", label: "[Performance Efficiency]", color: "#00FF41" },
    { value: 500, suffix: "TB", label: "[Data Throughput]", color: "#BF00FF" },
    { value: 128, suffix: "x", label: "[Speed Multiplier]", color: "#00FFFF" },
    { value: 4, suffix: ".9", label: "[User Rating]", color: "#FF00FF" },
  ];

  const specs = [
    { label: "PROCESSOR", value: "[Quantum Core X-128]" },
    { label: "MEMORY", value: "[512 GB Neural RAM]" },
    { label: "STORAGE", value: "[8 TB Holographic SSD]" },
    { label: "NETWORK", value: "[10 Gbps Mesh Protocol]" },
    { label: "DISPLAY", value: "[16K Retinal Projection]" },
    { label: "POWER", value: "[Fusion Cell - 72hr]" },
    { label: "OS", value: "[NeonOS v4.2.1]" },
    { label: "SECURITY", value: "[Neural Encryption AES-512]" },
  ];

  const reviews = [
    {
      name: "[CyberWolf]",
      handle: "@cyberwolf_2077",
      text: "[This device completely transformed my workflow. The neural interface is beyond anything I&apos;ve used before. Absolute game-changer.]",
      rating: 5,
    },
    {
      name: "[NeonRider]",
      handle: "@neon_rider_x",
      text: "[The quantum processing power is insane. Running complex simulations that used to take hours now complete in minutes.]",
      rating: 5,
    },
    {
      name: "[DataGhost]",
      handle: "@data_ghost",
      text: "[Sleek design, incredible performance. The mesh network connectivity alone is worth the upgrade. Highly recommended.]",
      rating: 4,
    },
  ];

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <Scanlines />

      {/* ─── Navigation ─── */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-40 px-6 py-4 flex items-center justify-between backdrop-blur-md border-b border-white/5"
        style={{ background: "rgba(0,0,0,0.8)" }}
      >
        <Link
          href="/"
          className="flex items-center gap-2 text-white/60 hover:text-white transition-colors"
        >
          <ArrowLeft size={18} />
          <span className="text-sm font-mono">BACK</span>
        </Link>
        <div className="flex items-center gap-2">
          <div
            className="w-2 h-2 rounded-full animate-pulse"
            style={{
              background: "#00FF41",
              boxShadow: "0 0 8px #00FF41",
            }}
          />
          <span
            className="text-xs font-mono tracking-widest"
            style={{ color: "#00FF41" }}
          >
            SYSTEM ONLINE
          </span>
        </div>
      </motion.nav>

      {/* ═══════════════════════════════════════
          SECTION 1: HERO
         ═══════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <AnimatedGrid />

        {/* Radial glow */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(0,255,65,0.05) 0%, transparent 60%)",
          }}
        />

        <div className="relative z-10 text-center max-w-5xl mx-auto">
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xs md:text-sm font-mono tracking-[0.4em] uppercase mb-6"
            style={{ color: "#BF00FF" }}
          >
            [ Initializing System // v4.2.1 ]
          </motion.p>

          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h1
              className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none mb-4"
              style={{
                color: "#00FF41",
                textShadow:
                  "0 0 10px #00FF41, 0 0 20px #00FF41, 0 0 40px #00FF41, 0 0 80px #00FF4180, 0 0 120px #00FF4140",
              }}
            >
              [NEON
              <br />
              <span
                style={{
                  color: "#00FFFF",
                  textShadow:
                    "0 0 10px #00FFFF, 0 0 20px #00FFFF, 0 0 40px #00FFFF, 0 0 80px #00FFFF80",
                }}
              >
                PROTOCOL]
              </span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-white/50 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light"
          >
            [Next-gen neural interface technology. Redefining the boundary
            between human cognition and machine intelligence.]
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="group relative px-8 py-4 font-mono text-sm tracking-widest uppercase"
              style={{
                border: "1px solid #00FF41",
                color: "#00FF41",
                boxShadow: "0 0 15px #00FF4140, inset 0 0 15px #00FF4120",
              }}
            >
              <motion.div
                className="absolute inset-0"
                style={{ background: "#00FF41" }}
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.1 }}
              />
              <span className="relative flex items-center gap-2">
                Initialize System
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
              {/* Pulsing border animation */}
              <motion.div
                className="absolute inset-0 border"
                style={{ borderColor: "#00FF41" }}
                animate={{
                  boxShadow: [
                    "0 0 5px #00FF4140",
                    "0 0 25px #00FF4180",
                    "0 0 5px #00FF4140",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" as const }}
              />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-4 font-mono text-sm tracking-widest uppercase text-white/50 hover:text-white transition-colors border border-white/10 hover:border-white/30"
            >
              View Specs
            </motion.button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-px h-12"
              style={{
                background:
                  "linear-gradient(to bottom, #00FF41, transparent)",
              }}
            />
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SECTION 2: FEATURES
         ═══════════════════════════════════════ */}
      <section className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p
              className="text-xs font-mono tracking-[0.3em] uppercase mb-4"
              style={{ color: "#BF00FF" }}
            >
              // Core Systems
            </p>
            <h2
              className="text-4xl md:text-5xl font-black tracking-tight"
              style={{
                color: "#00FFFF",
                textShadow:
                  "0 0 10px #00FFFF, 0 0 30px #00FFFF60",
              }}
            >
              [Feature Matrix]
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, i) => (
              <FeatureCard key={i} {...feature} delay={i * 0.15} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SECTION 3: PRODUCT SHOWCASE
         ═══════════════════════════════════════ */}
      <section className="relative py-32 px-6">
        {/* Background accent */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(191,0,255,0.05) 0%, transparent 60%)",
          }}
        />

        <div className="max-w-6xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p
              className="text-xs font-mono tracking-[0.3em] uppercase mb-4"
              style={{ color: "#FF00FF" }}
            >
              // Hardware Design
            </p>
            <h2
              className="text-4xl md:text-5xl font-black tracking-tight"
              style={{
                color: "#BF00FF",
                textShadow: "0 0 10px #BF00FF, 0 0 30px #BF00FF60",
              }}
            >
              [Product Showcase]
            </h2>
          </motion.div>

          <NeonRing />

          {/* Spec pills around ring */}
          <div className="flex flex-wrap justify-center gap-3 mt-12">
            {["[Quantum Core]", "[Neural Mesh]", "[HoloDisplay]", "[Fusion Cell]"].map(
              (label, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="px-4 py-2 rounded-full border font-mono text-xs tracking-wider"
                  style={{
                    borderColor: "rgba(0,255,65,0.3)",
                    color: "#00FF41",
                    background: "rgba(0,255,65,0.05)",
                  }}
                >
                  {label}
                </motion.div>
              )
            )}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SECTION 4: STATS
         ═══════════════════════════════════════ */}
      <section className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p
              className="text-xs font-mono tracking-[0.3em] uppercase mb-4"
              style={{ color: "#00FF41" }}
            >
              // Performance Metrics
            </p>
            <h2
              className="text-4xl md:text-5xl font-black tracking-tight"
              style={{
                color: "#00FF41",
                textShadow: "0 0 10px #00FF41, 0 0 30px #00FF4160",
              }}
            >
              [System Stats]
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, i) => (
              <StatCard key={i} {...stat} delay={i * 0.15} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SECTION 5: TECH SPECS
         ═══════════════════════════════════════ */}
      <section className="relative py-32 px-6">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at bottom, rgba(0,255,255,0.03) 0%, transparent 60%)",
          }}
        />

        <div className="max-w-4xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p
              className="text-xs font-mono tracking-[0.3em] uppercase mb-4"
              style={{ color: "#00FFFF" }}
            >
              // Technical Specifications
            </p>
            <h2
              className="text-4xl md:text-5xl font-black tracking-tight"
              style={{
                color: "#00FFFF",
                textShadow: "0 0 10px #00FFFF, 0 0 30px #00FFFF60",
              }}
            >
              [Tech Specs]
            </h2>
          </motion.div>

          {/* Terminal window */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-xl border border-white/10 overflow-hidden"
            style={{ background: "rgba(5,5,5,0.95)" }}
          >
            {/* Terminal header */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="ml-3 text-white/30 text-xs font-mono">
                neon-system://specs --verbose
              </span>
            </div>

            {/* Terminal body */}
            <div className="p-6">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="font-mono text-xs mb-4"
                style={{ color: "#00FF41" }}
              >
                $ cat /sys/neon/hardware.spec
              </motion.p>

              {specs.map((spec, i) => (
                <SpecRow key={i} {...spec} delay={i * 0.08} />
              ))}

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1 }}
                className="font-mono text-xs mt-4"
                style={{ color: "#00FF41" }}
              >
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                >
                  _
                </motion.span>
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SECTION 6: COMMUNITY / REVIEWS
         ═══════════════════════════════════════ */}
      <section className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p
              className="text-xs font-mono tracking-[0.3em] uppercase mb-4"
              style={{ color: "#FF00FF" }}
            >
              // Network Signals
            </p>
            <h2
              className="text-4xl md:text-5xl font-black tracking-tight"
              style={{
                color: "#FF00FF",
                textShadow: "0 0 10px #FF00FF, 0 0 30px #FF00FF60",
              }}
            >
              [Community Feed]
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <ReviewCard key={i} {...review} delay={i * 0.15} />
            ))}
          </div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-6 mt-12"
          >
            {[
              { icon: Github, label: "GitHub" },
              { icon: Twitter, label: "Twitter" },
              { icon: MessageCircle, label: "Discord" },
              { icon: Globe, label: "Forum" },
            ].map(({ icon: Icon, label }) => (
              <motion.div
                key={label}
                whileHover={{ y: -2, scale: 1.1 }}
                className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center cursor-pointer hover:border-white/30 transition-colors"
                style={{ background: "rgba(10,10,10,0.8)" }}
              >
                <Icon size={18} className="text-white/40 hover:text-white" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SECTION 7: CTA
         ═══════════════════════════════════════ */}
      <section className="relative py-32 px-6">
        {/* Full width neon line top */}
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, #00FF41, #BF00FF, #00FFFF, transparent)",
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(0,255,65,0.04) 0%, transparent 60%)",
          }}
        />

        <div className="max-w-4xl mx-auto relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p
              className="text-xs font-mono tracking-[0.3em] uppercase mb-6"
              style={{ color: "#BF00FF" }}
            >
              // Ready to Upgrade?
            </p>
            <h2
              className="text-5xl md:text-7xl font-black tracking-tight mb-6"
              style={{
                color: "#00FF41",
                textShadow:
                  "0 0 10px #00FF41, 0 0 30px #00FF41, 0 0 60px #00FF4180",
              }}
            >
              [Enter The Grid]
            </h2>
            <p className="text-white/40 text-lg max-w-xl mx-auto mb-10">
              [Join thousands of operatives already connected to the Neon Protocol
              network. Your neural upgrade awaits.]
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="relative px-12 py-5 font-mono text-sm tracking-widest uppercase"
              style={{
                background:
                  "linear-gradient(135deg, #00FF4120, #BF00FF20)",
                border: "1px solid #00FF41",
                color: "#00FF41",
              }}
            >
              <motion.div
                className="absolute inset-0"
                animate={{
                  boxShadow: [
                    "0 0 10px #00FF4130, inset 0 0 10px #00FF4110",
                    "0 0 30px #00FF4160, inset 0 0 30px #00FF4130",
                    "0 0 10px #00FF4130, inset 0 0 10px #00FF4110",
                  ],
                }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" as const }}
              />
              <span className="relative flex items-center gap-2 justify-center">
                Connect Now
                <ChevronRight size={16} />
              </span>
            </motion.button>
          </motion.div>
        </div>

        {/* Full width neon line bottom */}
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, #00FFFF, #FF00FF, #00FF41, transparent)",
          }}
        />
      </section>

      {/* ═══════════════════════════════════════
          SECTION 8: FOOTER
         ═══════════════════════════════════════ */}
      <footer className="relative py-16 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
            {/* Brand */}
            <div>
              <h3
                className="text-lg font-black font-mono mb-3"
                style={{
                  color: "#00FF41",
                  textShadow: "0 0 10px #00FF4180",
                }}
              >
                [NEON]
              </h3>
              <p className="text-white/30 text-sm leading-relaxed">
                [Next-generation technology for the cybernetically enhanced.]
              </p>
            </div>

            {/* Links columns */}
            {[
              {
                title: "[Products]",
                links: ["[Protocol X]", "[Neural Core]", "[Mesh Hub]", "[HoloLens]"],
              },
              {
                title: "[Resources]",
                links: ["[Documentation]", "[API Reference]", "[Changelog]", "[Status]"],
              },
              {
                title: "[Company]",
                links: ["[About]", "[Careers]", "[Press]", "[Contact]"],
              },
            ].map((col) => (
              <div key={col.title}>
                <h4 className="text-white/60 text-sm font-mono mb-3">
                  {col.title}
                </h4>
                <ul className="space-y-2">
                  {col.links.map((link) => (
                    <li key={link}>
                      <span className="text-white/30 text-sm hover:text-white/60 transition-colors cursor-pointer">
                        {link}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/20 text-xs font-mono">
              &copy; 2077 [NEON PROTOCOL]. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {["[Privacy]", "[Terms]", "[Security]"].map((link) => (
                <span
                  key={link}
                  className="text-white/20 text-xs font-mono hover:text-white/40 transition-colors cursor-pointer"
                >
                  {link}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom neon accent */}
          <motion.div
            className="mt-8 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, #00FF41, #BF00FF, #00FFFF, #FF00FF, transparent)",
            }}
            animate={{ opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" as const }}
          />
        </div>
      </footer>
    </div>
  );
}
