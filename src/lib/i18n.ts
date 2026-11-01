export type SiteLocale = "en" | "zh";

/**
 * 功能:
 *   根據目前語言回傳英文或繁體中文文字。
 *
 * Args:
 *   locale: 目前頁面語言。
 *   english: 英文文字。
 *   chinese: 繁體中文文字。
 *
 * Returns:
 *   與目前語言相符的文字。
 */
export function localized(
  locale: SiteLocale,
  english: string,
  chinese: string,
): string {
  return locale === "zh" ? chinese : english;
}
