import StyleSwitch from "./StyleSwitch";
import FontSizeControl from "./FontSizeControl";
import ThemeToggle from "./ThemeToggle";
import type { SiteLocale } from "@/lib/i18n";

// Fixed top-right cluster: style · text size · dark mode.
export default function Controls({ locale = "en" }: { locale?: SiteLocale }) {
  return (
    <div className="controls">
      <StyleSwitch locale={locale} />
      <FontSizeControl locale={locale} />
      <ThemeToggle locale={locale} />
    </div>
  );
}
