"use client";

import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { en, Dictionary } from "@/i18n/dictionaries/en";
import { de } from "@/i18n/dictionaries/de";
import { tr } from "@/i18n/dictionaries/tr";
import { ru } from "@/i18n/dictionaries/ru";
import { pl } from "@/i18n/dictionaries/pl";
import { uk } from "@/i18n/dictionaries/uk";
import { ro } from "@/i18n/dictionaries/ro";
import { ar } from "@/i18n/dictionaries/ar";

type Locale = "en" | "de" | "tr" | "ru" | "pl" | "uk" | "ro" | "ar";

interface I18nContextType {
  locale: Locale;
  t: Dictionary;
  setLocale: (locale: Locale) => void;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Auto-detect language
    const browserLang = navigator.language.split("-")[0];
    const savedLang = localStorage.getItem("hc_lang");
    
    if (["en", "de", "tr", "ru", "pl", "uk", "ro", "ar"].includes(savedLang || "")) {
      setLocaleState(savedLang as Locale);
    } else if (browserLang === "de") {
      setLocaleState("de");
    } else if (browserLang === "tr") {
      setLocaleState("tr");
    } else if (browserLang === "ru") {
      setLocaleState("ru");
    } else if (browserLang === "pl") {
      setLocaleState("pl");
    } else if (browserLang === "uk") {
      setLocaleState("uk");
    } else if (browserLang === "ro") {
      setLocaleState("ro");
    } else if (browserLang === "ar") {
      setLocaleState("ar");
    } else {
      setLocaleState("en");
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
      document.documentElement.lang = locale;
    }
  }, [locale, mounted]);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("hc_lang", newLocale);
  };

  const t = locale === "de" ? de : 
            locale === "tr" ? tr : 
            locale === "ru" ? ru : 
            locale === "pl" ? pl : 
            locale === "uk" ? uk : 
            locale === "ro" ? ro : 
            locale === "ar" ? ar : 
            en;

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <I18nContext.Provider value={{ locale: "en", t: en, setLocale: () => {} }}>
         <div style={{ visibility: "hidden" }}>{children}</div>
      </I18nContext.Provider>
    );
  }

  return (
    <I18nContext.Provider value={{ locale, t, setLocale }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
}
