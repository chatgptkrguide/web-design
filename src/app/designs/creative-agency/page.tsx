"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import {
  ArrowUpRight,
  Instagram,
  Twitter,
  Linkedin,
  Github,
  Layers,
  Code2,
  Palette,
  Megaphone,
} from "lucide-react";
import { useI18n } from "@/i18n/context";
import LanguageSwitcher from "@/components/common/LanguageSwitcher";

// --- Custom Cursor ---
function CustomCursor() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [cursorHover, setCursorHover] = useState(false);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
      setHidden(false);
    };
    const onEnter = () => setCursorHover(true);
    const onLeave = () => setCursorHover(false);
    const onWindowLeave = () => setHidden(true);

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onWindowLeave);

    const hoverables = document.querySelectorAll("a, button, [data-hover]");
    hoverables.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onWindowLeave);
      hoverables.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  const size = cursorHover ? 64 : 40;

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border-2 border-[#84CC16] mix-blend-difference transition-all duration-150 ease-out"
      style={{
        width: size,
        height: size,
        transform: `translate(${cursorPos.x - size / 2}px, ${cursorPos.y - size / 2}px) scale(${cursorHover ? 1.3 : 1})`,
        opacity: hidden ? 0 : 1,
      }}
    />
  );
}

// --- Letter Stagger Animation ---
function StaggerText({ text, className = "" }: { text: string; className?: string }) {
  return (
    <motion.span className={`inline-block ${className}`}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: i * 0.03,
            ease: [0.215, 0.61, 0.355, 1],
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
}

// --- Section Reveal ---
function RevealSection({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0.15, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.215, 0.61, 0.355, 1] }}
    >
      {children}
    </motion.div>
  );
}

// --- Project Data ---
const projects = [
  { num: "01", titleKey: "nebula", category: "Branding / Web Design", color: "#2563EB" },
  { num: "02", titleKey: "prism", category: "E-Commerce / UX", color: "#84CC16" },
  { num: "03", titleKey: "vertex", category: "Identity / Motion", color: "#7C3AED" },
  { num: "04", titleKey: "aurora", category: "Fintech / Web App", color: "#F59E0B" },
];

const projectTitles: Record<string, Record<string, string>> = {
  nebula: { en: "Nebula Studio", ko: "네뷸라 스튜디오", zh: "星云工作室", ja: "ネビュラスタジオ" },
  prism: { en: "Prism Digital", ko: "프리즘 디지털", zh: "棱镜数字", ja: "プリズムデジタル" },
  vertex: { en: "Vertex Labs", ko: "버텍스 랩스", zh: "顶点实验室", ja: "バーテックスラボ" },
  aurora: { en: "Aurora Finance", ko: "오로라 파이낸스", zh: "极光金融", ja: "オーロラファイナンス" },
};

const serviceData = [
  { icon: Layers, numLabel: "01" },
  { icon: Code2, numLabel: "02" },
  { icon: Palette, numLabel: "03" },
  { icon: Megaphone, numLabel: "04" },
];

const teamMembers = [
  { name: "Alex Rivera", gradient: "from-[#84CC16] to-[#2563EB]" },
  { name: "Sam Chen", gradient: "from-[#7C3AED] to-[#84CC16]" },
  { name: "Jordan Kim", gradient: "from-[#F59E0B] to-[#EF4444]" },
  { name: "Taylor Nguyen", gradient: "from-[#2563EB] to-[#7C3AED]" },
];

// --- Main Page ---
export default function CreativeAgencyPage() {
  const { t } = useI18n();

  return (
    <div className="bg-[#0A0A0A] text-white min-h-screen cursor-none overflow-x-hidden">
      <CustomCursor />

      {/* ========== TOP BAR ========== */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 mix-blend-difference">
        <Link
          href="/designs"
          className="text-sm font-mono tracking-wider text-white hover:text-[#84CC16] transition-colors"
          data-hover
        >
          {t({ en: "← Back", ko: "← 뒤로", zh: "← 返回", ja: "← 戻る" })}
        </Link>
        <LanguageSwitcher variant="dark" />
      </nav>

      {/* ========== HERO ========== */}
      <section className="relative h-screen flex flex-col justify-center px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(132,204,22,0.05),transparent_70%)]" />
        <div className="relative z-10">
          <motion.p
            className="text-sm font-mono tracking-[0.4em] uppercase text-[#84CC16] mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {t({
              en: "Digital Creative Studio",
              ko: "디지털 크리에이티브 스튜디오",
              zh: "数字创意工作室",
              ja: "デジタルクリエイティブスタジオ",
            })}
          </motion.p>
          <h1 className="font-bold leading-[0.9] tracking-tighter">
            <span className="block text-[7vw]">
              <StaggerText
                text={t({
                  en: "WE CREATE",
                  ko: "우리는 만든다",
                  zh: "我们创造",
                  ja: "私たちは創る",
                })}
              />
            </span>
            <span className="block text-[7vw] text-transparent [-webkit-text-stroke:2px_white]">
              <StaggerText
                text={t({
                  en: "DIGITAL",
                  ko: "디지털",
                  zh: "数字化",
                  ja: "デジタル",
                })}
              />
            </span>
            <span className="block text-[7vw]">
              <StaggerText
                text={t({
                  en: "EXPERIENCES",
                  ko: "경험을",
                  zh: "体验",
                  ja: "体験を",
                })}
              />
            </span>
          </h1>
          <motion.p
            className="mt-8 text-lg md:text-xl text-white/50 max-w-lg font-light leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            {t({
              en: "A bold creative agency building brands and digital products that break conventions.",
              ko: "관습을 깨는 브랜드와 디지털 프로덕트를 만드는 대담한 크리에이티브 에이전시.",
              zh: "一家大胆的创意机构，打造打破常规的品牌和数字产品。",
              ja: "常識を打ち破るブランドとデジタルプロダクトを生み出す大胆なクリエイティブエージェンシー。",
            })}
          </motion.p>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <span className="text-xs font-mono tracking-widest text-white/30 uppercase">
            {t({ en: "Scroll", ko: "스크롤", zh: "滚动", ja: "スクロール" })}
          </span>
          <motion.div
            className="w-[1px] h-8 bg-white/30"
            animate={{ scaleY: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "top" }}
          />
        </motion.div>
      </section>

      {/* ========== MARQUEE TICKER ========== */}
      <section className="py-4 bg-[#84CC16] overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {Array.from({ length: 6 }).map((_, i) => (
            <span
              key={i}
              className="text-[4vw] md:text-[2.5vw] font-bold tracking-tight mx-4 flex-shrink-0 text-[#0A0A0A]"
            >
              {t({
                en: "DESIGN — DEVELOP — DELIVER —",
                ko: "디자인 — 개발 — 전달 —",
                zh: "设计 — 开发 — 交付 —",
                ja: "デザイン — 開発 — 提供 —",
              })}{" "}
            </span>
          ))}
        </div>
        <style jsx>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 14s linear infinite;
          }
        `}</style>
      </section>

      {/* ========== SELECTED WORKS ========== */}
      <section className="py-20 md:py-28 px-6 md:px-12">
        <RevealSection>
          <p className="text-sm font-mono tracking-[0.4em] uppercase text-[#84CC16] mb-3">
            {t({
              en: "Selected Works",
              ko: "선정 작업",
              zh: "精选作品",
              ja: "厳選作品",
            })}
          </p>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-14">
            {t({
              en: "Featured Projects",
              ko: "주요 프로젝트",
              zh: "特色项目",
              ja: "注目プロジェクト",
            })}
          </h2>
        </RevealSection>

        <div>
          {projects.map((project, idx) => (
            <RevealSection key={idx}>
              <motion.div
                className="group border-t border-white/10 py-8 md:py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 cursor-pointer relative overflow-hidden"
                data-hover
                whileHover="hover"
              >
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${project.color}20, transparent 60%)`,
                  }}
                />

                <div className="flex items-center gap-6 md:gap-12 relative z-10">
                  <span className="text-3xl md:text-5xl font-mono text-white/20 font-bold">
                    {project.num}
                  </span>
                  <motion.h3
                    className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight"
                    variants={{ hover: { x: 16 } }}
                    transition={{ duration: 0.4, ease: [0.215, 0.61, 0.355, 1] }}
                  >
                    {t(projectTitles[project.titleKey] as Record<string, string>)}
                  </motion.h3>
                </div>

                <div className="flex items-center gap-4 md:gap-8 relative z-10 ml-auto">
                  <span className="text-sm text-white/40 font-mono">{project.category}</span>
                  <motion.div
                    className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center"
                    variants={{ hover: { scale: 1.2, borderColor: "#84CC16" } }}
                    transition={{ duration: 0.3 }}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </motion.div>
                </div>
              </motion.div>
            </RevealSection>
          ))}
          <div className="border-t border-white/10" />
        </div>
      </section>

      {/* ========== ABOUT ========== */}
      <section className="py-20 md:py-28 px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <RevealSection>
            <h2 className="text-6xl md:text-8xl lg:text-[8vw] font-bold tracking-tighter leading-[0.9]">
              {t({ en: "About", ko: "소개", zh: "关于", ja: "私たちに" })}
              <br />
              <span className="text-transparent [-webkit-text-stroke:2px_white]">
                {t({ en: "Us", ko: "우리", zh: "我们", ja: "ついて" })}
              </span>
            </h2>
          </RevealSection>

          <RevealSection className="flex flex-col justify-center">
            <p className="text-xl md:text-2xl text-white/60 leading-relaxed mb-6">
              {t({
                en: "We are a team of designers, developers, and strategists who believe in the power of bold ideas. Since 2012, we have been crafting digital experiences that challenge the status quo and redefine what is possible on the web.",
                ko: "우리는 대담한 아이디어의 힘을 믿는 디자이너, 개발자, 전략가 팀입니다. 2012년부터 현상 유지에 도전하고 웹에서 가능한 것을 재정의하는 디지털 경험을 만들어 왔습니다.",
                zh: "我们是一支由设计师、开发者和策略师组成的团队，相信大胆创意的力量。自2012年以来，我们一直在打造挑战现状、重新定义网络可能性的数字体验。",
                ja: "私たちは大胆なアイデアの力を信じるデザイナー、開発者、ストラテジストのチームです。2012年以来、現状に挑戦し、ウェブの可能性を再定義するデジタル体験を創り続けています。",
              })}
            </p>
            <p className="text-lg text-white/40 leading-relaxed">
              {t({
                en: "Every pixel matters, every interaction tells a story, and every project is an opportunity to create something extraordinary. We do not follow trends — we set them.",
                ko: "모든 픽셀이 중요하고, 모든 인터랙션이 이야기를 전하며, 모든 프로젝트는 특별한 것을 만들 기회입니다. 트렌드를 따르지 않습니다 — 만들어갑니다.",
                zh: "每个像素都很重要，每次交互都在讲述故事，每个项目都是创造非凡的机会。我们不追随潮流——我们引领潮流。",
                ja: "すべてのピクセルが重要で、すべてのインタラクションが物語を伝え、すべてのプロジェクトが特別なものを創る機会です。トレンドに従いません——トレンドを作ります。",
              })}
            </p>
          </RevealSection>
        </div>
      </section>

      {/* ========== SERVICES ========== */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-white/[0.02]">
        <RevealSection>
          <p className="text-sm font-mono tracking-[0.4em] uppercase text-[#84CC16] mb-3">
            {t({ en: "What We Do", ko: "서비스", zh: "我们的服务", ja: "サービス" })}
          </p>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-14">
            {t({ en: "Services", ko: "서비스 영역", zh: "服务领域", ja: "サービス領域" })}
          </h2>
        </RevealSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceData.map((service, idx) => {
            const Icon = service.icon;
            const names = [
              { en: "Brand Strategy", ko: "브랜드 전략", zh: "品牌策略", ja: "ブランド戦略" },
              { en: "Web Development", ko: "웹 개발", zh: "网站开发", ja: "ウェブ開発" },
              { en: "UI/UX Design", ko: "UI/UX 디자인", zh: "UI/UX设计", ja: "UI/UXデザイン" },
              { en: "Digital Marketing", ko: "디지털 마케팅", zh: "数字营销", ja: "デジタルマーケティング" },
            ];
            const descs = [
              {
                en: "Crafting identities and strategies that resonate with audiences and drive growth.",
                ko: "타깃 오디언스와 공감하고 성장을 이끄는 아이덴티티와 전략을 만듭니다.",
                zh: "打造与受众产生共鸣并推动增长的品牌标识和策略。",
                ja: "オーディエンスに響き、成長を促進するアイデンティティと戦略を構築します。",
              },
              {
                en: "Building high-performance websites and applications with cutting-edge technology.",
                ko: "최첨단 기술로 고성능 웹사이트와 애플리케이션을 구축합니다.",
                zh: "利用尖端技术构建高性能网站和应用程序。",
                ja: "最先端技術で高性能なウェブサイトとアプリケーションを構築します。",
              },
              {
                en: "Designing intuitive interfaces and seamless user experiences people love.",
                ko: "사람들이 사랑하는 직관적 인터페이스와 원활한 사용자 경험을 디자인합니다.",
                zh: "设计直观的界面和人们喜爱的无缝用户体验。",
                ja: "人々が愛する直感的なインターフェースとシームレスなUXをデザインします。",
              },
              {
                en: "Amplifying reach and engagement through data-driven digital campaigns.",
                ko: "데이터 기반 디지털 캠페인으로 도달 범위와 참여를 확대합니다.",
                zh: "通过数据驱动的数字营销活动扩大影响力和互动。",
                ja: "データドリブンなデジタルキャンペーンでリーチとエンゲージメントを拡大します。",
              },
            ];
            return (
              <RevealSection key={idx}>
                <div className="border-t border-white/10 pt-8">
                  <div className="flex items-center justify-between mb-6">
                    <Icon className="w-8 h-8 text-[#84CC16]" />
                    <span className="text-4xl font-bold text-white/10 font-mono">
                      {service.numLabel}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{t(names[idx])}</h3>
                  <p className="text-sm text-white/40 leading-relaxed">{t(descs[idx])}</p>
                </div>
              </RevealSection>
            );
          })}
        </div>
      </section>

      {/* ========== TEAM ========== */}
      <section className="py-20 md:py-28 px-6 md:px-12">
        <RevealSection>
          <p className="text-sm font-mono tracking-[0.4em] uppercase text-[#84CC16] mb-3">
            {t({ en: "The Team", ko: "팀원", zh: "团队", ja: "チーム" })}
          </p>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-14">
            {t({
              en: "Meet the Creatives",
              ko: "크리에이터를 만나보세요",
              zh: "认识创意团队",
              ja: "クリエイターの紹介",
            })}
          </h2>
        </RevealSection>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, idx) => {
            const roles = [
              { en: "Creative Director", ko: "크리에이티브 디렉터", zh: "创意总监", ja: "クリエイティブディレクター" },
              { en: "Lead Developer", ko: "리드 개발자", zh: "首席开发者", ja: "リードデベロッパー" },
              { en: "Design Lead", ko: "디자인 리드", zh: "设计主管", ja: "デザインリード" },
              { en: "Motion Designer", ko: "모션 디자이너", zh: "动效设计师", ja: "モーションデザイナー" },
            ];
            return (
              <RevealSection key={idx}>
                <div className="flex flex-col items-center text-center">
                  <div
                    className={`w-20 h-20 rounded-full bg-gradient-to-br ${member.gradient} mb-4 flex items-center justify-center`}
                  >
                    <span className="text-lg font-bold text-white/80">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                  <p className="text-sm text-white/40 font-mono">{t(roles[idx])}</p>
                </div>
              </RevealSection>
            );
          })}
        </div>
      </section>

      {/* ========== CONTACT CTA ========== */}
      <section className="py-20 md:py-28 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(132,204,22,0.06),transparent_70%)]" />

        <RevealSection className="relative z-10">
          <p className="text-sm font-mono tracking-[0.4em] uppercase text-[#84CC16] mb-6">
            {t({
              en: "Start a Project",
              ko: "프로젝트 시작",
              zh: "开始项目",
              ja: "プロジェクト開始",
            })}
          </p>
          <h2 className="text-[12vw] md:text-[10vw] font-bold tracking-tighter leading-[0.85] mb-12">
            {t({ en: "Let's", ko: "이야기", zh: "一起", ja: "話し" })}
            <br />
            <span className="text-transparent [-webkit-text-stroke:2px_white]">
              {t({ en: "Talk", ko: "해요", zh: "聊聊", ja: "ましょう" })}
            </span>
          </h2>

          <div className="flex flex-col md:flex-row gap-10 md:gap-20">
            <div>
              <p className="text-sm font-mono text-white/30 uppercase tracking-wider mb-2">
                {t({ en: "Email", ko: "이메일", zh: "邮箱", ja: "メール" })}
              </p>
              <motion.a
                href="mailto:hello@agency.com"
                className="text-2xl md:text-3xl font-bold relative inline-block"
                data-hover
                whileHover={{ x: 8 }}
              >
                hello@agency.com
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#84CC16] transition-all duration-300 hover:w-full" />
              </motion.a>
            </div>

            <div>
              <p className="text-sm font-mono text-white/30 uppercase tracking-wider mb-2">
                {t({ en: "Phone", ko: "전화", zh: "电话", ja: "電話" })}
              </p>
              <motion.a
                href="tel:+1234567890"
                className="text-2xl md:text-3xl font-bold relative inline-block"
                data-hover
                whileHover={{ x: 8 }}
              >
                +1 (234) 567-890
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#84CC16] transition-all duration-300 hover:w-full" />
              </motion.a>
            </div>
          </div>

          <div className="mt-10 flex gap-6">
            {[
              { href: "#", label: "Instagram", icon: Instagram },
              { href: "#", label: "Twitter", icon: Twitter },
              { href: "#", label: "LinkedIn", icon: Linkedin },
            ].map(({ href, label, icon: Icon }) => (
              <motion.a
                key={label}
                href={href}
                aria-label={label}
                className="text-white/40 hover:text-[#84CC16] transition-colors"
                data-hover
                whileHover={{ y: -3 }}
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </RevealSection>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="border-t border-white/10 px-6 md:px-12 py-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p className="text-sm font-mono text-white/30">
            &copy; 2026 Creative Agency.{" "}
            {t({
              en: "All rights reserved.",
              ko: "모든 권리 보유.",
              zh: "保留所有权利。",
              ja: "全著作権所有。",
            })}
          </p>

          <div className="flex items-center gap-5">
            {[
              { icon: Instagram, label: "Instagram" },
              { icon: Twitter, label: "Twitter" },
              { icon: Linkedin, label: "LinkedIn" },
              { icon: Github, label: "GitHub" },
            ].map(({ icon: Icon, label }) => (
              <motion.a
                key={label}
                href="#"
                aria-label={label}
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-[#84CC16] hover:border-[#84CC16] transition-colors duration-300"
                data-hover
                whileHover={{ scale: 1.15 }}
              >
                <Icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
