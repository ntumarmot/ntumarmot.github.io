import type { Metadata } from "next";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Controls from "@/components/Controls";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export const metadata: Metadata = {
  title: "黃元翔（Oliver Huang）｜個人網站",
  description: "黃元翔的個人網站：資訊管理、最佳化、資料科學與軟體工程專案。",
  alternates: {
    languages: {
      en: "/",
      "zh-Hant": "/zh",
    },
  },
};

export default function ChineseHome() {
  return (
    <div lang="zh-Hant">
      <Controls locale="zh" />
      <div className="container">
        <Navbar locale="zh" />
        <main>
          <Hero locale="zh" />
          <About locale="zh" />
          <Projects locale="zh" />
          <Experience locale="zh" />
          <Skills locale="zh" />
          <Contact locale="zh" />
        </main>
        <Footer locale="zh" />
      </div>
    </div>
  );
}
