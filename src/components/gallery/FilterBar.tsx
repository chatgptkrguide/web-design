"use client";

import { motion } from "framer-motion";
import { designCategories, categoryLabels } from "@/lib/designs";
import { useI18n } from "@/i18n/context";
import { cn } from "@/lib/utils";

interface FilterBarProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function FilterBar({ activeCategory, onCategoryChange }: FilterBarProps) {
  const { t } = useI18n();

  return (
    <div className="flex flex-wrap gap-1.5">
      {designCategories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={cn(
            "relative px-4 py-2 text-[13px] font-medium rounded-full transition-colors duration-200",
            activeCategory === category
              ? "text-white"
              : "text-white/40 hover:text-white/70"
          )}
        >
          {activeCategory === category && (
            <motion.div
              layoutId="activeFilter"
              className="absolute inset-0 bg-white/10 border border-white/15 rounded-full"
              transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
            />
          )}
          <span className="relative z-10">
            {t(categoryLabels[category] || { en: category, ko: category, zh: category, ja: category })}
          </span>
        </button>
      ))}
    </div>
  );
}
