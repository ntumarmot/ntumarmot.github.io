import Controls from "@/components/Controls";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function EnglishSeberonLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Controls />
      <div className="container seberon-container">
        <Navbar locale="en" languageHref="/projects/seberon" />
        <main>{children}</main>
        <Footer locale="en" />
      </div>
    </>
  );
}
