"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import type { Locale } from "./types";

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (translations: Record<Locale, string>) => string;
}

const I18nContext = createContext<I18nContextType | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    if (typeof window !== "undefined") {
      localStorage.setItem("locale", newLocale);
    }
  }, []);

  const t = useCallback(
    (translations: Record<Locale, string>) => {
      return translations[locale] || translations.en;
    },
    [locale]
  );

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) throw new Error("useI18n must be used within I18nProvider");
  return context;
}
