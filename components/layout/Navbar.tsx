"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, Search } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const leftNavLinks = [
    { href: "/programs", label: "Our Work" },
    { href: "/members", label: "Members" },
    { href: "/news", label: "News" },
  ];

  const rightNavLinks = [
    { href: "/events", label: "Events" },
    { href: "/join", label: "Get Involved" },
    { href: "/about", label: "About" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "shadow-md" : ""
        }`}
    >
      {/* Top Utility Bar - Dark */}
      <div
        className={`bg-[#122A44] text-white px-4 md:px-8 text-xs font-semibold tracking-widest uppercase flex justify-end items-center space-x-6 transition-all duration-300 overflow-hidden origin-top ${isScrolled ? "h-0 opacity-0" : "h-10 opacity-100"
          }`}
      >
        <Link href="/programs" className="hover:text-brand-accent transition-colors">Our Work</Link>
        <Link href="/news" className="hover:text-brand-accent transition-colors">Archives</Link>
        <Link href="/join" className="hover:text-brand-accent transition-colors">Give</Link>
        <Link href="/login" className="hover:text-brand-accent transition-colors">Login</Link>
      </div>

      {/* Main Navigation Row - White */}
      <div className={`bg-white transition-all duration-300 ${isScrolled ? "py-1" : "py-1 md:py-2"}`}>
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between relative">

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex-1">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-brand-primary p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop Left Nav Links */}
          <nav className="hidden md:flex flex-1 justify-end items-center space-x-8 pr-12">
            {leftNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[15px] font-medium transition-colors hover:text-brand-accent ${pathname === link.href ? "text-brand-accent" : "text-[#333333]"
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Center Logo */}
          <Link href="/" className="flex-shrink-0 flex flex-col items-center justify-center px-4 z-10 transition-all duration-300">
            <img
               src="/logo.png"
               alt="AAAAS Logo"
               className={`w-auto object-contain transition-all duration-300 ${isScrolled ? "h-10 md:h-12" : "h-14 md:h-20"}`}
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
                (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
              }}
            />
            <div className="hidden text-center text-brand-primary font-bold leading-tight">
              <div className="text-xl tracking-tight">A<span className="text-brand-accent">A</span>AAS</div>
              <div className="text-[0.55rem] uppercase tracking-widest text-text-muted mt-1">Place logo.png in public folder</div>
            </div>
          </Link>

          {/* Desktop Right Nav Links */}
          <nav className="hidden md:flex flex-1 justify-start items-center space-x-8 pl-12">
            {rightNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[15px] font-medium transition-colors hover:text-brand-accent ${pathname === link.href ? "text-brand-accent" : "text-[#333333]"
                  }`}
              >
                {link.label}
              </Link>
            ))}
            <button className="text-[#333333] hover:text-brand-accent transition-colors">
              <Search size={20} />
            </button>
          </nav>

          {/* Search Mobile */}
          <div className="md:hidden flex-1 flex justify-end">
            <button className="text-brand-primary p-2">
              <Search size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-y border-slate-200 shadow-lg py-4 px-4 flex flex-col space-y-4">
          {[...leftNavLinks, ...rightNavLinks].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-base font-medium ${pathname === link.href ? "text-brand-accent" : "text-text-main"
                }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
