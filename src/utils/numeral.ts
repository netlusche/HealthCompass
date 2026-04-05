/**
 * Formats a number according to the specified locale.
 * For Arabic ('ar'), it uses Arabic-Indic digits (٠١٢٣٤٥٦٧٨٩).
 * For all other locales, it uses standard Western-Arabic digits (0-9).
 */
export function formatNumber(num: number, locale: string): string {
  if (locale === "ar") {
    // ar-EG uses the Eastern Arabic-Indic digits ٠١٢٣٤٥٦٧٨٩
    return new Intl.NumberFormat("ar-EG").format(num);
  }
  // Standard formatting for English, German, etc.
  return new Intl.NumberFormat("en-US").format(num);
}
