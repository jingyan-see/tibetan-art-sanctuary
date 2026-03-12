import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const navItems = [
  { path: "/", label: "Home", labelCn: "首页" },
  { path: "/gallery/large", label: "Works", labelCn: "唐卡作品" },
  { path: "/deities", label: "Catalog", labelCn: "佛像图鉴" },
  { path: "/find-buddha", label: "Guardian", labelCn: "寻找守护佛" },
];

const Navbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-center h-14 gap-10 sm:gap-14">
        {navItems.map((item) => {
          const isActive =
            location.pathname === item.path ||
            (item.path !== "/" && location.pathname.startsWith(item.path.replace("/large", "")));
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`relative flex flex-col items-center transition-all duration-300 hover:text-primary whitespace-nowrap group ${
                isActive ? "text-primary" : "text-foreground/80"
              }`}
            >
              <span className="font-display text-sm sm:text-base tracking-[0.15em]">
                {item.labelCn}
              </span>
              <span
                className="text-[9px] sm:text-[10px] opacity-50 leading-tight tracking-[0.2em] uppercase"
                style={{ fontFamily: "var(--font-display-en)" }}
              >
                {item.label}
              </span>
              {/* Active indicator — thin gold line */}
              <span
                className={`absolute -bottom-1 left-1/2 -translate-x-1/2 h-px bg-accent transition-all duration-300 ${
                  isActive ? "w-6 opacity-100" : "w-0 opacity-0 group-hover:w-4 group-hover:opacity-60"
                }`}
              />
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
