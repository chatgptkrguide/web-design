"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  MapPin,
  Phone,
  Mail,
  Triangle,
  Square,
  Hexagon,
  Circle,
} from "lucide-react";
import { useI18n } from "@/i18n/context";
import LanguageSwitcher from "@/components/common/LanguageSwitcher";

// --- Reveal on Scroll ---
function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0.3, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

// --- Structural Divider ---
function GridLine() {
  return (
    <div className="w-full h-px bg-[#1A1A1A]/10" />
  );
}

// --- Project Data ---
const projects = [
  {
    nameKey: "project1",
    location: { en: "Tokyo, Japan", ko: "도쿄, 일본", zh: "东京, 日本", ja: "東京, 日本" },
    year: "2024",
    category: { en: "Cultural", ko: "문화", zh: "文化", ja: "文化" },
    shade: "bg-gray-200",
  },
  {
    nameKey: "project2",
    location: { en: "Seoul, South Korea", ko: "서울, 대한민국", zh: "首尔, 韩国", ja: "ソウル, 韓国" },
    year: "2023",
    category: { en: "Residential", ko: "주거", zh: "住宅", ja: "住宅" },
    shade: "bg-gray-300",
  },
  {
    nameKey: "project3",
    location: { en: "Berlin, Germany", ko: "베를린, 독일", zh: "柏林, 德国", ja: "ベルリン, ドイツ" },
    year: "2023",
    category: { en: "Commercial", ko: "상업", zh: "商业", ja: "商業" },
    shade: "bg-gray-250",
  },
  {
    nameKey: "project4",
    location: { en: "Dubai, UAE", ko: "두바이, UAE", zh: "迪拜, 阿联酋", ja: "ドバイ, UAE" },
    year: "2022",
    category: { en: "Cultural", ko: "문화", zh: "文化", ja: "文化" },
    shade: "bg-gray-200",
  },
  {
    nameKey: "project5",
    location: { en: "London, UK", ko: "런던, 영국", zh: "伦敦, 英国", ja: "ロンドン, 英国" },
    year: "2022",
    category: { en: "Commercial", ko: "상업", zh: "商业", ja: "商業" },
    shade: "bg-gray-300",
  },
  {
    nameKey: "project6",
    location: { en: "Shanghai, China", ko: "상하이, 중국", zh: "上海, 中国", ja: "上海, 中国" },
    year: "2021",
    category: { en: "Residential", ko: "주거", zh: "住宅", ja: "住宅" },
    shade: "bg-gray-200",
  },
];

const projectNames: Record<string, Record<string, string>> = {
  project1: { en: "Horizon Pavilion", ko: "호라이즌 파빌리온", zh: "地平线展馆", ja: "ホライゾン・パビリオン" },
  project2: { en: "Monolith Residence", ko: "모놀리스 레지던스", zh: "巨石住宅", ja: "モノリス・レジデンス" },
  project3: { en: "Vertex Tower", ko: "버텍스 타워", zh: "顶点大厦", ja: "バーテックス・タワー" },
  project4: { en: "Aeolian Museum", ko: "에올리안 뮤지엄", zh: "风神博物馆", ja: "エオリアン・ミュージアム" },
  project5: { en: "Cantilever House", ko: "캔틸레버 하우스", zh: "悬臂大楼", ja: "キャンティレバー・ハウス" },
  project6: { en: "Tessera Complex", ko: "테세라 컴플렉스", zh: "镶嵌综合体", ja: "テッセラ・コンプレックス" },
};

// --- Awards Data ---
const awards = [
  {
    year: "2024",
    name: { en: "Pritzker Architecture Prize", ko: "프리츠커 건축상", zh: "普利兹克建筑奖", ja: "プリツカー建築賞" },
    project: { en: "Horizon Pavilion", ko: "호라이즌 파빌리온", zh: "地平线展馆", ja: "ホライゾン・パビリオン" },
  },
  {
    year: "2023",
    name: { en: "RIBA International Prize", ko: "RIBA 국제상", zh: "RIBA国际奖", ja: "RIBA国際賞" },
    project: { en: "Monolith Residence", ko: "모놀리스 레지던스", zh: "巨石住宅", ja: "モノリス・レジデンス" },
  },
  {
    year: "2022",
    name: { en: "AIA Gold Medal", ko: "AIA 금메달", zh: "AIA金奖", ja: "AIAゴールドメダル" },
    project: { en: "Vertex Tower", ko: "버텍스 타워", zh: "顶点大厦", ja: "バーテックス・タワー" },
  },
  {
    year: "2021",
    name: { en: "World Architecture Festival Award", ko: "세계건축페스티벌상", zh: "世界建筑节大奖", ja: "世界建築フェスティバル賞" },
    project: { en: "Aeolian Museum", ko: "에올리안 뮤지엄", zh: "风神博物馆", ja: "エオリアン・ミュージアム" },
  },
  {
    year: "2020",
    name: { en: "European Prize for Architecture", ko: "유럽건축상", zh: "欧洲建筑奖", ja: "ヨーロッパ建築賞" },
    project: { en: "Tessera Complex", ko: "테세라 컴플렉스", zh: "镶嵌综合体", ja: "テッセラ・コンプレックス" },
  },
];

// --- Team Data ---
const team = [
  {
    name: "Haruki Murakami",
    title: { en: "Founding Principal", ko: "창립 대표", zh: "创始合伙人", ja: "創設パートナー" },
  },
  {
    name: "Elena Voss",
    title: { en: "Design Principal", ko: "디자인 대표", zh: "设计合伙人", ja: "デザインパートナー" },
  },
  {
    name: "Liam Chen",
    title: { en: "Managing Principal", ko: "경영 대표", zh: "管理合伙人", ja: "マネージングパートナー" },
  },
];

// --- Services Data ---
const services = [
  {
    icon: Triangle,
    name: { en: "Architecture", ko: "건축 설계", zh: "建筑设计", ja: "建築設計" },
    desc: {
      en: "Designing visionary structures that redefine urban landscapes and push the boundaries of spatial innovation.",
      ko: "도시 경관을 재정의하고 공간 혁신의 한계를 넓히는 비전 있는 건축물을 설계합니다.",
      zh: "设计富有远见的建筑，重新定义城市景观，突破空间创新的边界。",
      ja: "都市景観を再定義し、空間イノベーションの限界を押し広げるビジョナリーな建築物を設計します。",
    },
  },
  {
    icon: Square,
    name: { en: "Interior Design", ko: "인테리어 디자인", zh: "室内设计", ja: "インテリアデザイン" },
    desc: {
      en: "Crafting interior environments where material, light, and proportion create profound spatial experiences.",
      ko: "재료, 빛, 비율이 깊은 공간 경험을 만들어내는 인테리어 환경을 제작합니다.",
      zh: "打造材料、光线与比例交融的室内环境，创造深刻的空间体验。",
      ja: "素材、光、プロポーションが深い空間体験を生み出すインテリア環境を創造します。",
    },
  },
  {
    icon: Hexagon,
    name: { en: "Urban Planning", ko: "도시 계획", zh: "城市规划", ja: "都市計画" },
    desc: {
      en: "Master planning communities and districts that integrate nature, infrastructure, and human-centered design.",
      ko: "자연, 인프라, 인간 중심 디자인을 통합하는 커뮤니티와 지구 마스터 플래닝을 수행합니다.",
      zh: "规划社区与区域，融合自然、基础设施与以人为本的设计理念。",
      ja: "自然、インフラ、人間中心のデザインを統合するコミュニティと地区のマスタープランを策定します。",
    },
  },
  {
    icon: Circle,
    name: { en: "Sustainability", ko: "지속가능성", zh: "可持续性", ja: "サステナビリティ" },
    desc: {
      en: "Integrating ecological principles and advanced technologies to achieve net-zero and regenerative design.",
      ko: "생태 원칙과 첨단 기술을 통합하여 넷제로 및 재생 디자인을 달성합니다.",
      zh: "整合生态原则与先进技术，实现净零排放与再生设计。",
      ja: "生態学的原則と先進技術を統合し、ネットゼロおよび再生デザインを実現します。",
    },
  },
];

// --- Offices Data ---
const offices = [
  {
    city: { en: "Tokyo", ko: "도쿄", zh: "东京", ja: "東京" },
    address: {
      en: "3-14-2 Roppongi, Minato-ku\nTokyo 106-0032, Japan",
      ko: "일본 도쿄 미나토구\n롯폰기 3-14-2, 106-0032",
      zh: "日本东京都港区\n六本木3-14-2, 106-0032",
      ja: "東京都港区六本木\n3-14-2, 106-0032",
    },
    phone: "+81 3 1234 5678",
  },
  {
    city: { en: "London", ko: "런던", zh: "伦敦", ja: "ロンドン" },
    address: {
      en: "42 Clerkenwell Road\nLondon EC1M 5PS, UK",
      ko: "영국 런던\n클러큰웰 로드 42, EC1M 5PS",
      zh: "英国伦敦\n克勒肯韦尔路42号, EC1M 5PS",
      ja: "イギリス ロンドン\nクラーケンウェル・ロード42, EC1M 5PS",
    },
    phone: "+44 20 7946 0123",
  },
  {
    city: { en: "Seoul", ko: "서울", zh: "首尔", ja: "ソウル" },
    address: {
      en: "27 Teheran-ro 87-gil, Gangnam-gu\nSeoul 06164, South Korea",
      ko: "서울 강남구\n테헤란로87길 27, 06164",
      zh: "韩国首尔江南区\n德黑兰路87街27号, 06164",
      ja: "韓国ソウル市江南区\nテヘラン路87キル27, 06164",
    },
    phone: "+82 2 555 0199",
  },
];

// --- Main Page ---
export default function ArchitectureStudioPage() {
  const { t } = useI18n();

  return (
    <div className="bg-white text-[#1A1A1A] min-h-screen overflow-x-hidden font-sans">
      {/* ========== TOP BAR ========== */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-[#1A1A1A]/5">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between px-6 md:px-12 py-4">
          <Link
            href="/designs"
            className="flex items-center gap-2 text-sm font-light tracking-widest uppercase text-[#808080] hover:text-[#1A1A1A] transition-colors duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            {t({ en: "Back", ko: "뒤로", zh: "返回", ja: "戻る" })}
          </Link>
          <LanguageSwitcher variant="light" />
        </div>
      </nav>

      {/* ========== HERO SECTION ========== */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 px-6 md:px-12">
        <div className="max-w-[1440px] mx-auto">
          {/* Top grid line accent */}
          <div className="flex items-start gap-8 md:gap-16 mb-8">
            <div className="hidden md:block w-px h-24 bg-[#1A1A1A]/20" />
            <motion.p
              className="text-xs tracking-[0.5em] uppercase text-[#808080] font-light"
              initial={{ opacity: 0.3 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              {t({
                en: "Architecture & Design Studio",
                ko: "건축 & 디자인 스튜디오",
                zh: "建筑与设计工作室",
                ja: "建築&デザインスタジオ",
              })}
            </motion.p>
          </div>

          {/* Massive heading */}
          <motion.h1
            className="text-[11vw] md:text-[9vw] lg:text-[8vw] font-bold tracking-[-0.04em] leading-[0.85] mb-10"
            initial={{ opacity: 0.3 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            <span className="block">[FORM /</span>
            <span className="block text-[#808080]">FUNCTION /</span>
            <span className="block">FUTURE]</span>
          </motion.h1>

          {/* Hero image placeholder + studio name */}
          <div className="relative">
            <motion.div
              className="w-full aspect-[21/9] bg-gray-200 relative overflow-hidden"
              initial={{ opacity: 0.3 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              {/* Geometric overlay lines */}
              <div className="absolute inset-0">
                <div className="absolute top-0 left-[33.33%] w-px h-full bg-[#1A1A1A]/5" />
                <div className="absolute top-0 left-[66.66%] w-px h-full bg-[#1A1A1A]/5" />
                <div className="absolute top-[50%] left-0 w-full h-px bg-[#1A1A1A]/5" />
              </div>
              {/* Placeholder label */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[#808080]/40 text-sm tracking-[0.3em] uppercase font-light">
                  {t({
                    en: "Featured Project Image",
                    ko: "주요 프로젝트 이미지",
                    zh: "精选项目图片",
                    ja: "注目プロジェクト画像",
                  })}
                </span>
              </div>
            </motion.div>

            {/* Studio name on the side */}
            <motion.div
              className="absolute -right-2 top-0 hidden lg:flex items-start"
              initial={{ opacity: 0.3 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <span
                className="text-xs tracking-[0.5em] uppercase text-[#808080] font-light"
                style={{ writingMode: "vertical-rl" }}
              >
                ATELIER AXIOM
              </span>
            </motion.div>

            {/* Studio name for mobile / tablet */}
            <motion.div
              className="lg:hidden mt-4 flex justify-end"
              initial={{ opacity: 0.3 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <span className="text-xs tracking-[0.5em] uppercase text-[#808080] font-light">
                ATELIER AXIOM
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Structural divider */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <GridLine />
      </div>

      {/* ========== PROJECTS GRID ========== */}
      <section className="py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-[1440px] mx-auto">
          <Reveal>
            <div className="flex items-end justify-between mb-12">
              <div>
                <p className="text-xs tracking-[0.5em] uppercase text-[#808080] font-light mb-3">
                  01
                </p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                  {t({
                    en: "Selected Projects",
                    ko: "주요 프로젝트",
                    zh: "精选项目",
                    ja: "厳選プロジェクト",
                  })}
                </h2>
              </div>
              <div className="hidden md:block w-24 h-px bg-[#1A1A1A]/20" />
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            {projects.map((project, idx) => (
              <Reveal key={idx} delay={idx * 0.1}>
                <div className="group cursor-pointer border border-[#1A1A1A]/10 hover:border-[#1A1A1A]/30 transition-colors duration-500">
                  {/* Image placeholder */}
                  <div
                    className={`w-full aspect-[4/3] ${
                      idx % 3 === 0
                        ? "bg-gray-200"
                        : idx % 3 === 1
                        ? "bg-gray-300"
                        : "bg-[#D9D9D9]"
                    } relative overflow-hidden`}
                  >
                    {/* Grid overlay */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute top-0 left-[50%] w-px h-full bg-[#1A1A1A]/5" />
                      <div className="absolute top-[50%] left-0 w-full h-px bg-[#1A1A1A]/5" />
                    </div>
                  </div>

                  {/* Project info */}
                  <div className="p-5 md:p-6 border-t border-[#1A1A1A]/10">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg md:text-xl font-semibold tracking-tight">
                        {t(projectNames[project.nameKey])}
                      </h3>
                      <span className="text-xs tracking-[0.3em] uppercase text-[#808080] font-light mt-1">
                        {t(project.category)}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-[#808080]">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3 h-3" />
                        {t(project.location)}
                      </span>
                      <span className="w-px h-3 bg-[#1A1A1A]/15" />
                      <span>{project.year}</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Structural divider */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <GridLine />
      </div>

      {/* ========== ABOUT / STATS ========== */}
      <section className="py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-[1440px] mx-auto">
          <Reveal>
            <div className="mb-12">
              <p className="text-xs tracking-[0.5em] uppercase text-[#808080] font-light mb-3">
                02
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                {t({
                  en: "About the Studio",
                  ko: "스튜디오 소개",
                  zh: "关于工作室",
                  ja: "スタジオについて",
                })}
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left: Stats */}
            <Reveal>
              <div className="grid grid-cols-3 gap-6">
                {[
                  {
                    number: "45+",
                    label: { en: "Projects", ko: "프로젝트", zh: "项目", ja: "プロジェクト" },
                  },
                  {
                    number: "12",
                    label: { en: "Awards", ko: "수상", zh: "奖项", ja: "受賞" },
                  },
                  {
                    number: "3",
                    label: { en: "Offices", ko: "사무소", zh: "办公室", ja: "オフィス" },
                  },
                ].map((stat, idx) => (
                  <div key={idx} className="border-t-2 border-[#1A1A1A] pt-6">
                    <p className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-2">
                      {stat.number}
                    </p>
                    <p className="text-sm tracking-[0.2em] uppercase text-[#808080] font-light">
                      {t(stat.label)}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Right: Description */}
            <Reveal delay={0.2}>
              <div className="flex flex-col justify-center">
                <p className="text-lg md:text-xl text-[#1A1A1A]/70 leading-relaxed mb-6">
                  {t({
                    en: "Atelier Axiom is an internationally recognized architecture and design studio founded on the principle that architecture must serve both humanity and the environment. Inspired by the geometric purity of Tadao Ando, the parametric fluidity of Zaha Hadid, and the pragmatic innovation of BIG, we create structures that challenge convention while remaining deeply rooted in context.",
                    ko: "아틀리에 악시옴은 건축이 인류와 환경 모두에 기여해야 한다는 원칙 위에 설립된 국제적으로 인정받는 건축 및 디자인 스튜디오입니다. 안도 타다오의 기하학적 순수성, 자하 하디드의 파라메트릭 유동성, BIG의 실용적 혁신에서 영감을 받아 맥락에 깊이 뿌리를 둔 채 관습에 도전하는 건축물을 만듭니다.",
                    zh: "Atelier Axiom是一家国际公认的建筑与设计工作室，建立在建筑必须同时服务于人类与环境的理念之上。受安藤忠雄的几何纯粹、扎哈·哈迪德的参数化流动性以及BIG的务实创新启发，我们创造挑战惯例的建筑，同时深植于地域文脉之中。",
                    ja: "アトリエ・アクシオムは、建築は人類と環境の両方に貢献すべきという原則のもとに設立された、国際的に評価される建築・デザインスタジオです。安藤忠雄の幾何学的純粋さ、ザハ・ハディッドのパラメトリックな流動性、BIGの実用的革新に触発され、文脈に深く根ざしながら慣習に挑戦する建築を創造しています。",
                  })}
                </p>
                <p className="text-base text-[#808080] leading-relaxed">
                  {t({
                    en: "Every project begins with the site, the light, and the people who will inhabit the space. We believe that great architecture is not about spectacle -- it is about the quiet moments where form, material, and light converge to create something enduring.",
                    ko: "모든 프로젝트는 부지, 빛, 그리고 공간에 거주할 사람들로부터 시작합니다. 위대한 건축은 화려한 스펙터클이 아니라, 형태와 재료와 빛이 만나 지속되는 무언가를 만들어내는 고요한 순간에 있다고 믿습니다.",
                    zh: "每个项目都始于场地、光线以及将在空间中生活的人。我们相信，伟大的建筑不在于奇观——而在于形式、材料与光线交汇时，创造出持久之物的静谧时刻。",
                    ja: "すべてのプロジェクトは、敷地、光、そしてその空間に住む人々から始まります。偉大な建築とは壮観ではなく、形態、素材、光が収束して永続するものを生み出す静かな瞬間にあると私たちは信じています。",
                  })}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Structural divider */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <GridLine />
      </div>

      {/* ========== SERVICES ========== */}
      <section className="py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-[1440px] mx-auto">
          <Reveal>
            <div className="mb-12">
              <p className="text-xs tracking-[0.5em] uppercase text-[#808080] font-light mb-3">
                03
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                {t({
                  en: "Services",
                  ko: "서비스",
                  zh: "服务",
                  ja: "サービス",
                })}
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <Reveal key={idx} delay={idx * 0.1}>
                  <div className="border border-[#1A1A1A]/10 p-6 md:p-8 h-full flex flex-col -mt-px -ml-px">
                    {/* Geometric icon area */}
                    <div className="w-14 h-14 border border-[#1A1A1A]/20 flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6 text-[#808080]" strokeWidth={1} />
                    </div>
                    <h3 className="text-lg font-semibold tracking-tight mb-3">
                      {t(service.name)}
                    </h3>
                    <p className="text-sm text-[#808080] leading-relaxed flex-1">
                      {t(service.desc)}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Structural divider */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <GridLine />
      </div>

      {/* ========== AWARDS ========== */}
      <section className="py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-[1440px] mx-auto">
          <Reveal>
            <div className="mb-12">
              <p className="text-xs tracking-[0.5em] uppercase text-[#808080] font-light mb-3">
                04
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                {t({
                  en: "Awards & Recognition",
                  ko: "수상 & 인정",
                  zh: "奖项与荣誉",
                  ja: "受賞 & 評価",
                })}
              </h2>
            </div>
          </Reveal>

          <div className="border-t border-[#1A1A1A]/10">
            {awards.map((award, idx) => (
              <Reveal key={idx} delay={idx * 0.08}>
                <div className="border-b border-[#1A1A1A]/10 py-6 md:py-8 grid grid-cols-12 items-center gap-4">
                  {/* Year column */}
                  <div className="col-span-2 md:col-span-1">
                    <span className="text-2xl md:text-3xl font-bold tracking-tighter text-[#808080]">
                      {award.year}
                    </span>
                  </div>

                  {/* Timeline line */}
                  <div className="col-span-1 hidden md:flex justify-center">
                    <div className="relative flex flex-col items-center">
                      <div className="w-2 h-2 bg-[#1A1A1A] rotate-45" />
                    </div>
                  </div>

                  {/* Award name */}
                  <div className="col-span-10 md:col-span-5">
                    <h3 className="text-base md:text-lg font-semibold tracking-tight">
                      {t(award.name)}
                    </h3>
                  </div>

                  {/* Project */}
                  <div className="col-span-12 md:col-span-5 md:text-right">
                    <span className="text-sm text-[#808080] italic">
                      {t(award.project)}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Structural divider */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <GridLine />
      </div>

      {/* ========== TEAM ========== */}
      <section className="py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-[1440px] mx-auto">
          <Reveal>
            <div className="mb-12">
              <p className="text-xs tracking-[0.5em] uppercase text-[#808080] font-light mb-3">
                05
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                {t({
                  en: "Principals",
                  ko: "대표진",
                  zh: "主创建筑师",
                  ja: "主任建築家",
                })}
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {team.map((member, idx) => (
              <Reveal key={idx} delay={idx * 0.15}>
                <div className="group">
                  {/* Portrait placeholder */}
                  <div className="w-full aspect-[3/4] bg-gray-200 mb-6 relative overflow-hidden border border-[#1A1A1A]/5">
                    {/* Cross grid lines */}
                    <div className="absolute inset-0">
                      <div className="absolute top-0 left-[50%] w-px h-full bg-[#1A1A1A]/5" />
                      <div className="absolute top-[50%] left-0 w-full h-px bg-[#1A1A1A]/5" />
                    </div>
                    {/* Initials */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-4xl font-bold text-[#808080]/20 tracking-wider">
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    {/* Bottom accent bar on hover */}
                    <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#1A1A1A] group-hover:w-full transition-all duration-700" />
                  </div>
                  {/* Name and title */}
                  <h3 className="text-xl font-semibold tracking-tight mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-[#808080] tracking-wide">
                    {t(member.title)}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Structural divider */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <GridLine />
      </div>

      {/* ========== CONTACT ========== */}
      <section className="py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-[1440px] mx-auto">
          <Reveal>
            <div className="mb-12">
              <p className="text-xs tracking-[0.5em] uppercase text-[#808080] font-light mb-3">
                06
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                {t({
                  en: "Contact",
                  ko: "연락처",
                  zh: "联系方式",
                  ja: "お問い合わせ",
                })}
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {offices.map((office, idx) => (
              <Reveal key={idx} delay={idx * 0.1}>
                <div className="border-t-2 border-[#1A1A1A] pt-6">
                  <h3 className="text-xl font-semibold tracking-tight mb-4">
                    {t(office.city)}
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-[#808080] mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-[#808080] leading-relaxed whitespace-pre-line">
                        {t(office.address)}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-[#808080] flex-shrink-0" />
                      <p className="text-sm text-[#808080]">{office.phone}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Email row */}
          <Reveal delay={0.3}>
            <div className="mt-12 pt-8 border-t border-[#1A1A1A]/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#808080]" />
                <a
                  href="mailto:studio@atelieraxiom.com"
                  className="text-lg font-semibold hover:text-[#808080] transition-colors duration-300"
                >
                  studio@atelieraxiom.com
                </a>
              </div>
              <p className="text-sm text-[#808080] tracking-wide">
                {t({
                  en: "Inquiries welcome for commissions, collaborations, and press.",
                  ko: "프로젝트 의뢰, 협업, 언론 문의를 환영합니다.",
                  zh: "欢迎项目委托、合作与媒体咨询。",
                  ja: "プロジェクト依頼、コラボレーション、プレスのお問い合わせを歓迎します。",
                })}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="border-t border-[#1A1A1A]/10">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          {/* Top row with geometric accents */}
          <div className="py-10 grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-[#1A1A1A]/5">
            <div>
              <p className="text-2xl font-bold tracking-[-0.03em] mb-2">
                ATELIER AXIOM
              </p>
              <p className="text-xs tracking-[0.3em] uppercase text-[#808080] font-light">
                {t({
                  en: "Architecture & Design",
                  ko: "건축 & 디자인",
                  zh: "建筑与设计",
                  ja: "建築&デザイン",
                })}
              </p>
            </div>
            <div className="flex items-center">
              <div className="w-full h-px bg-[#1A1A1A]/10 relative">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#1A1A1A]/20 rotate-45" />
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#1A1A1A]/20 rotate-45" />
              </div>
            </div>
            <div className="flex flex-col items-start md:items-end gap-2">
              <p className="text-sm text-[#808080]">
                {t({
                  en: "Form follows intention.",
                  ko: "형태는 의도를 따른다.",
                  zh: "形式追随意图。",
                  ja: "形態は意図に従う。",
                })}
              </p>
              <div className="flex items-center gap-4 text-xs text-[#808080]/60 tracking-wider">
                <span>
                  {t({
                    en: "Tokyo",
                    ko: "도쿄",
                    zh: "东京",
                    ja: "東京",
                  })}
                </span>
                <span className="w-1 h-1 bg-[#808080]/30 rotate-45" />
                <span>
                  {t({
                    en: "London",
                    ko: "런던",
                    zh: "伦敦",
                    ja: "ロンドン",
                  })}
                </span>
                <span className="w-1 h-1 bg-[#808080]/30 rotate-45" />
                <span>
                  {t({
                    en: "Seoul",
                    ko: "서울",
                    zh: "首尔",
                    ja: "ソウル",
                  })}
                </span>
              </div>
            </div>
          </div>

          {/* Bottom copyright row */}
          <div className="py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <p className="text-xs text-[#808080]/60 tracking-wider">
              &copy; 2026 Atelier Axiom.{" "}
              {t({
                en: "All rights reserved.",
                ko: "모든 권리 보유.",
                zh: "保留所有权利。",
                ja: "全著作権所有。",
              })}
            </p>
            <div className="flex items-center gap-6 text-xs text-[#808080]/60 tracking-wider">
              <span className="hover:text-[#1A1A1A] transition-colors cursor-pointer">
                {t({
                  en: "Privacy",
                  ko: "개인정보",
                  zh: "隐私政策",
                  ja: "プライバシー",
                })}
              </span>
              <span className="w-px h-3 bg-[#808080]/20" />
              <span className="hover:text-[#1A1A1A] transition-colors cursor-pointer">
                {t({
                  en: "Terms",
                  ko: "이용약관",
                  zh: "使用条款",
                  ja: "利用規約",
                })}
              </span>
              <span className="w-px h-3 bg-[#808080]/20" />
              <span className="hover:text-[#1A1A1A] transition-colors cursor-pointer">
                {t({
                  en: "Sitemap",
                  ko: "사이트맵",
                  zh: "站点地图",
                  ja: "サイトマップ",
                })}
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
