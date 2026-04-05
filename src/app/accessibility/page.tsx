"use client";

import { useI18n } from "@/components/providers/I18nProvider";

export default function AccessibilityPage() {
  const { t } = useI18n();

  return (
    <div className="max-w-3xl mx-auto px-4 py-12 md:py-20 animate-in fade-in duration-500 text-start">
      <h1 className="text-3xl font-bold text-slate-900 mb-8">{t.accessibility.title}</h1>
      <div className="prose prose-slate max-w-none">
        <p className="text-slate-600 leading-relaxed">
          {t.accessibility.content}
        </p>
        <p className="text-sm text-slate-400 mt-8 italic">
          {t.accessibility.note}
        </p>
      </div>
    </div>
  );
}
