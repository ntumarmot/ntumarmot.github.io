import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Controls from "@/components/Controls";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    languages: {
      en: "/",
      "zh-Hant": "/zh",
    },
  },
};

export default function Home() {
  return (
    <>
      <Controls />
      <div className="container">
        <Navbar />
        <main className="home-main">
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
