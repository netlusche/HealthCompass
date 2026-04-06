"use client";

import { Link } from "react-router-dom";
import { useI18n } from "@/components/providers/I18nProvider";

export function Navbar() {
  const { t, locale, setLocale } = useI18n();

  return (
    <nav className="border-b border-slate-100 bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 h-20 md:h-24 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-1 group focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 rounded-lg p-1">
          <img 
            src="logo.png" 
            alt="HealthCompass Logo" 
            className="w-20 h-20 md:w-28 md:h-28 object-contain transform group-hover:scale-105 transition duration-300"
          />
          <span className="font-bold text-2xl md:text-3xl tracking-tight text-slate-800">
            HealthCompass
          </span>
        </Link>
        
        <div className="flex items-center gap-4">


          <select
            value={locale}
            onChange={(e) => setLocale(e.target.value as any)}
            className="bg-slate-100 border-none text-sm font-medium text-slate-700 py-1.5 px-3 rounded-lg focus:ring-2 focus:ring-slate-300 outline-none hover:bg-slate-200 transition cursor-pointer"
            aria-label="Language selector"
          >
            <option value="en">English</option>
            <option value="de">Deutsch</option>
            <option value="tr">Türkçe</option>
            <option value="ru">Русский</option>
            <option value="pl">Polski</option>
            <option value="uk">Українська</option>
            <option value="ro">Română</option>
            <option value="ar">العربية</option>
          </select>
        </div>
      </div>
    </nav>
  );
}
