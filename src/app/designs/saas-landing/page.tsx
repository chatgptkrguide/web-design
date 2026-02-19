"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Zap,
  Shield,
  BarChart3,
  Check,
  ChevronDown,
  Layers,
  Globe,
  Lock,
  Rocket,
  Users,
  Code,
  GitBranch,
  Terminal,
  Star,
  Twitter,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import { useI18n } from "@/i18n/context";
import LanguageSwitcher from "@/components/common/LanguageSwitcher";

/* ─── Animation Variants ─── */
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

/* ─── Navbar ─── */
function Navbar() {
  const { t } = useI18n();

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0A0A0A]/80 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            {t({ en: "Back", ko: "돌아가기", zh: "返回", ja: "戻る" })}
          </Link>
          <div className="hidden h-4 w-px bg-white/10 sm:block" />
          <span className="hidden text-sm font-semibold text-white sm:block">
            {t({ en: "Velocity", ko: "Velocity", zh: "Velocity", ja: "Velocity" })}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-6 text-sm text-white/50 md:flex">
            <span className="cursor-pointer transition-colors hover:text-white">
              {t({ en: "Features", ko: "기능", zh: "功能", ja: "機能" })}
            </span>
            <span className="cursor-pointer transition-colors hover:text-white">
              {t({ en: "Pricing", ko: "가격", zh: "价格", ja: "料金" })}
            </span>
            <span className="cursor-pointer transition-colors hover:text-white">
              {t({ en: "Docs", ko: "문서", zh: "文档", ja: "ドキュメント" })}
            </span>
          </div>
          <LanguageSwitcher variant="dark" />
        </div>
      </div>
    </motion.nav>
  );
}

/* ─── Hero Section ─── */
function HeroSection() {
  const { t } = useI18n();

  return (
    <section className="relative overflow-hidden px-6 pt-32 pb-20">
      {/* Background gradient orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-20 left-1/4 h-[500px] w-[500px] rounded-full bg-blue-600/15 blur-[120px]" />
        <div className="absolute top-40 right-1/4 h-[400px] w-[400px] rounded-full bg-purple-600/15 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="mx-auto max-w-4xl text-center"
        >
          {/* Badge */}
          <motion.div variants={fadeInUp} className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/70">
            <Rocket className="h-3.5 w-3.5 text-purple-400" />
            {t({ en: "Now in Public Beta", ko: "퍼블릭 베타 출시", zh: "现已公开测试", ja: "パブリックベータ公開中" })}
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={fadeInUp}
            className="mb-6 text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            {t({
              en: "Ship faster with",
              ko: "더 빠르게 출시하세요",
              zh: "更快地交付",
              ja: "より速くリリース",
            })}
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-purple-600 bg-clip-text text-transparent">
              {t({
                en: "modern infrastructure",
                ko: "현대적 인프라와 함께",
                zh: "现代化基础设施",
                ja: "モダンインフラで",
              })}
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeInUp}
            className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/50"
          >
            {t({
              en: "Velocity gives your team the tools to build, deploy, and scale applications with zero configuration. From prototype to production in minutes.",
              ko: "Velocity는 제로 설정으로 애플리케이션을 빌드, 배포, 스케일할 수 있는 도구를 제공합니다. 프로토타입에서 프로덕션까지 단 몇 분이면 충분합니다.",
              zh: "Velocity 为您的团队提供零配置构建、部署和扩展应用的工具。从原型到生产只需几分钟。",
              ja: "Velocityはゼロ設定でアプリケーションの構築、デプロイ、スケーリングを実現。プロトタイプから本番環境まで数分で完了。",
            })}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={fadeInUp} className="flex flex-wrap items-center justify-center gap-4">
            <button className="group flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-purple-500/20 transition-all hover:shadow-purple-500/40">
              {t({ en: "Start for free", ko: "무료로 시작하기", zh: "免费开始", ja: "無料で始める" })}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
            <button className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:border-white/20 hover:bg-white/10">
              <Terminal className="h-4 w-4 text-white/50" />
              {t({ en: "View demo", ko: "데모 보기", zh: "查看演示", ja: "デモを見る" })}
            </button>
          </motion.div>
        </motion.div>

        {/* Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mx-auto mt-16 max-w-5xl"
        >
          <div className="rounded-xl border border-white/10 bg-zinc-900 p-1 shadow-2xl shadow-purple-500/5">
            {/* Titlebar */}
            <div className="flex items-center gap-2 border-b border-white/5 px-4 py-3">
              <div className="h-3 w-3 rounded-full bg-red-500/60" />
              <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
              <div className="h-3 w-3 rounded-full bg-green-500/60" />
              <span className="ml-3 text-xs text-white/30">dashboard.velocity.dev</span>
            </div>
            {/* Mock content */}
            <div className="grid grid-cols-12 gap-3 p-4">
              {/* Sidebar */}
              <div className="col-span-3 hidden space-y-2 rounded-lg bg-white/[0.02] p-3 md:block">
                {[
                  { icon: <Layers className="h-3.5 w-3.5" />, label: "Overview" },
                  { icon: <BarChart3 className="h-3.5 w-3.5" />, label: "Analytics" },
                  { icon: <GitBranch className="h-3.5 w-3.5" />, label: "Deployments" },
                  { icon: <Users className="h-3.5 w-3.5" />, label: "Team" },
                  { icon: <Lock className="h-3.5 w-3.5" />, label: "Settings" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`flex items-center gap-2.5 rounded-md px-3 py-2 text-xs ${
                      i === 0
                        ? "bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-white"
                        : "text-white/30 hover:text-white/50"
                    }`}
                  >
                    {item.icon}
                    {item.label}
                  </div>
                ))}
              </div>
              {/* Main content */}
              <div className="col-span-12 space-y-3 md:col-span-9">
                {/* Stats row */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: "Requests", value: "2.4M", change: "+12%" },
                    { label: "Latency", value: "23ms", change: "-8%" },
                    { label: "Uptime", value: "99.99%", change: "+0.01%" },
                  ].map((stat, i) => (
                    <div key={i} className="rounded-lg border border-white/5 bg-white/[0.02] p-3">
                      <p className="text-[10px] text-white/30">{stat.label}</p>
                      <p className="mt-1 text-lg font-bold text-white">{stat.value}</p>
                      <p className="text-[10px] text-green-400">{stat.change}</p>
                    </div>
                  ))}
                </div>
                {/* Chart placeholder */}
                <div className="rounded-lg border border-white/5 bg-white/[0.02] p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-xs text-white/40">Traffic Overview</span>
                    <span className="text-[10px] text-white/20">Last 7 days</span>
                  </div>
                  <div className="flex h-24 items-end gap-1.5">
                    {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-sm bg-gradient-to-t from-blue-500/30 to-purple-500/30"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </div>
                {/* Deploy list */}
                <div className="space-y-1.5">
                  {[
                    { name: "main", status: "Ready", time: "2m ago" },
                    { name: "feat/auth", status: "Building", time: "5m ago" },
                  ].map((deploy, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2"
                    >
                      <div className="flex items-center gap-2">
                        <div
                          className={`h-2 w-2 rounded-full ${
                            deploy.status === "Ready" ? "bg-green-400" : "bg-yellow-400 animate-pulse"
                          }`}
                        />
                        <span className="text-xs text-white/60">{deploy.name}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-[10px] text-white/30">{deploy.status}</span>
                        <span className="text-[10px] text-white/20">{deploy.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Logo Cloud ─── */
function LogoCloud() {
  const { t } = useI18n();
  const companies = ["Acme Corp", "Globex", "Initech", "Umbrella", "Cyberdyne", "Soylent"];

  return (
    <section className="border-y border-white/5 px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mb-10 text-center text-sm tracking-widest text-white/30 uppercase"
        >
          {t({
            en: "Trusted by teams at industry-leading companies",
            ko: "업계 선도 기업의 팀들이 신뢰합니다",
            zh: "深受行业领先企业团队的信赖",
            ja: "業界をリードする企業のチームに信頼されています",
          })}
        </motion.p>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-6"
        >
          {companies.map((name, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="flex items-center justify-center rounded-lg border border-white/5 bg-white/[0.02] px-4 py-4"
            >
              <span className="text-sm font-semibold tracking-wide text-white/25">{name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Features Section ─── */
function FeaturesSection() {
  const { t } = useI18n();

  const features = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: t({ en: "Lightning Fast Builds", ko: "초고속 빌드", zh: "闪电般快速构建", ja: "超高速ビルド" }),
      description: t({
        en: "Incremental builds powered by smart caching. Go from code push to live deployment in under 10 seconds.",
        ko: "스마트 캐싱 기반의 증분 빌드. 코드 푸시부터 라이브 배포까지 10초 이내.",
        zh: "智能缓存驱动的增量构建。从代码推送到上线部署不到10秒。",
        ja: "スマートキャッシュによるインクリメンタルビルド。コードプッシュからライブデプロイまで10秒以内。",
      }),
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: t({ en: "Enterprise Security", ko: "엔터프라이즈 보안", zh: "企业级安全", ja: "エンタープライズセキュリティ" }),
      description: t({
        en: "SOC2 compliant with end-to-end encryption, SSO, and role-based access control out of the box.",
        ko: "SOC2 준수, 엔드투엔드 암호화, SSO, 역할 기반 접근 제어를 기본 제공합니다.",
        zh: "SOC2合规，开箱即用的端到端加密、SSO和基于角色的访问控制。",
        ja: "SOC2準拠、エンドツーエンド暗号化、SSO、ロールベースアクセス制御を標準搭載。",
      }),
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: t({ en: "Real-time Analytics", ko: "실시간 분석", zh: "实时分析", ja: "リアルタイム分析" }),
      description: t({
        en: "Monitor performance, errors, and user metrics with built-in observability dashboards and alerts.",
        ko: "내장된 관측 대시보드와 알림으로 성능, 오류, 사용자 메트릭을 모니터링하세요.",
        zh: "通过内置的可观测性仪表盘和警报监控性能、错误和用户指标。",
        ja: "内蔵のオブザーバビリティダッシュボードとアラートでパフォーマンス、エラー、ユーザーメトリクスを監視。",
      }),
      gradient: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="mb-14 text-center"
        >
          <motion.p variants={fadeInUp} className="mb-3 text-sm font-semibold tracking-widest text-purple-400 uppercase">
            {t({ en: "Features", ko: "기능", zh: "功能", ja: "機能" })}
          </motion.p>
          <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-white sm:text-4xl">
            {t({
              en: "Everything you need to ship",
              ko: "출시에 필요한 모든 것",
              zh: "发布所需的一切",
              ja: "リリースに必要なすべて",
            })}
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="grid gap-6 md:grid-cols-3"
        >
          {features.map((feature, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="group relative rounded-2xl border border-white/5 bg-white/[0.02] p-8 transition-all duration-300 hover:border-white/10 hover:bg-white/[0.04]"
            >
              {/* Gradient border on hover */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className={`absolute inset-[-1px] rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-20`} />
                <div className="absolute inset-[1px] rounded-2xl bg-[#0A0A0A]" />
              </div>
              <div className="relative">
                <div className={`mb-5 inline-flex rounded-xl bg-gradient-to-br ${feature.gradient} p-3 text-white shadow-lg`}>
                  {feature.icon}
                </div>
                <h3 className="mb-3 text-lg font-semibold text-white">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-white/45">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ─── How It Works Section ─── */
function HowItWorksSection() {
  const { t } = useI18n();

  const steps = [
    {
      number: "01",
      title: t({ en: "Connect your repo", ko: "레포지토리 연결", zh: "连接您的仓库", ja: "リポジトリを接続" }),
      description: t({
        en: "Import your Git repository from GitHub, GitLab, or Bitbucket. We auto-detect your framework and configure the build pipeline.",
        ko: "GitHub, GitLab 또는 Bitbucket에서 Git 레포지토리를 가져오세요. 프레임워크를 자동 감지하고 빌드 파이프라인을 구성합니다.",
        zh: "从GitHub、GitLab或Bitbucket导入您的Git仓库。我们自动检测框架并配置构建管道。",
        ja: "GitHub、GitLab、BitbucketからGitリポジトリをインポート。フレームワークを自動検出しビルドパイプラインを構成します。",
      }),
    },
    {
      number: "02",
      title: t({ en: "Configure & Deploy", ko: "구성 및 배포", zh: "配置与部署", ja: "設定＆デプロイ" }),
      description: t({
        en: "Set environment variables, choose regions, and deploy with a single click. Preview deployments are created for every pull request.",
        ko: "환경 변수를 설정하고, 리전을 선택한 후, 클릭 한 번으로 배포하세요. 모든 풀 리퀘스트에 프리뷰 배포가 생성됩니다.",
        zh: "设置环境变量，选择区域，一键部署。每个拉取请求都会创建预览部署。",
        ja: "環境変数の設定、リージョンの選択、ワンクリックでデプロイ。すべてのプルリクエストにプレビューデプロイを作成。",
      }),
    },
    {
      number: "03",
      title: t({ en: "Scale globally", ko: "글로벌 스케일링", zh: "全球扩展", ja: "グローバルにスケール" }),
      description: t({
        en: "Auto-scale from zero to millions of requests. Our edge network spans 40+ regions worldwide with built-in DDoS protection.",
        ko: "제로에서 수백만 요청까지 자동 확장. 내장 DDoS 보호와 함께 전 세계 40개 이상의 리전을 커버하는 엣지 네트워크.",
        zh: "从零自动扩展到数百万请求。我们的边缘网络覆盖全球40+区域，内置DDoS防护。",
        ja: "ゼロから数百万リクエストまで自動スケール。内蔵DDoS保護付き40以上のリージョンのエッジネットワーク。",
      }),
    },
  ];

  return (
    <section className="border-t border-white/5 px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="mb-14 text-center"
        >
          <motion.p variants={fadeInUp} className="mb-3 text-sm font-semibold tracking-widest text-blue-400 uppercase">
            {t({ en: "How It Works", ko: "작동 방식", zh: "工作原理", ja: "仕組み" })}
          </motion.p>
          <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-white sm:text-4xl">
            {t({
              en: "Up and running in three steps",
              ko: "세 단계로 바로 시작",
              zh: "三步即可启动运行",
              ja: "3ステップですぐに開始",
            })}
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="relative grid gap-8 md:grid-cols-3"
        >
          {/* Connecting line */}
          <div className="pointer-events-none absolute top-16 right-0 left-0 hidden h-px bg-gradient-to-r from-transparent via-white/10 to-transparent md:block" />

          {steps.map((step, i) => (
            <motion.div key={i} variants={fadeInUp} className="relative text-center">
              <div className="relative mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-zinc-900">
                <span className="bg-gradient-to-br from-blue-400 to-purple-400 bg-clip-text text-xl font-bold text-transparent">
                  {step.number}
                </span>
              </div>
              <h3 className="mb-3 text-lg font-semibold text-white">{step.title}</h3>
              <p className="mx-auto max-w-xs text-sm leading-relaxed text-white/40">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Pricing Section ─── */
function PricingSection() {
  const { t } = useI18n();

  const plans = [
    {
      name: t({ en: "Free", ko: "무료", zh: "免费", ja: "無料" }),
      price: "$0",
      period: t({ en: "/month", ko: "/월", zh: "/月", ja: "/月" }),
      description: t({
        en: "Perfect for side projects and experiments.",
        ko: "사이드 프로젝트와 실험에 적합합니다.",
        zh: "非常适合副项目和实验。",
        ja: "サイドプロジェクトや実験に最適。",
      }),
      features: [
        t({ en: "3 projects", ko: "프로젝트 3개", zh: "3个项目", ja: "3プロジェクト" }),
        t({ en: "100GB bandwidth", ko: "100GB 대역폭", zh: "100GB带宽", ja: "100GB帯域幅" }),
        t({ en: "SSL certificates", ko: "SSL 인증서", zh: "SSL证书", ja: "SSL証明書" }),
        t({ en: "Community support", ko: "커뮤니티 지원", zh: "社区支持", ja: "コミュニティサポート" }),
      ],
      cta: t({ en: "Get started", ko: "시작하기", zh: "开始使用", ja: "始める" }),
      highlighted: false,
    },
    {
      name: t({ en: "Pro", ko: "프로", zh: "专业版", ja: "プロ" }),
      price: "$29",
      period: t({ en: "/month", ko: "/월", zh: "/月", ja: "/月" }),
      description: t({
        en: "For growing teams that need more power.",
        ko: "더 많은 기능이 필요한 성장 중인 팀을 위해.",
        zh: "为需要更多功能的成长团队而设。",
        ja: "より多くのパワーが必要な成長チーム向け。",
      }),
      features: [
        t({ en: "Unlimited projects", ko: "무제한 프로젝트", zh: "无限项目", ja: "無制限プロジェクト" }),
        t({ en: "1TB bandwidth", ko: "1TB 대역폭", zh: "1TB带宽", ja: "1TB帯域幅" }),
        t({ en: "Advanced analytics", ko: "고급 분석", zh: "高级分析", ja: "高度な分析" }),
        t({ en: "Priority support", ko: "우선 지원", zh: "优先支持", ja: "優先サポート" }),
        t({ en: "Custom domains", ko: "커스텀 도메인", zh: "自定义域名", ja: "カスタムドメイン" }),
        t({ en: "Team collaboration", ko: "팀 협업", zh: "团队协作", ja: "チームコラボレーション" }),
      ],
      cta: t({ en: "Start free trial", ko: "무료 체험 시작", zh: "开始免费试用", ja: "無料トライアル開始" }),
      highlighted: true,
    },
    {
      name: t({ en: "Enterprise", ko: "엔터프라이즈", zh: "企业版", ja: "エンタープライズ" }),
      price: t({ en: "Custom", ko: "맞춤형", zh: "定制", ja: "カスタム" }),
      period: "",
      description: t({
        en: "For organizations with advanced needs.",
        ko: "고급 요구 사항이 있는 조직을 위해.",
        zh: "为有高级需求的组织而设。",
        ja: "高度なニーズを持つ組織向け。",
      }),
      features: [
        t({ en: "Everything in Pro", ko: "프로의 모든 기능", zh: "专业版所有功能", ja: "プロの全機能" }),
        t({ en: "SSO & SAML", ko: "SSO 및 SAML", zh: "SSO和SAML", ja: "SSO＆SAML" }),
        t({ en: "99.99% SLA", ko: "99.99% SLA", zh: "99.99% SLA", ja: "99.99% SLA" }),
        t({ en: "Dedicated support", ko: "전담 지원", zh: "专属支持", ja: "専任サポート" }),
        t({ en: "Custom integrations", ko: "커스텀 연동", zh: "自定义集成", ja: "カスタム連携" }),
      ],
      cta: t({ en: "Contact sales", ko: "영업팀 문의", zh: "联系销售", ja: "営業に問い合わせ" }),
      highlighted: false,
    },
  ];

  return (
    <section className="border-t border-white/5 px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="mb-14 text-center"
        >
          <motion.p variants={fadeInUp} className="mb-3 text-sm font-semibold tracking-widest text-purple-400 uppercase">
            {t({ en: "Pricing", ko: "가격", zh: "价格", ja: "料金" })}
          </motion.p>
          <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-white sm:text-4xl">
            {t({
              en: "Simple, transparent pricing",
              ko: "단순하고 투명한 가격",
              zh: "简单透明的定价",
              ja: "シンプルで透明な料金",
            })}
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="grid gap-6 md:grid-cols-3"
        >
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className={`relative rounded-2xl border p-8 ${
                plan.highlighted
                  ? "border-transparent bg-white/[0.04]"
                  : "border-white/5 bg-white/[0.02]"
              }`}
            >
              {/* Gradient border for highlighted */}
              {plan.highlighted && (
                <>
                  <div className="absolute inset-[-1px] rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 opacity-40" />
                  <div className="absolute inset-[1px] rounded-2xl bg-[#0f0f0f]" />
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-3 py-0.5 text-xs font-semibold text-white">
                    {t({ en: "Popular", ko: "인기", zh: "热门", ja: "人気" })}
                  </div>
                </>
              )}

              <div className="relative">
                <h3 className="mb-2 text-lg font-semibold text-white">{plan.name}</h3>
                <div className="mb-1 flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-sm text-white/30">{plan.period}</span>
                </div>
                <p className="mb-6 text-sm text-white/40">{plan.description}</p>

                <button
                  className={`mb-6 w-full rounded-xl py-3 text-sm font-semibold transition-all ${
                    plan.highlighted
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40"
                      : "border border-white/10 bg-white/5 text-white hover:bg-white/10"
                  }`}
                >
                  {plan.cta}
                </button>

                <ul className="space-y-3">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm text-white/50">
                      <Check className="h-4 w-4 shrink-0 text-purple-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Testimonials Section ─── */
function TestimonialsSection() {
  const { t } = useI18n();

  const testimonials = [
    {
      quote: t({
        en: "Velocity cut our deployment time from 15 minutes to under 30 seconds. Our engineering team can now focus on building features, not fighting infrastructure.",
        ko: "Velocity는 배포 시간을 15분에서 30초 미만으로 단축했습니다. 이제 엔지니어링 팀은 인프라가 아닌 기능 개발에 집중할 수 있습니다.",
        zh: "Velocity将我们的部署时间从15分钟缩短到了30秒以内。我们的工程团队现在可以专注于构建功能而非处理基础设施。",
        ja: "Velocityはデプロイ時間を15分から30秒未満に短縮しました。エンジニアリングチームはインフラではなく機能開発に集中できるようになりました。",
      }),
      name: "Sarah Chen",
      role: t({ en: "CTO", ko: "CTO", zh: "CTO", ja: "CTO" }),
      company: "TechFlow",
    },
    {
      quote: t({
        en: "The analytics dashboard alone is worth the price. We identified a critical performance bottleneck within hours of enabling Velocity's monitoring.",
        ko: "분석 대시보드만으로도 가격 이상의 가치가 있습니다. Velocity 모니터링을 활성화한 후 몇 시간 만에 중요한 성능 병목 현상을 발견했습니다.",
        zh: "仅分析仪表盘就物超所值。启用Velocity监控后数小时内，我们就发现了关键的性能瓶颈。",
        ja: "分析ダッシュボードだけでも価格以上の価値があります。Velocityのモニタリングを有効にして数時間以内に重要なパフォーマンスのボトルネックを特定しました。",
      }),
      name: "Marcus Johnson",
      role: t({ en: "Lead Engineer", ko: "리드 엔지니어", zh: "首席工程师", ja: "リードエンジニア" }),
      company: "DataStack",
    },
    {
      quote: t({
        en: "Moving from our old CI/CD pipeline to Velocity was seamless. Zero downtime migration, incredible support team, and our developers love the DX.",
        ko: "기존 CI/CD 파이프라인에서 Velocity로의 전환은 매끄러웠습니다. 제로 다운타임 마이그레이션, 놀라운 지원 팀, 그리고 개발자들이 DX를 사랑합니다.",
        zh: "从旧的CI/CD管道迁移到Velocity毫无障碍。零停机迁移，出色的支持团队，开发者们都喜欢这个开发体验。",
        ja: "従来のCI/CDパイプラインからVelocityへの移行はシームレスでした。ゼロダウンタイム移行、素晴らしいサポートチーム、そして開発者はDXを気に入っています。",
      }),
      name: "Yuki Tanaka",
      role: t({ en: "VP Engineering", ko: "VP 엔지니어링", zh: "工程副总裁", ja: "VPエンジニアリング" }),
      company: "NexGen AI",
    },
  ];

  return (
    <section className="border-t border-white/5 px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="mb-14 text-center"
        >
          <motion.p variants={fadeInUp} className="mb-3 text-sm font-semibold tracking-widest text-blue-400 uppercase">
            {t({ en: "Testimonials", ko: "고객 후기", zh: "客户评价", ja: "お客様の声" })}
          </motion.p>
          <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-white sm:text-4xl">
            {t({
              en: "Loved by developers worldwide",
              ko: "전 세계 개발자들이 사랑합니다",
              zh: "深受全球开发者喜爱",
              ja: "世界中の開発者に愛されています",
            })}
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="grid gap-6 md:grid-cols-3"
        >
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="rounded-2xl border border-white/5 bg-white/[0.02] p-8"
            >
              <div className="mb-5 flex gap-1">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <p className="mb-6 text-sm leading-relaxed text-white/50">&ldquo;{item.quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 text-sm font-bold text-white/60">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{item.name}</p>
                  <p className="text-xs text-white/30">
                    {item.role}, {item.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ─── FAQ Section ─── */
function FAQSection() {
  const { t } = useI18n();

  const faqs = [
    {
      question: t({
        en: "How does the free plan work?",
        ko: "무료 플랜은 어떻게 작동하나요?",
        zh: "免费计划如何运作？",
        ja: "無料プランはどのように機能しますか？",
      }),
      answer: t({
        en: "The free plan includes 3 projects, 100GB bandwidth, and SSL certificates. No credit card required. You can upgrade to Pro at any time as your needs grow.",
        ko: "무료 플랜에는 프로젝트 3개, 100GB 대역폭, SSL 인증서가 포함됩니다. 신용카드가 필요 없습니다. 필요에 따라 언제든지 프로로 업그레이드할 수 있습니다.",
        zh: "免费计划包括3个项目、100GB带宽和SSL证书。无需信用卡。随着需求增长，您可以随时升级到专业版。",
        ja: "無料プランにはプロジェクト3つ、100GB帯域幅、SSL証明書が含まれます。クレジットカード不要。ニーズに応じていつでもプロにアップグレードできます。",
      }),
    },
    {
      question: t({
        en: "Can I migrate from my existing provider?",
        ko: "기존 프로바이더에서 마이그레이션할 수 있나요?",
        zh: "我可以从现有供应商迁移吗？",
        ja: "既存のプロバイダーから移行できますか？",
      }),
      answer: t({
        en: "Absolutely. We provide zero-downtime migration tools and dedicated support for enterprise customers. Most teams complete the migration in under an hour.",
        ko: "물론입니다. 제로 다운타임 마이그레이션 도구와 엔터프라이즈 고객 전담 지원을 제공합니다. 대부분의 팀이 1시간 이내에 마이그레이션을 완료합니다.",
        zh: "当然可以。我们提供零停机迁移工具和企业客户专属支持。大多数团队在一小时内完成迁移。",
        ja: "もちろんです。ゼロダウンタイムの移行ツールとエンタープライズ顧客向け専任サポートを提供しています。ほとんどのチームは1時間以内に移行を完了します。",
      }),
    },
    {
      question: t({
        en: "What frameworks are supported?",
        ko: "어떤 프레임워크가 지원되나요?",
        zh: "支持哪些框架？",
        ja: "どのフレームワークがサポートされていますか？",
      }),
      answer: t({
        en: "Velocity supports Next.js, Nuxt, SvelteKit, Remix, Astro, and any static site generator out of the box. Custom Docker deployments are also fully supported.",
        ko: "Velocity는 Next.js, Nuxt, SvelteKit, Remix, Astro 및 모든 정적 사이트 생성기를 기본 지원합니다. 커스텀 Docker 배포도 완벽히 지원됩니다.",
        zh: "Velocity开箱支持Next.js、Nuxt、SvelteKit、Remix、Astro和任何静态站点生成器。自定义Docker部署也完全支持。",
        ja: "VelocityはNext.js、Nuxt、SvelteKit、Remix、Astro、および任意のSSGを標準サポートしています。カスタムDockerデプロイも完全対応。",
      }),
    },
    {
      question: t({
        en: "Is there an SLA for uptime?",
        ko: "가동 시간에 대한 SLA가 있나요?",
        zh: "有正常运行时间的SLA吗？",
        ja: "稼働時間のSLAはありますか？",
      }),
      answer: t({
        en: "Enterprise plans include a 99.99% uptime SLA with financial credits for any downtime. Pro plans target 99.9% uptime with our globally distributed edge network.",
        ko: "엔터프라이즈 플랜에는 다운타임에 대한 재정적 크레딧과 함께 99.99% 가동 시간 SLA가 포함됩니다. 프로 플랜은 글로벌 분산 엣지 네트워크를 통해 99.9% 가동 시간을 목표로 합니다.",
        zh: "企业计划包括99.99%正常运行时间SLA，任何停机时间都有财务补偿。专业计划通过全球分布的边缘网络目标达到99.9%正常运行时间。",
        ja: "エンタープライズプランにはダウンタイムに対する金銭的クレジット付きの99.99%稼働時間SLAが含まれます。プロプランはグローバル分散エッジネットワークで99.9%の稼働時間を目標としています。",
      }),
    },
  ];

  return (
    <section className="border-t border-white/5 px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="mb-14 text-center"
        >
          <motion.p variants={fadeInUp} className="mb-3 text-sm font-semibold tracking-widest text-purple-400 uppercase">
            {t({ en: "FAQ", ko: "자주 묻는 질문", zh: "常见问题", ja: "よくある質問" })}
          </motion.p>
          <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-white sm:text-4xl">
            {t({
              en: "Frequently asked questions",
              ko: "자주 묻는 질문",
              zh: "常见问题解答",
              ja: "よくある質問",
            })}
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="space-y-4"
        >
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="rounded-xl border border-white/5 bg-white/[0.02] p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-sm font-semibold text-white">{faq.question}</h3>
                <ChevronDown className="mt-0.5 h-4 w-4 shrink-0 text-white/20" />
              </div>
              <p className="mt-3 text-sm leading-relaxed text-white/40">{faq.answer}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ─── CTA Banner ─── */
function CTABanner() {
  const { t } = useI18n();

  return (
    <section className="px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-purple-600 to-purple-700 p-12 text-center sm:p-16"
      >
        {/* Noise overlay */}
        <div className="pointer-events-none absolute inset-0 opacity-10" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")" }} />

        <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          {t({
            en: "Ready to accelerate?",
            ko: "가속할 준비가 되셨나요?",
            zh: "准备好加速了吗？",
            ja: "加速する準備はできましたか？",
          })}
        </h2>
        <p className="mx-auto mb-8 max-w-xl text-base text-white/70">
          {t({
            en: "Join thousands of developers shipping faster with Velocity. Start free, no credit card required.",
            ko: "Velocity로 더 빠르게 출시하는 수천 명의 개발자와 함께하세요. 무료로 시작, 신용카드 필요 없음.",
            zh: "加入数千名使用Velocity更快交付的开发者。免费开始，无需信用卡。",
            ja: "Velocityでより速くリリースする数千の開発者に参加しましょう。無料で開始、クレジットカード不要。",
          })}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button className="flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 text-sm font-semibold text-purple-700 shadow-lg transition-all hover:bg-white/90">
            {t({ en: "Get started for free", ko: "무료로 시작하기", zh: "免费开始", ja: "無料で始める" })}
            <ArrowRight className="h-4 w-4" />
          </button>
          <button className="rounded-xl border border-white/30 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:border-white/50 hover:bg-white/10">
            {t({ en: "Talk to sales", ko: "영업팀 문의", zh: "联系销售", ja: "営業に相談" })}
          </button>
        </div>
      </motion.div>
    </section>
  );
}

/* ─── Footer ─── */
function Footer() {
  const { t } = useI18n();

  const columns = [
    {
      title: t({ en: "Product", ko: "제품", zh: "产品", ja: "製品" }),
      links: [
        t({ en: "Features", ko: "기능", zh: "功能", ja: "機能" }),
        t({ en: "Pricing", ko: "가격", zh: "价格", ja: "料金" }),
        t({ en: "Integrations", ko: "연동", zh: "集成", ja: "連携" }),
        t({ en: "Changelog", ko: "변경 로그", zh: "更新日志", ja: "変更履歴" }),
      ],
    },
    {
      title: t({ en: "Resources", ko: "리소스", zh: "资源", ja: "リソース" }),
      links: [
        t({ en: "Documentation", ko: "문서", zh: "文档", ja: "ドキュメント" }),
        t({ en: "API Reference", ko: "API 참조", zh: "API参考", ja: "APIリファレンス" }),
        t({ en: "Blog", ko: "블로그", zh: "博客", ja: "ブログ" }),
        t({ en: "Guides", ko: "가이드", zh: "指南", ja: "ガイド" }),
      ],
    },
    {
      title: t({ en: "Company", ko: "회사", zh: "公司", ja: "会社" }),
      links: [
        t({ en: "About", ko: "소개", zh: "关于", ja: "会社概要" }),
        t({ en: "Careers", ko: "채용", zh: "招聘", ja: "採用" }),
        t({ en: "Press", ko: "보도자료", zh: "新闻", ja: "プレスリリース" }),
        t({ en: "Contact", ko: "문의", zh: "联系", ja: "お問い合わせ" }),
      ],
    },
    {
      title: t({ en: "Legal", ko: "법률", zh: "法律", ja: "法律" }),
      links: [
        t({ en: "Privacy", ko: "개인정보 보호", zh: "隐私", ja: "プライバシー" }),
        t({ en: "Terms", ko: "이용약관", zh: "条款", ja: "利用規約" }),
        t({ en: "Security", ko: "보안", zh: "安全", ja: "セキュリティ" }),
        t({ en: "Cookies", ko: "쿠키", zh: "Cookie", ja: "Cookie" }),
      ],
    },
  ];

  return (
    <footer className="border-t border-white/5 px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-5">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-600">
                <Code className="h-4 w-4 text-white" />
              </div>
              <span className="text-sm font-bold text-white">Velocity</span>
            </div>
            <p className="mb-5 text-xs leading-relaxed text-white/30">
              {t({
                en: "The modern deployment platform for ambitious teams.",
                ko: "야심찬 팀을 위한 현대적 배포 플랫폼.",
                zh: "为有抱负的团队打造的现代部署平台。",
                ja: "野心的なチームのための現代的デプロイプラットフォーム。",
              })}
            </p>
            <div className="flex gap-3">
              {[Twitter, Github, Linkedin, Mail].map((Icon, i) => (
                <div
                  key={i}
                  className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg border border-white/5 bg-white/[0.02] text-white/30 transition-colors hover:text-white/60"
                >
                  <Icon className="h-3.5 w-3.5" />
                </div>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col, i) => (
            <div key={i}>
              <h4 className="mb-4 text-xs font-semibold tracking-wider text-white/50 uppercase">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((link, j) => (
                  <li key={j}>
                    <span className="cursor-pointer text-sm text-white/25 transition-colors hover:text-white/60">
                      {link}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
          <p className="text-xs text-white/20">
            {t({
              en: "\u00A9 2026 Velocity, Inc. All rights reserved.",
              ko: "\u00A9 2026 Velocity, Inc. All rights reserved.",
              zh: "\u00A9 2026 Velocity, Inc. \u7248\u6743\u6240\u6709\u3002",
              ja: "\u00A9 2026 Velocity, Inc. All rights reserved.",
            })}
          </p>
          <div className="flex gap-4">
            <Globe className="h-3.5 w-3.5 text-white/15" />
            <span className="text-xs text-white/15">
              {t({ en: "English", ko: "한국어", zh: "中文", ja: "日本語" })}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─── Main Page ─── */
export default function SaaSLandingPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white antialiased">
      <Navbar />
      <HeroSection />
      <LogoCloud />
      <FeaturesSection />
      <HowItWorksSection />
      <PricingSection />
      <TestimonialsSection />
      <FAQSection />
      <CTABanner />
      <Footer />
    </div>
  );
}
