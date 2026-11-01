import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Controls from "@/components/Controls";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Controls locale="zh" />
      <div className="container">
        <Navbar locale="zh" languageHref="/en/blog" />
        <main lang="zh-Hant">{children}</main>
        <Footer locale="zh" />
      </div>
    </>
  );
}
