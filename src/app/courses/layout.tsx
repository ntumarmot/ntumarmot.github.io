import Controls from "@/components/Controls";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function CoursesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Controls />
      <div className="container">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
