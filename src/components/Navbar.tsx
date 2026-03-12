import { Link, useLocation } from "react-router-dom";

const navItems = [
  { path: "/", label: "Home", labelCn: "首页" },
  { path: "/gallery/large", label: "Thangka Works", labelCn: "唐卡作品" },
  { path: "/deities", label: "Deity Catalog", labelCn: "佛像图鉴" },
  { path: "/find-buddha", label: "Find Your Buddha", labelCn: "找守护佛" },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-center h-14 gap-6 sm:gap-10">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`font-body text-sm sm:text-base tracking-wide transition-colors duration-300 hover:text-primary whitespace-nowrap ${
              location.pathname === item.path ||
              (item.path !== "/" && location.pathname.startsWith(item.path.replace("/large", "")))
                ? "text-primary"
                : "text-muted-foreground"
            }`}
          >
            <span>{item.labelCn}</span>
            <span className="text-muted-foreground/60 ml-1 text-xs hidden sm:inline">· {item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
