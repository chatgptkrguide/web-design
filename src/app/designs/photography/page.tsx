"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowLeft,
  Camera,
  Mail,
  Instagram,
  CalendarCheck,
  MapPin,
  Award,
  Image as ImageIcon,
  Eye,
  Heart,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import { useI18n } from "@/i18n/context";
import LanguageSwitcher from "@/components/common/LanguageSwitcher";

/* ─── Animation Presets ─── */
const fadeIn = {
  initial: { opacity: 0.15, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, ease: "easeOut" as const },
};

const stagger = {
  initial: { opacity: 0.15, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
};

/* ─── Masonry Photo Data ─── */
const masonryPhotos = [
  {
    gradient: "bg-gradient-to-br from-amber-700 to-orange-900",
    aspect: "aspect-[3/4]",
    title: { en: "Golden Hour", ko: "골든 아워", zh: "黄金时刻", ja: "ゴールデンアワー" },
    category: { en: "Landscape", ko: "풍경", zh: "风景", ja: "風景" },
  },
  {
    gradient: "bg-gradient-to-br from-slate-600 to-zinc-800",
    aspect: "aspect-[4/3]",
    title: { en: "Urban Shadows", ko: "도시의 그림자", zh: "城市阴影", ja: "都市の影" },
    category: { en: "Street", ko: "거리", zh: "街拍", ja: "ストリート" },
  },
  {
    gradient: "bg-gradient-to-br from-emerald-800 to-teal-900",
    aspect: "aspect-[3/5]",
    title: { en: "Forest Whisper", ko: "숲의 속삭임", zh: "森林低语", ja: "森のささやき" },
    category: { en: "Nature", ko: "자연", zh: "自然", ja: "自然" },
  },
  {
    gradient: "bg-gradient-to-br from-rose-700 to-pink-900",
    aspect: "aspect-[4/3]",
    title: { en: "Fleeting Glance", ko: "스치는 시선", zh: "匆匆一瞥", ja: "ふとした視線" },
    category: { en: "Portrait", ko: "인물", zh: "肖像", ja: "ポートレート" },
  },
  {
    gradient: "bg-gradient-to-br from-indigo-700 to-violet-900",
    aspect: "aspect-[3/4]",
    title: { en: "Neon District", ko: "네온 거리", zh: "霓虹街区", ja: "ネオン街" },
    category: { en: "Street", ko: "거리", zh: "街拍", ja: "ストリート" },
  },
  {
    gradient: "bg-gradient-to-br from-cyan-700 to-blue-900",
    aspect: "aspect-[1/1]",
    title: { en: "Still Waters", ko: "잔잔한 물결", zh: "静水深流", ja: "静かな水面" },
    category: { en: "Landscape", ko: "풍경", zh: "风景", ja: "風景" },
  },
  {
    gradient: "bg-gradient-to-br from-yellow-700 to-amber-900",
    aspect: "aspect-[4/5]",
    title: { en: "Ancient Walls", ko: "고대의 벽", zh: "古老城墙", ja: "古代の壁" },
    category: { en: "Architecture", ko: "건축", zh: "建筑", ja: "建築" },
  },
  {
    gradient: "bg-gradient-to-br from-stone-600 to-neutral-800",
    aspect: "aspect-[3/4]",
    title: { en: "Morning Ritual", ko: "아침 의식", zh: "晨间仪式", ja: "朝の儀式" },
    category: { en: "Documentary", ko: "다큐멘터리", zh: "纪实", ja: "ドキュメンタリー" },
  },
  {
    gradient: "bg-gradient-to-br from-fuchsia-700 to-purple-900",
    aspect: "aspect-[4/3]",
    title: { en: "Electric Dreams", ko: "전기적 꿈", zh: "电光幻梦", ja: "エレクトリック・ドリーム" },
    category: { en: "Abstract", ko: "추상", zh: "抽象", ja: "アブストラクト" },
  },
  {
    gradient: "bg-gradient-to-br from-sky-700 to-blue-950",
    aspect: "aspect-[3/5]",
    title: { en: "Horizons", ko: "지평선", zh: "地平线", ja: "地平線" },
    category: { en: "Landscape", ko: "풍경", zh: "风景", ja: "風景" },
  },
];

/* ─── Categories ─── */
const categories = [
  { label: { en: "All", ko: "전체", zh: "全部", ja: "すべて" }, count: 524 },
  { label: { en: "Landscape", ko: "풍경", zh: "风景", ja: "風景" }, count: 156 },
  { label: { en: "Portrait", ko: "인물", zh: "肖像", ja: "ポートレート" }, count: 98 },
  { label: { en: "Street", ko: "거리", zh: "街拍", ja: "ストリート" }, count: 87 },
  { label: { en: "Architecture", ko: "건축", zh: "建筑", ja: "建築" }, count: 64 },
  { label: { en: "Nature", ko: "자연", zh: "自然", ja: "自然" }, count: 52 },
  { label: { en: "Documentary", ko: "다큐멘터리", zh: "纪实", ja: "ドキュメンタリー" }, count: 41 },
  { label: { en: "Abstract", ko: "추상", zh: "抽象", ja: "アブストラクト" }, count: 26 },
];

/* ─── Selected Works ─── */
const selectedWorks = [
  {
    gradient: "bg-gradient-to-br from-amber-800 via-orange-900 to-red-950",
    title: { en: "Solitude at Dawn", ko: "새벽의 고독", zh: "黎明的孤独", ja: "夜明けの孤独" },
    location: { en: "Patagonia, Argentina", ko: "파타고니아, 아르헨티나", zh: "巴塔哥尼亚，阿根廷", ja: "パタゴニア、アルゼンチン" },
  },
  {
    gradient: "bg-gradient-to-br from-slate-700 via-zinc-800 to-gray-950",
    title: { en: "Concrete Poetry", ko: "콘크리트 시", zh: "混凝土诗篇", ja: "コンクリートの詩" },
    location: { en: "Tokyo, Japan", ko: "도쿄, 일본", zh: "东京，日本", ja: "東京、日本" },
  },
  {
    gradient: "bg-gradient-to-br from-emerald-800 via-green-900 to-teal-950",
    title: { en: "Emerald Depths", ko: "에메랄드 깊이", zh: "翡翠深处", ja: "エメラルドの深み" },
    location: { en: "Dolomites, Italy", ko: "돌로미티, 이탈리아", zh: "多洛米蒂，意大利", ja: "ドロミテ、イタリア" },
  },
  {
    gradient: "bg-gradient-to-br from-violet-800 via-purple-900 to-indigo-950",
    title: { en: "After the Rain", ko: "비 온 뒤", zh: "雨后初晴", ja: "雨上がり" },
    location: { en: "Seoul, South Korea", ko: "서울, 대한민국", zh: "首尔，韩国", ja: "ソウル、韓国" },
  },
];

/* ─── Stats ─── */
const stats = [
  { icon: ImageIcon, value: "524+", label: { en: "Photos Published", ko: "발표된 사진", zh: "已发布照片", ja: "公開された写真" } },
  { icon: Award, value: "12", label: { en: "Exhibitions", ko: "전시회", zh: "展览", ja: "展示会" } },
  { icon: Eye, value: "2.8M", label: { en: "Total Views", ko: "총 조회수", zh: "总浏览量", ja: "総閲覧数" } },
  { icon: Heart, value: "186K", label: { en: "Likes Received", ko: "받은 좋아요", zh: "获得点赞", ja: "いいね数" } },
];

/* ─── Main Component ─── */
export default function PhotographyPortfolioPage() {
  const { t } = useI18n();
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-white/20">
      {/* ─── Top Navigation ─── */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-4 bg-gradient-to-b from-black/70 via-black/30 to-transparent backdrop-blur-sm">
        <Link
          href="/"
          className="flex items-center gap-2 text-xs text-white/50 hover:text-white transition-colors duration-300"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          {t({ en: "Back to Gallery", ko: "갤러리로 돌아가기", zh: "返回画廊", ja: "ギャラリーに戻る" })}
        </Link>
        <LanguageSwitcher variant="dark" />
      </nav>

      {/* ─── Hero Section ─── */}
      <section ref={heroRef} className="relative h-screen overflow-hidden">
        <motion.div
          style={{ scale: heroScale }}
          className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-700 flex items-center justify-center"
        >
          <Camera className="w-32 h-32 text-white/10 stroke-[0.5]" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/30 to-transparent" />
        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 h-full flex flex-col items-center justify-end pb-20 px-6 text-center"
        >
          <motion.p
            initial={{ opacity: 0.15, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xs md:text-sm tracking-[0.35em] uppercase text-white/50 mb-4 font-light"
          >
            {t({
              en: "Visual Storyteller & Fine Art Photographer",
              ko: "비주얼 스토리텔러 & 파인 아트 포토그래퍼",
              zh: "视觉叙事者 & 艺术摄影师",
              ja: "ビジュアルストーリーテラー & ファインアートフォトグラファー",
            })}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0.15, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tight leading-none"
          >
            ELENA VOSS
          </motion.h1>
          <motion.p
            initial={{ opacity: 0.15, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-6 text-sm md:text-base text-white/40 max-w-xl leading-relaxed"
          >
            {t({
              en: "Capturing the ephemeral beauty of light, shadow, and the human experience across six continents.",
              ko: "6개 대륙에 걸쳐 빛, 그림자, 그리고 인간 경험의 순간적인 아름다움을 담아냅니다.",
              zh: "捕捉六大洲上光影与人类体验的瞬间之美。",
              ja: "6大陸にわたる光、影、そして人間の経験の儚い美しさを捉えます。",
            })}
          </motion.p>
          <motion.div
            initial={{ opacity: 0.15 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-10 flex items-center gap-1 text-white/30 text-xs animate-bounce"
          >
            <ChevronRight className="w-3 h-3 rotate-90" />
            {t({ en: "Scroll to explore", ko: "스크롤하여 탐색", zh: "滚动探索", ja: "スクロールして探索" })}
          </motion.div>
        </motion.div>
      </section>

      {/* ─── Categories Scroll ─── */}
      <section className="py-8 border-b border-white/5">
        <motion.div {...fadeIn}>
          <div className="flex gap-3 px-6 md:px-10 overflow-x-auto scrollbar-hide pb-2">
            {categories.map((cat, i) => (
              <motion.button
                key={i}
                initial={{ opacity: 0.15, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className={`shrink-0 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  i === 0
                    ? "bg-white text-black"
                    : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/10"
                }`}
              >
                {t(cat.label)}
                <span className="ml-2 text-xs opacity-50">{cat.count}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ─── Masonry Photo Grid ─── */}
      <section className="px-4 md:px-8 lg:px-12 py-16">
        <motion.div {...fadeIn} className="mb-10 px-2">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            {t({ en: "Photo Gallery", ko: "사진 갤러리", zh: "照片画廊", ja: "フォトギャラリー" })}
          </h2>
          <p className="text-sm text-white/40 mt-2">
            {t({
              en: "A curated collection of moments frozen in time",
              ko: "시간 속에 멈춰진 순간들의 큐레이션 컬렉션",
              zh: "一组精选的定格瞬间",
              ja: "時の中に凍りついた瞬間のキュレーションコレクション",
            })}
          </p>
        </motion.div>
        <div className="columns-2 md:columns-3 gap-3 md:gap-4 space-y-3 md:space-y-4">
          {masonryPhotos.map((photo, i) => (
            <motion.div
              key={i}
              {...stagger}
              transition={{ duration: 0.6, delay: i * 0.07 }}
              className="break-inside-avoid group relative rounded-xl overflow-hidden cursor-pointer"
            >
              <div
                className={`${photo.gradient} ${photo.aspect} w-full flex items-center justify-center transition-transform duration-500 group-hover:scale-105`}
              >
                <Camera className="w-8 h-8 text-white/10 stroke-[0.8]" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-end p-4">
                <span className="text-[10px] uppercase tracking-widest text-white/60 mb-1">
                  {t(photo.category)}
                </span>
                <span className="text-sm font-semibold text-white">
                  {t(photo.title)}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── About Section ─── */}
      <section className="px-6 md:px-10 py-20 bg-gradient-to-b from-[#0A0A0A] via-zinc-950 to-[#0A0A0A]">
        <motion.div
          {...fadeIn}
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center"
        >
          {/* Portrait Placeholder */}
          <div className="relative">
            <div className="bg-gradient-to-br from-zinc-700 via-zinc-800 to-zinc-900 aspect-[3/4] rounded-2xl flex items-center justify-center overflow-hidden">
              <Camera className="w-20 h-20 text-white/8 stroke-[0.5]" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-amber-700/30 to-orange-900/30 rounded-2xl blur-2xl" />
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-indigo-700/20 to-violet-900/20 rounded-2xl blur-2xl" />
          </div>

          {/* Bio */}
          <div>
            <motion.span
              {...stagger}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xs tracking-[0.3em] uppercase text-white/40 mb-4 block"
            >
              {t({ en: "About the Artist", ko: "작가 소개", zh: "关于艺术家", ja: "アーティストについて" })}
            </motion.span>
            <motion.h2
              {...stagger}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-3xl md:text-4xl font-bold tracking-tight mb-6"
            >
              Elena Voss
            </motion.h2>
            <motion.p
              {...stagger}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-white/50 leading-relaxed mb-4"
            >
              {t({
                en: "Born in Berlin and raised between continents, Elena Voss has spent the last decade documenting the intersection of natural wonder and urban decay. Her work has been featured in National Geographic, Aperture Magazine, and the Museum of Modern Art.",
                ko: "베를린에서 태어나 여러 대륙을 오가며 자란 엘레나 포스는 지난 10년간 자연의 경이와 도시의 쇠퇴가 만나는 지점을 기록해 왔습니다. 그녀의 작품은 내셔널 지오그래픽, 아퍼처 매거진, 현대미술관에 소개되었습니다.",
                zh: "Elena Voss 出生于柏林，在多个大陆之间长大，过去十年来一直记录着自然奇观与城市衰败的交汇。她的作品曾刊登于《国家地理》、《Aperture》杂志和现代艺术博物馆。",
                ja: "ベルリンで生まれ、複数の大陸を行き来して育ったエレナ・フォスは、過去10年にわたり自然の驚異と都市の衰退の交差点を記録してきました。彼女の作品はナショナルジオグラフィック、アパチャー・マガジン、近代美術館に掲載されています。",
              })}
            </motion.p>
            <motion.p
              {...stagger}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="text-white/50 leading-relaxed mb-8"
            >
              {t({
                en: "Her philosophy is rooted in patience: waiting for the precise moment when light, emotion, and composition converge into something transcendent. Each photograph is not just a record of what was, but an invitation to see what could be.",
                ko: "그녀의 철학은 인내에 뿌리를 두고 있습니다: 빛, 감정, 구도가 초월적인 무언가로 수렴하는 정확한 순간을 기다리는 것. 각 사진은 단순히 존재했던 것의 기록이 아니라, 있을 수 있는 것을 보라는 초대입니다.",
                zh: "她的哲学根植于耐心：等待光线、情感和构图汇聚成超越性事物的精确时刻。每张照片不仅是对过去的记录，更是对可能性的邀请。",
                ja: "彼女の哲学は忍耐に根ざしています。光、感情、構図が超越的な何かに収束する正確な瞬間を待つこと。各写真はかつて存在したものの記録であるだけでなく、ありえるものを見るための招待状です。",
              })}
            </motion.p>

            {/* Stats Grid */}
            <motion.div
              {...stagger}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-4 group hover:bg-white/[0.06] transition-colors duration-300"
                >
                  <stat.icon className="w-4 h-4 text-white/30 mb-2 group-hover:text-white/50 transition-colors" />
                  <p className="text-2xl font-bold tracking-tight">{stat.value}</p>
                  <p className="text-xs text-white/40 mt-0.5">{t(stat.label)}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ─── Selected Works ─── */}
      <section className="px-6 md:px-10 py-20">
        <motion.div {...fadeIn} className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="text-xs tracking-[0.3em] uppercase text-white/40 block mb-2">
                {t({ en: "Featured Collection", ko: "주요 컬렉션", zh: "精选集", ja: "注目のコレクション" })}
              </span>
              <h2 className="text-2xl md:text-4xl font-bold tracking-tight">
                {t({ en: "Selected Works", ko: "선정 작품", zh: "精选作品", ja: "厳選作品" })}
              </h2>
            </div>
            <button className="text-sm text-white/40 hover:text-white transition-colors flex items-center gap-1">
              {t({ en: "View All", ko: "모두 보기", zh: "查看全部", ja: "すべて見る" })}
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {selectedWorks.map((work, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0.15, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="group relative rounded-2xl overflow-hidden cursor-pointer"
              >
                <div
                  className={`${work.gradient} aspect-[16/10] w-full flex items-center justify-center transition-transform duration-700 group-hover:scale-105`}
                >
                  <Camera className="w-12 h-12 text-white/8 stroke-[0.5]" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6 md:p-8">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex items-center gap-2 text-white/50 text-xs mb-2">
                      <MapPin className="w-3 h-3" />
                      {t(work.location)}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold">{t(work.title)}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ─── Testimonial / Quote Strip ─── */}
      <section className="py-16 border-y border-white/5 bg-white/[0.02]">
        <motion.div {...fadeIn} className="max-w-4xl mx-auto px-6 text-center">
          <div className="w-12 h-px bg-white/20 mx-auto mb-8" />
          <blockquote className="text-xl md:text-2xl lg:text-3xl font-light leading-relaxed text-white/70 italic">
            &ldquo;{t({
              en: "Photography is not about the camera. It is about the willingness to see, to wait, and to be moved by the world as it unfolds before you.",
              ko: "사진은 카메라에 관한 것이 아닙니다. 눈앞에 펼쳐지는 세상을 보고, 기다리고, 감동받으려는 의지에 관한 것입니다.",
              zh: "摄影不是关于相机，而是关于愿意去看、去等待、并被眼前展开的世界所感动。",
              ja: "写真はカメラについてではありません。目の前に広がる世界を見て、待ち、感動する意志についてです。",
            })}&rdquo;
          </blockquote>
          <p className="text-sm text-white/30 mt-6">
            — Elena Voss
          </p>
          <div className="w-12 h-px bg-white/20 mx-auto mt-8" />
        </motion.div>
      </section>

      {/* ─── Exhibitions Timeline ─── */}
      <section className="px-6 md:px-10 py-20">
        <motion.div {...fadeIn} className="max-w-4xl mx-auto">
          <span className="text-xs tracking-[0.3em] uppercase text-white/40 block mb-2">
            {t({ en: "Recognition", ko: "수상 경력", zh: "荣誉", ja: "受賞歴" })}
          </span>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-10">
            {t({ en: "Exhibitions & Awards", ko: "전시회 & 수상", zh: "展览与奖项", ja: "展示会と受賞" })}
          </h2>
          <div className="space-y-0">
            {[
              {
                year: "2025",
                title: { en: "Light Between Worlds", ko: "세계 사이의 빛", zh: "世界之间的光", ja: "世界の間の光" },
                venue: { en: "Museum of Modern Art, New York", ko: "뉴욕 현대미술관", zh: "纽约现代艺术博物馆", ja: "ニューヨーク近代美術館" },
              },
              {
                year: "2024",
                title: { en: "Shifting Perspectives", ko: "변화하는 시선", zh: "转换视角", ja: "変わりゆく視点" },
                venue: { en: "Tate Modern, London", ko: "테이트 모던, 런던", zh: "泰特现代美术馆，伦敦", ja: "テート・モダン、ロンドン" },
              },
              {
                year: "2023",
                title: { en: "Silent Hours", ko: "고요한 시간", zh: "寂静时光", ja: "静かな時間" },
                venue: { en: "National Art Center, Tokyo", ko: "도쿄 국립신미술관", zh: "东京国立新美术馆", ja: "東京 国立新美術館" },
              },
              {
                year: "2022",
                title: { en: "Traces of Memory", ko: "기억의 흔적", zh: "记忆的痕迹", ja: "記憶の痕跡" },
                venue: { en: "Leeum Museum, Seoul", ko: "리움미술관, 서울", zh: "三星美术馆Leeum，首尔", ja: "リウム美術館、ソウル" },
              },
            ].map((exhibition, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0.15, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex items-start gap-6 py-5 border-b border-white/[0.06] group hover:border-white/15 transition-colors cursor-pointer"
              >
                <span className="text-sm text-white/30 font-mono w-12 shrink-0 pt-0.5">
                  {exhibition.year}
                </span>
                <div className="flex-1 min-w-0">
                  <h4 className="text-base font-semibold group-hover:text-white transition-colors">
                    {t(exhibition.title)}
                  </h4>
                  <p className="text-sm text-white/40 mt-0.5">{t(exhibition.venue)}</p>
                </div>
                <ChevronRight className="w-4 h-4 text-white/20 shrink-0 mt-1 group-hover:text-white/50 group-hover:translate-x-1 transition-all" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ─── Contact Section ─── */}
      <section className="px-6 md:px-10 py-20 bg-gradient-to-b from-[#0A0A0A] to-zinc-950">
        <motion.div {...fadeIn} className="max-w-4xl mx-auto text-center">
          <span className="text-xs tracking-[0.3em] uppercase text-white/40 block mb-2">
            {t({ en: "Get in Touch", ko: "연락하기", zh: "联系方式", ja: "お問い合わせ" })}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            {t({
              en: "Let's Create Together",
              ko: "함께 만들어 갑시다",
              zh: "让我们一起创作",
              ja: "一緒に創りましょう",
            })}
          </h2>
          <p className="text-white/40 max-w-lg mx-auto mb-12">
            {t({
              en: "Available for commissions, exhibitions, editorial work, and creative collaborations worldwide.",
              ko: "커미션, 전시, 에디토리얼 작업, 전 세계 크리에이티브 협업이 가능합니다.",
              zh: "可承接委托、展览、编辑工作及全球创意合作。",
              ja: "コミッション、展示、エディトリアルワーク、世界中のクリエイティブコラボレーションを承ります。",
            })}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Email */}
            <motion.a
              href="mailto:elena@elenavoss.com"
              {...stagger}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 hover:bg-white/[0.06] transition-all duration-300 group cursor-pointer block"
            >
              <Mail className="w-5 h-5 text-white/30 mx-auto mb-3 group-hover:text-white/60 transition-colors" />
              <p className="text-sm font-semibold mb-1">
                {t({ en: "Email", ko: "이메일", zh: "邮箱", ja: "メール" })}
              </p>
              <p className="text-xs text-white/40">elena@elenavoss.com</p>
            </motion.a>

            {/* Instagram */}
            <motion.a
              href="https://instagram.com/elenavoss"
              target="_blank"
              rel="noopener noreferrer"
              {...stagger}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 hover:bg-white/[0.06] transition-all duration-300 group cursor-pointer block"
            >
              <Instagram className="w-5 h-5 text-white/30 mx-auto mb-3 group-hover:text-white/60 transition-colors" />
              <p className="text-sm font-semibold mb-1">Instagram</p>
              <p className="text-xs text-white/40">@elenavoss</p>
            </motion.a>

            {/* Booking */}
            <motion.div
              {...stagger}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 hover:bg-white/[0.06] transition-all duration-300 group cursor-pointer"
            >
              <CalendarCheck className="w-5 h-5 text-white/30 mx-auto mb-3 group-hover:text-white/60 transition-colors" />
              <p className="text-sm font-semibold mb-1">
                {t({ en: "Book a Session", ko: "촬영 예약", zh: "预约拍摄", ja: "撮影予約" })}
              </p>
              <p className="text-xs text-white/40">
                {t({
                  en: "Schedule a consultation",
                  ko: "상담 일정 잡기",
                  zh: "安排咨询",
                  ja: "相談を予約する",
                })}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="px-6 md:px-10 py-10 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <Camera className="w-5 h-5 text-white/20" />
              <span className="text-sm font-semibold tracking-wide">ELENA VOSS</span>
            </div>
            <div className="flex items-center gap-6 text-xs text-white/30">
              <a href="#" className="hover:text-white transition-colors">
                {t({ en: "Portfolio", ko: "포트폴리오", zh: "作品集", ja: "ポートフォリオ" })}
              </a>
              <a href="#" className="hover:text-white transition-colors">
                {t({ en: "About", ko: "소개", zh: "关于", ja: "紹介" })}
              </a>
              <a href="#" className="hover:text-white transition-colors">
                {t({ en: "Prints", ko: "프린트", zh: "印刷品", ja: "プリント" })}
              </a>
              <a href="#" className="hover:text-white transition-colors">
                {t({ en: "Contact", ko: "연락처", zh: "联系", ja: "連絡先" })}
              </a>
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="text-white/20 hover:text-white transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="mailto:elena@elenavoss.com" className="text-white/20 hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-white/[0.04] flex flex-col md:flex-row items-center justify-between gap-3 text-[10px] text-white/20">
            <span>&copy; 2026 Elena Voss Photography. {t({ en: "All rights reserved.", ko: "모든 권리 보유.", zh: "保留所有权利。", ja: "全著作権所有。" })}</span>
            <span>{t({ en: "Crafted with light and patience", ko: "빛과 인내로 만들어진", zh: "以光与耐心打造", ja: "光と忍耐で作られた" })}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
