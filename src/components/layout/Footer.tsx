"use client";

import { Link } from "react-router-dom";
import { useI18n } from "@/components/providers/I18nProvider";
import { ShareBar } from "@/components/common/ShareBar";

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="mt-auto pt-0 pb-6 border-t border-gray-100 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <ShareBar />
        <div className="text-slate-800 font-semibold mb-2">HealthCompass</div>
        <div className="text-slate-600 text-sm mb-6">{t.footer.tagline}</div>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-slate-500">
          <Link to="/privacy" className="hover:text-slate-800 transition">{t.footer.links.privacy}</Link>
          <Link to="/imprint" className="hover:text-slate-800 transition">{t.footer.links.terms}</Link>
          <Link to="/disclaimer" className="hover:text-slate-800 transition">{t.footer.links.disclaimer}</Link>
          <Link to="/accessibility" className="hover:text-slate-800 transition">{t.footer.links.accessibility}</Link>
          <Link to="/copyright" className="hover:text-slate-800 transition">{t.footer.links.copyright}</Link>
        </div>
        <div className="mt-8 text-xs text-slate-500 max-w-2xl mx-auto">
          {t.results.disclaimer}
        </div>
      </div>
    </footer>
  );
}
