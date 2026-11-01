import Controls from "@/components/Controls";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function EnglishHobbiesLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <><Controls /><div className="container"><Navbar locale="en" languageHref="/hobbies" /><main>{children}</main><Footer locale="en" /></div></>;
}
