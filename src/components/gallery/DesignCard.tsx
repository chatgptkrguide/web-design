"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Eye } from "lucide-react";
import { useI18n } from "@/i18n/context";
import type { DesignItem } from "@/lib/designs";

interface DesignCardProps {
  design: DesignItem;
  index: number;
}

export default function DesignCard({ design, index }: DesignCardProps) {
  const { t } = useI18n();
  const [showPreview, setShowPreview] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 15 }}
        transition={{ duration: 0.4, delay: index * 0.06 }}
        layout
      >
        <div className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] transition-all duration-500 hover:border-white/15 hover:bg-white/[0.04]">
          {/* Gradient preview area */}
          <div className="relative h-44 overflow-hidden">
            <div className={`absolute inset-0 bg-gradient-to-br ${design.gradient} opacity-25 group-hover:opacity-40 transition-opacity duration-500`} />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />

            {/* Preview button */}
            <button
              onClick={() => setShowPreview(true)}
              className="absolute top-3 right-3 p-2 rounded-lg bg-black/40 backdrop-blur-sm border border-white/10 text-white/50 hover:text-white hover:bg-black/60 transition-all opacity-0 group-hover:opacity-100"
            >
              <Eye className="w-3.5 h-3.5" />
            </button>

            {/* Category badges */}
            <div className="absolute bottom-3 left-4 flex gap-1.5">
              {design.category.map((cat) => (
                <span
                  key={cat}
                  className="text-[10px] font-mono uppercase tracking-widest text-white/50 bg-white/[0.08] backdrop-blur-sm px-2 py-0.5 rounded"
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>

          {/* Content */}
          <Link href={design.path} className="block p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-[15px] font-semibold text-white mb-1.5 group-hover:text-white/90 transition-colors">
                  {t(design.title)}
                </h3>
                <p className="text-[13px] text-white/35 leading-relaxed line-clamp-2">
                  {t(design.description)}
                </p>
                <p className="text-[11px] text-white/20 mt-2.5 font-mono">
                  {design.inspiration}
                </p>
              </div>
              <div className="shrink-0 mt-0.5 p-1.5 rounded-full bg-white/5 group-hover:bg-white/10 transition-all">
                <ArrowUpRight className="w-3.5 h-3.5 text-white/40 group-hover:text-white transition-colors" />
              </div>
            </div>
          </Link>
        </div>
      </motion.div>

      {/* Preview Modal */}
      {showPreview && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-6"
          onClick={() => setShowPreview(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-5xl h-[80vh] rounded-2xl overflow-hidden border border-white/10 bg-zinc-900"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-white/10 bg-zinc-900">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <button
                    onClick={() => setShowPreview(false)}
                    className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors"
                  />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-xs text-white/30 font-mono">
                  {design.path}
                </span>
              </div>
              <Link
                href={design.path}
                className="text-xs text-white/40 hover:text-white transition-colors flex items-center gap-1"
              >
                Open Full <ArrowUpRight className="w-3 h-3" />
              </Link>
            </div>

            {/* iframe preview */}
            <iframe
              src={design.path}
              className="w-full h-[calc(100%-44px)]"
              title={`Preview: ${design.id}`}
            />
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
