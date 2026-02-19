"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";
import FilterBar from "@/components/gallery/FilterBar";
import DesignCard from "@/components/gallery/DesignCard";
import LanguageSwitcher from "@/components/common/LanguageSwitcher";
import { useI18n } from "@/i18n/context";
import { designs } from "@/lib/designs";

const galleryText = {
  subtitle: { en: "Design Collection", ko: "디자인 컬렉션", zh: "设计集合", ja: "デザインコレクション" },
  title1: { en: "Web Design", ko: "웹 디자인", zh: "网页设计", ja: "ウェブデザイン" },
  title2: { en: "Gallery", ko: "갤러리", zh: "画廊", ja: "ギャラリー" },
  desc: {
    en: "A curated collection of diverse web designs. From cinematic video heroes to minimal zen aesthetics — explore various styles and interactions.",
    ko: "다양한 웹 디자인의 큐레이션 컬렉션. 시네마틱 비디오 히어로부터 미니멀 젠 미학까지 — 다양한 스타일과 인터랙션을 탐험하세요.",
    zh: "精心策划的多样化网页设计集合。从电影级视频到极简禅意美学 — 探索各种风格和交互。",
    ja: "多様なウェブデザインのキュレーションコレクション。シネマティックなビデオヒーローからミニマルな禅の美学まで。",
  },
  empty: { en: "No designs in this category.", ko: "이 카테고리에 디자인이 없습니다.", zh: "该分类暂无设计。", ja: "このカテゴリにデザインはありません。" },
  count: { en: "designs", ko: "개 디자인", zh: "个设计", ja: "件のデザイン" },
  stack: { en: "Next.js + Tailwind + Framer Motion + GSAP", ko: "Next.js + Tailwind + Framer Motion + GSAP", zh: "Next.js + Tailwind + Framer Motion + GSAP", ja: "Next.js + Tailwind + Framer Motion + GSAP" },
};

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("All");
  const { t } = useI18n();

  const filteredDesigns = useMemo(() => {
    if (activeCategory === "All") return designs;
    return designs.filter((d) => d.category.includes(activeCategory));
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-[#08080a]">
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:72px_72px] pointer-events-none" />

      {/* Top bar */}
      <div className="relative z-20 flex items-center justify-between px-6 md:px-12 lg:px-20 pt-6">
        <div className="flex items-center gap-2.5">
          <Sparkles className="w-4 h-4 text-white/25" />
          <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-white/25">
            {t(galleryText.subtitle)}
          </span>
        </div>
        <LanguageSwitcher variant="dark" />
      </div>

      {/* Header */}
      <header className="relative z-10 pt-12 pb-10 px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]">
            {t(galleryText.title1)}
            <br />
            <span className="text-white/15">{t(galleryText.title2)}</span>
          </h1>
          <p className="text-base text-white/35 max-w-lg leading-relaxed mt-5">
            {t(galleryText.desc)}
          </p>
        </motion.div>
      </header>

      {/* Filter */}
      <section className="relative z-10 px-6 md:px-12 lg:px-20 pb-8">
        <FilterBar activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
      </section>

      {/* Grid */}
      <section className="relative z-10 px-6 md:px-12 lg:px-20 pb-20">
        <AnimatePresence mode="popLayout">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filteredDesigns.map((design, index) => (
              <DesignCard key={design.id} design={design} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredDesigns.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20 text-white/25 text-sm">
            {t(galleryText.empty)}
          </motion.div>
        )}
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/[0.04] px-6 md:px-12 lg:px-20 py-6">
        <div className="flex items-center justify-between text-[11px] text-white/15 font-mono">
          <span>{designs.length} {t(galleryText.count)}</span>
          <span>{t(galleryText.stack)}</span>
        </div>
      </footer>
    </div>
  );
}
