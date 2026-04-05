export type RiskCategory = "low" | "elevated" | "high";

export interface Option {
  id: string;
  labelEn: string;
  labelDe: string;
  labelTr: string;
  labelRu: string;
  labelPl: string;
  labelUk: string;
  labelRo: string;
  labelAr: string;
  points: number; // Modifies the score
  isUnknown?: boolean;
}

export interface Question {
  id: string;
  textEn: string;
  textDe: string;
  textTr: string;
  textRu: string;
  textPl: string;
  textUk: string;
  textRo: string;
  textAr: string;
  helperEn?: string;
  helperDe?: string;
  helperTr?: string;
  helperRu?: string;
  helperPl?: string;
  helperUk?: string;
  helperRo?: string;
  helperAr?: string;
  optional?: boolean;
  options: Option[];
}

export interface ModuleDefinition {
  id: string;
  titleEn: string;
  titleDe: string;
  titleTr: string;
  titleRu: string;
  titlePl: string;
  titleUk: string;
  titleRo: string;
  titleAr: string;
  descriptionEn: string;
  descriptionDe: string;
  descriptionTr: string;
  descriptionRu: string;
  descriptionPl: string;
  descriptionUk: string;
  descriptionRo: string;
  descriptionAr: string;
  disclaimerEn?: string;
  disclaimerDe?: string;
  disclaimerTr?: string;
  disclaimerRu?: string;
  disclaimerPl?: string;
  disclaimerUk?: string;
  disclaimerRo?: string;
  disclaimerAr?: string;
  emergencyWarningEn?: string;
  emergencyWarningDe?: string;
  emergencyWarningTr?: string;
  emergencyWarningRu?: string;
  emergencyWarningPl?: string;
  emergencyWarningUk?: string;
  emergencyWarningRo?: string;
  emergencyWarningAr?: string;
  thresholds: {
    elevated: number; // Score to reach Elevated
    high: number; // Score to reach High
  };
  questions: Question[];
  explanations: {
    lowEn: string;
    lowDe: string;
    lowTr: string;
    lowRu: string;
    lowPl: string;
    lowUk: string;
    lowRo: string;
    lowAr: string;
    elevatedEn: string;
    elevatedDe: string;
    elevatedTr: string;
    elevatedRu: string;
    elevatedPl: string;
    elevatedUk: string;
    elevatedRo: string;
    elevatedAr: string;
    highEn: string;
    highDe: string;
    highTr: string;
    highRu: string;
    highPl: string;
    highUk: string;
    highRo: string;
    highAr: string;
  };
  recommendationsEn: string[];
  recommendationsDe: string[];
  recommendationsTr: string[];
  recommendationsRu: string[];
  recommendationsPl: string[];
  recommendationsUk: string[];
  recommendationsRo: string[];
  recommendationsAr: string[];
}

export interface AssessmentResult {
  score: number; // 0-100 normalized
  category: RiskCategory;
  answers: Record<string, string>; // questionId -> optionId
  topFactorsEn: string[];
  topFactorsDe: string[];
  topFactorsTr: string[];
  topFactorsRu: string[];
  topFactorsPl: string[];
  topFactorsUk: string[];
  topFactorsRo: string[];
  topFactorsAr: string[];
}
