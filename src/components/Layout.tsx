import { NavLink, Outlet } from "react-router-dom";
import { ArrowUpRight, LogoMark } from "./Icons";

const navItems = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About", end: false },
  { to: "/services", label: "Services", end: false },
  { to: "/products", label: "Products", end: false },
  { to: "/contact", label: "Contact", end: false },
] as const;

function navClass({ isActive }: { isActive: boolean }) {
  return isActive ? "nav-link nav-active" : "nav-link";
}

export default function Layout() {
  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-[#f4f3ee] text-[#183335]">
      <div className="page-shell py-4 sm:py-6">
        <header className="flex min-h-[76px] flex-wrap items-center justify-between gap-4 rounded-2xl border border-[#183335]/10 bg-white px-5 shadow-[0_8px_35px_rgba(24,51,53,.05)] sm:px-8">
          <NavLink to="/" className="group flex items-center gap-3" aria-label="SPAS LLC home">
            <LogoMark />
            <span className="text-base font-extrabold tracking-[-0.025em] sm:text-lg">SPAS LLC</span>
          </NavLink>

          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 md:gap-8" aria-label="Main navigation">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.end} className={navClass}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <NavLink
            to="/contact"
            className="grid size-10 place-items-center rounded-full bg-[#caf05b] text-[#183335] transition-transform hover:-translate-y-0.5 md:hidden"
            aria-label="Contact"
          >
            <ArrowUpRight />
          </NavLink>
        </header>

        <Outlet />

        <footer className="mt-4 flex flex-col gap-5 rounded-2xl border border-[#183335]/10 bg-white px-6 py-7 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p className="font-semibold text-[#60716f]">
            © {year} <span className="font-extrabold text-[#183335]">SPAS LLC</span> · Issaquah, WA, United States
          </p>
          <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 font-bold text-[#60716f]" aria-label="Footer navigation">
            <NavLink to="/privacy" className="transition-colors hover:text-[#183335]">
              Privacy
            </NavLink>
            <NavLink to="/terms" className="transition-colors hover:text-[#183335]">
              Terms
            </NavLink>
            <NavLink to="/contact" className="inline-flex items-center gap-1.5 text-[#183335]">
              Contact
              <ArrowUpRight className="size-3.5" />
            </NavLink>
          </nav>
        </footer>
      </div>
    </div>
  );
}
