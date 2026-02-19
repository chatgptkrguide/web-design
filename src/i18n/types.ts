export type Locale = "en" | "ko" | "zh" | "ja";

export const locales: Locale[] = ["en", "ko", "zh", "ja"];

export const localeNames: Record<Locale, string> = {
  en: "English",
  ko: "한국어",
  zh: "中文",
  ja: "日本語",
};

export const localeFlags: Record<Locale, string> = {
  en: "EN",
  ko: "KO",
  zh: "ZH",
  ja: "JA",
};
