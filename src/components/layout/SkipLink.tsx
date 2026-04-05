"use client";

import { useI18n } from "@/components/providers/I18nProvider";

export function SkipLink() {
  const { t } = useI18n();

  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-6 focus:py-3 focus:bg-teal-600 focus:text-white focus:font-bold focus:rounded-xl focus:shadow-2xl transition-all"
    >
      {t.nav.skipToContent}
    </a>
  );
}
