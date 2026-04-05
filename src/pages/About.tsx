import React from "react";
import { useI18n } from "@/components/providers/I18nProvider";
export default () => {
  const { t } = useI18n();
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 md:py-24">
      <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">{t.home.aboutTitle || "About HealthCompass"}</h1>
      <p className="text-xl text-slate-600 leading-relaxed">{t.home.aboutDesc || "HealthCompass is a platform for anonymous health risk markers."}</p>
    </div>
  );
};
