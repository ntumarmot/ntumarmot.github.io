import type { Metadata, Viewport } from "next";
import { Cinzel, Cormorant_Garamond, Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  variable: "--font-cinzel",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-hanken",
});

export const viewport: Viewport = {
  themeColor: "#f4f1e8",
};

export const metadata: Metadata = {
  title: "Yuan-Hsiang (Oliver) Huang | NTU Information Management",
  description:
    "Personal website of Yuan-Hsiang Huang — NTU IM student specializing in Operations Research, Optimization, and Data Science.",
  keywords: ["Yuan-Hsiang Huang", "Oliver Huang", "NTU", "Information Management", "Operations Research", "Data Science"],
  authors: [{ name: "Yuan-Hsiang Huang" }],
  openGraph: {
    title: "Yuan-Hsiang (Oliver) Huang",
    description: "NTU IM Student · Operations Research · Data Science",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cinzel.variable} ${cormorant.variable} ${hanken.variable}`}>
        {/* Apply saved theme before paint (body exists here) — no flash. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.getItem('theme')==='dark')document.body.classList.add('dark');var f=parseFloat(localStorage.getItem('fontScale'));if(f>0)document.documentElement.style.setProperty('--font-scale',f);if(localStorage.getItem('style')==='classic')document.body.classList.add('theme-classic')}catch(e){}`,
          }}
        />
        {children}
      </body>
    </html>
  );
}
