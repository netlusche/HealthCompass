import { LegalDictionary } from "@/types/legal";
import { de } from "./de";
import { en } from "./en";
import { tr } from "./tr";
import { ru } from "./ru";
import { pl } from "./pl";
import { uk } from "./uk";
import { ro } from "./ro";
import { ar } from "./ar";

export const legalDictionaries: Record<string, LegalDictionary> = {
  de,
  en,
  tr,
  ru,
  pl,
  uk,
  ro,
  ar,
};

export const getLegalDictionary = (lang: string): LegalDictionary => {
  return legalDictionaries[lang] || en;
};
