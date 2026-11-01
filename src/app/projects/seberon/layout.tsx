import Controls from "@/components/Controls";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function SeberonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Controls locale="zh" />
      <div className="container seberon-container">
        <Navbar locale="zh" languageHref="/en/projects/seberon" />
        <main lang="zh-Hant">{children}</main>
        <Footer locale="zh" />
      </div>
    </>
  );
}
