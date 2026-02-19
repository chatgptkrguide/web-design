"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowLeft, Clock, ChevronRight } from "lucide-react";
import Link from "next/link";

function AnimatedSection({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const articles = [
  {
    category: "CULTURE",
    title: "The Silent Revolution Reshaping How We Experience Art in the Digital Age",
    excerpt:
      "Museums and galleries worldwide are grappling with a fundamental question: how do you preserve the sanctity of physical art while embracing the inevitability of digital transformation?",
    author: "Elena Vasquez",
    readTime: "8 min read",
    featured: true,
  },
  {
    category: "TECHNOLOGY",
    title: "Inside the Labs Building Tomorrow's Neural Interfaces",
    excerpt:
      "A rare look at the cutting-edge research facilities pushing the boundaries of brain-computer interaction.",
    author: "Marcus Chen",
    readTime: "5 min read",
    featured: false,
  },
  {
    category: "DESIGN",
    title: "Why Brutalism Is Making a Comeback in Architecture",
    excerpt:
      "From London to Tokyo, a new generation of architects is rediscovering the raw beauty of concrete.",
    author: "Sophia Andersson",
    readTime: "6 min read",
    featured: false,
  },
  {
    category: "FASHION",
    title: "The Quiet Luxury Movement and Its Discontents",
    excerpt:
      "As stealth wealth dominates the runway, critics ask whether fashion has lost its voice.",
    author: "James Okafor",
    readTime: "4 min read",
    featured: false,
  },
];

const opinions = [
  {
    columnist: "Dr. Margaret Liu",
    title: "We Need to Talk About the Ethics of AI-Generated Journalism",
    excerpt:
      "The line between human and machine-written content is blurring faster than our ethical frameworks can adapt.",
  },
  {
    columnist: "Rafael Domingo",
    title: "The Death of the Third Place Is Killing Community",
    excerpt:
      "Coffee shops became offices, parks became gyms, and we lost the spaces where strangers became neighbors.",
  },
  {
    columnist: "Amara Washington",
    title: "Why Your City's Housing Crisis Is Actually a Design Crisis",
    excerpt:
      "We don't lack space or materials. We lack the political imagination to build differently.",
  },
];

const photoEssayImages = [
  { caption: "Dawn breaks over the abandoned textile mill, Łódź, Poland" },
  { caption: "A weaver's loom, untouched since 1989" },
  { caption: "Light through shattered glass, Building 7" },
  { caption: "The last shift schedule, still pinned to the wall" },
  { caption: "Nature reclaims the loading dock" },
  { caption: "A child's drawing found in the foreman's office" },
];

export default function MagazineEditorialPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Back Navigation */}
      <div className="fixed top-6 left-6 z-50">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm font-sans tracking-wide text-black/50 hover:text-black transition-colors bg-white/80 backdrop-blur-sm px-3 py-2 border border-black/10"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Gallery
        </Link>
      </div>

      {/* ===== MASTHEAD / HEADER ===== */}
      <header className="border-t-[3px] border-black">
        <div className="border-b border-black/20">
          <div className="max-w-7xl mx-auto px-6 md:px-10 py-3 flex items-center justify-between">
            <span className="text-xs font-sans tracking-[0.2em] text-black/40 uppercase">
              February 2026
            </span>
            <span className="text-xs font-sans tracking-[0.2em] text-black/40 uppercase">
              Vol. XII, No. 3
            </span>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }}
          className="max-w-7xl mx-auto px-6 md:px-10 py-8 md:py-12 text-center"
        >
          <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-none">
            THE CHRONICLE
          </h1>
          <div className="mt-4 flex items-center justify-center gap-6 text-xs font-sans tracking-[0.25em] uppercase text-black/50">
            <span>Culture</span>
            <span className="w-1 h-1 rounded-full bg-black/30" />
            <span>Design</span>
            <span className="w-1 h-1 rounded-full bg-black/30" />
            <span>Technology</span>
            <span className="w-1 h-1 rounded-full bg-black/30" />
            <span>Fashion</span>
            <span className="w-1 h-1 rounded-full bg-black/30" />
            <span>Opinion</span>
          </div>
        </motion.div>

        <div className="border-t border-black/20" />
      </header>

      {/* ===== HERO STORY ===== */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left: Headline and byline */}
          <div className="lg:col-span-7">
            <AnimatedSection>
              <span className="inline-block text-xs font-sans font-semibold tracking-[0.25em] uppercase text-[#E41D1D] mb-4">
                Breaking News
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight mb-6">
                The Headline That Changes Everything About How We See the World
              </h2>
              <p className="font-serif text-lg md:text-xl text-black/60 leading-relaxed mb-6 max-w-2xl">
                In an era defined by constant disruption, a new movement is quietly
                reshaping the foundations of culture, technology, and human connection.
                This is the story no one expected — and everyone needs to read.
              </p>
              <div className="flex items-center gap-4 text-sm font-sans">
                <span className="font-semibold">By Alexandra Fontaine</span>
                <span className="text-black/30">|</span>
                <span className="text-black/50 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  12 min read
                </span>
                <span className="text-black/30">|</span>
                <span className="text-black/50">February 19, 2026</span>
              </div>
            </AnimatedSection>
          </div>

          {/* Right: Hero image placeholder */}
          <div className="lg:col-span-5">
            <AnimatedSection delay={0.2}>
              <div className="aspect-[4/5] bg-gradient-to-br from-stone-200 to-stone-300 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-stone-400">
                    <div className="w-16 h-16 border-2 border-stone-400 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl font-serif">F</span>
                    </div>
                    <span className="text-xs tracking-[0.2em] uppercase font-sans">
                      Featured Image
                    </span>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/40 to-transparent p-6">
                  <p className="text-white text-sm font-sans">
                    Photograph by Daniel Mercier for The Chronicle
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="border-t border-black/15" />
      </div>

      {/* ===== ARTICLE GRID ===== */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-16">
        <AnimatedSection>
          <h3 className="text-xs font-sans font-semibold tracking-[0.3em] uppercase text-black/40 mb-8">
            Latest Stories
          </h3>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Featured article - 2 columns wide */}
          <div className="md:col-span-7">
            <AnimatedSection>
              <div className="group cursor-pointer">
                <div className="aspect-[16/10] bg-gradient-to-br from-stone-100 to-stone-200 mb-5 overflow-hidden relative">
                  <div className="absolute inset-0 flex items-center justify-center text-stone-300">
                    <span className="text-xs tracking-[0.2em] uppercase font-sans">
                      Article Image
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                </div>
                <span className="text-xs font-sans font-semibold tracking-[0.25em] uppercase text-[#E41D1D]">
                  {articles[0].category}
                </span>
                <h4 className="font-serif text-2xl md:text-3xl font-bold leading-tight mt-2 mb-3 group-hover:text-[#E41D1D] transition-colors duration-300">
                  {articles[0].title}
                </h4>
                <p className="font-serif text-black/55 leading-relaxed mb-3">
                  {articles[0].excerpt}
                </p>
                <div className="flex items-center gap-3 text-sm font-sans text-black/40">
                  <span className="font-medium text-black/70">{articles[0].author}</span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {articles[0].readTime}
                  </span>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Smaller articles stacked */}
          <div className="md:col-span-5 flex flex-col gap-8">
            {articles.slice(1).map((article, i) => (
              <AnimatedSection key={article.title} delay={0.1 * (i + 1)}>
                <div className="group cursor-pointer flex gap-5">
                  <div className="w-28 h-28 flex-shrink-0 bg-gradient-to-br from-stone-100 to-stone-200 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center text-stone-300">
                      <span className="text-[10px] tracking-wider uppercase font-sans">
                        IMG
                      </span>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] font-sans font-semibold tracking-[0.25em] uppercase text-[#E41D1D]">
                      {article.category}
                    </span>
                    <h5 className="font-serif text-base font-bold leading-snug mt-1 mb-2 group-hover:text-[#E41D1D] transition-colors duration-300 line-clamp-2">
                      {article.title}
                    </h5>
                    <div className="flex items-center gap-2 text-xs font-sans text-black/40">
                      <span className="font-medium text-black/60">
                        {article.author}
                      </span>
                      <span>·</span>
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PULL QUOTE ===== */}
      <section className="border-y border-black/15 py-16 md:py-24 my-4">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <AnimatedSection>
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#E41D1D]" />
              <blockquote className="pl-8 md:pl-12">
                <p className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
                  &ldquo;The greatest stories of our time are not found in headlines,
                  but in the quiet spaces between them.&rdquo;
                </p>
                <footer className="mt-6 font-sans text-sm tracking-wide text-black/50">
                  <span className="font-semibold text-black/70">
                    — Victoria Ashworth
                  </span>
                  , Editor-in-Chief
                </footer>
              </blockquote>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== TWO-COLUMN ARTICLE LAYOUT ===== */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Main content column */}
          <div className="lg:col-span-7">
            <AnimatedSection>
              <span className="text-xs font-sans font-semibold tracking-[0.25em] uppercase text-[#E41D1D] mb-3 block">
                Feature
              </span>
              <h3 className="font-serif text-3xl md:text-4xl font-bold leading-tight mb-6">
                The Architecture of Silence: How Sound Design Is Reshaping Urban Life
              </h3>
              <div className="flex items-center gap-3 text-sm font-sans text-black/50 mb-8">
                <span className="font-medium text-black">By Thomas Heidegger</span>
                <span>·</span>
                <span>February 14, 2026</span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  10 min read
                </span>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="space-y-6 font-serif text-lg leading-relaxed text-black/75">
                <p>
                  In the heart of Copenhagen, a team of acoustic engineers and
                  urban planners are conducting an experiment that could fundamentally
                  alter how cities sound. Their laboratory is not a sterile room
                  filled with equipment, but rather a two-kilometer stretch of the
                  city&apos;s busiest commercial district.
                </p>
                <p>
                  The premise is deceptively simple: what if the built environment
                  could actively shape the sounds we hear, filtering the cacophony
                  of modern urban life into something more intentional, even
                  therapeutic? It&apos;s a question that sits at the intersection of
                  architecture, neuroscience, and public health — and the answers
                  are already changing how we think about the spaces we inhabit.
                </p>
                <p>
                  Dr. Ingrid Svensson, who leads the project, describes their
                  approach as &ldquo;acoustic urbanism.&rdquo; Unlike traditional
                  noise reduction, which simply seeks to dampen sound, their work
                  aims to curate it. Using a combination of specially designed
                  building materials, strategic vegetation placement, and
                  AI-driven sound mapping, the team has created zones within the
                  district that each have a distinct auditory character.
                </p>
                <p>
                  &ldquo;We&apos;re not trying to make the city quiet,&rdquo;
                  Svensson explains, standing at the edge of what her team calls
                  the &ldquo;Contemplation Corridor&rdquo; — a narrow lane between
                  two office buildings where passing traffic is virtually inaudible.
                  &ldquo;We&apos;re trying to give people sonic choices. A city
                  should offer the same variety in sound that it offers in visual
                  experience.&rdquo;
                </p>
              </div>
            </AnimatedSection>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-5">
            <AnimatedSection delay={0.2}>
              <div className="border-t-2 border-black pt-6 mb-10">
                <h4 className="text-xs font-sans font-semibold tracking-[0.3em] uppercase text-black/40 mb-5">
                  Most Read
                </h4>
                <div className="space-y-5">
                  {[
                    "The Hidden Cost of Fast Fashion's Green Promises",
                    "Why Millennials Are Leaving Cities for Good",
                    "The Algorithm That Knows What You'll Read Next",
                    "Inside the World's Most Expensive Restaurant",
                    "A Photographer's Journey Through Forgotten Europe",
                  ].map((title, i) => (
                    <div
                      key={title}
                      className="flex gap-4 items-start group cursor-pointer"
                    >
                      <span className="font-serif text-3xl font-bold text-black/15 leading-none flex-shrink-0 w-8">
                        {i + 1}
                      </span>
                      <p className="font-serif text-sm font-semibold leading-snug group-hover:text-[#E41D1D] transition-colors duration-300">
                        {title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="bg-stone-50 p-6 mb-10">
                <h4 className="text-xs font-sans font-semibold tracking-[0.3em] uppercase text-black/40 mb-3">
                  Editor&apos;s Pick
                </h4>
                <div className="aspect-[3/2] bg-gradient-to-br from-stone-200 to-stone-300 mb-4 relative">
                  <div className="absolute inset-0 flex items-center justify-center text-stone-400">
                    <span className="text-xs tracking-[0.2em] uppercase font-sans">
                      Image
                    </span>
                  </div>
                </div>
                <h5 className="font-serif text-lg font-bold leading-tight mb-2">
                  The Forgotten Masterpiece That Spent 80 Years in a Basement
                </h5>
                <p className="font-serif text-sm text-black/50 leading-relaxed">
                  A routine building renovation in Florence uncovered a painting
                  that art historians are calling the find of the century.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.35}>
              <div className="border-t border-black/10 pt-6">
                <h4 className="text-xs font-sans font-semibold tracking-[0.3em] uppercase text-black/40 mb-4">
                  Newsletter
                </h4>
                <p className="font-serif text-sm text-black/60 mb-4 leading-relaxed">
                  Get the week&apos;s best stories delivered to your inbox every
                  Sunday morning.
                </p>
                <div className="flex gap-2">
                  <div className="flex-1 border border-black/20 px-3 py-2 text-sm font-sans text-black/30">
                    your@email.com
                  </div>
                  <button className="bg-black text-white text-sm font-sans font-medium px-5 py-2 hover:bg-[#E41D1D] transition-colors duration-300">
                    Subscribe
                  </button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="border-t border-black/15" />
      </div>

      {/* ===== PHOTO ESSAY SECTION ===== */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-16">
        <AnimatedSection>
          <div className="flex items-end justify-between mb-8">
            <div>
              <span className="text-xs font-sans font-semibold tracking-[0.25em] uppercase text-[#E41D1D] block mb-2">
                Photo Essay
              </span>
              <h3 className="font-serif text-3xl md:text-4xl font-bold leading-tight">
                Ghosts of Industry: Poland&apos;s Abandoned Textile Mills
              </h3>
              <p className="font-sans text-sm text-black/50 mt-2">
                Photographs by Katarzyna Nowak
              </p>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {photoEssayImages.map((photo, i) => (
            <AnimatedSection key={photo.caption} delay={0.08 * i}>
              <div className="group cursor-pointer">
                <div
                  className={`bg-gradient-to-br from-stone-200 to-stone-300 relative overflow-hidden ${
                    i === 0 || i === 3
                      ? "aspect-[4/5]"
                      : i === 2
                      ? "aspect-square"
                      : "aspect-[3/4]"
                  }`}
                >
                  <div className="absolute inset-0 flex items-center justify-center text-stone-400">
                    <span className="text-xs tracking-[0.15em] uppercase font-sans">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                </div>
                <p className="font-serif text-sm text-black/50 mt-3 leading-relaxed italic">
                  {photo.caption}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="border-t border-black/15" />
      </div>

      {/* ===== OPINION SECTION ===== */}
      <section className="bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-16">
          <AnimatedSection>
            <div className="flex items-center gap-4 mb-10">
              <h3 className="text-xs font-sans font-semibold tracking-[0.3em] uppercase text-black/40">
                Opinion
              </h3>
              <div className="flex-1 border-t border-black/10" />
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {opinions.map((opinion, i) => (
              <AnimatedSection key={opinion.title} delay={0.1 * i}>
                <div className="group cursor-pointer">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-stone-300 to-stone-400 flex items-center justify-center text-white font-serif font-bold text-lg">
                      {opinion.columnist.charAt(0)}
                    </div>
                    <div>
                      <p className="font-sans text-sm font-semibold leading-tight">
                        {opinion.columnist}
                      </p>
                      <p className="font-sans text-xs text-black/40">Columnist</p>
                    </div>
                  </div>
                  <h4 className="font-serif text-xl font-bold leading-snug mb-3 group-hover:text-[#E41D1D] transition-colors duration-300">
                    {opinion.title}
                  </h4>
                  <p className="font-serif text-sm text-black/55 leading-relaxed mb-4">
                    {opinion.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1 text-xs font-sans font-semibold tracking-wide uppercase text-[#E41D1D] group-hover:gap-2 transition-all duration-300">
                    Read More <ChevronRight className="w-3 h-3" />
                  </span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="border-t border-black/15 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          {/* Top footer */}
          <div className="py-12 grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-4">
              <h4 className="font-serif text-2xl font-bold mb-3">
                THE CHRONICLE
              </h4>
              <p className="font-serif text-sm text-black/50 leading-relaxed">
                Independent journalism since 1987. Covering the stories that shape
                culture, define eras, and challenge the status quo.
              </p>
            </div>
            <div className="md:col-span-2">
              <h5 className="text-xs font-sans font-semibold tracking-[0.2em] uppercase text-black/40 mb-4">
                Sections
              </h5>
              <ul className="space-y-2.5 text-sm font-sans">
                {["Culture", "Technology", "Design", "Fashion", "Opinion", "Photo Essays"].map(
                  (item) => (
                    <li key={item}>
                      <span className="text-black/60 hover:text-black cursor-pointer transition-colors duration-200">
                        {item}
                      </span>
                    </li>
                  )
                )}
              </ul>
            </div>
            <div className="md:col-span-2">
              <h5 className="text-xs font-sans font-semibold tracking-[0.2em] uppercase text-black/40 mb-4">
                Company
              </h5>
              <ul className="space-y-2.5 text-sm font-sans">
                {["About", "Careers", "Contact", "Advertise", "Ethics Policy"].map(
                  (item) => (
                    <li key={item}>
                      <span className="text-black/60 hover:text-black cursor-pointer transition-colors duration-200">
                        {item}
                      </span>
                    </li>
                  )
                )}
              </ul>
            </div>
            <div className="md:col-span-4">
              <h5 className="text-xs font-sans font-semibold tracking-[0.2em] uppercase text-black/40 mb-4">
                Subscribe
              </h5>
              <p className="font-serif text-sm text-black/50 leading-relaxed mb-4">
                Get unlimited access to award-winning journalism for less than the
                cost of a coffee.
              </p>
              <button className="w-full bg-black text-white text-sm font-sans font-semibold tracking-wide py-3 hover:bg-[#E41D1D] transition-colors duration-300">
                Subscribe Now — $4.99/month
              </button>
              <p className="text-xs font-sans text-black/30 mt-3">
                Cancel anytime. First month free.
              </p>
            </div>
          </div>

          {/* Bottom footer */}
          <div className="border-t border-black/10 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs font-sans text-black/30">
              &copy; 2026 The Chronicle. All rights reserved. Reproduction in whole
              or in part without permission is prohibited.
            </p>
            <div className="flex items-center gap-6 text-xs font-sans text-black/30">
              <span className="hover:text-black/60 cursor-pointer transition-colors">
                Terms of Service
              </span>
              <span className="hover:text-black/60 cursor-pointer transition-colors">
                Privacy Policy
              </span>
              <span className="hover:text-black/60 cursor-pointer transition-colors">
                Cookie Settings
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
