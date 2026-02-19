"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import {
  ArrowLeft,
  Play,
  ChevronDown,
  Zap,
  Eye,
  Layers,
  Volume2,
  VolumeX,
  Instagram,
  Twitter,
  Youtube,
  ArrowUpRight,
  Star,
  Film,
  Clapperboard,
} from "lucide-react";

// --------------------------------------------------
// Animated Background – simulates a full-screen video
// --------------------------------------------------
function VideoBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base dark gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />

      {/* Animated gradient overlay that moves to simulate video */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 120% 80% at 50% 50%, rgba(220,38,38,0.15), transparent 70%)",
          animation: "pulse-bg 8s ease-in-out infinite",
        }}
      />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse 80% 120% at 30% 60%, rgba(251,146,60,0.12), transparent 60%)",
          animation: "drift-1 12s ease-in-out infinite",
        }}
      />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background:
            "radial-gradient(ellipse 100% 100% at 70% 40%, rgba(168,85,247,0.1), transparent 60%)",
          animation: "drift-2 10s ease-in-out infinite reverse",
        }}
      />

      {/* Grain / film noise overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          animation: "grain 0.5s steps(1) infinite",
        }}
      />

      {/* Horizontal light sweep */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          background:
            "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.05) 45%, transparent 50%)",
          animation: "sweep 6s ease-in-out infinite",
        }}
      />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.7)_100%)]" />

      {/* CSS animations */}
      <style jsx>{`
        @keyframes pulse-bg {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.4;
          }
          50% {
            transform: scale(1.15);
            opacity: 0.25;
          }
        }
        @keyframes drift-1 {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(5%, -3%) scale(1.1);
          }
          66% {
            transform: translate(-3%, 5%) scale(0.95);
          }
        }
        @keyframes drift-2 {
          0%,
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
          50% {
            transform: translate(-4%, 3%) rotate(2deg);
          }
        }
        @keyframes sweep {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(200%);
          }
        }
        @keyframes grain {
          0% {
            transform: translate(0, 0);
          }
          10% {
            transform: translate(-2%, -2%);
          }
          20% {
            transform: translate(2%, 2%);
          }
          30% {
            transform: translate(-1%, 3%);
          }
          40% {
            transform: translate(3%, -1%);
          }
          50% {
            transform: translate(-3%, 1%);
          }
          60% {
            transform: translate(1%, -3%);
          }
          70% {
            transform: translate(-2%, 2%);
          }
          80% {
            transform: translate(2%, -2%);
          }
          90% {
            transform: translate(-1%, 1%);
          }
          100% {
            transform: translate(0, 0);
          }
        }
      `}</style>
    </div>
  );
}

// --------------------------------------------------
// Section wrapper with in-view animation
// --------------------------------------------------
function AnimatedSection({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// --------------------------------------------------
// Feature Card
// --------------------------------------------------
const features = [
  {
    icon: Zap,
    title: "[Performance Feature]",
    description:
      "[Describe how the product delivers lightning-fast performance. Highlight speed, efficiency, and technical excellence.]",
  },
  {
    icon: Eye,
    title: "[Visual Experience Feature]",
    description:
      "[Describe the stunning visual quality or display technology. Highlight resolution, color accuracy, and immersive experience.]",
  },
  {
    icon: Layers,
    title: "[Design & Build Feature]",
    description:
      "[Describe the premium materials and craftsmanship. Highlight design philosophy, materials, and attention to detail.]",
  },
];

// --------------------------------------------------
// Product items
// --------------------------------------------------
const products = [
  {
    name: "[Product Model Alpha]",
    price: "$X,XXX",
    tag: "New",
    gradient: "from-red-900/40 to-orange-900/30",
  },
  {
    name: "[Product Model Beta]",
    price: "$X,XXX",
    tag: "Popular",
    gradient: "from-violet-900/40 to-indigo-900/30",
  },
  {
    name: "[Product Model Gamma]",
    price: "$X,XXX",
    tag: null,
    gradient: "from-cyan-900/40 to-blue-900/30",
  },
  {
    name: "[Product Model Delta]",
    price: "$X,XXX",
    tag: "Limited",
    gradient: "from-amber-900/40 to-yellow-900/30",
  },
  {
    name: "[Product Model Epsilon]",
    price: "$X,XXX",
    tag: null,
    gradient: "from-emerald-900/40 to-teal-900/30",
  },
  {
    name: "[Product Model Zeta]",
    price: "$X,XXX",
    tag: "Pro",
    gradient: "from-rose-900/40 to-pink-900/30",
  },
];

// --------------------------------------------------
// Footer links
// --------------------------------------------------
const footerLinks = {
  Product: ["[Overview]", "[Features]", "[Pricing]", "[Releases]"],
  Company: ["[About]", "[Careers]", "[Press]", "[Contact]"],
  Resources: ["[Documentation]", "[Support]", "[API Reference]", "[Community]"],
  Legal: ["[Privacy Policy]", "[Terms of Service]", "[Cookie Policy]"],
};

// ==================================================
// Main Page Component
// ==================================================
export default function VideoHeroPage() {
  const [scrolled, setScrolled] = useState(false);
  const [muted, setMuted] = useState(true);
  const heroRef = useRef<HTMLDivElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroTextY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const { scrollYProgress: parallaxProgress } = useScroll({
    target: parallaxRef,
    offset: ["start end", "end start"],
  });
  const parallaxY = useTransform(parallaxProgress, [0, 1], [80, -80]);

  // Navbar scroll state
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden selection:bg-red-600/40">
      {/* ============ NAVBAR ============ */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" as const }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/80 backdrop-blur-xl border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="flex items-center gap-2 text-white/60 hover:text-white transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm font-medium hidden sm:inline">
                Gallery
              </span>
            </Link>
            <div className="h-4 w-px bg-white/10 hidden sm:block" />
            <span className="text-sm font-bold tracking-widest uppercase hidden sm:inline">
              [Brand Name]
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm text-white/50">
            {["[Products]", "[Story]", "[Studio]", "[Support]"].map((item) => (
              <button
                key={item}
                className="hover:text-white transition-colors duration-300"
              >
                {item}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setMuted(!muted)}
              className="p-2 rounded-full hover:bg-white/10 transition-colors"
              aria-label={muted ? "Unmute" : "Mute"}
            >
              {muted ? (
                <VolumeX className="w-4 h-4 text-white/50" />
              ) : (
                <Volume2 className="w-4 h-4 text-white" />
              )}
            </button>
            <button className="px-4 py-1.5 text-sm font-medium bg-white text-black rounded-full hover:bg-white/90 transition-colors">
              [Buy]
            </button>
          </div>
        </div>
      </motion.nav>

      {/* ============ HERO SECTION ============ */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center">
        <VideoBackground />

        <motion.div
          style={{ y: heroTextY, opacity: heroOpacity }}
          className="relative z-10 text-center px-6 max-w-5xl mx-auto"
        >
          {/* Small label */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm"
          >
            <Film className="w-3.5 h-3.5 text-red-400" />
            <span className="text-xs font-medium tracking-wider uppercase text-white/60">
              [New Release — Season Year]
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9] mb-6"
          >
            <span className="block">[Video</span>
            <span className="block bg-gradient-to-r from-red-500 via-orange-400 to-amber-400 bg-clip-text text-transparent">
              Title Here]
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-lg sm:text-xl md:text-2xl text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed font-light"
          >
            [Brand tagline goes here. A compelling one-liner that captures the
            essence of the product and inspires action.]
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button className="group flex items-center gap-3 px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-all duration-300 hover:scale-105">
              <Play className="w-5 h-5 fill-current" />
              <span>[Watch the Film]</span>
            </button>
            <button className="flex items-center gap-2 px-8 py-4 border border-white/20 text-white font-medium rounded-full hover:bg-white/10 transition-all duration-300">
              <span>[Learn More]</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/30">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" as const }}
          >
            <ChevronDown className="w-5 h-5 text-white/30" />
          </motion.div>
        </motion.div>
      </section>

      {/* ============ FEATURE HIGHLIGHTS ============ */}
      <section className="relative py-32 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-20">
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-white/30 mb-4 block">
              [Why Choose Us]
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
              [Feature Section
              <span className="text-white/20"> Headline]</span>
            </h2>
            <p className="text-lg text-white/40 max-w-xl mx-auto">
              [A brief description introducing the key features and what makes
              this product stand out from the competition.]
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <AnimatedSection key={feature.title} delay={index * 0.15}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="group relative p-8 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:border-white/10 hover:bg-white/[0.04] transition-all duration-500"
                >
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-red-600/20 to-orange-600/20 flex items-center justify-center mb-6 group-hover:from-red-600/30 group-hover:to-orange-600/30 transition-all duration-500">
                    <feature.icon className="w-6 h-6 text-red-400" />
                  </div>

                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-white/40 leading-relaxed text-sm">
                    {feature.description}
                  </p>

                  {/* Subtle corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-red-500/5 to-transparent rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PRODUCT SHOWCASE ============ */}
      <section className="relative py-32 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-20">
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-white/30 mb-4 block">
              [Collection]
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
              [Product Showcase
              <span className="text-white/20"> Title]</span>
            </h2>
            <p className="text-lg text-white/40 max-w-xl mx-auto">
              [Browse the full range of products. Each crafted with precision
              and designed for those who demand excellence.]
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <AnimatedSection key={product.name} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.4, ease: "easeOut" as const }}
                  className="group relative rounded-2xl overflow-hidden cursor-pointer border border-white/5 hover:border-white/10 transition-colors duration-500"
                >
                  {/* Product image placeholder */}
                  <div
                    className={`aspect-[4/5] bg-gradient-to-br ${product.gradient} relative overflow-hidden`}
                  >
                    {/* Centered product icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Clapperboard className="w-16 h-16 text-white/10 group-hover:text-white/20 group-hover:scale-110 transition-all duration-500" />
                    </div>

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />

                    {/* Tag */}
                    {product.tag && (
                      <div className="absolute top-4 left-4 px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-white/10 backdrop-blur-sm rounded-full border border-white/10">
                        {product.tag}
                      </div>
                    )}

                    {/* Quick action on hover */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <button className="w-full py-3 bg-white/10 backdrop-blur-md text-white text-sm font-medium rounded-xl border border-white/10 hover:bg-white/20 transition-colors">
                        [Quick View]
                      </button>
                    </motion.div>
                  </div>

                  {/* Product info */}
                  <div className="p-5 bg-white/[0.02]">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-white/90">
                        {product.name}
                      </h3>
                      <div className="flex items-center gap-1 text-amber-400">
                        <Star className="w-3 h-3 fill-current" />
                        <span className="text-xs text-white/40">4.9</span>
                      </div>
                    </div>
                    <p className="text-sm text-white/30">
                      [Brief product description placeholder]
                    </p>
                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-lg font-bold text-white/80">
                        {product.price}
                      </span>
                      <span className="text-xs text-white/20">
                        [Color options]
                      </span>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PARALLAX BANNER ============ */}
      <section
        ref={parallaxRef}
        className="relative py-40 overflow-hidden"
      >
        {/* Parallax background */}
        <motion.div
          style={{ y: parallaxY }}
          className="absolute inset-0 -top-20 -bottom-20"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-red-950/60 via-black to-orange-950/40" />
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(circle at 30% 50%, rgba(220,38,38,0.3), transparent 50%), radial-gradient(circle at 70% 50%, rgba(251,146,60,0.2), transparent 50%)",
            }}
          />
        </motion.div>

        {/* Horizontal lines */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute left-0 right-0 h-px bg-white/[0.03]"
              style={{ top: `${20 + i * 15}%` }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center">
          <AnimatedSection>
            <div className="mb-8 flex justify-center">
              <div className="w-px h-16 bg-gradient-to-b from-transparent via-red-500/50 to-transparent" />
            </div>
            <blockquote className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-8">
              <span className="text-white/90">
                &ldquo;[Inspirational quote placeholder.
              </span>
              <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                {" "}
                A line that captures the brand vision
              </span>
              <span className="text-white/90">
                {" "}
                and resonates with the audience.]&rdquo;
              </span>
            </blockquote>
            <p className="text-sm text-white/30 uppercase tracking-[0.2em]">
              — [Speaker Name], [Title / Role]
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ============ STATS BAR ============ */}
      <section className="py-20 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "[XX]M+", label: "[Users worldwide]" },
              { value: "[XX]+", label: "[Countries served]" },
              { value: "[X.X]", label: "[App Store rating]" },
              { value: "[XX]K+", label: "[5-star reviews]" },
            ].map((stat, index) => (
              <AnimatedSection
                key={stat.label}
                delay={index * 0.1}
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-white/30">{stat.label}</div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="relative py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Footer top */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="text-sm font-semibold text-white/80 mb-4 uppercase tracking-wider">
                  {category}
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <button className="text-sm text-white/30 hover:text-white/70 transition-colors duration-300">
                        {link}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="h-px bg-white/5 mb-10" />

          {/* Footer bottom */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <span className="text-lg font-bold tracking-widest uppercase">
                [Brand]
              </span>
              <span className="text-xs text-white/20">
                &copy; {new Date().getFullYear()} [Company Name]. All rights
                reserved.
              </span>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-4">
              {[
                { icon: Instagram, label: "Instagram" },
                { icon: Twitter, label: "Twitter" },
                { icon: Youtube, label: "YouTube" },
              ].map(({ icon: Icon, label }) => (
                <button
                  key={label}
                  aria-label={label}
                  className="p-2.5 rounded-full border border-white/5 text-white/30 hover:text-white hover:border-white/20 hover:bg-white/5 transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
