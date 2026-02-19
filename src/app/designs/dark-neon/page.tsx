"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Zap,
  Shield,
  Cpu,
  Wifi,
  ArrowLeft,
  Star,
  ChevronRight,
  Terminal,
  Github,
  Twitter,
  MessageCircle,
  Globe,
} from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { useI18n } from "@/i18n/context";
import LanguageSwitcher from "@/components/common/LanguageSwitcher";

/* ─── Animated Counter Hook ─── */
function useCounter(target: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) setStarted(true);
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const step = target / (duration / 16);
    const id = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(id);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(id);
  }, [started, target, duration]);

  return { count, ref };
}

/* ─── Neon Glow Text Component ─── */
function NeonText({
  children,
  color = "#00FF41",
  className = "",
  as: Tag = "span",
}: {
  children: React.ReactNode;
  color?: string;
  className?: string;
  as?: "span" | "h1" | "h2" | "h3" | "p";
}) {
  return (
    <Tag
      className={className}
      style={{
        color,
        textShadow: `0 0 7px ${color}, 0 0 10px ${color}, 0 0 21px ${color}, 0 0 42px ${color}, 0 0 82px ${color}`,
      }}
    >
      {children}
    </Tag>
  );
}

/* ─── Feature Card ─── */
function FeatureCard({
  icon: Icon,
  title,
  description,
  color,
  delay,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0.1, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative"
    >
      <div
        className="absolute -inset-px rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"
        style={{ background: `linear-gradient(135deg, ${color}, transparent)` }}
      />
      <div
        className="relative rounded-xl p-6 border border-white/10 backdrop-blur-md bg-white/5"
        style={{
          boxShadow: `inset 0 1px 0 rgba(255,255,255,0.05)`,
        }}
      >
        <motion.div
          className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
          style={{
            border: `1px solid ${color}40`,
            boxShadow: `0 0 20px ${color}20`,
          }}
          whileHover={{
            boxShadow: `0 0 30px ${color}60, 0 0 60px ${color}30`,
          }}
        >
          <Icon size={24} style={{ color }} />
        </motion.div>
        <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
        <p className="text-white/50 text-sm leading-relaxed">{description}</p>
        <motion.div
          className="absolute bottom-0 left-6 right-6 h-px"
          style={{ background: color }}
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.4 }}
        />
      </div>
    </motion.div>
  );
}

/* ─── Stat Card ─── */
function StatCard({
  value,
  suffix,
  label,
  color,
  delay,
}: {
  value: number;
  suffix: string;
  label: string;
  color: string;
  delay: number;
}) {
  const { count, ref } = useCounter(value);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0.1, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="relative p-5 rounded-xl border border-white/5 text-center"
      style={{ background: "rgba(10,10,10,0.9)" }}
    >
      <div
        className="text-4xl md:text-5xl font-black font-mono mb-1"
        style={{
          color,
          textShadow: `0 0 10px ${color}, 0 0 30px ${color}80, 0 0 60px ${color}40`,
        }}
      >
        {count}
        {suffix}
      </div>
      <p className="text-white/40 text-sm uppercase tracking-widest font-mono">
        {label}
      </p>
      <div
        className="absolute top-0 left-0 w-4 h-4 border-t border-l"
        style={{ borderColor: color }}
      />
      <div
        className="absolute top-0 right-0 w-4 h-4 border-t border-r"
        style={{ borderColor: color }}
      />
      <div
        className="absolute bottom-0 left-0 w-4 h-4 border-b border-l"
        style={{ borderColor: color }}
      />
      <div
        className="absolute bottom-0 right-0 w-4 h-4 border-b border-r"
        style={{ borderColor: color }}
      />
    </motion.div>
  );
}

/* ─── Tech Spec Row ─── */
function SpecRow({
  label,
  value,
  delay,
}: {
  label: string;
  value: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0.1, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="flex justify-between items-center py-2.5 border-b border-white/5 font-mono text-sm"
    >
      <span style={{ color: "#00FF41" }}>
        {">"} {label}
      </span>
      <span className="text-white/70">{value}</span>
    </motion.div>
  );
}

/* ─── Review Card ─── */
function ReviewCard({
  name,
  handle,
  text,
  rating,
  accentColor,
  delay,
}: {
  name: string;
  handle: string;
  text: string;
  rating: number;
  accentColor: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0.1, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -4 }}
      className="p-5 rounded-xl border backdrop-blur-sm"
      style={{
        background: "rgba(10,10,10,0.85)",
        borderColor: `${accentColor}30`,
      }}
    >
      <div className="flex items-center gap-1 mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={14}
            fill={i < rating ? "#FF00FF" : "transparent"}
            style={{ color: i < rating ? "#FF00FF" : "rgba(255,255,255,0.2)" }}
          />
        ))}
      </div>
      <p className="text-white/60 text-sm leading-relaxed mb-3">{text}</p>
      <div className="flex items-center gap-3">
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white"
          style={{
            background: `linear-gradient(135deg, ${accentColor}, #00FFFF)`,
          }}
        >
          {name[0]}
        </div>
        <div>
          <p className="text-white text-sm font-medium">{name}</p>
          <p className="text-white/30 text-xs">{handle}</p>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Scanline Overlay ─── */
function Scanlines() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-50"
      style={{
        background:
          "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)",
      }}
    />
  );
}

/* ═══════════════════════════════════════════════
   MAIN PAGE COMPONENT
   ═══════════════════════════════════════════════ */
export default function DarkNeonPage() {
  const { t } = useI18n();

  const features = [
    {
      icon: Zap,
      title: t({
        en: "Quantum Processing",
        ko: "양자 프로세싱",
        zh: "量子处理",
        ja: "量子プロセッシング",
      }),
      description: t({
        en: "Harness the power of next-gen quantum cores for unparalleled computation speeds and zero-latency response times.",
        ko: "차세대 양자 코어의 성능을 활용하여 비교할 수 없는 연산 속도와 제로 레이턴시 응답 시간을 구현합니다.",
        zh: "利用下一代量子核心的力量，实现无与伦比的计算速度和零延迟响应时间。",
        ja: "次世代量子コアのパワーを活用し、比類のない計算速度とゼロレイテンシの応答時間を実現します。",
      }),
      color: "#00FF41",
    },
    {
      icon: Shield,
      title: t({
        en: "Neural Shield Defense",
        ko: "뉴럴 쉴드 방어",
        zh: "神经盾防御",
        ja: "ニューラルシールド防御",
      }),
      description: t({
        en: "AI-powered adaptive security that evolves with threats. Military-grade encryption meets machine learning.",
        ko: "위협과 함께 진화하는 AI 기반 적응형 보안. 군사급 암호화와 머신러닝의 결합.",
        zh: "随威胁进化的AI驱动自适应安全。军事级加密与机器学习的融合。",
        ja: "脅威とともに進化するAI搭載の適応型セキュリティ。軍事レベルの暗号化と機械学習の融合。",
      }),
      color: "#BF00FF",
    },
    {
      icon: Cpu,
      title: t({
        en: "Hyperthreaded Core",
        ko: "하이퍼스레드 코어",
        zh: "超线程核心",
        ja: "ハイパースレッドコア",
      }),
      description: t({
        en: "128-core architecture delivering raw computational power. Built for the demands of tomorrow.",
        ko: "128코어 아키텍처로 순수한 연산 성능을 제공합니다. 미래의 요구에 맞춰 설계되었습니다.",
        zh: "128核架构提供原始计算能力。为明天的需求而构建。",
        ja: "128コアアーキテクチャによる生の計算パワー。明日の需要に応えるために構築。",
      }),
      color: "#00FFFF",
    },
    {
      icon: Wifi,
      title: t({
        en: "Zero-Latency Mesh",
        ko: "제로 레이턴시 메시",
        zh: "零延迟网格",
        ja: "ゼロレイテンシメッシュ",
      }),
      description: t({
        en: "Decentralized mesh network with sub-1ms latency. Stay connected at the speed of thought.",
        ko: "1ms 미만의 지연 시간을 가진 탈중앙 메시 네트워크. 생각의 속도로 연결됩니다.",
        zh: "亚1毫秒延迟的去中心化网状网络。以思维速度保持连接。",
        ja: "1ms以下の遅延を持つ分散型メッシュネットワーク。思考の速度で接続を維持。",
      }),
      color: "#FF00FF",
    },
  ];

  const stats = [
    {
      value: 99,
      suffix: "%",
      label: t({ en: "Efficiency", ko: "효율성", zh: "效率", ja: "効率" }),
      color: "#00FF41",
    },
    {
      value: 500,
      suffix: "TB",
      label: t({ en: "Throughput", ko: "처리량", zh: "吞吐量", ja: "スループット" }),
      color: "#BF00FF",
    },
    {
      value: 128,
      suffix: "x",
      label: t({ en: "Speed", ko: "속도", zh: "速度", ja: "速度" }),
      color: "#00FFFF",
    },
    {
      value: 4,
      suffix: ".9",
      label: t({ en: "Rating", ko: "평점", zh: "评分", ja: "評価" }),
      color: "#FF00FF",
    },
  ];

  const specs = [
    {
      label: "PROCESSOR",
      value: t({
        en: "Quantum Core X-128",
        ko: "양자 코어 X-128",
        zh: "量子核心 X-128",
        ja: "量子コア X-128",
      }),
    },
    {
      label: "MEMORY",
      value: t({
        en: "512 GB Neural RAM",
        ko: "512 GB 뉴럴 RAM",
        zh: "512 GB 神经RAM",
        ja: "512 GB ニューラルRAM",
      }),
    },
    {
      label: "STORAGE",
      value: t({
        en: "8 TB Holographic SSD",
        ko: "8 TB 홀로그래픽 SSD",
        zh: "8 TB 全息SSD",
        ja: "8 TB ホログラフィックSSD",
      }),
    },
    {
      label: "NETWORK",
      value: t({
        en: "10 Gbps Mesh Protocol",
        ko: "10 Gbps 메시 프로토콜",
        zh: "10 Gbps 网格协议",
        ja: "10 Gbps メッシュプロトコル",
      }),
    },
    {
      label: "DISPLAY",
      value: t({
        en: "16K Retinal Projection",
        ko: "16K 망막 투영",
        zh: "16K 视网膜投影",
        ja: "16K 網膜プロジェクション",
      }),
    },
    {
      label: "POWER",
      value: t({
        en: "Fusion Cell - 72hr",
        ko: "퓨전 셀 - 72시간",
        zh: "聚变电池 - 72小时",
        ja: "フュージョンセル - 72時間",
      }),
    },
    {
      label: "OS",
      value: "NeonOS v4.2.1",
    },
    {
      label: "SECURITY",
      value: t({
        en: "Neural Encryption AES-512",
        ko: "뉴럴 암호화 AES-512",
        zh: "神经加密 AES-512",
        ja: "ニューラル暗号化 AES-512",
      }),
    },
  ];

  const reviews = [
    {
      name: "CyberWolf",
      handle: "@cyberwolf_2077",
      text: t({
        en: "This device completely transformed my workflow. The neural interface is beyond anything I've used before. Absolute game-changer.",
        ko: "이 기기가 내 워크플로우를 완전히 바꿔놓았습니다. 뉴럴 인터페이스는 이전에 사용한 어떤 것보다 뛰어납니다.",
        zh: "这个设备彻底改变了我的工作流程。神经接口超越了我以前用过的任何东西。绝对的游戏规则改变者。",
        ja: "このデバイスは私のワークフローを完全に変えました。ニューラルインターフェースは今まで使ったどれよりも優れています。",
      }),
      rating: 5,
      accentColor: "#00FF41",
    },
    {
      name: "NeonRider",
      handle: "@neon_rider_x",
      text: t({
        en: "The quantum processing power is insane. Running complex simulations that used to take hours now complete in minutes.",
        ko: "양자 처리 성능이 미쳤습니다. 몇 시간 걸리던 복잡한 시뮬레이션이 이제 몇 분 만에 완료됩니다.",
        zh: "量子处理能力太疯狂了。以前需要几个小时的复杂模拟现在几分钟就完成了。",
        ja: "量子処理パワーが凄まじい。何時間もかかっていた複雑なシミュレーションが数分で完了します。",
      }),
      rating: 5,
      accentColor: "#BF00FF",
    },
    {
      name: "DataGhost",
      handle: "@data_ghost",
      text: t({
        en: "Sleek design, incredible performance. The mesh network connectivity alone is worth the upgrade. Highly recommended.",
        ko: "세련된 디자인, 놀라운 성능. 메시 네트워크 연결성만으로도 업그레이드할 가치가 있습니다.",
        zh: "时尚的设计，令人难以置信的性能。仅网格网络连接就值得升级。强烈推荐。",
        ja: "洗練されたデザイン、驚異的なパフォーマンス。メッシュネットワーク接続性だけでもアップグレードする価値があります。",
      }),
      rating: 4,
      accentColor: "#00FFFF",
    },
  ];

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <Scanlines />

      {/* CSS Grid Background Animation */}
      <style jsx global>{`
        @keyframes gridPulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        @keyframes neonRingSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes neonRingSpinReverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .neon-grid-bg {
          background-image:
            linear-gradient(rgba(0, 255, 65, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 65, 0.08) 1px, transparent 1px);
          background-size: 60px 60px;
          animation: gridPulse 4s ease-in-out infinite;
        }
        .neon-ring-outer {
          background: conic-gradient(from 0deg, #00FF41, #BF00FF, #00FFFF, #FF00FF, #00FF41);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          padding: 2px;
          animation: neonRingSpin 8s linear infinite;
        }
        .neon-ring-middle {
          animation: neonRingSpinReverse 12s linear infinite;
        }
        .neon-ring-inner {
          animation: neonRingSpin 20s linear infinite;
        }
      `}</style>

      {/* Animated Grid Background (fixed, covers entire page) */}
      <div className="fixed inset-0 neon-grid-bg pointer-events-none z-0" />

      {/* Corner glow accents */}
      <div
        className="fixed top-0 left-0 w-96 h-96 pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(circle, rgba(191,0,255,0.06) 0%, transparent 70%)",
        }}
      />
      <div
        className="fixed bottom-0 right-0 w-96 h-96 pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(circle, rgba(0,255,255,0.06) 0%, transparent 70%)",
        }}
      />

      {/* ─── Navigation ─── */}
      <motion.nav
        initial={{ y: -20, opacity: 0.1 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-40 px-6 py-3 flex items-center justify-between backdrop-blur-md border-b border-white/5"
        style={{ background: "rgba(0,0,0,0.85)" }}
      >
        <Link
          href="/"
          className="flex items-center gap-2 text-white/60 hover:text-white transition-colors"
        >
          <ArrowLeft size={18} />
          <span className="text-sm font-mono">
            {t({ en: "BACK", ko: "뒤로", zh: "返回", ja: "戻る" })}
          </span>
        </Link>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ background: "#00FF41", boxShadow: "0 0 8px #00FF41" }}
            />
            <span
              className="text-xs font-mono tracking-widest"
              style={{ color: "#00FF41" }}
            >
              {t({
                en: "SYSTEM ONLINE",
                ko: "시스템 온라인",
                zh: "系统在线",
                ja: "システムオンライン",
              })}
            </span>
          </div>
          <LanguageSwitcher variant="dark" />
        </div>
      </motion.nav>

      {/* ═══════════════════════════════════════
          SECTION 1: HERO
         ═══════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-16">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(0,255,65,0.05) 0%, transparent 60%)",
          }}
        />

        <div className="relative z-10 text-center max-w-5xl mx-auto">
          <motion.p
            initial={{ opacity: 0.1, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xs md:text-sm font-mono tracking-[0.4em] uppercase mb-6"
            style={{ color: "#BF00FF" }}
          >
            {t({
              en: "[ Initializing System // v4.2.1 ]",
              ko: "[ 시스템 초기화 중 // v4.2.1 ]",
              zh: "[ 系统初始化中 // v4.2.1 ]",
              ja: "[ システム初期化中 // v4.2.1 ]",
            })}
          </motion.p>

          <motion.div
            initial={{ opacity: 0.1, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h1
              className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none mb-4"
              style={{
                color: "#00FF41",
                textShadow:
                  "0 0 10px #00FF41, 0 0 40px #00FF41, 0 0 80px #00FF41",
              }}
            >
              [NEON
              <br />
              <span
                style={{
                  color: "#00FFFF",
                  textShadow:
                    "0 0 10px #00FFFF, 0 0 40px #00FFFF, 0 0 80px #00FFFF",
                }}
              >
                PROTOCOL]
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0.1, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-white/50 text-lg md:text-xl max-w-2xl mx-auto mb-8 font-light"
          >
            {t({
              en: "Next-gen neural interface technology. Redefining the boundary between human cognition and machine intelligence.",
              ko: "차세대 뉴럴 인터페이스 기술. 인간 인지와 기계 지능의 경계를 재정의합니다.",
              zh: "下一代神经接口技术。重新定义人类认知与机器智能之间的边界。",
              ja: "次世代ニューラルインターフェース技術。人間の認知と機械知能の境界を再定義します。",
            })}
          </motion.p>

          <motion.div
            initial={{ opacity: 0.1, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="group relative px-8 py-4 font-mono text-sm tracking-widest uppercase"
              style={{
                border: "1px solid #00FF41",
                color: "#00FF41",
                boxShadow: "0 0 15px #00FF4140, inset 0 0 15px #00FF4120",
              }}
            >
              <motion.div
                className="absolute inset-0"
                style={{ background: "#00FF41" }}
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.1 }}
              />
              <span className="relative flex items-center gap-2">
                {t({
                  en: "Initialize System",
                  ko: "시스템 시작",
                  zh: "初始化系统",
                  ja: "システム起動",
                })}
                <ChevronRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </span>
              <motion.div
                className="absolute inset-0 border"
                style={{ borderColor: "#00FF41" }}
                animate={{
                  boxShadow: [
                    "0 0 5px #00FF4140",
                    "0 0 25px #00FF4180",
                    "0 0 5px #00FF4140",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut" as const,
                }}
              />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-4 font-mono text-sm tracking-widest uppercase text-white/50 hover:text-white transition-colors border border-white/10 hover:border-white/30"
            >
              {t({
                en: "View Specs",
                ko: "사양 보기",
                zh: "查看规格",
                ja: "スペック表示",
              })}
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-px h-10"
              style={{
                background: "linear-gradient(to bottom, #00FF41, transparent)",
              }}
            />
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SECTION 2: FEATURES
         ═══════════════════════════════════════ */}
      <section className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0.1, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p
              className="text-xs font-mono tracking-[0.3em] uppercase mb-3"
              style={{ color: "#BF00FF" }}
            >
              {t({
                en: "// Core Systems",
                ko: "// 핵심 시스템",
                zh: "// 核心系统",
                ja: "// コアシステム",
              })}
            </p>
            <h2
              className="text-4xl md:text-5xl font-black tracking-tight"
              style={{
                color: "#00FFFF",
                textShadow: "0 0 10px #00FFFF, 0 0 30px #00FFFF60",
              }}
            >
              {t({
                en: "[Feature Matrix]",
                ko: "[기능 매트릭스]",
                zh: "[功能矩阵]",
                ja: "[機能マトリックス]",
              })}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {features.map((feature, i) => (
              <FeatureCard key={i} {...feature} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SECTION 3: PRODUCT SHOWCASE
         ═══════════════════════════════════════ */}
      <section className="relative py-20 px-6">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(191,0,255,0.04) 0%, transparent 60%)",
          }}
        />

        <div className="max-w-6xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0.1, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <p
              className="text-xs font-mono tracking-[0.3em] uppercase mb-3"
              style={{ color: "#FF00FF" }}
            >
              {t({
                en: "// Hardware Design",
                ko: "// 하드웨어 설계",
                zh: "// 硬件设计",
                ja: "// ハードウェア設計",
              })}
            </p>
            <h2
              className="text-4xl md:text-5xl font-black tracking-tight"
              style={{
                color: "#BF00FF",
                textShadow: "0 0 10px #BF00FF, 0 0 30px #BF00FF60",
              }}
            >
              {t({
                en: "[Product Showcase]",
                ko: "[제품 쇼케이스]",
                zh: "[产品展示]",
                ja: "[製品ショーケース]",
              })}
            </h2>
          </motion.div>

          {/* Neon Ring with CSS animations */}
          <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
            <div className="absolute inset-0 rounded-full neon-ring-outer" />
            <div
              className="absolute inset-5 rounded-full neon-ring-middle"
              style={{
                border: "1px solid rgba(0,255,65,0.3)",
                boxShadow:
                  "0 0 15px rgba(0,255,65,0.2), inset 0 0 15px rgba(0,255,65,0.1)",
              }}
            />
            <div
              className="absolute inset-10 rounded-full neon-ring-inner"
              style={{
                border: "1px dashed rgba(191,0,255,0.4)",
                boxShadow: "0 0 10px rgba(191,0,255,0.15)",
              }}
            />
            <div className="absolute inset-14 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center border border-white/5">
              <div className="text-center px-4">
                <p
                  className="text-xs tracking-[0.3em] uppercase mb-2"
                  style={{ color: "#00FFFF" }}
                >
                  {t({
                    en: "NEON-X PRO",
                    ko: "네온-X 프로",
                    zh: "霓虹-X 专业版",
                    ja: "ネオン-X プロ",
                  })}
                </p>
                <p className="text-white/40 text-xs font-mono">
                  {t({
                    en: "128-Core Quantum Engine",
                    ko: "128코어 양자 엔진",
                    zh: "128核量子引擎",
                    ja: "128コア量子エンジン",
                  })}
                </p>
                <p
                  className="text-2xl font-black font-mono mt-2"
                  style={{
                    color: "#00FF41",
                    textShadow: "0 0 10px #00FF41",
                  }}
                >
                  $2,499
                </p>
              </div>
            </div>
          </div>

          {/* Spec pills */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {[
              t({ en: "Quantum Core", ko: "양자 코어", zh: "量子核心", ja: "量子コア" }),
              t({ en: "Neural Mesh", ko: "뉴럴 메시", zh: "神经网格", ja: "ニューラルメッシュ" }),
              t({ en: "HoloDisplay", ko: "홀로디스플레이", zh: "全息显示", ja: "ホロディスプレイ" }),
              t({ en: "Fusion Cell", ko: "퓨전 셀", zh: "聚变电池", ja: "フュージョンセル" }),
            ].map((label, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0.1, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="px-4 py-2 rounded-full border font-mono text-xs tracking-wider"
                style={{
                  borderColor: "rgba(0,255,65,0.3)",
                  color: "#00FF41",
                  background: "rgba(0,255,65,0.05)",
                }}
              >
                [{label}]
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SECTION 4: STATS
         ═══════════════════════════════════════ */}
      <section className="relative py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0.1, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <p
              className="text-xs font-mono tracking-[0.3em] uppercase mb-3"
              style={{ color: "#00FF41" }}
            >
              {t({
                en: "// Performance Metrics",
                ko: "// 성능 지표",
                zh: "// 性能指标",
                ja: "// パフォーマンス指標",
              })}
            </p>
            <h2
              className="text-4xl md:text-5xl font-black tracking-tight"
              style={{
                color: "#00FF41",
                textShadow: "0 0 10px #00FF41, 0 0 30px #00FF4160",
              }}
            >
              {t({
                en: "[System Stats]",
                ko: "[시스템 통계]",
                zh: "[系统统计]",
                ja: "[システム統計]",
              })}
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <StatCard key={i} {...stat} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SECTION 5: TECH SPECS
         ═══════════════════════════════════════ */}
      <section className="relative py-20 px-6">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at bottom, rgba(0,255,255,0.03) 0%, transparent 60%)",
          }}
        />

        <div className="max-w-4xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0.1, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <p
              className="text-xs font-mono tracking-[0.3em] uppercase mb-3"
              style={{ color: "#00FFFF" }}
            >
              {t({
                en: "// Technical Specifications",
                ko: "// 기술 사양",
                zh: "// 技术规格",
                ja: "// 技術仕様",
              })}
            </p>
            <h2
              className="text-4xl md:text-5xl font-black tracking-tight"
              style={{
                color: "#00FFFF",
                textShadow: "0 0 10px #00FFFF, 0 0 30px #00FFFF60",
              }}
            >
              {t({
                en: "[Tech Specs]",
                ko: "[기술 사양]",
                zh: "[技术规格]",
                ja: "[テックスペック]",
              })}
            </h2>
          </motion.div>

          {/* Terminal window */}
          <motion.div
            initial={{ opacity: 0.1, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-xl border border-white/10 overflow-hidden bg-zinc-950"
          >
            <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/5">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="ml-3 text-white/30 text-xs font-mono">
                neon-system://specs --verbose
              </span>
            </div>

            <div className="p-5">
              <motion.p
                initial={{ opacity: 0.1 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="font-mono text-xs mb-3"
                style={{ color: "#00FF41" }}
              >
                $ cat /sys/neon/hardware.spec
              </motion.p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
                {specs.map((spec, i) => (
                  <SpecRow key={i} {...spec} delay={i * 0.06} />
                ))}
              </div>

              <motion.p
                initial={{ opacity: 0.1 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="font-mono text-xs mt-3"
                style={{ color: "#00FF41" }}
              >
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                >
                  _
                </motion.span>
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SECTION 6: COMMUNITY / REVIEWS
         ═══════════════════════════════════════ */}
      <section className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0.1, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <p
              className="text-xs font-mono tracking-[0.3em] uppercase mb-3"
              style={{ color: "#FF00FF" }}
            >
              {t({
                en: "// Network Signals",
                ko: "// 네트워크 시그널",
                zh: "// 网络信号",
                ja: "// ネットワークシグナル",
              })}
            </p>
            <h2
              className="text-4xl md:text-5xl font-black tracking-tight"
              style={{
                color: "#FF00FF",
                textShadow: "0 0 10px #FF00FF, 0 0 30px #FF00FF60",
              }}
            >
              {t({
                en: "[Community Feed]",
                ko: "[커뮤니티 피드]",
                zh: "[社区动态]",
                ja: "[コミュニティフィード]",
              })}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {reviews.map((review, i) => (
              <ReviewCard key={i} {...review} delay={i * 0.12} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0.1, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-5 mt-8"
          >
            {[
              { icon: Github, label: "GitHub" },
              { icon: Twitter, label: "Twitter" },
              { icon: MessageCircle, label: "Discord" },
              { icon: Globe, label: "Forum" },
            ].map(({ icon: Icon, label }) => (
              <motion.div
                key={label}
                whileHover={{ y: -2, scale: 1.1 }}
                className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center cursor-pointer hover:border-white/30 transition-colors"
                style={{ background: "rgba(10,10,10,0.8)" }}
              >
                <Icon size={18} className="text-white/40 hover:text-white" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SECTION 7: CTA
         ═══════════════════════════════════════ */}
      <section className="relative py-20 px-6">
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, #00FF41, #BF00FF, #00FFFF, transparent)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(0,255,65,0.04) 0%, transparent 60%)",
          }}
        />

        <div className="max-w-4xl mx-auto relative text-center">
          <motion.div
            initial={{ opacity: 0.1, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p
              className="text-xs font-mono tracking-[0.3em] uppercase mb-4"
              style={{ color: "#BF00FF" }}
            >
              {t({
                en: "// Ready to Upgrade?",
                ko: "// 업그레이드 준비 되셨나요?",
                zh: "// 准备好升级了吗？",
                ja: "// アップグレードの準備はできましたか？",
              })}
            </p>
            <h2
              className="text-5xl md:text-7xl font-black tracking-tight mb-4"
              style={{
                color: "#00FF41",
                textShadow:
                  "0 0 10px #00FF41, 0 0 30px #00FF41, 0 0 60px #00FF4180",
              }}
            >
              {t({
                en: "[Enter The Grid]",
                ko: "[그리드 진입]",
                zh: "[进入网格]",
                ja: "[グリッドに入る]",
              })}
            </h2>
            <p className="text-white/40 text-lg max-w-xl mx-auto mb-8">
              {t({
                en: "Join thousands of operatives already connected to the Neon Protocol network. Your neural upgrade awaits.",
                ko: "이미 네온 프로토콜 네트워크에 연결된 수천 명의 요원들과 함께하세요. 뉴럴 업그레이드가 기다리고 있습니다.",
                zh: "加入已连接到霓虹协议网络的数千名特工。您的神经升级正在等待。",
                ja: "すでにネオンプロトコルネットワークに接続している数千人のオペレーターに参加しましょう。ニューラルアップグレードが待っています。",
              })}
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="relative px-12 py-5 font-mono text-sm tracking-widest uppercase"
              style={{
                background: "linear-gradient(135deg, #00FF4120, #BF00FF20)",
                border: "1px solid #00FF41",
                color: "#00FF41",
              }}
            >
              <motion.div
                className="absolute inset-0"
                animate={{
                  boxShadow: [
                    "0 0 10px #00FF4130, inset 0 0 10px #00FF4110",
                    "0 0 30px #00FF4160, inset 0 0 30px #00FF4130",
                    "0 0 10px #00FF4130, inset 0 0 10px #00FF4110",
                  ],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut" as const,
                }}
              />
              <span className="relative flex items-center gap-2 justify-center">
                {t({
                  en: "Connect Now",
                  ko: "지금 연결",
                  zh: "立即连接",
                  ja: "今すぐ接続",
                })}
                <ChevronRight size={16} />
              </span>
            </motion.button>
          </motion.div>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, #00FFFF, #FF00FF, #00FF41, transparent)",
          }}
        />
      </section>

      {/* ═══════════════════════════════════════
          SECTION 8: FOOTER
         ═══════════════════════════════════════ */}
      <footer className="relative py-12 px-6">
        {/* Top neon accent line */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, #00FF41, #BF00FF, #00FFFF, #FF00FF, transparent)",
          }}
          animate={{ opacity: [0.4, 0.9, 0.4] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" as const }}
        />

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3
                className="text-lg font-black font-mono mb-3"
                style={{
                  color: "#00FF41",
                  textShadow: "0 0 10px #00FF4180",
                }}
              >
                [NEON]
              </h3>
              <p className="text-white/30 text-sm leading-relaxed">
                {t({
                  en: "Next-generation technology for the cybernetically enhanced.",
                  ko: "사이버네틱 강화를 위한 차세대 기술.",
                  zh: "为赛博增强者打造的下一代技术。",
                  ja: "サイバネティック強化のための次世代テクノロジー。",
                })}
              </p>
            </div>

            {[
              {
                title: t({ en: "Products", ko: "제품", zh: "产品", ja: "製品" }),
                links: [
                  t({ en: "Protocol X", ko: "프로토콜 X", zh: "协议 X", ja: "プロトコル X" }),
                  t({ en: "Neural Core", ko: "뉴럴 코어", zh: "神经核心", ja: "ニューラルコア" }),
                  t({ en: "Mesh Hub", ko: "메시 허브", zh: "网格中心", ja: "メッシュハブ" }),
                  t({ en: "HoloLens", ko: "홀로렌즈", zh: "全息镜", ja: "ホロレンズ" }),
                ],
              },
              {
                title: t({ en: "Resources", ko: "리소스", zh: "资源", ja: "リソース" }),
                links: [
                  t({ en: "Documentation", ko: "문서", zh: "文档", ja: "ドキュメント" }),
                  t({ en: "API Reference", ko: "API 레퍼런스", zh: "API参考", ja: "APIリファレンス" }),
                  t({ en: "Changelog", ko: "변경 이력", zh: "变更日志", ja: "変更履歴" }),
                  t({ en: "Status", ko: "상태", zh: "状态", ja: "ステータス" }),
                ],
              },
              {
                title: t({ en: "Company", ko: "회사", zh: "公司", ja: "会社" }),
                links: [
                  t({ en: "About", ko: "소개", zh: "关于", ja: "概要" }),
                  t({ en: "Careers", ko: "채용", zh: "招聘", ja: "採用" }),
                  t({ en: "Press", ko: "보도", zh: "新闻", ja: "プレス" }),
                  t({ en: "Contact", ko: "연락처", zh: "联系", ja: "お問い合わせ" }),
                ],
              },
            ].map((col) => (
              <div key={col.title}>
                <h4 className="text-white/60 text-sm font-mono mb-3">
                  [{col.title}]
                </h4>
                <ul className="space-y-1.5">
                  {col.links.map((link) => (
                    <li key={link}>
                      <span className="text-white/30 text-sm hover:text-white/60 transition-colors cursor-pointer">
                        {link}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/20 text-xs font-mono">
              &copy; 2077 [NEON PROTOCOL]. {t({
                en: "All rights reserved.",
                ko: "모든 권리 보유.",
                zh: "保留所有权利。",
                ja: "全著作権所有。",
              })}
            </p>
            <div className="flex items-center gap-6">
              {[
                t({ en: "Privacy", ko: "개인정보", zh: "隐私", ja: "プライバシー" }),
                t({ en: "Terms", ko: "이용약관", zh: "条款", ja: "利用規約" }),
                t({ en: "Security", ko: "보안", zh: "安全", ja: "セキュリティ" }),
              ].map((link) => (
                <span
                  key={link}
                  className="text-white/20 text-xs font-mono hover:text-white/40 transition-colors cursor-pointer"
                >
                  [{link}]
                </span>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
