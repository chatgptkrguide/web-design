"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Clock, User, BookOpen } from "lucide-react";
import Link from "next/link";
import { useI18n } from "@/i18n/context";
import LanguageSwitcher from "@/components/common/LanguageSwitcher";

const fadeIn = {
  initial: { opacity: 0.3, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

const articles = [
  { cat: "CULTURE", color: "bg-[#E8E0D4]" },
  { cat: "TECHNOLOGY", color: "bg-[#D4DEE8]" },
  { cat: "DESIGN", color: "bg-[#E8D4D4]" },
  { cat: "BUSINESS", color: "bg-[#D4E8D6]" },
];

const opinions = [
  { color: "bg-gradient-to-br from-rose-200 to-amber-100" },
  { color: "bg-gradient-to-br from-blue-200 to-indigo-100" },
  { color: "bg-gradient-to-br from-emerald-200 to-teal-100" },
];

const sidebarItems = [
  { color: "bg-[#F0EBE3]" },
  { color: "bg-[#E3EBF0]" },
  { color: "bg-[#F0E3E3]" },
];

export default function MagazineEditorialPage() {
  const { t } = useI18n();

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Top Nav */}
      <nav className="flex items-center justify-between px-6 md:px-10 py-4 border-b border-black/10">
        <Link href="/" className="flex items-center gap-2 text-xs text-black/40 hover:text-black transition-colors">
          <ArrowLeft className="w-3.5 h-3.5" />
          {t({ en: "Back to Gallery", ko: "갤러리로 돌아가기", zh: "返回画廊", ja: "ギャラリーに戻る" })}
        </Link>
        <LanguageSwitcher variant="light" />
      </nav>

      {/* Masthead */}
      <header className="border-b border-black/10 px-6 md:px-10 py-6">
        <motion.div {...fadeIn}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tight text-center">
            {t({ en: "THE CHRONICLE", ko: "더 크로니클", zh: "编年史报", ja: "ザ・クロニクル" })}
          </h1>
          <div className="flex items-center justify-center gap-4 mt-3 text-xs text-black/40 font-mono">
            <span>{t({ en: "February 2026", ko: "2026년 2월", zh: "2026年2月", ja: "2026年2月" })}</span>
            <span className="w-1 h-1 rounded-full bg-black/20" />
            <span>Vol. XII, No. 3</span>
            <span className="w-1 h-1 rounded-full bg-black/20" />
            <span>{t({ en: "Digital Edition", ko: "디지털 에디션", zh: "数字版", ja: "デジタル版" })}</span>
          </div>
        </motion.div>
      </header>

      {/* Hero Article */}
      <section className="px-6 md:px-10 py-10 border-b border-black/10">
        <motion.div {...fadeIn} className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="flex flex-col justify-center">
            <span className="text-xs font-bold uppercase tracking-widest text-red-600 mb-3">
              {t({ en: "BREAKING NEWS", ko: "속보", zh: "突发新闻", ja: "速報" })}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold leading-[1.15] mb-4">
              {t({
                en: "The Headline That Changes Everything About How We See the World",
                ko: "세상을 바라보는 방식을 바꾸는 헤드라인 기사",
                zh: "改变我们看待世界方式的头条新闻",
                ja: "世界の見方を変える見出し記事",
              })}
            </h2>
            <p className="text-base text-black/60 leading-relaxed mb-4">
              {t({
                en: "In an era defined by constant disruption, a new movement is quietly reshaping the foundations of culture, technology, and human connection. This is the story no one expected — and everyone needs to read.",
                ko: "끊임없는 변화로 정의되는 시대에, 새로운 움직임이 문화, 기술, 인간 관계의 기반을 조용히 재편하고 있습니다.",
                zh: "在不断变革的时代，一场新运动正在悄然重塑文化、技术和人际关系的基础。",
                ja: "絶え間ない変革の時代に、新しい運動が文化、テクノロジー、人のつながりの基盤を静かに再構築しています。",
              })}
            </p>
            <div className="flex items-center gap-4 text-xs text-black/40">
              <div className="flex items-center gap-1.5">
                <User className="w-3.5 h-3.5" />
                <span>{t({ en: "By Alexandra Fontaine", ko: "알렉산드라 폰테인", zh: "亚历山德拉·方丹", ja: "アレクサンドラ・フォンテーヌ" })}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                <span>{t({ en: "12 min read", ko: "12분 읽기", zh: "12分钟阅读", ja: "12分で読める" })}</span>
              </div>
            </div>
          </div>
          <div className="bg-[#E8E0D4] rounded-lg aspect-[4/3] flex items-center justify-center">
            <span className="text-sm text-black/30">{t({ en: "[Featured Image]", ko: "[대표 이미지]", zh: "[特色图片]", ja: "[アイキャッチ画像]" })}</span>
          </div>
        </motion.div>
      </section>

      {/* Article Grid */}
      <section className="px-6 md:px-10 py-10 border-b border-black/10">
        <motion.div {...fadeIn} className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Large Featured */}
            <div className="md:col-span-2 md:row-span-2">
              <div className={`${articles[0].color} rounded-lg aspect-[3/2] mb-4 flex items-center justify-center`}>
                <span className="text-sm text-black/30">{t({ en: "[Article Image]", ko: "[기사 이미지]", zh: "[文章图片]", ja: "[記事画像]" })}</span>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-red-600">
                {t({ en: "CULTURE", ko: "문화", zh: "文化", ja: "カルチャー" })}
              </span>
              <h3 className="text-xl font-serif font-bold mt-1 mb-2 leading-tight">
                {t({
                  en: "The Rise of Digital Minimalism in Contemporary Art",
                  ko: "현대 미술에서 디지털 미니멀리즘의 부상",
                  zh: "当代艺术中数字极简主义的兴起",
                  ja: "現代アートにおけるデジタルミニマリズムの台頭",
                })}
              </h3>
              <p className="text-sm text-black/50 leading-relaxed mb-2">
                {t({
                  en: "How a new generation of artists is stripping away the noise to find beauty in simplicity and digital restraint.",
                  ko: "새로운 세대의 아티스트들이 소음을 걷어내고 단순함과 디지털 절제에서 아름다움을 찾는 방법.",
                  zh: "新一代艺术家如何剥离噪音，在简约和数字节制中寻找美。",
                  ja: "新世代のアーティストがノイズを取り除き、シンプルさの中に美を見出す方法。",
                })}
              </p>
              <div className="flex items-center gap-2 text-xs text-black/30">
                <Clock className="w-3 h-3" />
                <span>{t({ en: "8 min read", ko: "8분", zh: "8分钟", ja: "8分" })}</span>
              </div>
            </div>

            {/* Smaller articles */}
            {[
              {
                cat: { en: "TECHNOLOGY", ko: "기술", zh: "科技", ja: "テクノロジー" },
                title: { en: "AI and the Future of Creative Industries", ko: "AI와 크리에이티브 산업의 미래", zh: "AI与创意产业的未来", ja: "AIとクリエイティブ産業の未来" },
                excerpt: { en: "Exploring the intersection of artificial intelligence and human creativity in the modern workplace.", ko: "현대 직장에서 인공지능과 인간 창의성의 교차점 탐구.", zh: "探索人工智能与人类创造力在现代职场的交汇。", ja: "現代の職場における人工知能と人間の創造性の交差点。" },
                color: articles[1].color,
                time: "5 min",
              },
              {
                cat: { en: "DESIGN", ko: "디자인", zh: "设计", ja: "デザイン" },
                title: { en: "Why Every Brand is Redesigning Right Now", ko: "지금 모든 브랜드가 리디자인하는 이유", zh: "为什么每个品牌都在重新设计", ja: "今すべてのブランドがリデザインする理由" },
                excerpt: { en: "The great rebrand wave of 2026 and what it tells us about the future of visual identity.", ko: "2026년 대규모 리브랜딩 물결과 비주얼 아이덴티티의 미래.", zh: "2026年的品牌重塑浪潮及其对视觉识别未来的启示。", ja: "2026年のリブランディングの波とビジュアルアイデンティティの未来。" },
                color: articles[2].color,
                time: "6 min",
              },
              {
                cat: { en: "BUSINESS", ko: "비즈니스", zh: "商业", ja: "ビジネス" },
                title: { en: "The New Economy of Attention and Value", ko: "관심과 가치의 새로운 경제학", zh: "注意力与价值的新经济", ja: "注目と価値の新しい経済" },
                excerpt: { en: "Understanding how the attention economy is reshaping business models across all sectors.", ko: "관심 경제가 모든 분야의 비즈니스 모델을 재편하는 방법.", zh: "了解注意力经济如何重塑各行业的商业模式。", ja: "アテンションエコノミーがすべてのセクターのビジネスモデルを再構築する方法。" },
                color: articles[3].color,
                time: "7 min",
              },
            ].map((article, i) => (
              <div key={i} className="flex flex-col">
                <div className={`${article.color} rounded-lg aspect-[16/10] mb-3 flex items-center justify-center`}>
                  <span className="text-xs text-black/20">{t({ en: "[Image]", ko: "[이미지]", zh: "[图片]", ja: "[画像]" })}</span>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-red-600">{t(article.cat)}</span>
                <h4 className="text-sm font-serif font-bold mt-1 mb-1 leading-snug">{t(article.title)}</h4>
                <p className="text-xs text-black/45 leading-relaxed flex-1">{t(article.excerpt)}</p>
                <div className="flex items-center gap-1.5 text-[10px] text-black/25 mt-2">
                  <Clock className="w-2.5 h-2.5" />
                  <span>{article.time}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Pull Quote */}
      <section className="px-6 md:px-10 py-14 border-b border-black/10 bg-gray-50">
        <motion.div {...fadeIn} className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-px bg-red-600 mx-auto mb-6" />
          <blockquote className="text-2xl md:text-3xl font-serif italic leading-relaxed text-black/80">
            &ldquo;{t({
              en: "The future belongs to those who can see the patterns in chaos and find meaning in the noise.",
              ko: "미래는 혼돈 속에서 패턴을 보고 소음 속에서 의미를 찾는 사람들의 것이다.",
              zh: "未来属于那些能在混乱中看到规律、在噪音中找到意义的人。",
              ja: "未来は混沌の中にパターンを見出し、ノイズの中に意味を見つけることができる人のものだ。",
            })}&rdquo;
          </blockquote>
          <p className="text-sm text-black/40 mt-4 font-serif">— Dr. Elena Morrison</p>
          <div className="w-16 h-px bg-red-600 mx-auto mt-6" />
        </motion.div>
      </section>

      {/* Two-Column Layout */}
      <section className="px-6 md:px-10 py-10 border-b border-black/10">
        <motion.div {...fadeIn} className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="md:col-span-2 space-y-4">
            <h3 className="text-2xl font-serif font-bold mb-4">
              {t({ en: "In-Depth Analysis", ko: "심층 분석", zh: "深度分析", ja: "詳細分析" })}
            </h3>
            {[1, 2, 3].map((i) => (
              <p key={i} className="text-sm text-black/60 leading-relaxed">
                {t({
                  en: `[Paragraph ${i}: Detailed analysis content exploring the intersection of technology, design, and culture. This section provides long-form journalism that goes beyond surface-level reporting to examine the deeper implications and hidden connections that shape our understanding of the modern world.]`,
                  ko: `[문단 ${i}: 기술, 디자인, 문화의 교차점을 탐구하는 상세 분석 콘텐츠. 이 섹션은 표면적 보도를 넘어 현대 세계에 대한 이해를 형성하는 더 깊은 함의와 숨겨진 연결을 살펴보는 장문의 저널리즘을 제공합니다.]`,
                  zh: `[段落 ${i}: 探索技术、设计和文化交汇点的详细分析内容。本节提供深入的长篇新闻报道，超越表面报道，审视塑造我们对现代世界理解的深层含义和隐藏联系。]`,
                  ja: `[段落 ${i}: テクノロジー、デザイン、文化の交差点を探る詳細な分析コンテンツ。このセクションは表面的な報道を超えて、現代世界の理解を形成する深い意味と隠れたつながりを検証する長編ジャーナリズムを提供します。]`,
                })}
              </p>
            ))}
          </div>
          <div className="space-y-5">
            <h4 className="text-xs font-bold uppercase tracking-widest text-black/40 pb-2 border-b border-black/10">
              {t({ en: "TRENDING NOW", ko: "트렌딩", zh: "热门话题", ja: "トレンド" })}
            </h4>
            {sidebarItems.map((item, i) => (
              <div key={i} className="flex gap-3 items-start">
                <div className={`${item.color} w-16 h-16 rounded-lg shrink-0 flex items-center justify-center`}>
                  <BookOpen className="w-4 h-4 text-black/20" />
                </div>
                <div>
                  <h5 className="text-sm font-serif font-bold leading-snug">
                    {t({
                      en: `[Trending Article Title ${i + 1}]`,
                      ko: `[트렌딩 기사 제목 ${i + 1}]`,
                      zh: `[热门文章标题 ${i + 1}]`,
                      ja: `[トレンド記事タイトル ${i + 1}]`,
                    })}
                  </h5>
                  <span className="text-[10px] text-black/30 mt-0.5 block">
                    {t({ en: "2 days ago", ko: "2일 전", zh: "2天前", ja: "2日前" })}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Opinion Section */}
      <section className="px-6 md:px-10 py-10 bg-gray-50 border-b border-black/10">
        <motion.div {...fadeIn} className="max-w-6xl mx-auto">
          <h3 className="text-xs font-bold uppercase tracking-widest text-black/40 mb-6">
            {t({ en: "OPINION & PERSPECTIVES", ko: "의견 & 관점", zh: "观点与视角", ja: "意見と視点" })}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {opinions.map((op, i) => (
              <div key={i} className="bg-white rounded-xl p-5 border border-black/5">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`${op.color} w-10 h-10 rounded-full`} />
                  <div>
                    <p className="text-sm font-bold">
                      {t({ en: `[Columnist ${i + 1}]`, ko: `[칼럼니스트 ${i + 1}]`, zh: `[专栏作家 ${i + 1}]`, ja: `[コラムニスト ${i + 1}]` })}
                    </p>
                    <p className="text-[10px] text-black/30">{t({ en: "Contributing Writer", ko: "기고 작가", zh: "特约撰稿人", ja: "寄稿者" })}</p>
                  </div>
                </div>
                <h4 className="font-serif font-bold text-base mb-2 leading-snug">
                  {t({
                    en: `[Opinion piece headline about current trends ${i + 1}]`,
                    ko: `[현재 트렌드에 대한 오피니언 헤드라인 ${i + 1}]`,
                    zh: `[关于当前趋势的观点文章标题 ${i + 1}]`,
                    ja: `[現在のトレンドに関するオピニオン見出し ${i + 1}]`,
                  })}
                </h4>
                <p className="text-xs text-black/50 leading-relaxed">
                  {t({
                    en: "[A thoughtful perspective on the evolving landscape of industry and culture.]",
                    ko: "[산업과 문화의 변화하는 풍경에 대한 사려 깊은 관점.]",
                    zh: "[对行业和文化不断变化的格局的深思熟虑的观点。]",
                    ja: "[業界と文化の変化する風景に対する思慮深い視点。]",
                  })}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Subscribe Banner */}
      <section className="px-6 md:px-10 py-10 bg-red-600 text-white">
        <motion.div {...fadeIn} className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-serif font-bold mb-2">
              {t({ en: "Subscribe to The Chronicle", ko: "더 크로니클 구독하기", zh: "订阅编年史报", ja: "ザ・クロニクルを購読" })}
            </h3>
            <p className="text-sm text-white/80">
              {t({ en: "Award-winning journalism delivered to your inbox.", ko: "수상 경력의 저널리즘을 받아보세요.", zh: "将获奖新闻报道送到您的收件箱。", ja: "受賞歴のあるジャーナリズムをお届けします。" })}
            </p>
          </div>
          <button className="px-8 py-3 bg-white text-red-600 font-bold text-sm rounded-full hover:bg-white/90 transition-colors shrink-0">
            {t({ en: "Subscribe Now — $4.99/mo", ko: "지금 구독 — 월 $4.99", zh: "立即订阅 — $4.99/月", ja: "今すぐ購読 — $4.99/月" })}
          </button>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-10 py-8 border-t border-black/10">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-xs text-black/40">
          {[
            { title: { en: "SECTIONS", ko: "섹션", zh: "版块", ja: "セクション" }, items: ["Politics", "Technology", "Culture", "Design"] },
            { title: { en: "COMPANY", ko: "회사", zh: "公司", ja: "会社" }, items: ["About", "Careers", "Contact", "Advertise"] },
            { title: { en: "SUBSCRIBE", ko: "구독", zh: "订阅", ja: "購読" }, items: ["Digital", "Print", "Gift", "Student"] },
            { title: { en: "LEGAL", ko: "법률", zh: "法律", ja: "法務" }, items: ["Terms", "Privacy", "Cookies", "Ethics"] },
          ].map((col, i) => (
            <div key={i}>
              <h5 className="font-bold uppercase tracking-widest text-black/25 mb-3">{t(col.title)}</h5>
              <ul className="space-y-1.5">
                {col.items.map((item) => (
                  <li key={item} className="hover:text-black transition-colors cursor-pointer">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="max-w-6xl mx-auto mt-6 pt-4 border-t border-black/5 text-[10px] text-black/20 flex justify-between">
          <span>&copy; 2026 The Chronicle</span>
          <span>{t({ en: "Journalism for a better world", ko: "더 나은 세상을 위한 저널리즘", zh: "为更美好世界的新闻业", ja: "より良い世界のためのジャーナリズム" })}</span>
        </div>
      </footer>
    </div>
  );
}
