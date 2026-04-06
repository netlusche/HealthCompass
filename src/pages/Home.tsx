import React from "react";
import { Link } from "react-router-dom";
import { useI18n } from "@/components/providers/I18nProvider";

const MODULE_CONFIGS = [
  {
    id: "dementia",
    href: "/dementia",
    titleKey: "dementiaTitle",
    descKey: "dementiaDesc",
    theme: {
      border: "group-hover:border-teal-200/60",
      iconBg: "bg-teal-50 group-hover:bg-teal-600",
      iconText: "text-teal-600 group-hover:text-white",
      iconBorder: "border-teal-100/50",
      accentText: "text-teal-600",
      shadow: "hover:shadow-teal-100/50"
    },
    iconPath: "M13 10V3L4 14h7v7l9-11h-7z"
  },
  {
    id: "heart-attack",
    href: "/heart-attack",
    titleKey: "heartAttackTitle",
    descKey: "heartAttackDesc",
    theme: {
      border: "group-hover:border-rose-200/60",
      iconBg: "bg-rose-50 group-hover:bg-rose-500",
      iconText: "text-rose-600 group-hover:text-white",
      iconBorder: "border-rose-100/50",
      accentText: "text-rose-600",
      shadow: "hover:shadow-rose-100/50"
    },
    iconPath: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
  },
  {
    id: "diabetes",
    href: "/diabetes",
    titleKey: "diabetesTitle",
    descKey: "diabetesDesc",
    theme: {
      border: "group-hover:border-amber-200/60",
      iconBg: "bg-amber-50 group-hover:bg-amber-500",
      iconText: "text-amber-600 group-hover:text-white",
      iconBorder: "border-amber-100/50",
      accentText: "text-amber-600",
      shadow: "hover:shadow-amber-100/50"
    },
    iconPath: "M12 2.25c-5.385 5.5-9 10.125-9 13.5a9 9 0 0 0 18 0c0-3.375-3.615-8-9-13.5Z"
  },
  {
    id: "copd",
    href: "/copd",
    titleKey: "copdTitle",
    descKey: "copdDesc",
    theme: {
      border: "group-hover:border-sky-200/60",
      iconBg: "bg-sky-50 group-hover:bg-sky-500",
      iconText: "text-sky-600 group-hover:text-white",
      iconBorder: "border-sky-100/50",
      accentText: "text-sky-600",
      shadow: "hover:shadow-sky-100/50"
    },
    iconPath: "M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 .322-7.468 5.45 5.45 0 0 0-10.748 1.468A4.5 4.5 0 0 0 2.25 15Z"
  },
  {
    id: "kidney",
    href: "/kidney",
    titleKey: "kidneyTitle",
    descKey: "kidneyDesc",
    theme: {
      border: "group-hover:border-indigo-200/60",
      iconBg: "bg-indigo-50 group-hover:bg-indigo-500",
      iconText: "text-indigo-600 group-hover:text-white",
      iconBorder: "border-indigo-100/50",
      accentText: "text-indigo-600",
      shadow: "hover:shadow-indigo-100/50"
    },
    iconPath: "M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
  },
  {
    id: "osteoporosis",
    href: "/osteoporosis",
    titleKey: "osteoporosisTitle",
    descKey: "osteoporosisDesc",
    theme: {
      border: "group-hover:border-violet-200/60",
      iconBg: "bg-violet-50 group-hover:bg-violet-500",
      iconText: "text-violet-600 group-hover:text-white",
      iconBorder: "border-violet-100/50",
      accentText: "text-violet-600",
      shadow: "hover:shadow-violet-100/50"
    },
    iconPath: "M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
  },
  {
    id: "burnout",
    href: "/burnout",
    titleKey: "burnoutTitle",
    descKey: "burnoutDesc",
    theme: {
      border: "group-hover:border-fuchsia-200/60",
      iconBg: "bg-fuchsia-50 group-hover:bg-fuchsia-600",
      iconText: "text-fuchsia-600 group-hover:text-white",
      iconBorder: "border-fuchsia-100/50",
      accentText: "text-fuchsia-600",
      shadow: "hover:shadow-fuchsia-100/50"
    },
    iconPath: "M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
  },
  {
    id: "alcohol",
    href: "/alcohol",
    titleKey: "alcoholTitle",
    descKey: "alcoholDesc",
    theme: {
      border: "group-hover:border-emerald-200/60",
      iconBg: "bg-emerald-50 group-hover:bg-emerald-600",
      iconText: "text-emerald-600 group-hover:text-white",
      iconBorder: "border-emerald-100/50",
      accentText: "text-emerald-600",
      shadow: "hover:shadow-emerald-100/50"
    },
    iconPath: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
  },
  {
    id: "anxiety",
    href: "/anxiety",
    titleKey: "anxietyTitle",
    descKey: "anxietyDesc",
    theme: {
      border: "group-hover:border-blue-200/60",
      iconBg: "bg-blue-50 group-hover:bg-blue-600",
      iconText: "text-blue-600 group-hover:text-white",
      iconBorder: "border-blue-100/50",
      accentText: "text-blue-600",
      shadow: "hover:shadow-blue-100/50"
    },
    iconPath: "M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.866 8.21 8.21 0 0 0 3 2.48Z"
  }
];

const Home = () => {
  const { t } = useI18n();

  return (
    <div className="flex flex-col flex-grow">
      {/* Hero Section */}
      <section className="relative px-4 pt-6 pb-4 md:pt-8 md:pb-6 overflow-hidden bg-white text-center border-b border-slate-100 z-10 w-full">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-teal-50/50 via-white to-white pointer-events-none opacity-80" />
        
        <div className="max-w-4xl mx-auto text-center relative z-20">
          <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-700 px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide mb-8 border border-teal-100/50 shadow-sm animate-in fade-in slide-in-from-bottom-2 duration-500 delay-100 ease-out">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            {t.home.heroBadge}
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 tracking-tight leading-tight mb-4 lg:leading-tight animate-in fade-in slide-in-from-bottom-4 duration-500 delay-150 ease-out">
            {t.home.heroTitle}
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 mb-2 max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200 ease-out">
            {t.home.heroSubtitle}
          </p>
        </div>
      </section>

      {/* Modules Selection Area */}
      <section className="relative px-4 pt-6 pb-0 md:pt-8 max-w-7xl mx-auto w-full flex-grow flex flex-col justify-center">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 relative z-20">
          {MODULE_CONFIGS.map((config) => (
            <Link key={config.id} to={config.href} className="group block h-full outline-none">
              <div className={`bg-white rounded-[2rem] shadow-sm border border-slate-200/60 p-8 transition-all duration-300 flex flex-col items-start text-start h-full ${config.theme.shadow} hover:-translate-y-1 ${config.theme.border} hover:shadow-xl focus-within:ring-4 focus-within:ring-slate-100`}>
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border transition-colors duration-300 ${config.theme.iconBg} ${config.theme.iconText} ${config.theme.iconBorder}`} aria-hidden="true">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={config.iconPath} />
                  </svg>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-3 tracking-tight">{(t.home as any)[config.titleKey]}</h2>
                <p className="text-slate-600 mb-6 flex-grow leading-relaxed">{(t.home as any)[config.descKey]}</p>
                
                <div className={`flex items-center gap-1 font-semibold transition-all ${config.theme.accentText}`}>
                  {t.home.startBtn}
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-4 md:mt-6 text-center max-w-2xl mx-auto w-full">
          <div className="bg-slate-100/50 px-6 py-4 rounded-xl border border-slate-200/50">
            <p className="text-sm text-slate-600 leading-relaxed font-medium">
              {t.home.disclaimerNote}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
