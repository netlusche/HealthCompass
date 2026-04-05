"use client";

import { useI18n } from "@/components/providers/I18nProvider";

export default function AboutPage() {
  const { t } = useI18n();

  return (
    <div className="max-w-3xl mx-auto px-4 py-12 md:py-20 animate-in fade-in duration-500">
      <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-start">
        {t.about.title}
      </h1>
      <div className="prose prose-slate max-w-none">
        <p className="text-lg text-slate-600 leading-relaxed text-start">
          {t.about.content}
        </p>
      </div>
    </div>
  );
}
