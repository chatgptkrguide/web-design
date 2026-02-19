"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { DesignItem } from "@/lib/designs";

interface DesignCardProps {
  design: DesignItem;
  index: number;
}

export default function DesignCard({ design, index }: DesignCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      layout
    >
      <Link href={design.path} className="group block">
        <div className="relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm transition-all duration-500 hover:border-white/15 hover:bg-white/[0.05]">
          <div className={`h-56 bg-gradient-to-br ${design.gradient} opacity-20 group-hover:opacity-35 transition-opacity duration-500`} />
          <div className="absolute inset-0 flex flex-col justify-end p-6">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  {design.category.slice(0, 2).map((cat) => (
                    <span
                      key={cat}
                      className="text-[10px] font-mono uppercase tracking-widest text-white/40 bg-white/5 px-2 py-0.5 rounded"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-white transition-colors">
                  {design.title}
                </h3>
                <p className="text-sm text-white/40 leading-relaxed line-clamp-2">
                  {design.description}
                </p>
                <p className="text-xs text-white/25 mt-2 font-mono">
                  Inspired by: {design.inspiration}
                </p>
              </div>
              <div className="ml-4 p-2 rounded-full bg-white/5 group-hover:bg-white/10 transition-all duration-300 group-hover:scale-110">
                <ArrowUpRight className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
