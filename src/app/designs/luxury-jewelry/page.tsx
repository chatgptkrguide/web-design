"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowLeft, MapPin, Phone, Clock, Diamond } from "lucide-react";
import Link from "next/link";
import { useI18n } from "@/i18n/context";
import LanguageSwitcher from "@/components/common/LanguageSwitcher";

/* ============================================ */
/* Animation variants                           */
/* ============================================ */

const fadeInUp = {
  hidden: { opacity: 0.3, y: 30 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number], delay },
  }),
};

const scaleIn = {
  hidden: { opacity: 0.3, scale: 0.97 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.9, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number], delay },
  }),
};

/* ============================================ */
/* Animated section wrapper                     */
/* ============================================ */

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

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

/* ============================================ */
/* Main page component                          */
/* ============================================ */

export default function LuxuryJewelryPage() {
  const { t } = useI18n();

  const collections = [
    {
      name: t({ en: "Eternite Diamond Ring", ko: "에떼르니떼 다이아몬드 링", zh: "永恒钻石戒指", ja: "エテルニテ ダイヤモンドリング" }),
      price: "$12,500 — $18,000",
      category: t({ en: "Rings", ko: "반지", zh: "戒指", ja: "リング" }),
    },
    {
      name: t({ en: "Lumiere Pearl Necklace", ko: "뤼미에르 진주 목걸이", zh: "光芒珍珠项链", ja: "リュミエール パールネックレス" }),
      price: "$8,200 — $14,500",
      category: t({ en: "Necklaces", ko: "목걸이", zh: "项链", ja: "ネックレス" }),
    },
    {
      name: t({ en: "Aurore Gold Bracelet", ko: "오로르 골드 브레이슬릿", zh: "曙光金手链", ja: "オロール ゴールドブレスレット" }),
      price: "$6,800 — $9,200",
      category: t({ en: "Bracelets", ko: "브레이슬릿", zh: "手链", ja: "ブレスレット" }),
    },
    {
      name: t({ en: "Celeste Sapphire Earrings", ko: "셀레스트 사파이어 이어링", zh: "天蓝宝石耳环", ja: "セレスト サファイアイヤリング" }),
      price: "$15,000 — $22,000",
      category: t({ en: "Earrings", ko: "이어링", zh: "耳环", ja: "イヤリング" }),
    },
    {
      name: t({ en: "Majeste Emerald Brooch", ko: "마제스테 에메랄드 브로치", zh: "皇家翡翠胸针", ja: "マジェステ エメラルドブローチ" }),
      price: "$28,000 — $45,000",
      category: t({ en: "Brooches", ko: "브로치", zh: "胸针", ja: "ブローチ" }),
    },
    {
      name: t({ en: "Reverie Diamond Tiara", ko: "레브리 다이아몬드 티아라", zh: "梦幻钻石皇冠", ja: "レヴリー ダイヤモンドティアラ" }),
      price: "$95,000 — $120,000",
      category: t({ en: "Haute Joaillerie", ko: "오뜨 주얼리", zh: "高级珠宝", ja: "オートジュエリー" }),
    },
  ];

  const craftsmanshipSteps = [
    {
      step: "01",
      title: t({ en: "Design & Conception", ko: "디자인 & 구상", zh: "设计与构思", ja: "デザインと構想" }),
      description: t({
        en: "Each piece begins as a hand-drawn sketch by our master artisans, capturing the essence of timeless elegance before a single gem is set.",
        ko: "각 작품은 마스터 장인의 손으로 그린 스케치에서 시작됩니다. 단 하나의 보석이 세팅되기 전, 시대를 초월한 우아함의 본질을 담아냅니다.",
        zh: "每件作品都始于我们大师工匠的手绘草图，在镶嵌任何宝石之前，捕捉永恒优雅的精髓。",
        ja: "各作品はマスター職人の手描きスケッチから始まります。一つの宝石がセットされる前に、永遠のエレガンスの本質を捉えます。",
      }),
    },
    {
      step: "02",
      title: t({ en: "Stone Selection", ko: "원석 선별", zh: "宝石甄选", ja: "原石の選定" }),
      description: t({
        en: "Our gemologists hand-select every diamond, sapphire, and emerald, ensuring only stones of exceptional clarity, color, and brilliance are chosen.",
        ko: "우리의 보석학자들은 모든 다이아몬드, 사파이어, 에메랄드를 직접 선별하여 탁월한 투명도, 색상, 광채를 지닌 원석만을 선정합니다.",
        zh: "我们的宝石学家精心挑选每一颗钻石、蓝宝石和翡翠，确保只选择净度、色泽和光彩卓越的宝石。",
        ja: "宝石学者がすべてのダイヤモンド、サファイア、エメラルドを手作業で選別し、卓越した透明度、色彩、輝きを持つ原石のみを選定します。",
      }),
    },
    {
      step: "03",
      title: t({ en: "Master Setting", ko: "마스터 세팅", zh: "大师镶嵌", ja: "マスターセッティング" }),
      description: t({
        en: "With techniques passed down through generations, our craftsmen meticulously set each stone by hand, creating pieces that will endure for centuries.",
        ko: "세대를 거쳐 전해진 기법으로 우리의 장인들은 각 보석을 수작업으로 정밀하게 세팅하여 수 세기를 견딜 작품을 탄생시킵니다.",
        zh: "凭借世代相传的技艺，我们的工匠精心手工镶嵌每一颗宝石，打造出能流传数百年的杰作。",
        ja: "世代を超えて受け継がれた技法で、職人たちは一つ一つの宝石を手作業で精密にセットし、何世紀にもわたって受け継がれる作品を生み出します。",
      }),
    },
  ];

  const boutiques = [
    {
      city: t({ en: "Paris", ko: "파리", zh: "巴黎", ja: "パリ" }),
      address: "23 Place Vendome, 75001 Paris",
      phone: "+33 1 42 60 30 70",
      hours: t({ en: "Mon — Sat: 10:00 — 19:00", ko: "월 — 토: 10:00 — 19:00", zh: "周一 — 周六: 10:00 — 19:00", ja: "月 — 土: 10:00 — 19:00" }),
    },
    {
      city: t({ en: "New York", ko: "뉴욕", zh: "纽约", ja: "ニューヨーク" }),
      address: "725 Fifth Avenue, New York, NY 10022",
      phone: "+1 212 755 8000",
      hours: t({ en: "Mon — Sat: 10:00 — 18:00", ko: "월 — 토: 10:00 — 18:00", zh: "周一 — 周六: 10:00 — 18:00", ja: "月 — 土: 10:00 — 18:00" }),
    },
    {
      city: t({ en: "Tokyo", ko: "도쿄", zh: "东京", ja: "東京" }),
      address: "2-7-12 Ginza, Chuo-ku, Tokyo",
      phone: "+81 3 3562 2381",
      hours: t({ en: "Mon — Sun: 11:00 — 20:00", ko: "월 — 일: 11:00 — 20:00", zh: "周一 — 周日: 11:00 — 20:00", ja: "月 — 日: 11:00 — 20:00" }),
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1A1A1A] overflow-x-hidden">
      {/* ============================================ */}
      {/* Top Navigation: Back + Language Switcher     */}
      {/* ============================================ */}
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5">
        <motion.div
          initial={{ opacity: 0.3, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <Link
            href="/"
            className="group flex items-center gap-2 text-[#1A1A1A]/60 hover:text-[#B8860B] transition-colors duration-400"
          >
            <ArrowLeft className="w-4 h-4 transition-transform duration-400 group-hover:-translate-x-1" />
            <span className="text-xs font-serif tracking-[0.2em] uppercase">
              {t({ en: "Return", ko: "돌아가기", zh: "返回", ja: "戻る" })}
            </span>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0.3, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <LanguageSwitcher variant="light" />
        </motion.div>
      </div>

      {/* ============================================ */}
      {/* SECTION 1: Hero                              */}
      {/* ============================================ */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0.3, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.3 }}
          >
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#B8860B]" />
              <Diamond className="w-4 h-4 text-[#B8860B]" />
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#B8860B]" />
            </div>
          </motion.div>

          <motion.p
            className="font-serif text-sm tracking-[0.3em] uppercase text-[#B8860B] mb-4"
            initial={{ opacity: 0.3 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.4 }}
          >
            {t({ en: "Haute Joaillerie Since 1847", ko: "1847년부터 이어온 오뜨 주얼리", zh: "自1847年的高级珠宝", ja: "1847年からのオートジュエリー" })}
          </motion.p>

          <motion.h1
            className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-[0.04em] mb-8 text-[#1A1A1A]"
            initial={{ opacity: 0.3, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1], delay: 0.5 }}
          >
            Maison Lumiere
          </motion.h1>

          <motion.div
            className="w-24 h-px bg-[#B8860B] mx-auto mb-8"
            initial={{ opacity: 0.3, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.9, delay: 0.7 }}
          />

          <motion.p
            className="font-serif text-lg sm:text-xl tracking-[0.15em] text-[#1A1A1A]/60 max-w-2xl mx-auto mb-6"
            initial={{ opacity: 0.3, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.8 }}
          >
            {t({
              en: "An ode to eternal elegance — where precious stones meet the mastery of haute joaillerie",
              ko: "영원한 우아함에 바치는 헌사 — 보석과 오뜨 주얼리의 장인정신이 만나는 곳",
              zh: "永恒优雅的颂歌 — 珍贵宝石与高级珠宝工艺的完美邂逅",
              ja: "永遠のエレガンスへの賛歌 — 宝石とオートジュエリーの匠の技が出会う場所",
            })}
          </motion.p>

          <motion.p
            className="font-serif text-base tracking-[0.2em] uppercase text-[#C9A96E] mb-12"
            initial={{ opacity: 0.3 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 1.0 }}
          >
            {t({
              en: "Autumn Winter 2026 Collection",
              ko: "2026 가을겨울 컬렉션",
              zh: "2026秋冬系列",
              ja: "2026年秋冬コレクション",
            })}
          </motion.p>

          <motion.div
            initial={{ opacity: 0.3, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.2 }}
          >
            <button className="group relative font-serif text-xs tracking-[0.3em] uppercase text-[#B8860B] border border-[#B8860B]/40 px-10 py-4 hover:bg-[#B8860B] hover:text-white transition-all duration-500">
              {t({ en: "Discover the Collection", ko: "컬렉션 보기", zh: "探索系列", ja: "コレクションを見る" })}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-[#B8860B] group-hover:w-full transition-all duration-500" />
            </button>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0.3 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
        >
          <span className="text-[10px] font-serif tracking-[0.3em] uppercase text-[#B8860B]/60">
            {t({ en: "Scroll", ko: "스크롤", zh: "滚动", ja: "スクロール" })}
          </span>
          <motion.div
            className="w-px h-8 bg-gradient-to-b from-[#B8860B]/60 to-transparent"
            animate={{ scaleY: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" as const }}
          />
        </motion.div>
      </section>

      {/* ============================================ */}
      {/* SECTION 2: Brand Story                       */}
      {/* ============================================ */}
      <section className="relative py-28 md:py-36 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Text */}
          <AnimatedSection>
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-px bg-[#B8860B]" />
                <span className="text-[11px] font-serif tracking-[0.3em] uppercase text-[#B8860B]">
                  {t({ en: "Our Heritage", ko: "우리의 유산", zh: "我们的传承", ja: "私たちの遺産" })}
                </span>
              </div>
              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-[1.1] mb-8 text-[#1A1A1A]">
                {t({ en: "A Legacy of", ko: "시대를 초월한", zh: "永恒之美的", ja: "時を超える" })}
                <br />
                <span className="text-[#B8860B]">
                  {t({ en: "Timeless Beauty", ko: "아름다움의 유산", zh: "传世遗产", ja: "美の遺産" })}
                </span>
              </h2>
              <div className="space-y-5 text-[#1A1A1A]/60 leading-relaxed text-base">
                <p>
                  {t({
                    en: "Since 1847, Maison Lumiere has been the guardian of an extraordinary legacy — one built on the unwavering pursuit of perfection and the belief that true luxury transcends time. Each creation carries within it the spirit of generations of master artisans.",
                    ko: "1847년 이래로 메종 뤼미에르는 비범한 유산의 수호자였습니다. 완벽에 대한 확고한 추구와 진정한 럭셔리는 시간을 초월한다는 믿음 위에 세워진 유산입니다. 각 작품에는 세대를 이어온 마스터 장인들의 정신이 깃들어 있습니다.",
                    zh: "自1847年以来，Maison Lumiere一直是非凡遗产的守护者——建立在对完美的坚定追求和真正的奢华超越时间的信念之上。每件作品都承载着世代大师工匠的精神。",
                    ja: "1847年以来、メゾン・リュミエールは比類なき遺産の守り手であり続けてきました。完璧への揺るぎない追求と、真のラグジュアリーは時を超えるという信念の上に築かれた遺産です。各作品には世代を超えたマスター職人の精神が宿っています。",
                  })}
                </p>
                <p>
                  {t({
                    en: "From the storied ateliers of Place Vendome to the world's most prestigious salons, our maison has adorned royalty, visionaries, and icons who understand that the finest jewels are not merely worn — they are lived.",
                    ko: "방돔 광장의 유서 깊은 아틀리에에서 세계에서 가장 권위 있는 살롱에 이르기까지, 우리 메종은 최고의 보석은 단순히 착용하는 것이 아닌 삶의 일부가 된다는 것을 아는 왕족, 비전가, 아이콘들을 장식해 왔습니다.",
                    zh: "从旺多姆广场的传奇工坊到世界最负盛名的沙龙，我们的品牌为皇室、远见者和时代偶像增添光彩——他们深知最精美的珠宝不仅是佩戴，更是生活的一部分。",
                    ja: "ヴァンドーム広場の由緒あるアトリエから世界で最も権威あるサロンまで、私たちのメゾンは王族、先見者、そしてアイコンたちを飾ってきました。最高の宝石は単に身につけるものではなく、共に生きるものであることを理解する方々のために。",
                  })}
                </p>
              </div>
              <div className="mt-10">
                <button className="font-serif text-xs tracking-[0.3em] uppercase text-[#B8860B] hover:text-[#96700A] transition-colors duration-400 flex items-center gap-3 group">
                  {t({ en: "Read Our Story", ko: "스토리 보기", zh: "阅读故事", ja: "ストーリーを読む" })}
                  <span className="w-6 h-px bg-[#B8860B] group-hover:w-10 transition-all duration-400" />
                </button>
              </div>
            </div>
          </AnimatedSection>

          {/* Right: Image placeholder */}
          <AnimatedSection>
            <div className="relative">
              <div className="aspect-[3/4] bg-[#E8E0D4] border-2 border-[#C9A96E]/40 flex items-center justify-center relative overflow-hidden">
                <div className="absolute top-5 left-5 w-14 h-14 border-t-2 border-l-2 border-[#B8860B]/30" />
                <div className="absolute top-5 right-5 w-14 h-14 border-t-2 border-r-2 border-[#B8860B]/30" />
                <div className="absolute bottom-5 left-5 w-14 h-14 border-b-2 border-l-2 border-[#B8860B]/30" />
                <div className="absolute bottom-5 right-5 w-14 h-14 border-b-2 border-r-2 border-[#B8860B]/30" />
                <span className="text-[#B8860B]/50 font-serif text-xs tracking-[0.3em] uppercase text-center px-8">
                  {t({
                    en: "Brand Heritage Photography",
                    ko: "브랜드 헤리티지 사진",
                    zh: "品牌传承摄影",
                    ja: "ブランドヘリテージ写真",
                  })}
                </span>
              </div>
              <div className="absolute -bottom-3 -right-3 w-full h-full border border-[#C9A96E]/20 -z-10" />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Decorative divider */}
      <div className="flex items-center justify-center gap-4 py-4">
        <div className="w-24 h-px bg-gradient-to-r from-transparent to-[#B8860B]/40" />
        <Diamond className="w-3 h-3 text-[#B8860B]/40" />
        <div className="w-24 h-px bg-gradient-to-l from-transparent to-[#B8860B]/40" />
      </div>

      {/* ============================================ */}
      {/* SECTION 3: Collection Grid                   */}
      {/* ============================================ */}
      <section className="relative py-28 md:py-36 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <div>
              <span className="text-[11px] font-serif tracking-[0.3em] uppercase text-[#B8860B] block mb-4">
                {t({ en: "The Collection", ko: "컬렉션", zh: "系列", ja: "コレクション" })}
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#1A1A1A] mb-5">
                {t({ en: "Exceptional Pieces", ko: "특별한 작품들", zh: "臻品杰作", ja: "特別な作品" })}
              </h2>
              <p className="font-serif text-base text-[#1A1A1A]/50 max-w-xl mx-auto">
                {t({
                  en: "Each creation is a singular masterpiece, crafted with the rarest gems and the most refined techniques of haute joaillerie",
                  ko: "각 작품은 가장 희귀한 보석과 가장 정교한 오뜨 주얼리 기법으로 탄생한 유일무이한 걸작입니다",
                  zh: "每件作品都是独一无二的杰作，以最稀有的宝石和最精湛的高级珠宝工艺精心打造",
                  ja: "各作品は最も希少な宝石と最も洗練されたオートジュエリーの技法で生み出された唯一無二の傑作です",
                })}
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collections.map((item, index) => (
              <CollectionCard key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 4: Craftsmanship                     */}
      {/* ============================================ */}
      <section className="relative py-28 md:py-36 px-6 md:px-12 lg:px-20 bg-[#F3EDE6]">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-20">
            <div>
              <span className="text-[11px] font-serif tracking-[0.3em] uppercase text-[#B8860B] block mb-4">
                {t({ en: "Savoir-Faire", ko: "사부아르 페르", zh: "匠心工艺", ja: "サヴォアフェール" })}
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#1A1A1A] mb-5">
                {t({ en: "The Art of Craftsmanship", ko: "장인정신의 예술", zh: "匠心之艺", ja: "匠の技" })}
              </h2>
              <p className="font-serif text-base text-[#1A1A1A]/50 max-w-2xl mx-auto">
                {t({
                  en: "Behind every jewel lies hundreds of hours of meticulous craftsmanship, a devotion to perfection that has defined our maison for nearly two centuries",
                  ko: "모든 보석 뒤에는 수백 시간의 정밀한 장인정신이 숨어 있습니다. 거의 2세기 동안 우리 메종을 정의해 온 완벽에 대한 헌신입니다",
                  zh: "每件珠宝背后都凝聚着数百小时的精心工艺，这份对完美的执着已定义我们品牌近两个世纪",
                  ja: "すべてのジュエルの背後には何百時間もの精密な職人技があります。約2世紀にわたって私たちのメゾンを定義してきた完璧への献身です",
                })}
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
      {/* SECTION 5: Testimonial / Quote               */}
      {/* ============================================ */}
      <section className="relative py-28 md:py-36 px-6 bg-[#FAF8F5]">
        <AnimatedSection className="max-w-4xl mx-auto text-center">
          <div>
            {/* Decorative top line */}
            <div className="flex items-center justify-center gap-4 mb-14">
              <div className="w-20 h-px bg-gradient-to-r from-transparent to-[#B8860B]/50" />
              <div className="w-2 h-2 rotate-45 border border-[#B8860B]/50" />
              <div className="w-20 h-px bg-gradient-to-l from-transparent to-[#B8860B]/50" />
            </div>

            <p className="font-serif text-2xl sm:text-3xl md:text-4xl leading-relaxed text-[#1A1A1A]/80 italic mb-10">
              &ldquo;{t({
                en: "A jewel is not merely an adornment — it is a vessel of emotion, a keeper of memories, and a testament to the eternal pursuit of beauty that defines the human spirit.",
                ko: "보석은 단순한 장식이 아닙니다 — 감정의 그릇이자, 기억의 수호자이며, 인간 정신을 정의하는 아름다움에 대한 영원한 추구의 증거입니다.",
                zh: "珠宝不仅仅是装饰——它是情感的载体、记忆的守护者，也是定义人类精神的永恒美的追求的见证。",
                ja: "宝石は単なる装飾ではありません — 感情の器であり、記憶の守り手であり、人間の精神を定義する美の永遠の追求の証です。",
              })}&rdquo;
            </p>

            <div className="flex flex-col items-center gap-2">
              <span className="font-serif text-sm tracking-[0.2em] uppercase text-[#B8860B]">
                Eloise Beaumont
              </span>
              <span className="text-xs tracking-[0.15em] text-[#1A1A1A]/40">
                {t({
                  en: "Creative Director, Maison Lumiere",
                  ko: "크리에이티브 디렉터, 메종 뤼미에르",
                  zh: "创意总监，Maison Lumiere",
                  ja: "クリエイティブディレクター、メゾン・リュミエール",
                })}
              </span>
            </div>

            {/* Decorative bottom line */}
            <div className="flex items-center justify-center gap-4 mt-14">
              <div className="w-20 h-px bg-gradient-to-r from-transparent to-[#B8860B]/50" />
              <div className="w-2 h-2 rotate-45 border border-[#B8860B]/50" />
              <div className="w-20 h-px bg-gradient-to-l from-transparent to-[#B8860B]/50" />
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* ============================================ */}
      {/* SECTION 6: Boutique / Contact                */}
      {/* ============================================ */}
      <section className="relative py-28 md:py-36 px-6 md:px-12 lg:px-20 bg-[#F3EDE6]">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <div>
              <span className="text-[11px] font-serif tracking-[0.3em] uppercase text-[#B8860B] block mb-4">
                {t({ en: "Visit Us", ko: "방문하기", zh: "到店体验", ja: "ご来店" })}
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#1A1A1A] mb-5">
                {t({ en: "Our Boutiques", ko: "부티크", zh: "我们的精品店", ja: "ブティック" })}
              </h2>
              <p className="font-serif text-base text-[#1A1A1A]/50 max-w-xl mx-auto">
                {t({
                  en: "Experience the world of Maison Lumiere in person — our boutiques offer an intimate setting to discover our collections",
                  ko: "메종 뤼미에르의 세계를 직접 경험하세요 — 우리의 부티크는 컬렉션을 발견할 수 있는 친밀한 공간을 제공합니다",
                  zh: "亲临体验Maison Lumiere的世界——我们的精品店为您提供探索系列的私密空间",
                  ja: "メゾン・リュミエールの世界を直接体験してください — 私たちのブティックはコレクションを発見するための親密な空間を提供します",
                })}
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {boutiques.map((boutique, index) => (
              <BoutiqueCard key={index} boutique={boutique} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 7: Footer                            */}
      {/* ============================================ */}
      <footer className="relative border-t border-[#C9A96E]/20 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-14">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="font-serif text-xl text-[#1A1A1A] mb-1">Maison Lumiere</h3>
              <p className="text-xs text-[#1A1A1A]/40">
                {t({
                  en: "Haute Joaillerie since 1847 — Paris, New York, Tokyo",
                  ko: "1847년부터 이어온 오뜨 주얼리 — 파리, 뉴욕, 도쿄",
                  zh: "自1847年的高级珠宝 — 巴黎、纽约、东京",
                  ja: "1847年からのオートジュエリー — パリ、ニューヨーク、東京",
                })}
              </p>
            </div>

            <div className="flex items-center gap-6">
              {[
                t({ en: "Privacy", ko: "개인정보", zh: "隐私", ja: "プライバシー" }),
                t({ en: "Terms", ko: "이용약관", zh: "条款", ja: "利用規約" }),
                t({ en: "Contact", ko: "연락처", zh: "联系", ja: "お問い合わせ" }),
              ].map((link) => (
                <span
                  key={link}
                  className="text-[11px] tracking-[0.15em] uppercase text-[#1A1A1A]/40 hover:text-[#B8860B] transition-colors duration-400 cursor-pointer font-serif"
                >
                  {link}
                </span>
              ))}
            </div>
          </div>

          <div className="border-t border-[#C9A96E]/15 mt-8 pt-6 text-center">
            <span className="font-serif text-[11px] tracking-[0.2em] uppercase text-[#1A1A1A]/30">
              &copy; 2026 Maison Lumiere. {t({ en: "All rights reserved.", ko: "모든 권리 보유.", zh: "保留所有权利。", ja: "全著作権所有。" })}
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ============================================ */
/* Sub-components                               */
/* ============================================ */

function CollectionCard({
  item,
  index,
}: {
  item: { name: string; price: string; category: string };
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      className="group cursor-pointer"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={scaleIn}
      custom={index * 0.12}
    >
      {/* Image area */}
      <div className="relative aspect-[3/4] bg-[#E8E0D4] border border-[#C9A96E]/20 overflow-hidden mb-5 transition-all duration-500 group-hover:border-[#B8860B]/60">
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#B8860B]/30 transition-all duration-500 z-10" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <Diamond className="w-5 h-5 text-[#B8860B]/30 mx-auto mb-3" />
            <span className="text-[#B8860B]/40 font-serif text-[10px] tracking-[0.3em] uppercase">
              {item.category}
            </span>
          </div>
        </div>
      </div>

      {/* Text */}
      <div className="space-y-1.5">
        <h3 className="font-serif text-lg text-[#1A1A1A] group-hover:text-[#B8860B] transition-colors duration-400">
          {item.name}
        </h3>
        <p className="font-serif text-xs tracking-[0.1em] text-[#1A1A1A]/40">
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
  step: { step: string; title: string; description: string };
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
      custom={index * 0.15}
    >
      <span className="font-serif text-5xl md:text-6xl text-[#B8860B]/30 block mb-4">
        {step.step}
      </span>
      <h3 className="font-serif text-xl text-[#1A1A1A] mb-4">{step.title}</h3>
      <p className="text-sm text-[#1A1A1A]/50 leading-relaxed">{step.description}</p>
    </motion.div>
  );
}

function BoutiqueCard({
  boutique,
  index,
}: {
  boutique: { city: string; address: string; phone: string; hours: string };
  index: number;
}) {
  const { t } = useI18n();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      className="bg-[#FAF8F5] border border-[#C9A96E]/20 p-8 hover:border-[#B8860B]/50 transition-all duration-500 group"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeInUp}
      custom={index * 0.12}
    >
      <h3 className="font-serif text-2xl text-[#1A1A1A] mb-6 group-hover:text-[#B8860B] transition-colors duration-400">
        {boutique.city}
      </h3>
      <div className="space-y-3">
        <div className="flex items-start gap-3">
          <MapPin className="w-3.5 h-3.5 text-[#B8860B]/60 mt-0.5 shrink-0" />
          <span className="text-xs text-[#1A1A1A]/50 leading-relaxed">{boutique.address}</span>
        </div>
        <div className="flex items-center gap-3">
          <Phone className="w-3.5 h-3.5 text-[#B8860B]/60 shrink-0" />
          <span className="text-xs text-[#1A1A1A]/50">{boutique.phone}</span>
        </div>
        <div className="flex items-center gap-3">
          <Clock className="w-3.5 h-3.5 text-[#B8860B]/60 shrink-0" />
          <span className="text-xs text-[#1A1A1A]/50">{boutique.hours}</span>
        </div>
      </div>
      <div className="mt-6 pt-6 border-t border-[#C9A96E]/15">
        <button className="font-serif text-[11px] tracking-[0.3em] uppercase text-[#B8860B] hover:text-[#96700A] transition-colors duration-400">
          {t({ en: "Book an Appointment", ko: "예약하기", zh: "预约到店", ja: "予約する" })}
        </button>
      </div>
    </motion.div>
  );
}
