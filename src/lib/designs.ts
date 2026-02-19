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
  SaaS: { en: "SaaS", ko: "SaaS", zh: "SaaS", ja: "SaaS" },
  Photo: { en: "Photo", ko: "사진", zh: "摄影", ja: "写真" },
  Food: { en: "Food", ko: "음식", zh: "美食", ja: "フード" },
  Architecture: { en: "Architecture", ko: "건축", zh: "建筑", ja: "建築" },
};

export const designCategories = [
  "All", "Video", "Luxury", "Scroll", "Horizontal", "Neon", "Minimal", "Editorial", "Agency", "SaaS", "Photo", "Food", "Architecture",
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
  {
    id: "saas-landing",
    title: { en: "SaaS Landing", ko: "SaaS 랜딩", zh: "SaaS着陆页", ja: "SaaSランディング" },
    description: {
      en: "Modern SaaS product page with gradient accents and pricing cards",
      ko: "그래디언트 액센트와 가격표가 있는 모던 SaaS 제품 페이지",
      zh: "带有渐变色和价格卡的现代SaaS产品页面",
      ja: "グラデーションアクセントと料金カードのモダンSaaSページ",
    },
    category: ["SaaS"],
    tags: ["saas", "landing", "pricing", "gradient"],
    path: "/designs/saas-landing",
    gradient: "from-blue-500 via-violet-500 to-purple-500",
    inspiration: "Stripe, Linear, Vercel",
  },
  {
    id: "photography",
    title: { en: "Photography Portfolio", ko: "사진 포트폴리오", zh: "摄影作品集", ja: "写真ポートフォリオ" },
    description: {
      en: "Immersive full-bleed photo gallery with masonry grid layout",
      ko: "몰입형 풀 블리드 포토 갤러리와 메이슨리 그리드",
      zh: "沉浸式全出血照片画廊与瀑布流布局",
      ja: "没入型フルブリードフォトギャラリーとメイソンリーグリッド",
    },
    category: ["Photo"],
    tags: ["photography", "gallery", "masonry", "fullbleed"],
    path: "/designs/photography",
    gradient: "from-zinc-600 via-zinc-500 to-zinc-400",
    inspiration: "Unsplash, 500px, VSCO",
  },
  {
    id: "restaurant",
    title: { en: "Fine Dining", ko: "파인 다이닝", zh: "高级餐厅", ja: "ファインダイニング" },
    description: {
      en: "Elegant restaurant page with rich textures and warm color palette",
      ko: "풍부한 텍스처와 따뜻한 색감의 우아한 레스토랑 페이지",
      zh: "带有丰富纹理和暖色调的优雅餐厅页面",
      ja: "豊かなテクスチャーと暖かい色合いのエレガントなレストランページ",
    },
    category: ["Food"],
    tags: ["restaurant", "food", "dining", "warm"],
    path: "/designs/restaurant",
    gradient: "from-amber-800 via-orange-700 to-red-800",
    inspiration: "Noma, Eleven Madison, Alinea",
  },
  {
    id: "architecture",
    title: { en: "Architecture Studio", ko: "건축 스튜디오", zh: "建筑工作室", ja: "建築スタジオ" },
    description: {
      en: "Clean geometric layout with bold structural photography placeholders",
      ko: "대담한 구조적 사진과 깔끔한 기하학적 레이아웃",
      zh: "大胆的结构摄影与简洁几何布局",
      ja: "大胆な構造写真とクリーンな幾何学レイアウト",
    },
    category: ["Architecture"],
    tags: ["architecture", "geometric", "structure", "clean"],
    path: "/designs/architecture",
    gradient: "from-gray-700 via-slate-600 to-gray-500",
    inspiration: "Zaha Hadid, BIG, Tadao Ando",
  },
];
