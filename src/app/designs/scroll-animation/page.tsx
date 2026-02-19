"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Zap, Shield, Cpu } from "lucide-react";
import { useI18n } from "@/i18n/context";
import LanguageSwitcher from "@/components/common/LanguageSwitcher";

gsap.registerPlugin(ScrollTrigger);

/* ─────────────────────────────────────────────
   i18n translation records
   ───────────────────────────────────────────── */
const tx = {
  back: { en: "Back", ko: "뒤로", zh: "返回", ja: "戻る" },
  badge: {
    en: "Scroll to Explore",
    ko: "스크롤하여 탐색",
    zh: "滚动探索",
    ja: "スクロールして探索",
  },
  heroTitle1: { en: "NOVA", ko: "NOVA", zh: "NOVA", ja: "NOVA" },
  heroTitle2: {
    en: "EXPERIENCE",
    ko: "EXPERIENCE",
    zh: "EXPERIENCE",
    ja: "EXPERIENCE",
  },
  heroSub: {
    en: "The future of digital interaction. Scroll down to discover.",
    ko: "디지털 인터랙션의 미래. 스크롤하여 발견하세요.",
    zh: "数字交互的未来。向下滚动以探索。",
    ja: "デジタルインタラクションの未来。スクロールして発見。",
  },
  scroll: { en: "Scroll", ko: "스크롤", zh: "滚动", ja: "スクロール" },
  featLabel: {
    en: "What We Offer",
    ko: "제공 서비스",
    zh: "我们的服务",
    ja: "提供サービス",
  },
  featTitle: {
    en: "Built for the future",
    ko: "미래를 위한 설계",
    zh: "为未来而生",
    ja: "未来のために構築",
  },
  feat1Title: {
    en: "Lightning Performance",
    ko: "번개 같은 성능",
    zh: "闪电般的性能",
    ja: "超高速パフォーマンス",
  },
  feat1Desc: {
    en: "Every interaction responds in under 16ms, delivering buttery-smooth 60fps animations across all devices.",
    ko: "모든 인터랙션이 16ms 이내에 응답하며 모든 기기에서 부드러운 60fps 애니메이션을 제공합니다.",
    zh: "每次交互在16ms内响应，在所有设备上提供流畅的60fps动画。",
    ja: "すべてのインタラクションが16ms以内に応答し、すべてのデバイスで滑らかな60fpsアニメーションを提供します。",
  },
  feat2Title: {
    en: "Enterprise Security",
    ko: "엔터프라이즈 보안",
    zh: "企业级安全",
    ja: "エンタープライズセキュリティ",
  },
  feat2Desc: {
    en: "Bank-grade encryption with zero-knowledge architecture. Your data stays yours — always encrypted.",
    ko: "제로 지식 아키텍처를 갖춘 은행 등급 암호화. 데이터는 항상 암호화됩니다.",
    zh: "零知识架构的银行级加密。您的数据始终加密保护。",
    ja: "ゼロ知識アーキテクチャによる銀行レベルの暗号化。データは常に暗号化されています。",
  },
  feat3Title: {
    en: "AI-Powered Engine",
    ko: "AI 기반 엔진",
    zh: "AI驱动引擎",
    ja: "AI搭載エンジン",
  },
  feat3Desc: {
    en: "An intelligent core that learns and adapts. Predictive workflows that anticipate your needs.",
    ko: "학습하고 적응하는 지능형 코어. 필요를 예측하는 워크플로우.",
    zh: "学习和适应的智能核心。预测您需求的工作流程。",
    ja: "学習し適応するインテリジェントコア。ニーズを予測するワークフロー。",
  },
  parallaxTitle1: {
    en: "Immersive",
    ko: "몰입적인",
    zh: "沉浸式",
    ja: "没入型",
  },
  parallaxTitle2: {
    en: "Experience",
    ko: "경험",
    zh: "体验",
    ja: "体験",
  },
  parallaxSub: {
    en: "Every pixel tells a story",
    ko: "모든 픽셀이 이야기를 전합니다",
    zh: "每个像素都在讲述故事",
    ja: "すべてのピクセルが物語を語る",
  },
  statsLabel: {
    en: "By the Numbers",
    ko: "숫자로 보기",
    zh: "数据说话",
    ja: "数字で見る",
  },
  statsTitle: {
    en: "Impact at scale",
    ko: "규모의 임팩트",
    zh: "规模化影响",
    ja: "スケールのインパクト",
  },
  stat1Label: {
    en: "Projects Delivered",
    ko: "완료 프로젝트",
    zh: "交付项目",
    ja: "完了プロジェクト",
  },
  stat2Label: {
    en: "Active Users",
    ko: "활성 사용자",
    zh: "活跃用户",
    ja: "アクティブユーザー",
  },
  stat3Label: {
    en: "Satisfaction Rate",
    ko: "만족도",
    zh: "满意率",
    ja: "満足度",
  },
  stat4Label: {
    en: "Edge Locations",
    ko: "엣지 로케이션",
    zh: "边缘节点",
    ja: "エッジロケーション",
  },
  timelineLabel: {
    en: "Our Journey",
    ko: "우리의 여정",
    zh: "我们的旅程",
    ja: "私たちの歩み",
  },
  timelineTitle: {
    en: "Milestones",
    ko: "마일스톤",
    zh: "里程碑",
    ja: "マイルストーン",
  },
  tl1Title: {
    en: "The Beginning",
    ko: "시작",
    zh: "起步",
    ja: "始まり",
  },
  tl1Desc: {
    en: "Founded with a vision to redefine digital experiences.",
    ko: "디지털 경험을 재정의하겠다는 비전으로 설립.",
    zh: "以重新定义数字体验的愿景而创立。",
    ja: "デジタル体験を再定義するビジョンで設立。",
  },
  tl2Title: {
    en: "First Milestone",
    ko: "첫 번째 마일스톤",
    zh: "第一个里程碑",
    ja: "最初のマイルストーン",
  },
  tl2Desc: {
    en: "Reached 10,000 users and secured Series A funding.",
    ko: "사용자 10,000명 달성 및 시리즈 A 투자 유치.",
    zh: "用户达到10,000人，获得A轮融资。",
    ja: "ユーザー10,000人達成、シリーズA資金調達。",
  },
  tl3Title: {
    en: "Global Expansion",
    ko: "글로벌 확장",
    zh: "全球扩张",
    ja: "グローバル展開",
  },
  tl3Desc: {
    en: "Launched in 15 new markets across Europe and Asia.",
    ko: "유럽과 아시아 15개 신규 시장 진출.",
    zh: "在欧洲和亚洲15个新市场上线。",
    ja: "ヨーロッパとアジアの15の新市場に展開。",
  },
  tl4Title: {
    en: "AI Integration",
    ko: "AI 통합",
    zh: "AI集成",
    ja: "AI統合",
  },
  tl4Desc: {
    en: "Introduced AI-powered features that changed the game.",
    ko: "게임 체인저인 AI 기반 기능 도입.",
    zh: "推出改变游戏规则的AI功能。",
    ja: "ゲームを変えるAI搭載機能を導入。",
  },
  revealLine1: {
    en: "We build experiences",
    ko: "우리는 경험을 만듭니다",
    zh: "我们创造体验",
    ja: "私たちは体験を創ります",
  },
  revealLine2: {
    en: "that transcend the ordinary",
    ko: "평범함을 뛰어넘는",
    zh: "超越平凡",
    ja: "日常を超越する",
  },
  revealLine3: {
    en: "and inspire the extraordinary.",
    ko: "그리고 비범함에 영감을 줍니다.",
    zh: "激发非凡。",
    ja: "そして非凡さを刺激する。",
  },
  ctaLabel: { en: "Ready?", ko: "준비됐나요?", zh: "准备好了吗？", ja: "準備はできましたか？" },
  ctaTitle1: {
    en: "Start building",
    ko: "미래를",
    zh: "开始构建",
    ja: "未来を",
  },
  ctaTitle2: {
    en: "the future",
    ko: "만들어 보세요",
    zh: "未来",
    ja: "構築しよう",
  },
  ctaSub: {
    en: "Join thousands of teams already using Nova to create extraordinary digital experiences.",
    ko: "이미 Nova를 사용하여 놀라운 디지털 경험을 만들고 있는 수천 개의 팀에 합류하세요.",
    zh: "加入数千个已经使用Nova创造非凡数字体验的团队。",
    ja: "すでにNovaを使って素晴らしいデジタル体験を創造している数千のチームに参加しましょう。",
  },
  ctaBtn: {
    en: "Get Started",
    ko: "시작하기",
    zh: "立即开始",
    ja: "始める",
  },
  footerTech: {
    en: "GSAP ScrollTrigger + Framer Motion",
    ko: "GSAP ScrollTrigger + Framer Motion",
    zh: "GSAP ScrollTrigger + Framer Motion",
    ja: "GSAP ScrollTrigger + Framer Motion",
  },
  footerPrivacy: { en: "Privacy", ko: "개인정보", zh: "隐私", ja: "プライバシー" },
  footerTerms: { en: "Terms", ko: "이용약관", zh: "条款", ja: "利用規約" },
  footerContact: { en: "Contact", ko: "문의", zh: "联系", ja: "お問い合わせ" },
} as const;

/* ─────────────────────────────────────────────
   Feature / Stat / Timeline data
   ───────────────────────────────────────────── */
const featureKeys = [
  { icon: Zap, titleKey: "feat1Title" as const, descKey: "feat1Desc" as const },
  { icon: Shield, titleKey: "feat2Title" as const, descKey: "feat2Desc" as const },
  { icon: Cpu, titleKey: "feat3Title" as const, descKey: "feat3Desc" as const },
];

const statsData = [
  { value: 100, suffix: "+", labelKey: "stat1Label" as const },
  { value: 50, suffix: "K", labelKey: "stat2Label" as const },
  { value: 99, suffix: "%", labelKey: "stat3Label" as const },
  { value: 42, suffix: "", labelKey: "stat4Label" as const },
];

const timelineData = [
  { year: "2021", titleKey: "tl1Title" as const, descKey: "tl1Desc" as const },
  { year: "2022", titleKey: "tl2Title" as const, descKey: "tl2Desc" as const },
  { year: "2023", titleKey: "tl3Title" as const, descKey: "tl3Desc" as const },
  { year: "2024", titleKey: "tl4Title" as const, descKey: "tl4Desc" as const },
];

/* ─────────────────────────────────────────────
   AnimatedCounter (framer-motion based)
   ───────────────────────────────────────────── */
function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const displayed = isInView ? value : 0;

  return (
    <span ref={ref} className="tabular-nums">
      <motion.span
        key={isInView ? "counting" : "zero"}
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
      >
        {displayed}
      </motion.span>
      {suffix}
    </span>
  );
}

/* ─────────────────────────────────────────────
   Page Component
   ───────────────────────────────────────────── */
export default function ScrollAnimationPage() {
  const { t } = useI18n();

  const containerRef = useRef<HTMLDivElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);

  /* ── GSAP ScrollTrigger animations ── */
  useGSAP(
    () => {
      if (!containerRef.current) return;

      // Parallax section — bg moves slower than text
      if (parallaxRef.current) {
        const bgLayer = parallaxRef.current.querySelector(".parallax-bg");
        const fgLayer = parallaxRef.current.querySelector(".parallax-fg");

        if (bgLayer) {
          gsap.to(bgLayer, {
            y: -120,
            scrollTrigger: {
              trigger: parallaxRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          });
        }

        if (fgLayer) {
          gsap.to(fgLayer, {
            y: -260,
            scrollTrigger: {
              trigger: parallaxRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          });
        }

        // Floating particles
        const particles = parallaxRef.current.querySelectorAll(".parallax-particle");
        particles.forEach((p, i) => {
          gsap.to(p, {
            y: -(60 + i * 50),
            scrollTrigger: {
              trigger: parallaxRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          });
        });
      }

      // Timeline line draw
      gsap.from(".timeline-line-inner", {
        scaleY: 0,
        transformOrigin: "top center",
        scrollTrigger: {
          trigger: ".timeline-wrap",
          start: "top 70%",
          end: "bottom 60%",
          scrub: 1,
        },
      });
    },
    { scope: containerRef }
  );

  /* ── Shared framer-motion variants ── */
  const fadeUp = {
    initial: { opacity: 0.15, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" as const },
    transition: { duration: 0.7, ease: "easeOut" as const },
  };

  return (
    <div ref={containerRef} className="bg-[#0A0A0A] text-white overflow-hidden">
      {/* ── Top Bar: Back + Language ── */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-[#0A0A0A]/70 backdrop-blur-md border-b border-white/5"
      >
        <Link
          href="/"
          className="group flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 transition-all duration-300"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium">{t(tx.back)}</span>
        </Link>
        <LanguageSwitcher variant="dark" />
      </motion.div>

      {/* ===================================== */}
      {/* SECTION 1 — HERO                      */}
      {/* ===================================== */}
      <section className="relative min-h-[80vh] flex flex-col items-center justify-center pt-20 bg-[#0A0A0A]">
        {/* Background effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(120,80,255,0.15)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,200,255,0.08)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative z-10 mb-8 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm"
        >
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-white/50">
            {t(tx.badge)}
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative z-10 text-[clamp(3rem,12vw,10rem)] font-black leading-[0.85] tracking-tighter text-center"
        >
          <span className="block bg-clip-text text-transparent bg-gradient-to-b from-white via-white/90 to-white/40">
            {t(tx.heroTitle1)}
          </span>
          <span className="block bg-clip-text text-transparent bg-gradient-to-b from-white/60 to-white/10 text-[0.4em] tracking-wide mt-2">
            {t(tx.heroTitle2)}
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative z-10 mt-8 text-lg md:text-xl text-white/40 max-w-md text-center leading-relaxed px-6"
        >
          {t(tx.heroSub)}
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="relative z-10 mt-16 mb-8 flex flex-col items-center gap-2"
        >
          <span className="text-xs font-mono text-white/30 tracking-widest uppercase">
            {t(tx.scroll)}
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center pt-1.5"
          >
            <div className="w-1 h-1.5 rounded-full bg-white/50" />
          </motion.div>
        </motion.div>
      </section>

      {/* ===================================== */}
      {/* SECTION 2 — FEATURE CARDS (3-column)  */}
      {/* ===================================== */}
      <section className="relative py-32 px-6 md:px-12 lg:px-20 bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <motion.div className="text-center mb-20" {...fadeUp}>
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-white/30">
              {t(tx.featLabel)}
            </span>
            <h2 className="text-4xl md:text-6xl font-bold mt-4 tracking-tight">
              {t(tx.featTitle).split(" ").slice(0, -1).join(" ")}{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
                {t(tx.featTitle).split(" ").slice(-1)}
              </span>
            </h2>
          </motion.div>

          {/* 3-column cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featureKeys.map((feat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0.15, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="group relative p-8 rounded-2xl bg-[#0A0A0A] border border-white/10 hover:border-white/20 transition-colors duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-white/10 flex items-center justify-center mb-6">
                  <feat.icon className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold mb-3 tracking-tight">
                  {t(tx[feat.titleKey])}
                </h3>
                <p className="text-sm text-white/40 leading-relaxed">
                  {t(tx[feat.descKey])}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================== */}
      {/* SECTION 3 — PARALLAX (GSAP)           */}
      {/* ===================================== */}
      <section
        ref={parallaxRef}
        className="relative h-[90vh] overflow-hidden flex items-center justify-center bg-[#0A0A0A]"
      >
        {/* Slow-moving background gradient */}
        <div className="parallax-bg absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-[#0A0A0A] to-cyan-900/20" />
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-purple-600/10 blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-cyan-600/10 blur-[100px]" />
        </div>

        {/* Floating particles */}
        <div className="parallax-particle absolute top-[15%] left-[10%] w-2 h-2 rounded-full bg-purple-400/40" />
        <div className="parallax-particle absolute top-[25%] right-[20%] w-3 h-3 rounded-full bg-cyan-400/30" />
        <div className="parallax-particle absolute bottom-[30%] left-[25%] w-1.5 h-1.5 rounded-full bg-white/20" />
        <div className="parallax-particle absolute top-[50%] right-[35%] w-2 h-2 rounded-full bg-purple-300/25" />
        <div className="parallax-particle absolute bottom-[20%] right-[15%] w-2 h-2 rounded-full bg-cyan-300/20" />

        {/* Geometric shapes */}
        <div className="parallax-particle absolute top-[20%] left-[15%] w-32 h-32 border border-white/5 rounded-2xl rotate-45" />
        <div className="parallax-particle absolute bottom-[25%] right-[10%] w-40 h-40 border border-white/[0.03] rounded-full" />

        {/* Fast-moving foreground text */}
        <div className="parallax-fg relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0.15, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter">
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-cyan-300 to-purple-400">
                {t(tx.parallaxTitle1)}
              </span>
              <span className="block text-white/80 mt-2">
                {t(tx.parallaxTitle2)}
              </span>
            </h2>
            <p className="mt-6 text-white/30 text-lg font-light tracking-wide">
              {t(tx.parallaxSub)}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ===================================== */}
      {/* SECTION 4 — STATS (framer-motion)     */}
      {/* ===================================== */}
      <section className="relative py-32 px-6 md:px-12 lg:px-20 bg-zinc-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(120,80,255,0.08)_0%,transparent_70%)]" />

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div className="text-center mb-20" {...fadeUp}>
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-white/30">
              {t(tx.statsLabel)}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 tracking-tight">
              {t(tx.statsTitle)}
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {statsData.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0.15, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="text-center p-8 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-white/15 transition-colors duration-500"
              >
                <div className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-3 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-sm text-white/30 font-medium tracking-wide uppercase">
                  {t(tx[stat.labelKey])}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================== */}
      {/* SECTION 5 — TIMELINE                  */}
      {/* ===================================== */}
      <section className="relative py-32 px-6 md:px-12 lg:px-20 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto">
          <motion.div className="text-center mb-24" {...fadeUp}>
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-white/30">
              {t(tx.timelineLabel)}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 tracking-tight">
              {t(tx.timelineTitle)}
            </h2>
          </motion.div>

          <div className="timeline-wrap relative">
            {/* Vertical connecting line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px]">
              <div className="timeline-line-inner w-full h-full bg-gradient-to-b from-transparent via-white/20 to-transparent" />
            </div>

            <div className="space-y-16">
              {timelineData.map((item, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0.15, x: isLeft ? -60 : 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className={`relative flex items-center ${
                      isLeft ? "justify-start" : "justify-end"
                    }`}
                  >
                    {/* Dot */}
                    <div className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-purple-500 shadow-[0_0_12px_rgba(168,85,247,0.5)] z-10" />

                    {/* Card */}
                    <div
                      className={`w-[calc(50%-40px)] p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] ${
                        isLeft ? "text-right mr-auto" : "text-left ml-auto"
                      }`}
                    >
                      <span className="text-xs font-mono text-purple-400/70 tracking-wider">
                        {item.year}
                      </span>
                      <h3 className="text-xl font-bold mt-2 mb-2 tracking-tight">
                        {t(tx[item.titleKey])}
                      </h3>
                      <p className="text-sm text-white/40 leading-relaxed">
                        {t(tx[item.descKey])}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ===================================== */}
      {/* SECTION 6 — LARGE TEXT REVEAL         */}
      {/* ===================================== */}
      <section className="relative py-40 px-6 flex items-center justify-center bg-zinc-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(120,80,255,0.06)_0%,transparent_60%)]" />

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-4">
          {[tx.revealLine1, tx.revealLine2, tx.revealLine3].map(
            (line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0.15, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.7, delay: i * 0.2 }}
                className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight"
                style={{
                  background:
                    i === 1
                      ? "linear-gradient(135deg, #a855f7, #22d3ee)"
                      : "linear-gradient(180deg, #fff, rgba(255,255,255,0.5))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {t(line)}
              </motion.p>
            )
          )}
        </div>
      </section>

      {/* ===================================== */}
      {/* SECTION 7 — CTA                       */}
      {/* ===================================== */}
      <section className="relative py-32 px-6 md:px-12 lg:px-20 bg-[#0A0A0A]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(120,80,255,0.1)_0%,transparent_60%)]" />

        <motion.div
          initial={{ opacity: 0.15, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center relative z-10"
        >
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-white/30">
            {t(tx.ctaLabel)}
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mt-6 mb-8 tracking-tight leading-[0.95]">
            {t(tx.ctaTitle1)}
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
              {t(tx.ctaTitle2)}
            </span>
          </h2>
          <p className="text-lg text-white/40 mb-12 max-w-lg mx-auto leading-relaxed">
            {t(tx.ctaSub)}
          </p>

          {/* CTA Button */}
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-cyan-500/30 rounded-full blur-xl opacity-40 animate-pulse" />
            <button className="relative px-10 py-4 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold text-lg tracking-wide hover:shadow-[0_0_40px_rgba(168,85,247,0.4)] transition-shadow duration-500 flex items-center gap-3">
              {t(tx.ctaBtn)}
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </section>

      {/* ===================================== */}
      {/* FOOTER                                */}
      {/* ===================================== */}
      <footer className="border-t border-white/5 py-8 px-6 md:px-12 lg:px-20 bg-[#0A0A0A]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/20">
          <span className="font-mono font-bold text-white/40">NOVA</span>
          <div className="flex items-center gap-6">
            <span className="hover:text-white/40 cursor-pointer transition-colors">
              {t(tx.footerPrivacy)}
            </span>
            <span className="hover:text-white/40 cursor-pointer transition-colors">
              {t(tx.footerTerms)}
            </span>
            <span className="hover:text-white/40 cursor-pointer transition-colors">
              {t(tx.footerContact)}
            </span>
          </div>
          <span className="font-mono text-xs">{t(tx.footerTech)}</span>
        </div>
      </footer>
    </div>
  );
}
