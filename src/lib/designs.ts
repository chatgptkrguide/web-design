import type { Locale } from "@/i18n/types";

export interface DesignItem {
  id: string;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  category: string[];
  tags: string[];
  path: string;
  gradient: string;
  inspiration: string;
}

export const categoryLabels: Record<string, Record<Locale, string>> = {
  All: { en: "All", ko: "전체", zh: "全部", ja: "すべて" },
  Video: { en: "Video", ko: "비디오", zh: "视频", ja: "ビデオ" },
  Luxury: { en: "Luxury", ko: "럭셔리", zh: "奢华", ja: "ラグジュアリー" },
  Scroll: { en: "Scroll", ko: "스크롤", zh: "滚动", ja: "スクロール" },
  Horizontal: { en: "Horizontal", ko: "수평", zh: "横向", ja: "水平" },
  Neon: { en: "Neon", ko: "네온", zh: "霓虹", ja: "ネオン" },
  Minimal: { en: "Minimal", ko: "미니멀", zh: "极简", ja: "ミニマル" },
  Editorial: { en: "Editorial", ko: "에디토리얼", zh: "编辑", ja: "エディトリアル" },
  Agency: { en: "Agency", ko: "에이전시", zh: "创意", ja: "エージェンシー" },
};

export const designCategories = [
  "All", "Video", "Luxury", "Scroll", "Horizontal", "Neon", "Minimal", "Editorial", "Agency",
] as const;

export const designs: DesignItem[] = [
  {
    id: "video-hero",
    title: { en: "Video Hero", ko: "비디오 히어로", zh: "视频英雄", ja: "ビデオヒーロー" },
    description: {
      en: "Cinematic fullscreen video background with immersive scroll",
      ko: "시네마틱 풀스크린 비디오 배경과 몰입형 스크롤",
      zh: "电影级全屏视频背景与沉浸式滚动",
      ja: "シネマティックなフルスクリーンビデオ背景",
    },
    category: ["Video"],
    tags: ["fullscreen", "video", "cinematic"],
    path: "/designs/video-hero",
    gradient: "from-red-500 via-orange-500 to-amber-500",
    inspiration: "Apple, Nike, Tesla",
  },
  {
    id: "luxury-jewelry",
    title: { en: "Luxury Jewelry", ko: "럭셔리 주얼리", zh: "奢华珠宝", ja: "ラグジュアリージュエリー" },
    description: {
      en: "Elegant serif typography with gold accents and refined animations",
      ko: "우아한 세리프 타이포그래피와 골드 액센트",
      zh: "优雅的衬线字体与金色点缀",
      ja: "エレガントなセリフタイポグラフィとゴールドアクセント",
    },
    category: ["Luxury"],
    tags: ["elegant", "serif", "gold"],
    path: "/designs/luxury-jewelry",
    gradient: "from-amber-600 via-yellow-500 to-amber-400",
    inspiration: "Tiffany & Co, Cartier",
  },
  {
    id: "scroll-animation",
    title: { en: "Scroll Animation", ko: "스크롤 애니메이션", zh: "滚动动画", ja: "スクロールアニメーション" },
    description: {
      en: "GSAP-powered parallax scroll with pinned sections and text reveals",
      ko: "GSAP 패럴랙스 스크롤과 핀 섹션, 텍스트 리빌",
      zh: "GSAP驱动的视差滚动与固定区域",
      ja: "GSAPパララックススクロールとピンセクション",
    },
    category: ["Scroll"],
    tags: ["gsap", "parallax", "scroll-trigger"],
    path: "/designs/scroll-animation",
    gradient: "from-violet-500 via-purple-500 to-indigo-500",
    inspiration: "Apple AirPods, Stripe",
  },
  {
    id: "horizontal-scroll",
    title: { en: "Horizontal Scroll", ko: "수평 스크롤", zh: "横向滚动", ja: "水平スクロール" },
    description: {
      en: "Sideways scrolling gallery with momentum navigation",
      ko: "모멘텀 내비게이션의 수평 스크롤 갤러리",
      zh: "横向滚动画廊与动量导航",
      ja: "モメンタムナビゲーションの水平スクロールギャラリー",
    },
    category: ["Horizontal"],
    tags: ["horizontal", "gallery", "portfolio"],
    path: "/designs/horizontal-scroll",
    gradient: "from-cyan-500 via-blue-500 to-indigo-500",
    inspiration: "Locomotive, Rally",
  },
  {
    id: "dark-neon",
    title: { en: "Dark Neon", ko: "다크 네온", zh: "暗黑霓虹", ja: "ダークネオン" },
    description: {
      en: "Cyberpunk dark theme with glowing neon accents and grid patterns",
      ko: "사이버펑크 다크 테마와 네온 글로우 액센트",
      zh: "赛博朋克暗色主题与霓虹灯效果",
      ja: "サイバーパンクダークテーマとネオングロー",
    },
    category: ["Neon"],
    tags: ["dark", "neon", "cyberpunk"],
    path: "/designs/dark-neon",
    gradient: "from-purple-500 via-pink-500 to-cyan-400",
    inspiration: "Razer, Cyberpunk 2077",
  },
  {
    id: "minimalist-zen",
    title: { en: "Minimalist Zen", ko: "미니멀리스트 젠", zh: "极简禅意", ja: "ミニマリストゼン" },
    description: {
      en: "Japanese-inspired ultra-clean design with generous whitespace",
      ko: "일본 영감의 울트라 클린 디자인과 여백의 미",
      zh: "日式极简设计与充足留白",
      ja: "日本のインスピレーションによるウルトラクリーンデザイン",
    },
    category: ["Minimal"],
    tags: ["minimal", "zen", "japanese"],
    path: "/designs/minimalist-zen",
    gradient: "from-stone-300 via-stone-400 to-stone-500",
    inspiration: "Muji, Aesop",
  },
  {
    id: "magazine-editorial",
    title: { en: "Magazine Editorial", ko: "매거진 에디토리얼", zh: "杂志编辑", ja: "マガジンエディトリアル" },
    description: {
      en: "Bold editorial grid layout with asymmetric typography",
      ko: "대담한 에디토리얼 그리드와 비대칭 타이포그래피",
      zh: "大胆的编辑网格布局与不对称排版",
      ja: "大胆なエディトリアルグリッドレイアウト",
    },
    category: ["Editorial"],
    tags: ["magazine", "grid", "editorial"],
    path: "/designs/magazine-editorial",
    gradient: "from-rose-500 via-red-500 to-orange-500",
    inspiration: "Vogue, NYT, Bloomberg",
  },
  {
    id: "creative-agency",
    title: { en: "Creative Agency", ko: "크리에이티브 에이전시", zh: "创意机构", ja: "クリエイティブエージェンシー" },
    description: {
      en: "Bold oversized typography with cursor interactions and motion",
      ko: "대담한 초대형 타이포그래피와 커서 인터랙션",
      zh: "大胆的超大字体与光标交互",
      ja: "大胆なオーバーサイズタイポグラフィとカーソルインタラクション",
    },
    category: ["Agency"],
    tags: ["agency", "typography", "bold"],
    path: "/designs/creative-agency",
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    inspiration: "Awwwards, Basic/Dept",
  },
];
