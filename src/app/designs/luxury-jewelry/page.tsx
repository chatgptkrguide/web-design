"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { ArrowLeft, MapPin, Phone, Clock, Diamond } from "lucide-react";
import Link from "next/link";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number], delay },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    transition: { duration: 1.4, ease: "easeOut" as const, delay },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 1.2, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number], delay },
  }),
};

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className={className}>
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={fadeInUp}
        custom={0}
      >
        {children}
      </motion.div>
    </div>
  );
}

const collections = [
  {
    name: "Éternité Diamond Ring",
    price: "$12,500 — $18,000",
    category: "Rings",
  },
  {
    name: "Lumière Pearl Necklace",
    price: "$8,200 — $14,500",
    category: "Necklaces",
  },
  {
    name: "Aurore Gold Bracelet",
    price: "$6,800 — $9,200",
    category: "Bracelets",
  },
  {
    name: "Céleste Sapphire Earrings",
    price: "$15,000 — $22,000",
    category: "Earrings",
  },
  {
    name: "Majesté Emerald Brooch",
    price: "$28,000 — $45,000",
    category: "Brooches",
  },
  {
    name: "Rêverie Diamond Tiara",
    price: "$95,000 — $120,000",
    category: "Haute Joaillerie",
  },
];

const craftsmanshipSteps = [
  {
    step: "01",
    title: "Design & Conception",
    description:
      "Each piece begins as a hand-drawn sketch by our master artisans, capturing the essence of timeless elegance before a single gem is set.",
  },
  {
    step: "02",
    title: "Stone Selection",
    description:
      "Our gemologists hand-select every diamond, sapphire, and emerald, ensuring only stones of exceptional clarity, color, and brilliance are chosen.",
  },
  {
    step: "03",
    title: "Master Setting",
    description:
      "With techniques passed down through generations, our craftsmen meticulously set each stone by hand, creating pieces that will endure for centuries.",
  },
];

const boutiques = [
  {
    city: "Paris",
    address: "23 Place Vendôme, 75001 Paris",
    phone: "+33 1 42 60 30 70",
    hours: "Mon — Sat: 10:00 — 19:00",
  },
  {
    city: "New York",
    address: "725 Fifth Avenue, New York, NY 10022",
    phone: "+1 212 755 8000",
    hours: "Mon — Sat: 10:00 — 18:00",
  },
  {
    city: "Tokyo",
    address: "2-7-12 Ginza, Chuo-ku, Tokyo",
    phone: "+81 3 3562 2381",
    hours: "Mon — Sun: 11:00 — 20:00",
  },
];

export default function LuxuryJewelryPage() {
  const heroRef = useRef(null);
  const craftsmanshipRef = useRef(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(heroScroll, [0, 0.5], [1, 0]);
  const heroScale = useTransform(heroScroll, [0, 0.5], [1, 1.1]);
  const heroTextY = useTransform(heroScroll, [0, 0.5], [0, 80]);

  const { scrollYProgress: craftScroll } = useScroll({
    target: craftsmanshipRef,
    offset: ["start end", "end start"],
  });
  const craftBgY = useTransform(craftScroll, [0, 1], ["-10%", "10%"]);

  return (
    <div className="min-h-screen bg-[#0a0a08] text-[#f5f0eb] overflow-x-hidden">
      {/* Back Button */}
      <motion.div
        className="fixed top-6 left-6 z-50"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <Link
          href="/"
          className="group flex items-center gap-2 text-[#C9A96E]/70 hover:text-[#C9A96E] transition-colors duration-500"
        >
          <ArrowLeft className="w-4 h-4 transition-transform duration-500 group-hover:-translate-x-1" />
          <span className="text-xs font-serif tracking-[0.2em] uppercase">Return</span>
        </Link>
      </motion.div>

      {/* ============================================ */}
      {/* SECTION 1: Hero */}
      {/* ============================================ */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background image placeholder */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-[#1a1510] via-[#0d0b08] to-[#0a0a08]"
          style={{ scale: heroScale }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[70%] h-[80%] border border-[#C9A96E]/10 rounded-sm flex items-center justify-center">
              <span className="text-[#C9A96E]/20 font-serif text-sm tracking-[0.3em] uppercase">
                Hero Image — Campaign Photography
              </span>
            </div>
          </div>
        </motion.div>

        {/* Golden vignette overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a08] via-transparent to-[#0a0a08]/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,#0a0a08_100%)]" />

        {/* Hero Content */}
        <motion.div
          className="relative z-10 text-center px-6"
          style={{ opacity: heroOpacity, y: heroTextY }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, ease: [0.25, 0.1, 0.25, 1], delay: 0.3 }}
          >
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#C9A96E]/60" />
              <Diamond className="w-4 h-4 text-[#C9A96E]/60" />
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#C9A96E]/60" />
            </div>
          </motion.div>

          <motion.h1
            className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-[0.04em] mb-6 text-[#f5f0eb]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.5 }}
          >
            Maison Lumière
          </motion.h1>

          <motion.p
            className="font-serif text-lg sm:text-xl tracking-[0.25em] uppercase text-[#C9A96E]/80 mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, ease: [0.25, 0.1, 0.25, 1], delay: 0.8 }}
          >
            Autumn Winter 2026 Collection
          </motion.p>

          <motion.p
            className="font-serif text-sm tracking-[0.15em] text-[#f5f0eb]/40 max-w-lg mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.4, delay: 1.2 }}
          >
            An ode to eternal elegance — where precious stones meet the mastery of haute joaillerie
          </motion.p>

          <motion.div
            className="mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.4, delay: 1.6 }}
          >
            <button className="group relative font-serif text-xs tracking-[0.3em] uppercase text-[#C9A96E] border border-[#C9A96E]/30 px-10 py-4 hover:bg-[#C9A96E]/10 transition-all duration-700">
              Discover the Collection
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-[#C9A96E] group-hover:w-full transition-all duration-700" />
            </button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <span className="text-[10px] font-serif tracking-[0.3em] uppercase text-[#C9A96E]/40">
            Scroll
          </span>
          <motion.div
            className="w-px h-8 bg-gradient-to-b from-[#C9A96E]/40 to-transparent"
            animate={{ scaleY: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" as const }}
          />
        </motion.div>
      </section>

      {/* ============================================ */}
      {/* SECTION 2: Brand Story */}
      {/* ============================================ */}
      <section className="relative py-32 md:py-44 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Text */}
          <AnimatedSection>
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-px bg-[#C9A96E]/60" />
                <span className="text-[10px] font-serif tracking-[0.3em] uppercase text-[#C9A96E]/60">
                  Our Heritage
                </span>
              </div>
              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-[1.1] mb-8 text-[#f5f0eb]">
                A Legacy of
                <br />
                <span className="text-[#C9A96E]">Timeless Beauty</span>
              </h2>
              <div className="space-y-6 text-[#f5f0eb]/50 leading-relaxed font-light text-base">
                <p>
                  Since 1847, Maison Lumière has been the guardian of an extraordinary legacy — one built on the
                  unwavering pursuit of perfection and the belief that true luxury transcends time. Each creation
                  carries within it the spirit of generations of master artisans.
                </p>
                <p>
                  From the storied ateliers of Place Vendôme to the world&apos;s most prestigious salons, our
                  maison has adorned royalty, visionaries, and icons who understand that the finest jewels are not
                  merely worn — they are lived.
                </p>
                <p>
                  Every gemstone tells a story. Every setting is an act of devotion. This is the art of Maison
                  Lumière — where heritage meets the extraordinary.
                </p>
              </div>
              <div className="mt-10">
                <button className="font-serif text-xs tracking-[0.3em] uppercase text-[#C9A96E]/80 hover:text-[#C9A96E] transition-colors duration-500 flex items-center gap-3 group">
                  Read Our Story
                  <span className="w-6 h-px bg-[#C9A96E]/40 group-hover:w-10 transition-all duration-500" />
                </button>
              </div>
            </div>
          </AnimatedSection>

          {/* Right: Image placeholder */}
          <AnimatedSection>
            <div className="relative">
              <div className="aspect-[3/4] bg-gradient-to-b from-[#1a1510] to-[#0d0b08] border border-[#C9A96E]/15 flex items-center justify-center relative overflow-hidden">
                {/* Decorative gold corner accents */}
                <div className="absolute top-4 left-4 w-12 h-12 border-t border-l border-[#C9A96E]/30" />
                <div className="absolute top-4 right-4 w-12 h-12 border-t border-r border-[#C9A96E]/30" />
                <div className="absolute bottom-4 left-4 w-12 h-12 border-b border-l border-[#C9A96E]/30" />
                <div className="absolute bottom-4 right-4 w-12 h-12 border-b border-r border-[#C9A96E]/30" />
                <span className="text-[#C9A96E]/20 font-serif text-xs tracking-[0.3em] uppercase text-center px-8">
                  Brand Heritage
                  <br />
                  Photography
                </span>
              </div>
              {/* Subtle shadow */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-[#C9A96E]/5 -z-10" />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Decorative divider */}
      <div className="flex items-center justify-center gap-4 py-4">
        <div className="w-24 h-px bg-gradient-to-r from-transparent to-[#C9A96E]/20" />
        <Diamond className="w-3 h-3 text-[#C9A96E]/20" />
        <div className="w-24 h-px bg-gradient-to-l from-transparent to-[#C9A96E]/20" />
      </div>

      {/* ============================================ */}
      {/* SECTION 3: Collection Grid */}
      {/* ============================================ */}
      <section className="relative py-32 md:py-44 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-20">
            <div>
              <span className="text-[10px] font-serif tracking-[0.3em] uppercase text-[#C9A96E]/60 block mb-6">
                The Collection
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#f5f0eb] mb-6">
                Exceptional Pieces
              </h2>
              <p className="font-serif text-base text-[#f5f0eb]/40 max-w-xl mx-auto">
                Each creation is a singular masterpiece, crafted with the rarest gems and the most refined
                techniques of haute joaillerie
              </p>
            </div>
          </AnimatedSection>

          {/* Masonry-style grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collections.map((item, index) => (
              <CollectionCard key={item.name} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 4: Craftsmanship (parallax-feel) */}
      {/* ============================================ */}
      <section ref={craftsmanshipRef} className="relative py-40 md:py-56 overflow-hidden">
        {/* Parallax background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-[#15120d] via-[#1a1510] to-[#15120d]"
          style={{ y: craftBgY }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#C9A96E08_0%,transparent_60%)]" />
          <div className="absolute inset-0 flex items-center justify-center opacity-5">
            <div className="w-[600px] h-[600px] rounded-full border border-[#C9A96E]/20" />
          </div>
        </motion.div>

        <div className="relative z-10 px-6 md:px-12 lg:px-20 max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-24">
            <div>
              <span className="text-[10px] font-serif tracking-[0.3em] uppercase text-[#C9A96E]/60 block mb-6">
                Savoir-Faire
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl md:text-7xl text-[#f5f0eb] mb-6">
                The Art of
                <br />
                Craftsmanship
              </h2>
              <p className="font-serif text-base text-[#f5f0eb]/40 max-w-2xl mx-auto">
                Behind every jewel lies hundreds of hours of meticulous craftsmanship, a devotion to perfection
                that has defined our maison for nearly two centuries
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {craftsmanshipSteps.map((step, index) => (
              <CraftsmanshipCard key={step.step} step={step} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 5: Testimonial / Quote */}
      {/* ============================================ */}
      <section className="relative py-32 md:py-44 px-6">
        <AnimatedSection className="max-w-4xl mx-auto text-center">
          <div>
            {/* Decorative top line */}
            <div className="flex items-center justify-center gap-4 mb-16">
              <div className="w-20 h-px bg-gradient-to-r from-transparent to-[#C9A96E]/30" />
              <div className="w-2 h-2 rotate-45 border border-[#C9A96E]/30" />
              <div className="w-20 h-px bg-gradient-to-l from-transparent to-[#C9A96E]/30" />
            </div>

            <p className="font-serif text-2xl sm:text-3xl md:text-4xl leading-relaxed text-[#f5f0eb]/80 italic mb-12">
              &ldquo;A jewel is not merely an adornment — it is a vessel of emotion, a keeper of memories, and
              a testament to the eternal pursuit of beauty that defines the human spirit.&rdquo;
            </p>

            <div className="flex flex-col items-center gap-2">
              <span className="font-serif text-sm tracking-[0.2em] uppercase text-[#C9A96E]/80">
                Éloise Beaumont
              </span>
              <span className="text-xs tracking-[0.15em] text-[#f5f0eb]/30">
                Creative Director, Maison Lumière
              </span>
            </div>

            {/* Decorative bottom line */}
            <div className="flex items-center justify-center gap-4 mt-16">
              <div className="w-20 h-px bg-gradient-to-r from-transparent to-[#C9A96E]/30" />
              <div className="w-2 h-2 rotate-45 border border-[#C9A96E]/30" />
              <div className="w-20 h-px bg-gradient-to-l from-transparent to-[#C9A96E]/30" />
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* ============================================ */}
      {/* SECTION 6: Boutique / Contact */}
      {/* ============================================ */}
      <section className="relative py-32 md:py-44 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-[#0a0a08] to-[#0f0d0a]">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-20">
            <div>
              <span className="text-[10px] font-serif tracking-[0.3em] uppercase text-[#C9A96E]/60 block mb-6">
                Visit Us
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#f5f0eb] mb-6">
                Our Boutiques
              </h2>
              <p className="font-serif text-base text-[#f5f0eb]/40 max-w-xl mx-auto">
                Experience the world of Maison Lumière in person — our boutiques offer an intimate setting to
                discover our collections
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {boutiques.map((boutique, index) => (
              <BoutiqueCard key={boutique.city} boutique={boutique} index={index} />
            ))}
          </div>

          {/* Map placeholder */}
          <AnimatedSection>
            <div className="w-full aspect-[21/9] bg-gradient-to-br from-[#15120d] to-[#0d0b08] border border-[#C9A96E]/10 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(201,169,110,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(201,169,110,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
              <div className="relative flex flex-col items-center gap-3">
                <MapPin className="w-6 h-6 text-[#C9A96E]/30" />
                <span className="text-[#C9A96E]/20 font-serif text-xs tracking-[0.3em] uppercase">
                  Interactive Map — Worldwide Boutique Locations
                </span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 7: Footer */}
      {/* ============================================ */}
      <footer className="relative border-t border-[#C9A96E]/10 bg-[#0a0a08]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            {/* Brand */}
            <div className="md:col-span-1">
              <h3 className="font-serif text-xl text-[#f5f0eb] mb-4">Maison Lumière</h3>
              <p className="text-xs text-[#f5f0eb]/30 leading-relaxed">
                Haute Joaillerie since 1847.
                <br />
                Paris — New York — Tokyo
              </p>
            </div>

            {/* Collections */}
            <div>
              <h4 className="font-serif text-xs tracking-[0.2em] uppercase text-[#C9A96E]/60 mb-4">
                Collections
              </h4>
              <ul className="space-y-2">
                {["Haute Joaillerie", "Bridal", "Icons", "New Arrivals"].map((link) => (
                  <li key={link}>
                    <span className="text-xs text-[#f5f0eb]/30 hover:text-[#C9A96E]/60 transition-colors duration-500 cursor-pointer">
                      {link}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Maison */}
            <div>
              <h4 className="font-serif text-xs tracking-[0.2em] uppercase text-[#C9A96E]/60 mb-4">
                La Maison
              </h4>
              <ul className="space-y-2">
                {["Heritage", "Craftsmanship", "Sustainability", "Careers"].map((link) => (
                  <li key={link}>
                    <span className="text-xs text-[#f5f0eb]/30 hover:text-[#C9A96E]/60 transition-colors duration-500 cursor-pointer">
                      {link}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-serif text-xs tracking-[0.2em] uppercase text-[#C9A96E]/60 mb-4">
                Services
              </h4>
              <ul className="space-y-2">
                {["Book an Appointment", "Care & Repair", "Gift Registry", "Contact Us"].map((link) => (
                  <li key={link}>
                    <span className="text-xs text-[#f5f0eb]/30 hover:text-[#C9A96E]/60 transition-colors duration-500 cursor-pointer">
                      {link}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-[#C9A96E]/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <span className="font-serif text-[10px] tracking-[0.2em] uppercase text-[#f5f0eb]/20">
              &copy; 2026 Maison Lumière. All rights reserved.
            </span>
            <div className="flex items-center gap-6">
              {["Privacy", "Terms", "Cookies"].map((link) => (
                <span
                  key={link}
                  className="text-[10px] tracking-[0.15em] uppercase text-[#f5f0eb]/20 hover:text-[#C9A96E]/40 transition-colors duration-500 cursor-pointer"
                >
                  {link}
                </span>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ============================================ */
/* Sub-components */
/* ============================================ */

function CollectionCard({
  item,
  index,
}: {
  item: (typeof collections)[number];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const isOddRow = index % 3 === 1;

  return (
    <motion.div
      ref={ref}
      className={`group cursor-pointer ${isOddRow ? "md:mt-12" : ""}`}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={scaleIn}
      custom={index * 0.15}
    >
      {/* Image area */}
      <div className="relative aspect-[3/4] bg-gradient-to-b from-[#15120d] to-[#0d0b08] border border-[#C9A96E]/8 overflow-hidden mb-5 transition-all duration-700 group-hover:border-[#C9A96E]/30">
        {/* Hover gold border animation */}
        <div className="absolute inset-0 border-2 border-[#C9A96E]/0 group-hover:border-[#C9A96E]/20 transition-all duration-700 z-10" />

        {/* Scale effect on hover */}
        <div className="absolute inset-0 flex items-center justify-center transition-transform duration-700 group-hover:scale-105">
          <div className="text-center">
            <Diamond className="w-5 h-5 text-[#C9A96E]/15 mx-auto mb-3" />
            <span className="text-[#C9A96E]/15 font-serif text-[10px] tracking-[0.3em] uppercase">
              {item.category}
            </span>
          </div>
        </div>

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-[#C9A96E]/0 group-hover:bg-[#C9A96E]/5 transition-all duration-700" />
      </div>

      {/* Text */}
      <div className="space-y-1">
        <h3 className="font-serif text-lg text-[#f5f0eb] group-hover:text-[#C9A96E] transition-colors duration-500">
          {item.name}
        </h3>
        <p className="font-serif text-xs tracking-[0.1em] text-[#f5f0eb]/30">
          {item.price}
        </p>
      </div>
    </motion.div>
  );
}

function CraftsmanshipCard({
  step,
  index,
}: {
  step: (typeof craftsmanshipSteps)[number];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      className="text-center md:text-left"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeInUp}
      custom={index * 0.2}
    >
      <span className="font-serif text-5xl md:text-6xl text-[#C9A96E]/10 block mb-4">
        {step.step}
      </span>
      <h3 className="font-serif text-xl text-[#f5f0eb] mb-4">{step.title}</h3>
      <p className="text-sm text-[#f5f0eb]/40 leading-relaxed">{step.description}</p>
    </motion.div>
  );
}

function BoutiqueCard({
  boutique,
  index,
}: {
  boutique: (typeof boutiques)[number];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      className="border border-[#C9A96E]/10 p-8 hover:border-[#C9A96E]/25 transition-all duration-700 group"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeInUp}
      custom={index * 0.15}
    >
      <h3 className="font-serif text-2xl text-[#f5f0eb] mb-6 group-hover:text-[#C9A96E] transition-colors duration-500">
        {boutique.city}
      </h3>
      <div className="space-y-3">
        <div className="flex items-start gap-3">
          <MapPin className="w-3.5 h-3.5 text-[#C9A96E]/40 mt-0.5 shrink-0" />
          <span className="text-xs text-[#f5f0eb]/40 leading-relaxed">{boutique.address}</span>
        </div>
        <div className="flex items-center gap-3">
          <Phone className="w-3.5 h-3.5 text-[#C9A96E]/40 shrink-0" />
          <span className="text-xs text-[#f5f0eb]/40">{boutique.phone}</span>
        </div>
        <div className="flex items-center gap-3">
          <Clock className="w-3.5 h-3.5 text-[#C9A96E]/40 shrink-0" />
          <span className="text-xs text-[#f5f0eb]/40">{boutique.hours}</span>
        </div>
      </div>
      <div className="mt-6 pt-6 border-t border-[#C9A96E]/5">
        <button className="font-serif text-[10px] tracking-[0.3em] uppercase text-[#C9A96E]/60 hover:text-[#C9A96E] transition-colors duration-500">
          Book an Appointment
        </button>
      </div>
    </motion.div>
  );
}
