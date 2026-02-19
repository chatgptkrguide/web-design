"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe } from "lucide-react";
import { useI18n } from "@/i18n/context";
import { locales, localeNames, type Locale } from "@/i18n/types";
import { cn } from "@/lib/utils";

interface LanguageSwitcherProps {
  variant?: "light" | "dark";
}

export default function LanguageSwitcher({ variant = "dark" }: LanguageSwitcherProps) {
  const { locale, setLocale } = useI18n();
  const [open, setOpen] = useState(false);

  const isDark = variant === "dark";

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className={cn(
          "flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200",
          isDark
            ? "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/10"
            : "bg-black/5 text-black/60 hover:bg-black/10 hover:text-black border border-black/10"
        )}
      >
        <Globe className="w-3.5 h-3.5" />
        {locale.toUpperCase()}
      </button>

      <AnimatePresence>
        {open && (
          <>
            <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
            <motion.div
              initial={{ opacity: 0, y: -4, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -4, scale: 0.95 }}
              transition={{ duration: 0.15 }}
              className={cn(
                "absolute right-0 top-full mt-2 z-50 rounded-xl overflow-hidden shadow-2xl min-w-[140px]",
                isDark
                  ? "bg-zinc-900 border border-white/10"
                  : "bg-white border border-black/10"
              )}
            >
              {locales.map((l) => (
                <button
                  key={l}
                  onClick={() => {
                    setLocale(l);
                    setOpen(false);
                  }}
                  className={cn(
                    "w-full px-4 py-2.5 text-left text-sm flex items-center justify-between transition-colors",
                    isDark
                      ? "hover:bg-white/5 text-white/70 hover:text-white"
                      : "hover:bg-black/5 text-black/70 hover:text-black",
                    locale === l && (isDark ? "bg-white/5 text-white" : "bg-black/5 text-black")
                  )}
                >
                  <span>{localeNames[l]}</span>
                  {locale === l && (
                    <span className={cn("text-xs", isDark ? "text-white/30" : "text-black/30")}>
                      &#10003;
                    </span>
                  )}
                </button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
