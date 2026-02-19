"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown, ArrowLeft, ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { useI18n } from "@/i18n/context";
import LanguageSwitcher from "@/components/common/LanguageSwitcher";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: { en: "Lumina Studio", ko: "루미나 스튜디오", zh: "光影工作室", ja: "ルミナスタジオ" },
    category: { en: "Brand Identity", ko: "브랜드 아이덴티티", zh: "品牌标识", ja: "ブランドアイデンティティ" },
    description: {
      en: "A comprehensive brand identity system for a boutique design studio specializing in light installations.",
      ko: "조명 설치 전문 부티크 디자인 스튜디오를 위한 종합 브랜드 아이덴티티 시스템.",
      zh: "为专注于灯光装置的精品设计工作室打造的综合品牌识别系统。",
      ja: "照明インスタレーションを専門とするブティックデザインスタジオのための総合ブランドアイデンティティシステム。",
    },
    year: "2024",
    gradient: "from-amber-500 to-orange-600",
    number: "01",
  },
  {
    title: { en: "Terrain Collective", ko: "테레인 콜렉티브", zh: "地形集团", ja: "テレインコレクティブ" },
    category: { en: "Web Design", ko: "웹 디자인", zh: "网页设计", ja: "ウェブデザイン" },
    description: {
      en: "Digital platform for a landscape architecture firm bridging nature and urban development.",
      ko: "자연과 도시 개발을 연결하는 조경 건축 회사를 위한 디지털 플랫폼.",
      zh: "为连接自然与城市发展的景观建筑公司打造的数字平台。",
      ja: "自然と都市開発を繋ぐランドスケープ建築事務所のデジタルプラットフォーム。",
    },
    year: "2024",
    gradient: "from-emerald-500 to-teal-600",
    number: "02",
  },
  {
    title: { en: "Voidform", ko: "보이드폼", zh: "虚空形态", ja: "ボイドフォーム" },
    category: { en: "Art Direction", ko: "아트 디렉션", zh: "艺术指导", ja: "アートディレクション" },
    description: {
      en: "Art direction and visual identity for an experimental music label pushing sonic boundaries.",
      ko: "음향의 경계를 넓히는 실험 음악 레이블을 위한 아트 디렉션 및 비주얼 아이덴티티.",
      zh: "为突破音乐边界的实验音乐厂牌打造的艺术指导和视觉识别。",
      ja: "音の境界を押し広げる実験音楽レーベルのアートディレクションとビジュアルアイデンティティ。",
    },
    year: "2024",
    gradient: "from-violet-500 to-purple-600",
    number: "03",
  },
  {
    title: { en: "Aether Works", ko: "에테르 웍스", zh: "以太工坊", ja: "エーテルワークス" },
    category: { en: "Product Design", ko: "제품 디자인", zh: "产品设计", ja: "プロダクトデザイン" },
    description: {
      en: "Product design and UX strategy for a next-generation spatial computing platform.",
      ko: "차세대 공간 컴퓨팅 플랫폼을 위한 제품 디자인 및 UX 전략.",
      zh: "为下一代空间计算平台打造的产品设计和用户体验策略。",
      ja: "次世代空間コンピューティングプラットフォームのためのプロダクトデザインとUX戦略。",
    },
    year: "2023",
    gradient: "from-cyan-500 to-blue-600",
    number: "04",
  },
  {
    title: { en: "Solstice Media", ko: "솔스티스 미디어", zh: "至日媒体", ja: "ソルスティスメディア" },
    category: { en: "Motion Design", ko: "모션 디자인", zh: "动态设计", ja: "モーションデザイン" },
    description: {
      en: "Motion graphics and animation system for a media company creating climate documentaries.",
      ko: "기후 다큐멘터리를 제작하는 미디어 회사를 위한 모션 그래픽 및 애니메이션 시스템.",
      zh: "为制作气候纪录片的媒体公司打造的动态图形和动画系统。",
      ja: "気候ドキュメンタリーを制作するメディア企業のためのモーショングラフィックスとアニメーションシステム。",
    },
    year: "2023",
    gradient: "from-rose-500 to-pink-600",
    number: "05",
  },
  {
    title: { en: "Monolith Arch", ko: "모놀리스 아키", zh: "巨石建筑", ja: "モノリスアーキ" },
    category: { en: "Web Development", ko: "웹 개발", zh: "网站开发", ja: "ウェブ開発" },
    description: {
      en: "Immersive portfolio website for an architectural firm known for brutalist residential design.",
      ko: "브루탈리스트 주거 디자인으로 유명한 건축 사무소를 위한 몰입형 포트폴리오 웹사이트.",
      zh: "为以粗野主义住宅设计闻名的建筑事务所打造的沉浸式作品集网站。",
      ja: "ブルータリスト住宅デザインで知られる建築事務所のための没入型ポートフォリオウェブサイト。",
    },
    year: "2023",
    gradient: "from-stone-400 to-zinc-600",
    number: "06",
  },
];

export default function HorizontalScrollPage() {
  const { t } = useI18n();
  const containerRef = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!horizontalRef.current || !trackRef.current) return;

      const track = trackRef.current;
      const totalScrollWidth = track.scrollWidth;
      const viewportWidth = window.innerWidth;
      const distanceToScroll = totalScrollWidth - viewportWidth;

      if (distanceToScroll <= 0) return;

      gsap.to(track, {
        x: -distanceToScroll,
        ease: "none",
        scrollTrigger: {
          trigger: horizontalRef.current,
          pin: true,
          scrub: 1,
          end: () => `+=${distanceToScroll}`,
          invalidateOnRefresh: true,
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="bg-[#111111] text-white">
      {/* Top Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5">
        <Link
          href="/"
          className="flex items-center gap-2 text-white/50 hover:text-white transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-mono tracking-wider uppercase">
            {t({ en: "Back", ko: "뒤로", zh: "返回", ja: "戻る" })}
          </span>
        </Link>
        <LanguageSwitcher variant="dark" />
      </nav>

      {/* =============================== */}
      {/* INTRO SECTION - Normal Vertical */}
      {/* =============================== */}
      <section className="relative h-[70vh] flex flex-col items-center justify-center px-6 bg-[#111111]">
        <motion.div
          className="text-center max-w-4xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <p className="font-mono text-xs tracking-[0.4em] uppercase text-white/30 mb-6">
            {t({
              en: "Selected Works 2023 — 2024",
              ko: "선정 작품 2023 — 2024",
              zh: "精选作品 2023 — 2024",
              ja: "厳選作品 2023 — 2024",
            })}
          </p>

          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9]">
            <span className="block">
              {t({
                en: "Creative",
                ko: "크리에이티브",
                zh: "创意",
                ja: "クリエイティブ",
              })}
            </span>
            <span className="block text-white/15">
              {t({
                en: "Portfolio",
                ko: "포트폴리오",
                zh: "作品集",
                ja: "ポートフォリオ",
              })}
            </span>
          </h1>

          <p className="mt-8 text-lg md:text-xl text-white/30 max-w-lg mx-auto leading-relaxed">
            {t({
              en: "A curated collection spanning brand identity, web design, art direction, and interactive experiences.",
              ko: "브랜드 아이덴티티, 웹 디자인, 아트 디렉션, 인터랙티브 경험을 아우르는 큐레이션 컬렉션.",
              zh: "涵盖品牌标识、网页设计、艺术指导和互动体验的精选作品集。",
              ja: "ブランドアイデンティティ、ウェブデザイン、アートディレクション、インタラクティブ体験を網羅するキュレーションコレクション。",
            })}
          </p>

          <div className="mt-6 flex items-center justify-center gap-6 text-sm text-white/20 font-mono">
            <span>
              {t({
                en: "6 Projects",
                ko: "6개 프로젝트",
                zh: "6个项目",
                ja: "6つのプロジェクト",
              })}
            </span>
            <span className="w-px h-4 bg-white/10" />
            <span>
              {t({
                en: "Scroll to explore",
                ko: "스크롤하여 탐색",
                zh: "滚动探索",
                ja: "スクロールして探索",
              })}
            </span>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-white/20">
            {t({ en: "Scroll", ko: "스크롤", zh: "滚动", ja: "スクロール" })}
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="w-4 h-4 text-white/20" />
          </motion.div>
        </motion.div>
      </section>

      {/* ======================================= */}
      {/* HORIZONTAL SCROLL GALLERY               */}
      {/* ======================================= */}
      <section ref={horizontalRef} className="relative bg-[#0D0D0D] overflow-hidden">
        <div
          ref={trackRef}
          className="flex items-center h-screen will-change-transform"
        >
          {/* Leading spacer */}
          <div className="flex-shrink-0 w-[30vw] flex items-center justify-center px-12">
            <div>
              <p className="font-mono text-xs tracking-[0.3em] uppercase text-white/20 mb-3">
                {t({ en: "Gallery", ko: "갤러리", zh: "画廊", ja: "ギャラリー" })}
              </p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white/80">
                {t({ en: "Selected", ko: "선정", zh: "精选", ja: "厳選" })}
                <br />
                <span className="text-white/20">
                  {t({ en: "Projects", ko: "프로젝트", zh: "项目", ja: "プロジェクト" })}
                </span>
              </h2>
              <div className="mt-5 flex items-center gap-3 text-white/20">
                <div className="w-12 h-px bg-white/20" />
                <span className="text-xs font-mono">
                  {t({ en: "Swipe", ko: "스와이프", zh: "滑动", ja: "スワイプ" })}
                </span>
              </div>
            </div>
          </div>

          {/* Project Cards */}
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card flex-shrink-0 w-[60vw] h-screen flex items-center px-5"
            >
              <div className="relative w-full bg-white/[0.02] border border-white/[0.06] rounded-2xl overflow-hidden group cursor-pointer hover:bg-white/[0.04] transition-colors duration-500 p-8 md:p-10">
                {/* Gradient image placeholder */}
                <div
                  className={`w-full h-[300px] rounded-xl bg-gradient-to-br ${project.gradient} opacity-60 mb-8 flex items-center justify-center`}
                >
                  <span className="text-5xl font-bold text-white/20">
                    [{project.number}]
                  </span>
                </div>

                {/* Project number */}
                <p className="font-mono text-sm text-white/20 mb-2">
                  [{project.number}]
                </p>

                {/* Title */}
                <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-3 group-hover:translate-x-1 transition-transform duration-500">
                  {t(project.title)}
                </h3>

                {/* Category tag */}
                <span className="inline-block px-3 py-1 text-xs font-mono tracking-wider uppercase bg-white/5 border border-white/10 rounded-full text-white/50 mb-4">
                  {t(project.category)}
                </span>

                {/* Description */}
                <p className="text-base text-white/40 leading-relaxed max-w-md mb-4">
                  {t(project.description)}
                </p>

                {/* Year */}
                <div className="flex items-center justify-between">
                  <span className="text-sm font-mono text-white/20">
                    {project.year}
                  </span>
                  <div className="flex items-center gap-2 text-white/30 group-hover:text-white/60 transition-colors">
                    <span className="text-sm font-mono">
                      {t({ en: "View", ko: "보기", zh: "查看", ja: "見る" })}
                    </span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Trailing spacer */}
          <div className="flex-shrink-0 w-[20vw]" />
        </div>
      </section>

      {/* =============================== */}
      {/* ABOUT SECTION - Normal Vertical */}
      {/* =============================== */}
      <section className="relative py-28 md:py-40 px-6 md:px-12 lg:px-20 bg-[#111111]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent to-white/10" />

        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0.2, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-mono text-xs tracking-[0.4em] uppercase text-white/20 mb-6">
              {t({ en: "About", ko: "소개", zh: "关于", ja: "紹介" })}
            </p>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-12">
              {t({ en: "About the", ko: "스튜디오", zh: "关于", ja: "スタジオ" })}
              <br />
              <span className="text-white/20">
                {t({ en: "Studio", ko: "소개", zh: "工作室", ja: "紹介" })}
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
            <motion.div
              initial={{ opacity: 0.2, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <p className="text-lg md:text-xl text-white/50 leading-relaxed mb-6">
                {t({
                  en: "We are a multidisciplinary design studio focused on creating meaningful digital experiences. Our approach combines strategic thinking with meticulous craft.",
                  ko: "우리는 의미 있는 디지털 경험을 만드는 데 집중하는 다학제적 디자인 스튜디오입니다. 전략적 사고와 세심한 장인 정신을 결합합니다.",
                  zh: "我们是一家多学科设计工作室，专注于创造有意义的数字体验。我们的方法将战略思维与精湛工艺相结合。",
                  ja: "私たちは意義あるデジタル体験の創造に注力するマルチディシプリナリーデザインスタジオです。戦略的思考と緻密なクラフトを融合させます。",
                })}
              </p>
              <p className="text-lg md:text-xl text-white/50 leading-relaxed">
                {t({
                  en: "Every project is an opportunity to push boundaries and explore new territories in design, technology, and storytelling.",
                  ko: "모든 프로젝트는 디자인, 기술, 스토리텔링의 새로운 영역을 탐험하고 경계를 넓히는 기회입니다.",
                  zh: "每个项目都是在设计、技术和叙事领域突破边界、探索新领域的机会。",
                  ja: "すべてのプロジェクトは、デザイン、テクノロジー、ストーリーテリングの境界を押し広げ、新しい領域を探索する機会です。",
                })}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0.2, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-sm font-mono tracking-[0.2em] uppercase text-white/30 mb-4">
                  {t({ en: "Services", ko: "서비스", zh: "服务", ja: "サービス" })}
                </h3>
                <ul className="space-y-3 text-white/60">
                  {[
                    { en: "Brand Identity & Strategy", ko: "브랜드 아이덴티티 & 전략", zh: "品牌标识与策略", ja: "ブランドアイデンティティ＆戦略" },
                    { en: "Web Design & Development", ko: "웹 디자인 & 개발", zh: "网页设计与开发", ja: "ウェブデザイン＆開発" },
                    { en: "Art Direction", ko: "아트 디렉션", zh: "艺术指导", ja: "アートディレクション" },
                    { en: "Motion Design", ko: "모션 디자인", zh: "动态设计", ja: "モーションデザイン" },
                    { en: "Interactive Experiences", ko: "인터랙티브 경험", zh: "互动体验", ja: "インタラクティブ体験" },
                  ].map((service, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                      <span>{t(service)}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-mono tracking-[0.2em] uppercase text-white/30 mb-4">
                  {t({ en: "Recognition", ko: "수상", zh: "荣誉", ja: "受賞" })}
                </h3>
                <ul className="space-y-2 text-white/40 text-sm font-mono">
                  <li>Awwwards — Site of the Day x3</li>
                  <li>FWA — Site of the Month</li>
                  <li>CSS Design Awards — Best UI</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =============================== */}
      {/* CONTACT SECTION                 */}
      {/* =============================== */}
      <section className="relative py-28 md:py-40 px-6 md:px-12 lg:px-20 bg-[#0D0D0D] border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0.2, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-mono text-xs tracking-[0.4em] uppercase text-white/20 mb-6">
              {t({ en: "Contact", ko: "연락처", zh: "联系", ja: "お問い合わせ" })}
            </p>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
              {t({ en: "Get in", ko: "연락", zh: "联系", ja: "お問い" })}
              <br />
              <span className="text-white/20">
                {t({ en: "Touch", ko: "주세요", zh: "我们", ja: "合わせ" })}
              </span>
            </h2>
            <p className="text-lg text-white/30 max-w-lg mb-16">
              {t({
                en: "Have a project in mind? Drop us a line and let's create something extraordinary together.",
                ko: "프로젝트가 있으신가요? 연락 주시면 함께 특별한 것을 만들어 보겠습니다.",
                zh: "有项目想法？联系我们，一起创造非凡。",
                ja: "プロジェクトをお考えですか？お気軽にご連絡ください。一緒に特別なものを作りましょう。",
              })}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Email */}
            <motion.div
              initial={{ opacity: 0.2, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Mail className="w-4 h-4 text-white/30" />
                <h3 className="text-sm font-mono tracking-[0.2em] uppercase text-white/30">
                  {t({ en: "Email", ko: "이메일", zh: "邮箱", ja: "メール" })}
                </h3>
              </div>
              <a
                href="mailto:hello@studio.com"
                className="text-lg text-white/60 hover:text-white transition-colors"
              >
                hello@studio.com
              </a>
            </motion.div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0.2, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-4 h-4 text-white/30" />
                <h3 className="text-sm font-mono tracking-[0.2em] uppercase text-white/30">
                  {t({ en: "Location", ko: "위치", zh: "位置", ja: "所在地" })}
                </h3>
              </div>
              <p className="text-lg text-white/60">
                {t({
                  en: "Seoul, South Korea",
                  ko: "대한민국 서울",
                  zh: "韩国首尔",
                  ja: "韓国ソウル",
                })}
              </p>
            </motion.div>

            {/* Phone */}
            <motion.div
              initial={{ opacity: 0.2, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Phone className="w-4 h-4 text-white/30" />
                <h3 className="text-sm font-mono tracking-[0.2em] uppercase text-white/30">
                  {t({ en: "Phone", ko: "전화", zh: "电话", ja: "電話" })}
                </h3>
              </div>
              <p className="text-lg text-white/60">+82 2 1234 5678</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =============================== */}
      {/* FOOTER                          */}
      {/* =============================== */}
      <footer className="border-t border-white/5 px-6 md:px-12 lg:px-20 py-10 bg-[#111111]">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <p className="text-sm font-mono text-white/30 mb-1">
              {t({
                en: "Creative Portfolio",
                ko: "크리에이티브 포트폴리오",
                zh: "创意作品集",
                ja: "クリエイティブポートフォリオ",
              })}
            </p>
            <p className="text-xs font-mono text-white/15">
              {t({
                en: "Horizontal Scroll Experience",
                ko: "가로 스크롤 경험",
                zh: "横向滚动体验",
                ja: "横スクロール体験",
              })}
            </p>
          </div>
          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="text-xs font-mono tracking-[0.2em] uppercase text-white/20 hover:text-white/50 transition-colors"
            >
              {t({ en: "Home", ko: "홈", zh: "首页", ja: "ホーム" })}
            </Link>
            <span className="w-px h-3 bg-white/10" />
            <span className="text-xs font-mono text-white/15">
              GSAP + Framer Motion
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
