"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useI18n } from "@/i18n/context";
import LanguageSwitcher from "@/components/common/LanguageSwitcher";

const fadeIn = {
  initial: { opacity: 0.4, y: 10 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: {
    duration: 0.9,
    ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
  },
};

const products = [
  {
    name: {
      en: "Ceramic Bowl",
      ko: "세라믹 볼",
      zh: "陶瓷碗",
      ja: "セラミックボウル",
    },
    price: "¥12,000",
    color: "bg-[#EDE8E0]",
  },
  {
    name: {
      en: "Linen Towel",
      ko: "린넨 타월",
      zh: "亚麻毛巾",
      ja: "リネンタオル",
    },
    price: "¥8,500",
    color: "bg-[#E5E0D5]",
  },
  {
    name: {
      en: "Oak Tray",
      ko: "오크 트레이",
      zh: "橡木托盘",
      ja: "オークトレイ",
    },
    price: "¥15,000",
    color: "bg-[#DDD8CE]",
  },
];

const materials = [
  {
    name: {
      en: "Natural Cotton",
      ko: "천연 면",
      zh: "天然棉",
      ja: "天然コットン",
    },
    description: {
      en: "Sourced from organic farms, our unbleached cotton retains its natural warmth and texture.",
      ko: "유기농 농장에서 수급한 표백하지 않은 면은 자연스러운 따뜻함과 질감을 유지합니다.",
      zh: "来自有机农场的未漂白棉花，保留了天然的温暖和质感。",
      ja: "有機農場から調達した未漂白のコットンは、自然な温かみと風合いを保っています。",
    },
    swatch: "bg-[#F5F0E8]",
  },
  {
    name: {
      en: "White Oak",
      ko: "화이트 오크",
      zh: "白橡木",
      ja: "ホワイトオーク",
    },
    description: {
      en: "Sustainably harvested Japanese white oak, aged for two years before crafting into form.",
      ko: "지속 가능하게 수확한 일본산 화이트 오크로, 가공 전 2년간 숙성합니다.",
      zh: "可持续采伐的日本白橡木，在成型前陈化两年。",
      ja: "持続可能な方法で収穫された日本産ホワイトオークを、2年間熟成させてから加工します。",
    },
    swatch: "bg-[#D4C9B8]",
  },
  {
    name: {
      en: "Stoneware Clay",
      ko: "석기 점토",
      zh: "炻器粘土",
      ja: "ストーンウェア粘土",
    },
    description: {
      en: "Hand-selected clay from the Shigaraki region, fired at high temperatures for depth.",
      ko: "시가라키 지역의 엄선된 점토를 고온에서 소성하여 깊이를 더합니다.",
      zh: "来自信乐地区的精选粘土，经高温烧制而成。",
      ja: "信楽地方から厳選された粘土を、高温で焼成し深みを生み出します。",
    },
    swatch: "bg-[#C4B5A3]",
  },
];

const processSteps = [
  {
    number: "01",
    title: { en: "Source", ko: "원료 선별", zh: "选材", ja: "素材選定" },
    description: {
      en: "We carefully select raw materials from trusted artisans and sustainable sources across Japan.",
      ko: "일본 전역의 신뢰할 수 있는 장인과 지속 가능한 원천에서 원료를 엄선합니다.",
      zh: "我们从日本各地值得信赖的工匠和可持续来源中精心挑选原材料。",
      ja: "日本全国の信頼できる職人と持続可能な産地から、原材料を厳選します。",
    },
  },
  {
    number: "02",
    title: { en: "Craft", ko: "수공예", zh: "制作", ja: "手仕事" },
    description: {
      en: "Each piece is shaped by hand, following traditional techniques refined over generations.",
      ko: "각 제품은 세대를 거쳐 정교해진 전통 기법에 따라 수작업으로 제작됩니다.",
      zh: "每件作品均由手工塑造，遵循经数代人精炼的传统技艺。",
      ja: "伝統的な技法に従い、一つひとつ手作業で仕上げます。",
    },
  },
  {
    number: "03",
    title: { en: "Refine", ko: "정제", zh: "精炼", ja: "精錬" },
    description: {
      en: "Through patient iteration we remove the unnecessary, until only the essential form remains.",
      ko: "인내심 있는 반복을 통해 불필요한 것을 제거하고, 본질적인 형태만 남깁니다.",
      zh: "通过耐心的迭代，去除不必要的部分，直到只剩下本质的形态。",
      ja: "忍耐強い反復を経て不要なものを削ぎ落とし、本質的な形だけを残します。",
    },
  },
];

export default function MinimalistZenPage() {
  const { t } = useI18n();

  return (
    <div className="min-h-screen bg-[#FAFAF5] text-[#1a1a1a] selection:bg-[#1a1a1a]/10 overflow-x-hidden">
      {/* Top Navigation */}
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-5 flex items-center justify-between"
      >
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[#1a1a1a]/40 hover:text-[#1a1a1a]/70 transition-colors duration-500 text-xs tracking-[0.15em] uppercase"
        >
          <ArrowLeft className="w-3.5 h-3.5" strokeWidth={1.5} />
          <span>{t({ en: "Return", ko: "돌아가기", zh: "返回", ja: "戻る" })}</span>
        </Link>
        <LanguageSwitcher variant="light" />
      </motion.nav>

      {/* ======================================== */}
      {/* HERO SECTION - ~60vh */}
      {/* ======================================== */}
      <section className="relative flex flex-col items-center justify-center h-[60vh] px-8 pt-16">
        <motion.div
          initial={{ opacity: 0.4, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.1,
            ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
            delay: 0.3,
          }}
          className="text-center"
        >
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-light tracking-[0.2em] text-[#1a1a1a]"
            style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
          >
            {t({ en: "Essence", ko: "본질", zh: "本质", ja: "本質" })}
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.9 }}
            className="mt-5 text-sm tracking-[0.15em] text-[#1a1a1a]/45 font-light"
          >
            {t({
              en: "The art of less",
              ko: "비움의 미학",
              zh: "少即是多的艺术",
              ja: "引き算の美学",
            })}
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{
            duration: 0.9,
            ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
            delay: 0.7,
          }}
          className="w-16 h-px bg-[#1a1a1a]/15 mt-8 origin-center"
        />
      </section>

      {/* ======================================== */}
      {/* PHILOSOPHY SECTION */}
      {/* ======================================== */}
      <section className="px-8 md:px-16 lg:px-24 py-24">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-20">
          <motion.div {...fadeIn} className="md:col-span-3">
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#1a1a1a]/35 font-light">
              {t({
                en: "Our Philosophy",
                ko: "철학",
                zh: "理念",
                ja: "哲学",
              })}
            </span>
          </motion.div>

          <motion.div
            {...fadeIn}
            transition={{
              duration: 0.9,
              ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
              delay: 0.15,
            }}
            className="md:col-span-8"
          >
            <p className="text-lg md:text-xl leading-[1.9] text-[#1a1a1a]/65 font-light">
              {t({
                en: "We believe that true beauty emerges from restraint. By removing the unnecessary, we reveal the essential nature of each object. Our approach to design begins with emptiness — a respect for space, silence, and the quiet power of simplicity.",
                ko: "우리는 절제에서 진정한 아름다움이 탄생한다고 믿습니다. 불필요한 것을 제거함으로써 각 사물의 본질을 드러냅니다. 우리의 디자인 접근은 비움에서 시작됩니다 — 공간, 고요함, 그리고 단순함의 조용한 힘에 대한 존중입니다.",
                zh: "我们相信真正的美来自克制。通过去除不必要的元素，我们揭示每个物体的本质。我们的设计理念始于留白——对空间、沉默和简约力量的尊重。",
                ja: "真の美しさは抑制から生まれると信じています。不要なものを取り除くことで、各物の本質を明らかにします。私たちのデザインは空白から始まります — 空間、静寂、そしてシンプルさの静かな力への敬意です。",
              })}
            </p>

            <p className="mt-8 text-lg md:text-xl leading-[1.9] text-[#1a1a1a]/65 font-light">
              {t({
                en: "Every material is chosen with intention. Every form is reduced to its purest expression. What remains is not minimal for the sake of style, but minimal because nothing else is needed.",
                ko: "모든 소재는 의도를 가지고 선택됩니다. 모든 형태는 가장 순수한 표현으로 환원됩니다. 남겨진 것은 스타일을 위한 미니멀이 아닌, 그 이상이 필요 없기 때문입니다.",
                zh: "每种材料都经过深思熟虑的选择。每种形式都被还原为最纯粹的表达。留下的不是为了风格的极简，而是因为不需要更多。",
                ja: "すべての素材は意図を持って選ばれます。すべての形は最も純粋な表現に還元されます。残されたものは、スタイルのためのミニマルではなく、それ以上が不要だからこそのミニマルです。",
              })}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ======================================== */}
      {/* PRODUCT GRID */}
      {/* ======================================== */}
      <section className="px-8 md:px-16 lg:px-24 py-20">
        <motion.div {...fadeIn} className="max-w-5xl mx-auto mb-12">
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#1a1a1a]/35 font-light">
            {t({
              en: "Collection",
              ko: "컬렉션",
              zh: "系列",
              ja: "コレクション",
            })}
          </span>
        </motion.div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {products.map((product, index) => (
            <motion.div
              key={product.name.en}
              initial={{ opacity: 0.4, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
                delay: index * 0.1,
              }}
              className="group cursor-pointer border border-transparent hover:border-[#1a1a1a]/10 transition-colors duration-500 p-4"
            >
              <div className={`${product.color} h-64 mb-5`} />
              <div className="flex items-baseline justify-between">
                <h3 className="text-sm tracking-[0.06em] text-[#1a1a1a]/75 font-light">
                  {t(product.name)}
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
      {/* QUOTE SECTION */}
      {/* ======================================== */}
      <section className="flex flex-col items-center justify-center px-8 py-28">
        <motion.div
          initial={{ opacity: 0.4 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
            }}
            className="w-10 h-px bg-[#1a1a1a]/15 mx-auto mb-12 origin-center"
          />

          <blockquote
            className="text-2xl md:text-4xl lg:text-5xl font-light leading-[1.4] tracking-[0.04em] text-[#1a1a1a]/75"
            style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
          >
            {t({
              en: "Less, but better",
              ko: "더 적게, 그러나 더 좋게",
              zh: "少而精",
              ja: "より少なく、しかしより良く",
            })}
          </blockquote>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
              delay: 0.2,
            }}
            className="w-10 h-px bg-[#1a1a1a]/15 mx-auto mt-12 origin-center"
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="mt-8 text-[11px] tracking-[0.25em] uppercase text-[#1a1a1a]/30 font-light"
          >
            — Dieter Rams
          </motion.p>
        </motion.div>
      </section>

      {/* ======================================== */}
      {/* MATERIALS SECTION */}
      {/* ======================================== */}
      <section className="px-8 md:px-16 lg:px-24 py-20">
        <motion.div {...fadeIn} className="max-w-5xl mx-auto mb-12">
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#1a1a1a]/35 font-light">
            {t({
              en: "Materials",
              ko: "소재",
              zh: "材料",
              ja: "素材",
            })}
          </span>
        </motion.div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {materials.map((material, index) => (
            <motion.div
              key={material.name.en}
              initial={{ opacity: 0.4, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
                delay: index * 0.1,
              }}
              className="group"
            >
              <div className={`${material.swatch} h-32 mb-5`} />
              <h3 className="text-sm tracking-[0.06em] text-[#1a1a1a]/80 font-light mb-2">
                {t(material.name)}
              </h3>
              <p className="text-xs leading-[1.9] text-[#1a1a1a]/45 font-light">
                {t(material.description)}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ======================================== */}
      {/* PROCESS SECTION */}
      {/* ======================================== */}
      <section className="px-8 md:px-16 lg:px-24 py-24">
        <motion.div {...fadeIn} className="max-w-5xl mx-auto mb-12">
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#1a1a1a]/35 font-light">
            {t({
              en: "Process",
              ko: "과정",
              zh: "工艺",
              ja: "工程",
            })}
          </span>
        </motion.div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-0">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0.4, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
                delay: index * 0.1,
              }}
              className={`py-8 px-6 ${
                index < processSteps.length - 1
                  ? "md:border-r md:border-[#1a1a1a]/[0.08]"
                  : ""
              }`}
            >
              <span className="block text-2xl font-light text-[#1a1a1a]/15 tabular-nums mb-4">
                {step.number}
              </span>
              <h3 className="text-sm tracking-[0.08em] text-[#1a1a1a]/80 font-light mb-3">
                {t(step.title)}
              </h3>
              <p className="text-xs leading-[1.9] text-[#1a1a1a]/45 font-light">
                {t(step.description)}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ======================================== */}
      {/* FOOTER */}
      {/* ======================================== */}
      <footer className="border-t border-[#1a1a1a]/[0.08] px-8 md:px-16 lg:px-24 py-8">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          <span
            className="text-xs tracking-[0.2em] uppercase text-[#1a1a1a]/30 font-light"
            style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
          >
            {t({ en: "Essence", ko: "본질", zh: "本质", ja: "本質" })}
          </span>
          <span className="text-[10px] tracking-[0.15em] text-[#1a1a1a]/20 font-light">
            &copy; {new Date().getFullYear()}
          </span>
        </div>
      </footer>
    </div>
  );
}
