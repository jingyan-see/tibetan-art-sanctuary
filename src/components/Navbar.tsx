import { Link, useLocation } from "react-router-dom";

const navItems = [
  { path: "/", label: "Home", labelCn: "首页" },
  { path: "/gallery/large", label: "Works", labelCn: "唐卡作品" },
  { path: "/deities", label: "Catalog", labelCn: "佛像图鉴" },
  { path: "/find-buddha", label: "Guardian", labelCn: "寻找守护佛" },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/60 backdrop-blur-md border-b border-border/20">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-center h-16 gap-8 sm:gap-12">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex flex-col items-center transition-colors duration-300 hover:text-white whitespace-nowrap ${
              location.pathname === item.path ||
              (item.path !== "/" && location.pathname.startsWith(item.path.replace("/large", "")))
                ? "text-white"
                : "text-white/70"
            }`}
          >
            <span className="font-display text-base sm:text-lg tracking-wider">{item.labelCn}</span>
            <span className="text-[10px] sm:text-xs opacity-60 leading-tight" style={{ fontFamily: "var(--font-display-en)" }}>{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
