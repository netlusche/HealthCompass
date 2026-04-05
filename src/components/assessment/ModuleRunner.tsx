"use client";

import React, { useState, useEffect, useRef } from "react";
import { ModuleDefinition, AssessmentResult } from "@/types/assessment";
import { useI18n } from "@/components/providers/I18nProvider";
import { Link } from "react-router-dom";
import { formatNumber } from "@/utils/numeral";

type Step = "intro" | "assessment" | "results";

export function ModuleRunner({ moduleDef }: { moduleDef: ModuleDefinition }) {
  const { t, locale } = useI18n();
  const [step, setStep] = useState<Step>("intro");
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [result, setResult] = useState<AssessmentResult | null>(null);
  
  const questionHeadingRef = useRef<HTMLHeadingElement>(null);

  const getLocalized = (obj: any, baseKey: string) => {
    if (locale === "ar") return (obj as any)[`${baseKey}Ar`];
    const key = baseKey + (locale.charAt(0).toUpperCase() + locale.slice(1));
    return obj[key] || obj[`${baseKey}En`];
  };

  const title = getLocalized(moduleDef, "title");
  const description = getLocalized(moduleDef, "description");
  const disclaimer = getLocalized(moduleDef, "disclaimer") || t.home.disclaimerNote;
  const emergencyWarn = getLocalized(moduleDef, "emergencyWarning");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    // Move focus to the question heading when moving between steps or questions
    if (step === "assessment" || step === "results") {
      questionHeadingRef.current?.focus();
    }
  }, [step, currentQuestionIdx]);

  const handleStart = () => {
    setAnswers({});
    setCurrentQuestionIdx(0);
    setResult(null);
    setStep("assessment");
  };

  const calculateResults = (): AssessmentResult => {
    let rawScore = 0;
    let maxPossibleRaw = 0;
    const answeredFactorsEn: Array<{ label: string, points: number }> = [];
    const answeredFactorsDe: Array<{ label: string, points: number }> = [];
    const answeredFactorsTr: Array<{ label: string, points: number }> = [];
    const answeredFactorsRu: Array<{ label: string, points: number }> = [];
    const answeredFactorsPl: Array<{ label: string, points: number }> = [];
    const answeredFactorsUk: Array<{ label: string, points: number }> = [];
    const answeredFactorsRo: Array<{ label: string, points: number }> = [];
    const answeredFactorsAr: Array<{ label: string, points: number }> = [];

    moduleDef.questions.forEach(q => {
      const maxPts = Math.max(...q.options.map(o => o.points));
      maxPossibleRaw += maxPts;

      const ansId = answers[q.id];
      if (ansId) {
        const option = q.options.find(o => o.id === ansId);
        if (option) {
          rawScore += option.points;
          if (option.points > 0 && !option.isUnknown) {
            answeredFactorsEn.push({ label: q.helperEn || q.textEn, points: option.points });
            answeredFactorsDe.push({ label: q.helperDe || q.textDe, points: option.points });
            answeredFactorsTr.push({ label: q.helperTr || q.textTr, points: option.points });
            answeredFactorsRu.push({ label: q.helperRu || q.textRu, points: option.points });
            answeredFactorsPl.push({ label: q.helperPl || q.textPl, points: option.points });
            answeredFactorsUk.push({ label: q.helperUk || q.textUk, points: option.points });
            answeredFactorsRo.push({ label: q.helperRo || q.textRo, points: option.points });
            answeredFactorsAr.push({ label: q.helperAr || q.textAr, points: option.points });
          }
        }
      }
    });

    answeredFactorsEn.sort((a, b) => b.points - a.points);
    answeredFactorsDe.sort((a, b) => b.points - a.points);
    answeredFactorsTr.sort((a, b) => b.points - a.points);
    answeredFactorsRu.sort((a, b) => b.points - a.points);
    answeredFactorsPl.sort((a, b) => b.points - a.points);
    answeredFactorsUk.sort((a, b) => b.points - a.points);
    answeredFactorsRo.sort((a, b) => b.points - a.points);
    answeredFactorsAr.sort((a, b) => b.points - a.points);

    const normalizedScore = Math.min(100, Math.round((rawScore / maxPossibleRaw) * 100));

    let category: "low" | "elevated" | "high" = "low";
    if (normalizedScore >= moduleDef.thresholds.high) category = "high";
    else if (normalizedScore >= moduleDef.thresholds.elevated) category = "elevated";

    return {
      score: normalizedScore,
      category,
      answers,
      topFactorsEn: answeredFactorsEn.slice(0, 4).map(f => f.label),
      topFactorsDe: answeredFactorsDe.slice(0, 4).map(f => f.label),
      topFactorsTr: answeredFactorsTr.slice(0, 4).map(f => f.label),
      topFactorsRu: answeredFactorsRu.slice(0, 4).map(f => f.label),
      topFactorsPl: answeredFactorsPl.slice(0, 4).map(f => f.label),
      topFactorsUk: answeredFactorsUk.slice(0, 4).map(f => f.label),
      topFactorsRo: answeredFactorsRo.slice(0, 4).map(f => f.label),
      topFactorsAr: answeredFactorsAr.slice(0, 4).map(f => f.label),
    };
  };

  const handleAnswer = (optionId: string) => {
    const q = moduleDef.questions[currentQuestionIdx];
    setAnswers(prev => ({ ...prev, [q.id]: optionId }));

    // Small delay for smooth feel
    setTimeout(() => {
      if (currentQuestionIdx < moduleDef.questions.length - 1) {
        setCurrentQuestionIdx(prev => prev + 1);
      } else {
        const finalRes = calculateResults();
        setResult(finalRes);
        setStep("results");
      }
    }, 150);
  };

  const handleBack = () => {
    if (currentQuestionIdx > 0) {
      setCurrentQuestionIdx(prev => prev - 1);
    } else {
      setStep("intro");
    }
  };

  if (step === "intro") {
    return (
      <div className="max-w-3xl mx-auto px-4 py-12 md:py-20 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <Link to="/" className="inline-flex items-center text-sm font-bold text-slate-500 hover:text-slate-800 mb-8 transition-colors">
          <svg className={`w-4 h-4 me-1.5 ${locale === "ar" ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          {t.assessment.back}
        </Link>
        <div className="bg-white p-8 md:p-14 rounded-[2rem] shadow-xl shadow-slate-100 border border-slate-200/60">
          <h1 tabIndex={-1} ref={questionHeadingRef} className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight mb-5 leading-tight focus:outline-none">{title}</h1>
          <p className="text-xl text-slate-600 mb-10 leading-relaxed font-light">{description}</p>
          
          {emergencyWarn && (
            <div className="bg-rose-50 border border-rose-100 p-6 mb-10 rounded-2xl flex gap-4 items-start shadow-sm" role="alert">
              <svg className="h-6 w-6 text-rose-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <p className="text-rose-800 font-medium leading-relaxed">{emergencyWarn}</p>
            </div>
          )}

          <div className="bg-slate-50 p-6 rounded-2xl mb-12 text-sm text-slate-600 border border-slate-100 leading-relaxed font-medium">
            <strong className="text-slate-700">{t.nav.disclaimer}:</strong> {disclaimer}
          </div>

          <button
            onClick={handleStart}
            className="w-full sm:w-auto inline-flex justify-center items-center py-4 px-10 bg-slate-900 hover:bg-slate-800 text-white rounded-2xl font-bold text-lg transition shadow-lg shadow-slate-200 focus:outline-none focus-visible:ring-4 focus-visible:ring-slate-400"
          >
            {t.home.startBtn}
          </button>
        </div>
      </div>
    );
  }

  if (step === "assessment") {
    const q = moduleDef.questions[currentQuestionIdx];
    const qText = getLocalized(q, "text");
    const qHelper = getLocalized(q, "helper");
    const progress = Math.round(((currentQuestionIdx) / moduleDef.questions.length) * 100);

    return (
      <div className="max-w-2xl mx-auto px-4 py-8 md:py-16">
        <div className="mb-10 px-2" role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100} aria-label={t.assessment.step}>
          <div className="flex justify-between items-center text-sm font-bold text-slate-500 mb-4">
            <button onClick={handleBack} className="hover:text-slate-800 transition flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-300 rounded px-1 -ms-1">
               <svg className={`w-4 h-4 me-1.5 ${locale === "ar" ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              {t.assessment.back}
            </button>
            <span className="text-slate-600 font-bold tracking-wide uppercase text-xs">
              {t.assessment.step} {formatNumber(currentQuestionIdx + 1, locale)} {t.assessment.of} {formatNumber(moduleDef.questions.length, locale)}
            </span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
            <div className="bg-teal-600 h-2 rounded-full transition-all duration-500 ease-out" style={{ width: `${progress}%` }}></div>
          </div>
        </div>

        <fieldset className="bg-white p-8 md:p-12 rounded-[2rem] shadow-xl shadow-slate-100 border border-slate-200/60 animate-in fade-in slide-in-from-right-4 duration-300 relative" aria-live="polite">
           {q.optional && (
          <span className="absolute top-6 inset-inline-end-8 text-[11px] font-bold uppercase tracking-widest text-slate-400 bg-slate-50 border border-slate-100 px-3 py-1 rounded-full">
            {t.assessment.optional}
          </span>
          )}
          <legend className="sr-only">{qText}</legend>
          <h2 tabIndex={-1} ref={questionHeadingRef} className="text-2xl md:text-3xl font-bold text-slate-800 tracking-tight mt-4 mb-3 leading-tight focus:outline-none">{qText}</h2>
          {qHelper && <p className="text-slate-600 mb-8 md:text-lg font-light leading-relaxed">{qHelper}</p>}
          {!qHelper && <div className="h-4"></div>}

          <div className="space-y-4">
            {q.options.map((opt) => {
              const isSelected = answers[q.id] === opt.id;
              return (
                <label
                  key={opt.id}
                  className={`relative block cursor-pointer group rounded-2xl border-2 transition-all p-5 font-semibold focus-within:ring-4 focus-within:ring-teal-200
                    ${isSelected 
                      ? "border-teal-600 bg-teal-50 text-teal-900 shadow-sm" 
                      : "border-slate-100 hover:border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  <input
                    type="radio"
                    name={q.id}
                    value={opt.id}
                    checked={isSelected}
                    onChange={() => handleAnswer(opt.id)}
                    className="absolute opacity-0 pointer-events-none"
                    aria-label={getLocalized(opt, "label")}
                  />
                  <span className="text-lg flex items-center justify-between">
                    {getLocalized(opt, "label")}
                    {isSelected && (
                      <svg className="w-5 h-5 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    )}
                  </span>
                </label>
              )
            })}
          </div>
        </fieldset>
      </div>
    );
  }

  if (step === "results" && result) {
    const explanationKey = result.category === "high" ? "high" : result.category === "elevated" ? "elevated" : "low";
    const explanation = getLocalized(moduleDef.explanations, explanationKey);
    const recommendations = (moduleDef as any)[`recommendations${locale.charAt(0).toUpperCase() + locale.slice(1)}`];
    const topFactors = (result as any)[`topFactors${locale.charAt(0).toUpperCase() + locale.slice(1)}`];

    const riskColors = {
      low: "bg-emerald-50 text-emerald-800 border-emerald-100",
      elevated: "bg-amber-50 text-amber-800 border-amber-100",
      high: "bg-rose-50 text-rose-800 border-rose-100",
    };

    return (
      <div className="max-w-3xl mx-auto px-4 py-8 md:py-16 animate-in zoom-in-95 duration-500">
        <div className="bg-white rounded-[2rem] shadow-xl shadow-slate-100 border border-slate-200/60 overflow-hidden">
          
          <div className={`p-10 md:p-14 border-b text-center ${riskColors[result.category].split(" ")[0]} border-opacity-50 relative`} aria-live="assertive">
            <div className="text-xs font-bold uppercase tracking-widest opacity-60 mb-6">
              {t.results.riskCategory}
            </div>
            
            <div className="inline-flex flex-col items-center justify-center p-2 bg-white rounded-full border border-white shadow-lg shadow-black/5 w-36 h-36 mb-8 mx-auto" aria-hidden="true">
              <div className={`w-full h-full rounded-full border-4 border-dashed flex items-center justify-center ${riskColors[result.category].split(" ")[2]}`}>
                <span className={`text-5xl font-bold tracking-tighter ${riskColors[result.category].split(" ")[1]}`}>{formatNumber(result.score, locale)}</span>
              </div>
            </div>
            
            <h2 tabIndex={-1} ref={questionHeadingRef} className={`text-3xl font-bold tracking-tight focus:outline-none ${riskColors[result.category].split(" ")[1]}`}>
              {t.results[result.category]}
            </h2>
          </div>

          <div className="p-8 md:p-14">
            <h3 className="text-xl font-bold text-slate-800 mb-4">{t.results.whatItMeans}</h3>
            <p className="text-slate-700 mb-12 leading-relaxed text-lg font-light">
              {explanation}
            </p>

            {topFactors.length > 0 && (
              <div className="mb-12 p-8 bg-slate-50/70 rounded-3xl border border-slate-100">
                <h3 className="text-sm font-bold text-slate-800 mb-5 uppercase tracking-wider">{t.results.topFactors}</h3>
                <ul className="space-y-4">
                  {topFactors.map((f: string, i: number) => (
                    <li key={i} className="flex items-start text-slate-700 font-medium">
                      <svg className={`w-5 h-5 text-slate-500 me-3 mt-0.5 flex-shrink-0 ${locale === "ar" ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <h3 className="text-xl font-bold text-slate-800 mb-6">{t.results.recommendations}</h3>
            <ul className="space-y-4 mb-16">
              {recommendations.map((rec: string, i: number) => (
                <li key={i} className="flex items-start bg-teal-50/40 p-5 rounded-2xl border border-teal-100/30">
                  <div className="bg-teal-100 text-teal-700 rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold me-4 mt-0.5 flex-shrink-0">
                    {formatNumber(i + 1, locale)}
                  </div>
                  <span className="text-slate-700 font-medium leading-relaxed">{rec}</span>
                </li>
              ))}
            </ul>

            <div className="border-t border-slate-100 pt-10 flex flex-col sm:flex-row gap-4 items-center justify-center">
              <button 
                onClick={handleStart}
                className="w-full sm:w-auto px-8 py-4 border-2 border-slate-200 text-slate-700 font-bold rounded-2xl hover:bg-slate-50 hover:border-slate-300 transition focus:outline-none focus-visible:ring-4 focus-visible:ring-slate-300"
              >
                {t.assessment.restart}
              </button>
              <Link
                to="/"
                className="w-full sm:w-auto px-8 py-4 bg-slate-900 border-2 border-slate-900 text-white font-bold rounded-2xl hover:bg-slate-800 hover:border-slate-800 transition text-center shadow-md shadow-slate-200 focus:outline-none focus-visible:ring-4 focus-visible:ring-slate-400"
              >
                {t.results.backToHome}
              </Link>
            </div>
            
            <p className="text-center text-sm text-slate-600 mt-12 font-medium">
              {t.results.disclaimer}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
