import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#open-source", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#achievements", label: "Milestones" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "backdrop-blur-md bg-background/80 border-b border-hair" : "bg-transparent"
        }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a href="#top" className="font-serif text-lg tracking-tight">
          Shubham <span className="text-accent">Chavan</span>
        </a>
        <ul className="hidden gap-10 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm tracking-wide text-foreground/70 transition-colors hover:text-accent"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      {open && (
        <div className="border-t border-hair bg-background md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-6">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block text-sm text-foreground/80 hover:text-accent"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
