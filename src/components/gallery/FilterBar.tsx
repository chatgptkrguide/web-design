"use client";

import { motion } from "framer-motion";
import { designCategories } from "@/lib/designs";
import { cn } from "@/lib/utils";

interface FilterBarProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function FilterBar({ activeCategory, onCategoryChange }: FilterBarProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {designCategories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={cn(
            "relative px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200",
            activeCategory === category
              ? "text-white"
              : "text-white/50 hover:text-white/80"
          )}
        >
          {activeCategory === category && (
            <motion.div
              layoutId="activeFilter"
              className="absolute inset-0 bg-white/10 border border-white/20 rounded-full"
              transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
            />
          )}
          <span className="relative z-10">{category}</span>
        </button>
      ))}
    </div>
  );
}
