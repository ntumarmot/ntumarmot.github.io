import Controls from "@/components/Controls";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function HobbiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Controls locale="zh" />
      <div className="container">
        <Navbar locale="zh" languageHref="/en/hobbies" />
        <main lang="zh-Hant">{children}</main>
        <Footer locale="zh" />
      </div>
    </>
  );
}
