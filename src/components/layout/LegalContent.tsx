"use client";

import { LegalPage } from "@/types/legal";

interface LegalContentProps {
  content: LegalPage;
  checklist?: {
    title: string;
    items: string[];
  };
}

export function LegalContent({ content, checklist }: LegalContentProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 md:py-20 animate-in fade-in duration-700">
      <div className="mb-12">
        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 text-start">
          {content.title}
        </h1>
        {content.subtitle && (
          <p className="text-lg text-slate-500 text-start">{content.subtitle}</p>
        )}
      </div>

      <div className="space-y-12">
        {content.sections.map((section, idx) => (
          <section key={idx} className="group">
            <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-4 text-start group-hover:text-teal-600 transition-colors">
              {section.title}
            </h2>
            <div className="text-slate-600 leading-relaxed text-start space-y-4">
              {Array.isArray(section.content) ? (
                <ul className="list-disc list-inside space-y-2 ml-4">
                  {section.content.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p className="whitespace-pre-line">{section.content}</p>
              )}
            </div>
          </section>
        ))}

        {content.note && (
          <div className="pt-8 border-t border-slate-100 italic text-slate-400 text-sm">
            {content.note}
          </div>
        )}

        {checklist && (
          <div className="mt-16 p-6 rounded-2xl bg-amber-50 border border-amber-100">
            <h3 className="text-amber-800 font-bold mb-4 flex items-center gap-2">
              <span className="text-xl">⚠️</span> {checklist.title} (Draft Only)
            </h3>
            <ul className="space-y-2">
              {checklist.items.map((item, i) => (
                <li key={i} className="text-amber-700 text-sm flex gap-3">
                  <span className="text-amber-400">•</span> {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
