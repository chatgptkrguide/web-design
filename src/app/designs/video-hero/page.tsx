"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowLeft,
  Play,
  ChevronDown,
  Zap,
  Eye,
  Layers,
  ArrowUpRight,
  Star,
  Film,
  Clapperboard,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";
import { useI18n } from "@/i18n/context";
import LanguageSwitcher from "@/components/common/LanguageSwitcher";

// --------------------------------------------------
// Animated Background - simulates full-screen video
// --------------------------------------------------
function VideoBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />

      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 120% 80% at 50% 50%, rgba(220,38,38,0.18), transparent 70%)",
          animation: "pulse-bg 8s ease-in-out infinite",
        }}
      />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse 80% 120% at 30% 60%, rgba(251,146,60,0.14), transparent 60%)",
          animation: "drift-1 12s ease-in-out infinite",
        }}
      />
      <div
        className="absolute inset-0 opacity-25"
        style={{
          background:
            "radial-gradient(ellipse 100% 100% at 70% 40%, rgba(168,85,247,0.12), transparent 60%)",
          animation: "drift-2 10s ease-in-out infinite reverse",
        }}
      />

      {/* Film grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          animation: "grain 0.5s steps(1) infinite",
        }}
      />

      {/* Light sweep */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          background:
            "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.06) 45%, transparent 50%)",
          animation: "sweep 6s ease-in-out infinite",
        }}
      />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.7)_100%)]" />

      <style jsx>{`
        @keyframes pulse-bg {
          0%, 100% { transform: scale(1); opacity: 0.4; }
          50% { transform: scale(1.15); opacity: 0.25; }
        }
        @keyframes drift-1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(5%, -3%) scale(1.1); }
          66% { transform: translate(-3%, 5%) scale(0.95); }
        }
        @keyframes drift-2 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(-4%, 3%) rotate(2deg); }
        }
        @keyframes sweep {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        @keyframes grain {
          0% { transform: translate(0, 0); }
          10% { transform: translate(-2%, -2%); }
          20% { transform: translate(2%, 2%); }
          30% { transform: translate(-1%, 3%); }
          40% { transform: translate(3%, -1%); }
          50% { transform: translate(-3%, 1%); }
          60% { transform: translate(1%, -3%); }
          70% { transform: translate(-2%, 2%); }
          80% { transform: translate(2%, -2%); }
          90% { transform: translate(-1%, 1%); }
          100% { transform: translate(0, 0); }
        }
      `}</style>
    </div>
  );
}

// --------------------------------------------------
// Fade-in section wrapper (initial opacity 0.2)
// --------------------------------------------------
function FadeSection({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0.2, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ==================================================
// Main Page Component
// ==================================================
export default function VideoHeroPage() {
  const { t } = useI18n();
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroTextY = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  // --- Data ---
  const features = [
    {
      icon: Zap,
      title: t({
        en: "Blazing Performance",
        ko: "압도적 퍼포먼스",
        zh: "极致性能",
        ja: "圧倒的パフォーマンス",
      }),
      description: t({
        en: "Experience lightning-fast speed and seamless performance that redefines what technology can achieve.",
        ko: "번개같은 속도와 끊김 없는 성능으로 기술의 한계를 재정의합니다.",
        zh: "体验闪电般的速度和无缝性能，重新定义技术的极限。",
        ja: "稲妻のような速度とシームレスなパフォーマンスで、テクノロジーの限界を再定義します。",
      }),
    },
    {
      icon: Eye,
      title: t({
        en: "Cinematic Display",
        ko: "시네마틱 디스플레이",
        zh: "影院级显示",
        ja: "シネマティックディスプレイ",
      }),
      description: t({
        en: "Every pixel tells a story. HDR clarity, true-to-life color, and an immersive visual journey.",
        ko: "모든 픽셀이 이야기를 전합니다. HDR 선명도, 실물 같은 색감, 몰입감 있는 시각 여정.",
        zh: "每一个像素都讲述一个故事。HDR清晰度、逼真色彩和沉浸式视觉体验。",
        ja: "すべてのピクセルが物語を伝えます。HDRの鮮明さ、リアルな色彩、没入型のビジュアル体験。",
      }),
    },
    {
      icon: Layers,
      title: t({
        en: "Precision Craft",
        ko: "정밀한 장인정신",
        zh: "精密工艺",
        ja: "精密なクラフト",
      }),
      description: t({
        en: "Forged from premium materials with obsessive attention to detail. Design that you can feel.",
        ko: "프리미엄 소재와 집착에 가까운 디테일로 만들어진 디자인. 느낄 수 있는 완성도.",
        zh: "采用优质材料打造，对细节有着近乎执着的追求。感受设计的温度。",
        ja: "プレミアム素材と細部へのこだわりで作り上げたデザイン。感じられる完成度。",
      }),
    },
  ];

  const products = [
    {
      name: t({ en: "Apex Pro", ko: "에이펙스 프로", zh: "Apex Pro", ja: "Apex Pro" }),
      desc: t({
        en: "Flagship performance redefined",
        ko: "플래그십 퍼포먼스의 재정의",
        zh: "旗舰性能重新定义",
        ja: "フラッグシップ性能の再定義",
      }),
      tag: "New",
      gradient: "from-red-900/50 to-orange-900/40",
    },
    {
      name: t({ en: "Nova Ultra", ko: "노바 울트라", zh: "Nova Ultra", ja: "Nova Ultra" }),
      desc: t({
        en: "Designed for creative professionals",
        ko: "크리에이티브 전문가를 위한 설계",
        zh: "为创意专业人士设计",
        ja: "クリエイティブ・プロフェッショナルのための設計",
      }),
      tag: "Popular",
      gradient: "from-violet-900/50 to-indigo-900/40",
    },
    {
      name: t({ en: "Zenith Air", ko: "제니스 에어", zh: "Zenith Air", ja: "Zenith Air" }),
      desc: t({
        en: "Ultra-light, ultra-powerful",
        ko: "초경량, 초고성능",
        zh: "超轻便，超强大",
        ja: "超軽量、超高性能",
      }),
      tag: null,
      gradient: "from-cyan-900/50 to-blue-900/40",
    },
    {
      name: t({ en: "Helix Studio", ko: "헬릭스 스튜디오", zh: "Helix Studio", ja: "Helix Studio" }),
      desc: t({
        en: "The ultimate content creation tool",
        ko: "궁극의 콘텐츠 제작 도구",
        zh: "终极内容创作工具",
        ja: "究極のコンテンツ制作ツール",
      }),
      tag: "Limited",
      gradient: "from-amber-900/50 to-yellow-900/40",
    },
    {
      name: t({ en: "Pulse Edge", ko: "펄스 엣지", zh: "Pulse Edge", ja: "Pulse Edge" }),
      desc: t({
        en: "Gaming meets cinematic excellence",
        ko: "게이밍과 시네마틱 퀄리티의 만남",
        zh: "游戏与影院级体验的融合",
        ja: "ゲーミングとシネマティックの融合",
      }),
      tag: null,
      gradient: "from-emerald-900/50 to-teal-900/40",
    },
    {
      name: t({ en: "Orion Max", ko: "오리온 맥스", zh: "Orion Max", ja: "Orion Max" }),
      desc: t({
        en: "Maximum screen, maximum impact",
        ko: "최대 화면, 최대 임팩트",
        zh: "最大屏幕，最大冲击",
        ja: "最大スクリーン、最大インパクト",
      }),
      tag: "Pro",
      gradient: "from-rose-900/50 to-pink-900/40",
    },
  ];

  const stats = [
    {
      value: "12M+",
      label: t({
        en: "Users Worldwide",
        ko: "전 세계 사용자",
        zh: "全球用户",
        ja: "世界中のユーザー",
      }),
    },
    {
      value: "140+",
      label: t({
        en: "Countries Served",
        ko: "서비스 국가",
        zh: "服务国家",
        ja: "サービス提供国",
      }),
    },
    {
      value: "4.9",
      label: t({
        en: "App Store Rating",
        ko: "앱스토어 평점",
        zh: "应用商店评分",
        ja: "App Store 評価",
      }),
    },
    {
      value: "98K+",
      label: t({
        en: "5-Star Reviews",
        ko: "5점 리뷰",
        zh: "五星评价",
        ja: "5つ星レビュー",
      }),
    },
  ];

  const footerColumns = [
    {
      title: t({ en: "Product", ko: "제품", zh: "产品", ja: "製品" }),
      links: [
        t({ en: "Overview", ko: "개요", zh: "概览", ja: "概要" }),
        t({ en: "Features", ko: "기능", zh: "功能", ja: "機能" }),
        t({ en: "Pricing", ko: "가격", zh: "定价", ja: "価格" }),
        t({ en: "Releases", ko: "릴리스", zh: "发布", ja: "リリース" }),
      ],
    },
    {
      title: t({ en: "Company", ko: "회사", zh: "公司", ja: "会社" }),
      links: [
        t({ en: "About", ko: "소개", zh: "关于", ja: "会社情報" }),
        t({ en: "Careers", ko: "채용", zh: "招聘", ja: "採用" }),
        t({ en: "Press", ko: "언론", zh: "新闻", ja: "プレス" }),
        t({ en: "Contact", ko: "연락처", zh: "联系", ja: "お問い合わせ" }),
      ],
    },
    {
      title: t({ en: "Resources", ko: "리소스", zh: "资源", ja: "リソース" }),
      links: [
        t({ en: "Documentation", ko: "문서", zh: "文档", ja: "ドキュメント" }),
        t({ en: "Support", ko: "지원", zh: "支持", ja: "サポート" }),
        t({ en: "API Reference", ko: "API 레퍼런스", zh: "API 参考", ja: "APIリファレンス" }),
        t({ en: "Community", ko: "커뮤니티", zh: "社区", ja: "コミュニティ" }),
      ],
    },
    {
      title: t({ en: "Legal", ko: "법적 고지", zh: "法律", ja: "法的情報" }),
      links: [
        t({ en: "Privacy Policy", ko: "개인정보처리방침", zh: "隐私政策", ja: "プライバシーポリシー" }),
        t({ en: "Terms of Service", ko: "이용약관", zh: "服务条款", ja: "利用規約" }),
        t({ en: "Cookie Policy", ko: "쿠키 정책", zh: "Cookie 政策", ja: "Cookieポリシー" }),
      ],
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden selection:bg-red-600/40">
      {/* ============ TOP NAV BAR ============ */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-14 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-white/60 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium">
              {t({ en: "Back", ko: "돌아가기", zh: "返回", ja: "戻る" })}
            </span>
          </Link>
          <LanguageSwitcher variant="dark" />
        </div>
      </nav>

      {/* ============ HERO SECTION ============ */}
      <section
        ref={heroRef}
        className="relative h-screen flex items-center justify-center"
      >
        <VideoBackground />

        <motion.div
          style={{ y: heroTextY, opacity: heroOpacity }}
          className="relative z-10 text-center px-6 max-w-5xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm"
          >
            <Film className="w-3.5 h-3.5 text-red-400" />
            <span className="text-xs font-medium tracking-wider uppercase text-white/60">
              {t({
                en: "New Release \u2014 2026",
                ko: "\uc2E0\uADDC \uCD9C\uc2DC \u2014 2026",
                zh: "\u5168\u65B0\u53D1\u5E03 \u2014 2026",
                ja: "\u65B0\u767B\u5834 \u2014 2026",
              })}
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.5,
              duration: 0.9,
              ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
            }}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9] mb-6"
          >
            <span className="block text-white">
              {t({
                en: "Beyond",
                ko: "\uADF8 \uB108\uBA38",
                zh: "\u8D85\u8D8A",
                ja: "\u305D\u306E\u5148\u3078",
              })}
            </span>
            <span className="block bg-gradient-to-r from-red-500 via-orange-400 to-amber-400 bg-clip-text text-transparent">
              {t({
                en: "Vision.",
                ko: "\uBE44\uC804\uC758 \uC138\uACC4.",
                zh: "\u89C6\u754C\u65E0\u9650.",
                ja: "\u30D3\u30B8\u30E7\u30F3.",
              })}
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
            className="text-lg sm:text-xl md:text-2xl text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed font-light"
          >
            {t({
              en: "Where cutting-edge technology meets cinematic artistry. Experience the future, crafted for visionaries.",
              ko: "\uCCA8\uB2E8 \uAE30\uC220\uACFC \uC2DC\uB124\uB9C8\uD2F1 \uC608\uC220\uC758 \uB9CC\uB0A8. \uBE44\uC804\uAC00\uB97C \uC704\uD574 \uB9CC\uB4E4\uC5B4\uC9C4 \uBBF8\uB798\uB97C \uACBD\uD5D8\uD558\uC138\uC694.",
              zh: "\u5C16\u7AEF\u79D1\u6280\u4E0E\u7535\u5F71\u827A\u672F\u7684\u78B0\u649E\u3002\u4E3A\u8FDC\u89C1\u8005\u6253\u9020\u7684\u672A\u6765\u4F53\u9A8C\u3002",
              ja: "\u6700\u5148\u7AEF\u30C6\u30AF\u30CE\u30ED\u30B8\u30FC\u3068\u30B7\u30CD\u30DE\u30C6\u30A3\u30C3\u30AF\u30A2\u30FC\u30C8\u306E\u878D\u5408\u3002\u30D3\u30B8\u30E7\u30CA\u30EA\u30FC\u306E\u305F\u3081\u306B\u4F5C\u3089\u308C\u305F\u672A\u6765\u3092\u4F53\u9A13\u3002",
            })}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button className="group flex items-center gap-3 px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-all duration-300 hover:scale-105">
              <Play className="w-5 h-5 fill-current" />
              <span>
                {t({
                  en: "Watch the Film",
                  ko: "\uC601\uC0C1 \uBCF4\uAE30",
                  zh: "\u89C2\u770B\u5F71\u7247",
                  ja: "\u6620\u50CF\u3092\u898B\u308B",
                })}
              </span>
            </button>
            <button className="flex items-center gap-2 px-8 py-4 border border-white/20 text-white font-medium rounded-full hover:bg-white/10 transition-all duration-300">
              <span>
                {t({
                  en: "Explore More",
                  ko: "\uB354 \uC54C\uC544\uBCF4\uAE30",
                  zh: "\u63A2\u7D22\u66F4\u591A",
                  ja: "\u3082\u3063\u3068\u898B\u308B",
                })}
              </span>
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
            {t({ en: "Scroll", ko: "\uC2A4\uD06C\uB864", zh: "\u6EDA\u52A8", ja: "\u30B9\u30AF\u30ED\u30FC\u30EB" })}
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-5 h-5 text-white/30" />
          </motion.div>
        </motion.div>
      </section>

      {/* ============ FEATURES SECTION ============ */}
      <section className="relative bg-zinc-900 py-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <FadeSection className="text-center mb-16">
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-white/30 mb-4 block">
              {t({
                en: "Why Choose Us",
                ko: "\uC120\uD0DD\uC758 \uC774\uC720",
                zh: "\u4E3A\u4F55\u9009\u62E9\u6211\u4EEC",
                ja: "\u9078\u3070\u308C\u308B\u7406\u7531",
              })}
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 text-white">
              {t({
                en: "Engineered for Excellence",
                ko: "\uD0C1\uC6D4\uD568\uC744 \uC704\uD55C \uC124\uACC4",
                zh: "\u4E3A\u5353\u8D8A\u800C\u751F",
                ja: "\u5353\u8D8A\u306E\u305F\u3081\u306B\u8A2D\u8A08",
              })}
            </h2>
            <p className="text-lg text-white/40 max-w-xl mx-auto">
              {t({
                en: "Three pillars that define our commitment to pushing boundaries and delivering the extraordinary.",
                ko: "\uACBD\uACC4\uB97C \uB113\uD788\uACE0 \uBE44\uBC94\uD568\uC744 \uC804\uD558\uB294 \uC138 \uAC00\uC9C0 \uD575\uC2EC \uAC00\uCE58.",
                zh: "\u4E09\u5927\u652F\u67F1\u5B9A\u4E49\u6211\u4EEC\u7A81\u7834\u8FB9\u754C\u3001\u4EA4\u4ED8\u5353\u8D8A\u7684\u627F\u8BFA\u3002",
                ja: "\u5883\u754C\u3092\u62BC\u3057\u5E83\u3052\u3001\u975E\u51E1\u3092\u5C4A\u3051\u308B3\u3064\u306E\u67F1\u3002",
              })}
            </p>
          </FadeSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <FadeSection key={index} delay={index * 0.12}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="group relative p-8 rounded-2xl border border-zinc-700 bg-zinc-800 hover:border-zinc-600 hover:bg-zinc-800/80 transition-all duration-500 h-full"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-red-600/20 to-orange-600/20 flex items-center justify-center mb-6 group-hover:from-red-600/30 group-hover:to-orange-600/30 transition-all duration-500">
                    <feature.icon className="w-6 h-6 text-red-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-white/40 leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </motion.div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PRODUCT GRID ============ */}
      <section className="relative bg-black py-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <FadeSection className="text-center mb-16">
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-white/30 mb-4 block">
              {t({
                en: "Collection",
                ko: "\uCEEC\uB809\uC158",
                zh: "\u4EA7\u54C1\u7CFB\u5217",
                ja: "\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3",
              })}
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 text-white">
              {t({
                en: "The Lineup",
                ko: "\uC81C\uD488 \uB77C\uC778\uC5C5",
                zh: "\u4EA7\u54C1\u9635\u5BB9",
                ja: "\u30E9\u30A4\u30F3\u30CA\u30C3\u30D7",
              })}
            </h2>
            <p className="text-lg text-white/40 max-w-xl mx-auto">
              {t({
                en: "Each device crafted with precision for those who demand excellence in every detail.",
                ko: "\uBAA8\uB4E0 \uB514\uD14C\uC77C\uC5D0\uC11C \uC644\uBCBD\uC744 \uCD94\uAD6C\uD558\uB294 \uC774\uB4E4\uC744 \uC704\uD574 \uC815\uBC00\uD558\uAC8C \uC81C\uC791\uB418\uC5C8\uC2B5\uB2C8\uB2E4.",
                zh: "\u6BCF\u53F0\u8BBE\u5907\u90FD\u4E3A\u8FFD\u6C42\u6781\u81F4\u7EC6\u8282\u7684\u4EBA\u7CBE\u5FC3\u6253\u9020\u3002",
                ja: "\u3042\u3089\u3086\u308B\u30C7\u30A3\u30C6\u30FC\u30EB\u306B\u5B8C\u74A7\u3092\u6C42\u3081\u308B\u4EBA\u3005\u306E\u305F\u3081\u306B\u7CBE\u5BC6\u306B\u4F5C\u3089\u308C\u307E\u3057\u305F\u3002",
              })}
            </p>
          </FadeSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <FadeSection key={index} delay={index * 0.08}>
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="group relative rounded-2xl overflow-hidden cursor-pointer border border-white/5 hover:border-white/15 transition-colors duration-500"
                >
                  {/* Product image placeholder */}
                  <div
                    className={`aspect-[4/5] bg-gradient-to-br ${product.gradient} relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Clapperboard className="w-16 h-16 text-white/10 group-hover:text-white/20 group-hover:scale-110 transition-all duration-500" />
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />

                    {product.tag && (
                      <div className="absolute top-4 left-4 px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-white/10 backdrop-blur-sm rounded-full border border-white/10">
                        {product.tag}
                      </div>
                    )}
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
                    <p className="text-sm text-white/30">{product.desc}</p>
                  </div>
                </motion.div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FULL-WIDTH QUOTE BANNER ============ */}
      <section className="relative py-28 overflow-hidden bg-zinc-950">
        {/* Decorative gradient blobs */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-red-950/40 via-transparent to-orange-950/30" />
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(circle at 30% 50%, rgba(220,38,38,0.3), transparent 50%), radial-gradient(circle at 70% 50%, rgba(251,146,60,0.2), transparent 50%)",
            }}
          />
        </div>

        {/* Horizontal decorative lines */}
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
          <FadeSection>
            <div className="mb-8 flex justify-center">
              <div className="w-px h-16 bg-gradient-to-b from-transparent via-red-500/50 to-transparent" />
            </div>
            <blockquote className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-8">
              <span className="text-white/90">&ldquo;</span>
              <span className="bg-gradient-to-r from-red-400 via-orange-400 to-amber-400 bg-clip-text text-transparent">
                {t({
                  en: "Technology should feel like magic. We don't just build products \u2014 we craft experiences that move people.",
                  ko: "\uAE30\uC220\uC740 \uB9C8\uBC95\uCC98\uB7FC \uB290\uAEF4\uC838\uC57C \uD569\uB2C8\uB2E4. \uC6B0\uB9AC\uB294 \uC81C\uD488\uC744 \uB9CC\uB4DC\uB294 \uAC83\uC774 \uC544\uB2C8\uB77C \uC0AC\uB78C\uC744 \uAC10\uB3D9\uC2DC\uD0A4\uB294 \uACBD\uD5D8\uC744 \uCC3D\uC870\uD569\uB2C8\uB2E4.",
                  zh: "\u6280\u672F\u5E94\u8BE5\u50CF\u9B54\u6CD5\u4E00\u6837\u3002\u6211\u4EEC\u4E0D\u53EA\u662F\u5236\u9020\u4EA7\u54C1\uFF0C\u6211\u4EEC\u521B\u9020\u6253\u52A8\u4EBA\u5FC3\u7684\u4F53\u9A8C\u3002",
                  ja: "\u30C6\u30AF\u30CE\u30ED\u30B8\u30FC\u306F\u9B54\u6CD5\u306E\u3088\u3046\u306B\u611F\u3058\u308B\u3079\u304D\u3067\u3059\u3002\u88FD\u54C1\u3092\u4F5C\u308B\u306E\u3067\u306F\u306A\u304F\u3001\u4EBA\u3005\u3092\u611F\u52D5\u3055\u305B\u308B\u4F53\u9A13\u3092\u5275\u9020\u3057\u307E\u3059\u3002",
                })}
              </span>
              <span className="text-white/90">&rdquo;</span>
            </blockquote>
            <p className="text-sm text-white/30 uppercase tracking-[0.2em]">
              {t({
                en: "\u2014 Creative Director, Vision Labs",
                ko: "\u2014 \uD06C\uB9AC\uC5D0\uC774\uD2F0\uBE0C \uB514\uB809\uD130, Vision Labs",
                zh: "\u2014 \u521B\u610F\u603B\u76D1\uFF0CVision Labs",
                ja: "\u2014 \u30AF\u30EA\u30A8\u30A4\u30C6\u30A3\u30D6\u30C7\u30A3\u30EC\u30AF\u30BF\u30FC\u3001Vision Labs",
              })}
            </p>
          </FadeSection>
        </div>
      </section>

      {/* ============ STATS ROW ============ */}
      <section className="py-20 bg-black border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <FadeSection
                key={index}
                delay={index * 0.1}
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-white/30">{stat.label}</div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="relative bg-zinc-950 py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Footer columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
            {footerColumns.map((col, colIndex) => (
              <div key={colIndex}>
                <h4 className="text-sm font-semibold text-white/80 mb-4 uppercase tracking-wider">
                  {col.title}
                </h4>
                <ul className="space-y-3">
                  {col.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
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
                Vision
              </span>
              <span className="text-xs text-white/20">
                &copy; {new Date().getFullYear()}{" "}
                {t({
                  en: "Vision Labs. All rights reserved.",
                  ko: "Vision Labs. \uBAA8\uB4E0 \uAD8C\uB9AC \uBCF4\uC720.",
                  zh: "Vision Labs. \u4FDD\u7559\u6240\u6709\u6743\u5229\u3002",
                  ja: "Vision Labs. All rights reserved.",
                })}
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
