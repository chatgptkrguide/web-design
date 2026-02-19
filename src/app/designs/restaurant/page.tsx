"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  ArrowLeft,
  MapPin,
  Phone,
  Clock,
  Star,
  Award,
  Wine,
  ChefHat,
  CalendarDays,
  Users,
} from "lucide-react";
import Link from "next/link";
import { useI18n } from "@/i18n/context";
import LanguageSwitcher from "@/components/common/LanguageSwitcher";

/* ============================================ */
/* Color palette constants                      */
/* ============================================ */

const COLORS = {
  bg: "#1A1410",
  card: "#221C16",
  cream: "#F5F0E8",
  gold: "#C8A97E",
  goldLight: "#D4B98A",
  goldDark: "#A88B64",
  textMuted: "#A89B8C",
  border: "#3A3028",
};

/* ============================================ */
/* Animation variants                           */
/* ============================================ */

const fadeInUp = {
  hidden: { opacity: 0.25, y: 30 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
      delay,
    },
  }),
};

const fadeIn = {
  hidden: { opacity: 0.25 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
      delay,
    },
  }),
};

const scaleIn = {
  hidden: { opacity: 0.25, scale: 0.96 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
      delay,
    },
  }),
};

/* ============================================ */
/* Animated section wrapper                     */
/* ============================================ */

function AnimatedSection({
  children,
  className = "",
  variant = fadeInUp,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  variant?: typeof fadeInUp;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref} className={className}>
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={variant}
        custom={delay}
      >
        {children}
      </motion.div>
    </div>
  );
}

/* ============================================ */
/* Gold decorative line component               */
/* ============================================ */

function GoldLine({ width = "w-24", className = "" }: { width?: string; className?: string }) {
  return (
    <div className={`${width} h-px mx-auto ${className}`} style={{ backgroundColor: COLORS.gold }} />
  );
}

/* ============================================ */
/* Main page component                          */
/* ============================================ */

export default function RestaurantPage() {
  const { t } = useI18n();

  /* ---- Menu course data ---- */
  const menuCourses = [
    {
      name: t({
        en: "Amuse-Bouche",
        ko: "아뮤즈 부쉬",
        zh: "开胃小点",
        ja: "アミューズ・ブーシュ",
      }),
      description: t({
        en: "Citrus-cured hamachi with yuzu foam, microgreens, and edible flowers on a bed of smoked sea salt.",
        ko: "유자 폼과 마이크로 그린, 식용 꽃을 곁들인 감귤 큐어 방어. 훈제 바다 소금 위에 올려 서빙합니다.",
        zh: "柚子泡沫配柑橘腌制鰤鱼，搭配微型蔬菜和可食用花卉，置于烟熏海盐之上。",
        ja: "柚子フォームとマイクログリーン、エディブルフラワーを添えた柑橘類のハマチ。スモーク海塩の上に盛り付けます。",
      }),
      pairing: t({
        en: "Paired with Champagne Blanc de Blancs, NV",
        ko: "블랑 드 블랑 샴페인 NV와 페어링",
        zh: "搭配白中白香槟，无年份",
        ja: "ブラン・ド・ブランシャンパーニュ NVとのペアリング",
      }),
      gradient: "from-[#3D2B1A] via-[#4A3524] to-[#2E2018]",
    },
    {
      name: t({
        en: "Poisson",
        ko: "뿌아쏭",
        zh: "鱼肴",
        ja: "ポワソン",
      }),
      description: t({
        en: "Wild-caught turbot slow-poached in brown butter, served with celeriac puree, truffle jus, and charred leek.",
        ko: "브라운 버터에 천천히 포칭한 자연산 넙치, 셀러리악 퓨레와 트러플 주스, 그을린 대파를 곁들여 서빙합니다.",
        zh: "野生大菱鲆慢煮于焦化黄油中，搭配芹菜根泥、松露汁和炭烤韭葱。",
        ja: "焦がしバターでゆっくりポシェした天然ヒラメ、セロリアックピュレ、トリュフジュ、焼きリーキを添えて。",
      }),
      pairing: t({
        en: "Paired with Meursault 1er Cru, 2019",
        ko: "뫼르소 프리미에 크뤼 2019와 페어링",
        zh: "搭配默尔索一级园，2019年",
        ja: "ムルソー1er Cru 2019とのペアリング",
      }),
      gradient: "from-[#2A2520] via-[#3A3028] to-[#252018]",
    },
    {
      name: t({
        en: "Viande",
        ko: "비앙드",
        zh: "肉肴",
        ja: "ヴィアンド",
      }),
      description: t({
        en: "Dry-aged Wagyu tenderloin, seared over binchotan, with seasonal root vegetables and a red wine reduction.",
        ko: "비장탄으로 시어한 드라이에이징 와규 안심, 제철 뿌리채소와 레드와인 리덕션을 곁들여 서빙합니다.",
        zh: "备长炭炙烤干式熟成和牛里脊，搭配时令根茎蔬菜和红酒浓缩汁。",
        ja: "備長炭で焼き上げたドライエイジング和牛テンダーロイン、旬の根菜と赤ワインリダクションを添えて。",
      }),
      pairing: t({
        en: "Paired with Pauillac Grand Cru Classé, 2015",
        ko: "포이약 그랑 크뤼 클라세 2015와 페어링",
        zh: "搭配波亚克列级庄，2015年",
        ja: "ポイヤック グラン・クリュ・クラッセ 2015とのペアリング",
      }),
      gradient: "from-[#3A2820] via-[#4D3828] to-[#2D1E14]",
    },
    {
      name: t({
        en: "Dessert",
        ko: "디저트",
        zh: "甜点",
        ja: "デセール",
      }),
      description: t({
        en: "Dark chocolate sphere with molten praline center, passion fruit coulis, and gold leaf, served tableside.",
        ko: "녹은 프랄린 센터의 다크 초콜릿 스피어, 패션프루트 쿨리와 금박을 올려 테이블 사이드에서 서빙합니다.",
        zh: "流心果仁糖芯黑巧克力球，搭配百香果酱和金箔，桌边服务。",
        ja: "溶けたプラリネセンターのダークチョコレートスフィア、パッションフルーツクーリと金箔を添えてテーブルサイドでサーブ。",
      }),
      pairing: t({
        en: "Paired with Sauternes 1er Cru, 2017",
        ko: "소테른 프리미에 크뤼 2017와 페어링",
        zh: "搭配苏玳一级园，2017年",
        ja: "ソーテルヌ1er Cru 2017とのペアリング",
      }),
      gradient: "from-[#2D2420] via-[#382C22] to-[#201810]",
    },
  ];

  /* ---- Gallery gradient data ---- */
  const galleryItems = [
    {
      gradient: "from-[#3D2B1A] via-[#4A3524] to-[#2E2018]",
      label: t({ en: "Interior", ko: "인테리어", zh: "室内", ja: "インテリア" }),
    },
    {
      gradient: "from-[#2A2520] via-[#3A3028] to-[#252018]",
      label: t({ en: "Plating", ko: "플레이팅", zh: "摆盘", ja: "盛り付け" }),
    },
    {
      gradient: "from-[#3A2820] via-[#4D3828] to-[#2D1E14]",
      label: t({ en: "Ingredients", ko: "식재료", zh: "食材", ja: "食材" }),
    },
    {
      gradient: "from-[#2D2420] via-[#382C22] to-[#201810]",
      label: t({ en: "Wine Cellar", ko: "와인 셀러", zh: "酒窖", ja: "ワインセラー" }),
    },
    {
      gradient: "from-[#352A20] via-[#43362A] to-[#2A2018]",
      label: t({ en: "Garden", ko: "정원", zh: "花园", ja: "ガーデン" }),
    },
    {
      gradient: "from-[#302820] via-[#3E3228] to-[#261E16]",
      label: t({ en: "Kitchen", ko: "주방", zh: "厨房", ja: "キッチン" }),
    },
  ];

  /* ---- Awards data ---- */
  const awards = [
    {
      icon: Star,
      title: t({
        en: "3 Michelin Stars",
        ko: "미슐랭 3스타",
        zh: "米其林三星",
        ja: "ミシュラン3つ星",
      }),
      year: "2024",
    },
    {
      icon: Award,
      title: t({
        en: "World's 50 Best",
        ko: "세계 50대 레스토랑",
        zh: "全球50佳餐厅",
        ja: "世界のベスト50",
      }),
      year: "#7",
    },
    {
      icon: Wine,
      title: t({
        en: "Wine Spectator Grand Award",
        ko: "와인 스펙테이터 그랜드 어워드",
        zh: "葡萄酒观察家大奖",
        ja: "ワインスペクテーターグランドアワード",
      }),
      year: "2023",
    },
    {
      icon: ChefHat,
      title: t({
        en: "James Beard Outstanding Chef",
        ko: "제임스 비어드 최고 셰프",
        zh: "詹姆斯·比尔德杰出厨师",
        ja: "ジェームズ・ビアード最優秀シェフ",
      }),
      year: "2022",
    },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: COLORS.bg, color: COLORS.cream }}>
      {/* ============================================ */}
      {/* Top navigation: Back link + Language switcher */}
      {/* ============================================ */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 backdrop-blur-md"
        style={{ backgroundColor: `${COLORS.bg}CC` }}
      >
        <Link
          href="/designs"
          className="flex items-center gap-2 text-sm tracking-wider transition-colors duration-300 hover:opacity-80"
          style={{ color: COLORS.gold }}
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="uppercase">
            {t({ en: "Back", ko: "뒤로", zh: "返回", ja: "戻る" })}
          </span>
        </Link>
        <LanguageSwitcher variant="dark" />
      </nav>

      {/* ============================================ */}
      {/* HERO SECTION                                 */}
      {/* ============================================ */}
      <section className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center">
        {/* Subtle radial gradient overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at 50% 40%, rgba(200, 169, 126, 0.06) 0%, transparent 70%)`,
          }}
        />

        <motion.div
          initial={{ opacity: 0.25, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative z-10 flex flex-col items-center"
        >
          {/* Small upper label */}
          <motion.p
            initial={{ opacity: 0.25 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xs tracking-[0.35em] uppercase mb-8"
            style={{ color: COLORS.gold }}
          >
            {t({
              en: "Est. 2018 \u00B7 New York",
              ko: "2018\uB144 \uC124\uB9BD \u00B7 \uB274\uC695",
              zh: "2018\u5E74\u521B\u7ACB \u00B7 \u7EBD\u7EA6",
              ja: "2018\u5E74\u8A2D\u7ACB \u00B7 \u30CB\u30E5\u30FC\u30E8\u30FC\u30AF",
            })}
          </motion.p>

          {/* Restaurant name */}
          <h1
            className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light tracking-wide leading-tight"
            style={{ color: COLORS.cream }}
          >
            Maison Terre
          </h1>

          {/* Gold decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="w-32 h-px my-8 origin-center"
            style={{ backgroundColor: COLORS.gold }}
          />

          {/* Subtitle */}
          <p
            className="font-serif text-lg sm:text-xl md:text-2xl tracking-wide italic font-light"
            style={{ color: COLORS.textMuted }}
          >
            {t({
              en: "Seasonal Tasting Menu",
              ko: "계절 테이스팅 메뉴",
              zh: "时令品鉴菜单",
              ja: "季節のテイスティングメニュー",
            })}
          </p>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0.25, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-12 px-10 py-4 text-sm tracking-[0.25em] uppercase font-medium transition-all duration-300 border hover:bg-[#C8A97E] hover:text-[#1A1410]"
            style={{ color: COLORS.gold, borderColor: COLORS.gold }}
          >
            {t({
              en: "Reserve a Table",
              ko: "테이블 예약",
              zh: "预订座位",
              ja: "テーブルを予約",
            })}
          </motion.button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-12"
            style={{ backgroundColor: COLORS.gold }}
          />
        </motion.div>
      </section>

      {/* ============================================ */}
      {/* PHILOSOPHY SECTION                           */}
      {/* ============================================ */}
      <section className="px-6 py-28 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <GoldLine className="mb-20" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* Left: heading */}
          <AnimatedSection>
            <h2
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-tight"
              style={{ color: COLORS.cream }}
            >
              {t({
                en: "Our Philosophy",
                ko: "우리의 철학",
                zh: "我们的理念",
                ja: "私たちの哲学",
              })}
            </h2>
            <div className="w-16 h-px mt-8" style={{ backgroundColor: COLORS.gold }} />
          </AnimatedSection>

          {/* Right: philosophy text */}
          <AnimatedSection delay={0.2}>
            <p
              className="text-base md:text-lg leading-relaxed mb-6"
              style={{ color: COLORS.textMuted }}
            >
              {t({
                en: "At Maison Terre, we believe that extraordinary cuisine begins in the soil. Our kitchen is guided by the rhythms of nature — every dish is a reflection of the season, crafted from ingredients sourced within a hundred miles of our door.",
                ko: "메종 테르에서는 탁월한 요리가 토양에서 시작된다고 믿습니다. 우리 주방은 자연의 리듬에 따라 운영되며, 모든 요리는 문 앞 백 마일 이내에서 조달한 식재료로 계절을 담아냅니다.",
                zh: "在Maison Terre，我们相信卓越的美食始于土壤。我们的厨房遵循自然的节奏——每道菜都是季节的映射，食材均采自方圆百英里之内。",
                ja: "メゾン・テールでは、卓越した料理は土壌から始まると信じています。私たちのキッチンは自然のリズムに導かれ、すべての料理は季節を映し出し、100マイル以内から調達した食材で作られています。",
              })}
            </p>
            <p
              className="text-base md:text-lg leading-relaxed mb-6"
              style={{ color: COLORS.textMuted }}
            >
              {t({
                en: "We work hand-in-hand with local farmers, foragers, and fishermen who share our reverence for the land. Each plate tells the story of a place and a moment in time — fleeting, beautiful, and meant to be savored.",
                ko: "우리는 대지에 대한 경외심을 공유하는 지역 농부, 채집가, 어부들과 손을 맞잡고 일합니다. 각 접시는 한 장소와 시간의 순간을 이야기합니다 — 찰나적이고, 아름답고, 음미하기 위한 것입니다.",
                zh: "我们与当地的农民、采集者和渔民携手合作，他们与我们一样敬畏这片土地。每一道菜都讲述着一个地方和一个时刻的故事——转瞬即逝、美丽动人、值得细细品味。",
                ja: "私たちは、土地への敬意を共有する地元の農家、採集者、漁師たちと手を携えています。一皿一皿が、ある場所とある瞬間の物語を語ります — 儚く、美しく、味わうために存在するものです。",
              })}
            </p>
            <p
              className="text-base md:text-lg leading-relaxed"
              style={{ color: COLORS.textMuted }}
            >
              {t({
                en: "Our twelve-course tasting menu evolves weekly, ensuring that no two visits are ever the same. This is dining as an experience — intimate, intentional, and unforgettable.",
                ko: "12코스 테이스팅 메뉴는 매주 변경되어 두 번의 방문이 같을 수 없습니다. 이것은 경험으로서의 다이닝 — 친밀하고, 의도적이며, 잊을 수 없는 것입니다.",
                zh: "我们的十二道品鉴菜单每周更新，确保每次到访都独一无二。这是一种体验式用餐——亲密、用心且令人难忘。",
                ja: "12コースのテイスティングメニューは毎週進化し、二度と同じ訪問はありません。これは体験としてのダイニング — 親密で、意図的で、忘れられないものです。",
              })}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ============================================ */}
      {/* MENU HIGHLIGHTS SECTION                      */}
      {/* ============================================ */}
      <section className="px-6 py-28 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <p
            className="text-xs tracking-[0.35em] uppercase mb-4"
            style={{ color: COLORS.gold }}
          >
            {t({
              en: "Current Season",
              ko: "현재 시즌",
              zh: "当季",
              ja: "今シーズン",
            })}
          </p>
          <h2
            className="font-serif text-4xl md:text-5xl font-light"
            style={{ color: COLORS.cream }}
          >
            {t({
              en: "Menu Highlights",
              ko: "메뉴 하이라이트",
              zh: "菜单精选",
              ja: "メニューハイライト",
            })}
          </h2>
          <GoldLine className="mt-8" />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {menuCourses.map((course, idx) => (
            <AnimatedSection key={idx} variant={scaleIn} delay={idx * 0.15}>
              <div
                className="rounded-sm overflow-hidden transition-transform duration-500 hover:scale-[1.02] group"
                style={{ backgroundColor: COLORS.card }}
              >
                {/* Dish image placeholder with warm gradient */}
                <div className={`h-56 md:h-64 bg-gradient-to-br ${course.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="w-16 h-16 rounded-full border flex items-center justify-center opacity-30 group-hover:opacity-50 transition-opacity duration-500"
                      style={{ borderColor: COLORS.gold }}
                    >
                      <Wine className="w-6 h-6" style={{ color: COLORS.gold }} />
                    </div>
                  </div>
                  {/* Subtle noise texture overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
                {/* Course details */}
                <div className="p-6 md:p-8">
                  <h3
                    className="font-serif text-xl md:text-2xl font-light mb-3"
                    style={{ color: COLORS.cream }}
                  >
                    {course.name}
                  </h3>
                  <p
                    className="text-sm leading-relaxed mb-4"
                    style={{ color: COLORS.textMuted }}
                  >
                    {course.description}
                  </p>
                  <div className="flex items-center gap-2 pt-3" style={{ borderTop: `1px solid ${COLORS.border}` }}>
                    <Wine className="w-3.5 h-3.5 flex-shrink-0" style={{ color: COLORS.gold }} />
                    <p className="text-xs italic tracking-wide" style={{ color: COLORS.goldDark }}>
                      {course.pairing}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ============================================ */}
      {/* CHEF SECTION                                 */}
      {/* ============================================ */}
      <section className="px-6 py-28 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <GoldLine className="mb-20" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Chef portrait placeholder */}
          <AnimatedSection variant={scaleIn}>
            <div
              className="aspect-[3/4] rounded-sm bg-gradient-to-br from-[#352A20] via-[#43362A] to-[#2A2018] relative overflow-hidden"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="w-24 h-24 rounded-full border flex items-center justify-center opacity-20"
                  style={{ borderColor: COLORS.gold }}
                >
                  <ChefHat className="w-10 h-10" style={{ color: COLORS.gold }} />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              {/* Chef name overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-xs tracking-[0.3em] uppercase mb-2" style={{ color: COLORS.gold }}>
                  {t({
                    en: "Executive Chef",
                    ko: "총괄 셰프",
                    zh: "行政主厨",
                    ja: "エグゼクティブシェフ",
                  })}
                </p>
                <h3
                  className="font-serif text-2xl md:text-3xl font-light"
                  style={{ color: COLORS.cream }}
                >
                  Laurent Dubois
                </h3>
              </div>
            </div>
          </AnimatedSection>

          {/* Chef bio */}
          <AnimatedSection delay={0.2}>
            <p className="text-xs tracking-[0.35em] uppercase mb-6" style={{ color: COLORS.gold }}>
              {t({
                en: "The Visionary",
                ko: "비전",
                zh: "愿景",
                ja: "ビジョン",
              })}
            </p>
            <h2
              className="font-serif text-3xl md:text-4xl lg:text-5xl font-light mb-8 leading-tight"
              style={{ color: COLORS.cream }}
            >
              {t({
                en: "A Life Devoted to Craft",
                ko: "장인 정신에 바친 삶",
                zh: "献身于工艺的一生",
                ja: "技に捧げた人生",
              })}
            </h2>
            <p className="text-base md:text-lg leading-relaxed mb-6" style={{ color: COLORS.textMuted }}>
              {t({
                en: "Chef Laurent Dubois spent two decades in the world's most celebrated kitchens — from the ateliers of Lyon to the izakayas of Tokyo — before founding Maison Terre. His cuisine bridges French technique with a deep respect for the simplicity found in Japanese and Nordic traditions.",
                ko: "로랑 드부아 셰프는 리옹의 아뜰리에부터 도쿄의 이자카야까지 세계에서 가장 유명한 주방에서 20년을 보낸 후 메종 테르를 설립했습니다. 그의 요리는 프랑스 기법과 일본 및 북유럽 전통에서 발견되는 단순함에 대한 깊은 존경을 잇는 다리입니다.",
                zh: "Laurent Dubois主厨在创立Maison Terre之前，曾在世界上最负盛名的厨房工作了二十年——从里昂的工作室到东京的居酒屋。他的料理将法式技艺与日本及北欧传统中的简约之美深深融合。",
                ja: "ローラン・デュボワシェフは、リヨンのアトリエから東京の居酒屋まで、世界で最も名高い厨房で20年を過ごした後、メゾン・テールを設立しました。彼の料理は、フランスの技法と日本と北欧の伝統に見られるシンプルさへの深い敬意を橋渡しします。",
              })}
            </p>
            <p className="text-base md:text-lg leading-relaxed" style={{ color: COLORS.textMuted }}>
              {t({
                en: "\"Cooking is listening. To the soil, to the season, to the guest. When we stop imposing and start responding, the ingredients speak for themselves.\"",
                ko: "\"요리는 경청입니다. 토양에, 계절에, 손님에게. 우리가 강요를 멈추고 응답하기 시작하면, 식재료가 스스로 말합니다.\"",
                zh: "\"烹饪就是倾听。倾听土壤，倾听季节，倾听客人。当我们停止强加，开始回应时，食材便会自己说话。\"",
                ja: "「料理とは耳を傾けること。土壌に、季節に、ゲストに。押し付けるのをやめて応答し始めると、食材が自ら語り出します。」",
              })}
            </p>
            <p className="text-sm mt-4 italic" style={{ color: COLORS.goldDark }}>
              — Laurent Dubois
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ============================================ */}
      {/* GALLERY SECTION                              */}
      {/* ============================================ */}
      <section className="px-6 py-28 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <p className="text-xs tracking-[0.35em] uppercase mb-4" style={{ color: COLORS.gold }}>
            {t({
              en: "Visual Journey",
              ko: "비주얼 저니",
              zh: "视觉之旅",
              ja: "ビジュアルジャーニー",
            })}
          </p>
          <h2
            className="font-serif text-4xl md:text-5xl font-light"
            style={{ color: COLORS.cream }}
          >
            {t({
              en: "The Experience",
              ko: "경험",
              zh: "体验",
              ja: "体験",
            })}
          </h2>
          <GoldLine className="mt-8" />
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryItems.map((item, idx) => (
            <AnimatedSection key={idx} variant={scaleIn} delay={idx * 0.1}>
              <div
                className={`aspect-[4/3] rounded-sm bg-gradient-to-br ${item.gradient} relative overflow-hidden group cursor-pointer`}
              >
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />
                <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="text-sm tracking-wider uppercase font-light" style={{ color: COLORS.cream }}>
                    {item.label}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ============================================ */}
      {/* RESERVATION SECTION                          */}
      {/* ============================================ */}
      <section className="px-6 py-28 md:px-12 lg:px-24">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <p className="text-xs tracking-[0.35em] uppercase mb-4" style={{ color: COLORS.gold }}>
              {t({
                en: "Join Us",
                ko: "함께하세요",
                zh: "加入我们",
                ja: "ご一緒に",
              })}
            </p>
            <h2
              className="font-serif text-4xl md:text-5xl font-light mb-4"
              style={{ color: COLORS.cream }}
            >
              {t({
                en: "Reservation",
                ko: "예약",
                zh: "预订",
                ja: "ご予約",
              })}
            </h2>
            <GoldLine className="mt-8 mb-8" />
            <p className="text-sm leading-relaxed max-w-lg mx-auto" style={{ color: COLORS.textMuted }}>
              {t({
                en: "We offer a single seating each evening at 7:00 PM for up to 24 guests. Reservations are accepted up to 30 days in advance.",
                ko: "매일 저녁 7시에 최대 24명의 손님을 위한 단일 시팅을 제공합니다. 예약은 30일 전부터 가능합니다.",
                zh: "我们每晚7:00提供一次入席，最多容纳24位宾客。可提前30天预订。",
                ja: "毎晩午後7時に最大24名様のシングルシーティングをご用意しております。ご予約は30日前から承ります。",
              })}
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="rounded-sm p-8 md:p-12" style={{ backgroundColor: COLORS.card, border: `1px solid ${COLORS.border}` }}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {/* Date field */}
                <div>
                  <label className="flex items-center gap-2 text-xs tracking-[0.2em] uppercase mb-3" style={{ color: COLORS.gold }}>
                    <CalendarDays className="w-3.5 h-3.5" />
                    {t({ en: "Date", ko: "날짜", zh: "日期", ja: "日付" })}
                  </label>
                  <div
                    className="w-full px-4 py-3 rounded-sm text-sm bg-transparent border"
                    style={{ borderColor: COLORS.border, color: COLORS.textMuted }}
                  >
                    {t({
                      en: "Select a date",
                      ko: "날짜 선택",
                      zh: "选择日期",
                      ja: "日付を選択",
                    })}
                  </div>
                </div>

                {/* Time field */}
                <div>
                  <label className="flex items-center gap-2 text-xs tracking-[0.2em] uppercase mb-3" style={{ color: COLORS.gold }}>
                    <Clock className="w-3.5 h-3.5" />
                    {t({ en: "Time", ko: "시간", zh: "时间", ja: "時間" })}
                  </label>
                  <div
                    className="w-full px-4 py-3 rounded-sm text-sm bg-transparent border"
                    style={{ borderColor: COLORS.border, color: COLORS.textMuted }}
                  >
                    7:00 PM
                  </div>
                </div>

                {/* Guests field */}
                <div>
                  <label className="flex items-center gap-2 text-xs tracking-[0.2em] uppercase mb-3" style={{ color: COLORS.gold }}>
                    <Users className="w-3.5 h-3.5" />
                    {t({ en: "Guests", ko: "인원", zh: "人数", ja: "人数" })}
                  </label>
                  <div
                    className="w-full px-4 py-3 rounded-sm text-sm bg-transparent border"
                    style={{ borderColor: COLORS.border, color: COLORS.textMuted }}
                  >
                    {t({
                      en: "2 Guests",
                      ko: "2명",
                      zh: "2位",
                      ja: "2名",
                    })}
                  </div>
                </div>
              </div>

              {/* Special requests */}
              <div className="mb-8">
                <label className="text-xs tracking-[0.2em] uppercase mb-3 block" style={{ color: COLORS.gold }}>
                  {t({
                    en: "Special Requests",
                    ko: "특별 요청",
                    zh: "特殊要求",
                    ja: "特別なご要望",
                  })}
                </label>
                <div
                  className="w-full px-4 py-3 h-24 rounded-sm text-sm bg-transparent border"
                  style={{ borderColor: COLORS.border, color: COLORS.textMuted }}
                >
                  {t({
                    en: "Dietary restrictions, allergies, celebrations...",
                    ko: "식이 제한, 알레르기, 기념일...",
                    zh: "饮食限制、过敏、庆祝活动...",
                    ja: "食事制限、アレルギー、お祝い...",
                  })}
                </div>
              </div>

              {/* Submit button with gold border */}
              <button
                className="w-full py-4 text-sm tracking-[0.25em] uppercase font-medium transition-all duration-300 border-2 hover:bg-[#C8A97E] hover:text-[#1A1410] rounded-sm"
                style={{ color: COLORS.gold, borderColor: COLORS.gold }}
              >
                {t({
                  en: "Request Reservation",
                  ko: "예약 요청",
                  zh: "提交预订",
                  ja: "予約をリクエスト",
                })}
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ============================================ */}
      {/* AWARDS / PRESS SECTION                       */}
      {/* ============================================ */}
      <section className="px-6 py-28 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <p className="text-xs tracking-[0.35em] uppercase mb-4" style={{ color: COLORS.gold }}>
            {t({
              en: "Recognition",
              ko: "수상 경력",
              zh: "荣誉",
              ja: "受賞歴",
            })}
          </p>
          <h2
            className="font-serif text-4xl md:text-5xl font-light"
            style={{ color: COLORS.cream }}
          >
            {t({
              en: "Awards & Press",
              ko: "어워드 & 프레스",
              zh: "奖项与媒体",
              ja: "受賞 & メディア",
            })}
          </h2>
          <GoldLine className="mt-8" />
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {awards.map((award, idx) => (
            <AnimatedSection key={idx} variant={fadeIn} delay={idx * 0.15}>
              <div
                className="flex flex-col items-center text-center p-6 md:p-8 rounded-sm transition-colors duration-300 hover:bg-white/[0.02]"
                style={{ border: `1px solid ${COLORS.border}` }}
              >
                <div
                  className="w-14 h-14 rounded-full border flex items-center justify-center mb-5"
                  style={{ borderColor: COLORS.gold }}
                >
                  <award.icon className="w-6 h-6" style={{ color: COLORS.gold }} />
                </div>
                <h3
                  className="font-serif text-sm md:text-base font-light mb-2 leading-snug"
                  style={{ color: COLORS.cream }}
                >
                  {award.title}
                </h3>
                <p className="text-xs tracking-wider" style={{ color: COLORS.goldDark }}>
                  {award.year}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ============================================ */}
      {/* FOOTER                                       */}
      {/* ============================================ */}
      <footer
        className="px-6 py-20 md:px-12 lg:px-24"
        style={{ borderTop: `1px solid ${COLORS.border}` }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Footer top: brand */}
          <AnimatedSection className="text-center mb-16">
            <h3 className="font-serif text-3xl md:text-4xl font-light mb-4" style={{ color: COLORS.cream }}>
              Maison Terre
            </h3>
            <GoldLine width="w-16" />
          </AnimatedSection>

          {/* Footer columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 text-center md:text-left">
            {/* Address */}
            <AnimatedSection delay={0}>
              <div className="flex flex-col items-center md:items-start gap-3">
                <div className="flex items-center gap-2 mb-2" style={{ color: COLORS.gold }}>
                  <MapPin className="w-4 h-4" />
                  <span className="text-xs tracking-[0.2em] uppercase">
                    {t({ en: "Address", ko: "주소", zh: "地址", ja: "住所" })}
                  </span>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: COLORS.textMuted }}>
                  {t({
                    en: "142 West 11th Street\nNew York, NY 10011\nUnited States",
                    ko: "142 West 11th Street\n뉴욕, NY 10011\n미국",
                    zh: "142 West 11th Street\n纽约, NY 10011\n美国",
                    ja: "142 West 11th Street\nニューヨーク, NY 10011\nアメリカ",
                  }).split("\n").map((line, i) => (
                    <span key={i}>
                      {line}
                      {i < 2 && <br />}
                    </span>
                  ))}
                </p>
              </div>
            </AnimatedSection>

            {/* Hours */}
            <AnimatedSection delay={0.1}>
              <div className="flex flex-col items-center md:items-start gap-3">
                <div className="flex items-center gap-2 mb-2" style={{ color: COLORS.gold }}>
                  <Clock className="w-4 h-4" />
                  <span className="text-xs tracking-[0.2em] uppercase">
                    {t({ en: "Hours", ko: "영업 시간", zh: "营业时间", ja: "営業時間" })}
                  </span>
                </div>
                <div className="text-sm leading-relaxed" style={{ color: COLORS.textMuted }}>
                  <p>
                    {t({
                      en: "Tuesday — Saturday",
                      ko: "화요일 — 토요일",
                      zh: "周二 — 周六",
                      ja: "火曜日 — 土曜日",
                    })}
                  </p>
                  <p className="mt-1">
                    {t({
                      en: "Dinner: 7:00 PM (Single Seating)",
                      ko: "디너: 오후 7시 (단일 시팅)",
                      zh: "晚餐: 晚上7:00（单次入席）",
                      ja: "ディナー: 午後7時（シングルシーティング）",
                    })}
                  </p>
                  <p className="mt-3">
                    {t({
                      en: "Sunday — Monday",
                      ko: "일요일 — 월요일",
                      zh: "周日 — 周一",
                      ja: "日曜日 — 月曜日",
                    })}
                  </p>
                  <p className="mt-1">
                    {t({ en: "Closed", ko: "휴무", zh: "休息", ja: "定休日" })}
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Contact */}
            <AnimatedSection delay={0.2}>
              <div className="flex flex-col items-center md:items-start gap-3">
                <div className="flex items-center gap-2 mb-2" style={{ color: COLORS.gold }}>
                  <Phone className="w-4 h-4" />
                  <span className="text-xs tracking-[0.2em] uppercase">
                    {t({ en: "Contact", ko: "연락처", zh: "联系方式", ja: "お問い合わせ" })}
                  </span>
                </div>
                <div className="text-sm leading-relaxed" style={{ color: COLORS.textMuted }}>
                  <p>+1 (212) 555-0187</p>
                  <p className="mt-1">reservations@maisonterre.com</p>
                  <p className="mt-4 text-xs italic" style={{ color: COLORS.goldDark }}>
                    {t({
                      en: "For private events, please contact us directly.",
                      ko: "프라이빗 이벤트는 직접 연락 주세요.",
                      zh: "如需举办私人活动，请直接与我们联系。",
                      ja: "プライベートイベントにつきましては、直接お問い合わせください。",
                    })}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Footer bottom */}
          <div className="mt-20 pt-8 text-center" style={{ borderTop: `1px solid ${COLORS.border}` }}>
            <p className="text-xs tracking-wider" style={{ color: COLORS.textMuted }}>
              &copy; {new Date().getFullYear()} Maison Terre.{" "}
              {t({
                en: "All rights reserved.",
                ko: "모든 권리 보유.",
                zh: "版权所有。",
                ja: "All rights reserved.",
              })}
            </p>
            <p className="text-xs mt-2 italic" style={{ color: `${COLORS.textMuted}80` }}>
              {t({
                en: "A tasting menu experience in the heart of Manhattan.",
                ko: "맨해튼 중심부의 테이스팅 메뉴 경험.",
                zh: "曼哈顿中心的品鉴菜单体验。",
                ja: "マンハッタンの中心で味わうテイスティングメニュー体験。",
              })}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
