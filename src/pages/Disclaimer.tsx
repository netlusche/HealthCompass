import React from "react";
import { useI18n } from "@/components/providers/I18nProvider";
import { getLegalDictionary } from "@/i18n/legal";
import { LegalContent } from "@/components/layout/LegalContent";
export default () => {
  const { locale } = useI18n();
  const legal = getLegalDictionary(locale);
  return <LegalContent content={legal.disclaimer} checklist={legal.checklist} />;
};
