import Link from "next/link";

const navLinks = [
  { href: "/#education", label: "Education" },
  { href: "/#projects", label: "Projects" },
  { href: "/#experience", label: "Experience" },
  { href: "/#skills", label: "Skills" },
  { href: "/courses", label: "Courses" },
  { href: "/blog", label: "Blog" },
];

export default function Navbar() {
  return (
    <header>
      <nav>
        <Link href="/" className="logo">
          Oliver Huang
        </Link>
        <div className="nav-links">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
