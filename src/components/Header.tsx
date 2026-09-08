"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: "Services", href: isHome ? "#services" : "/#services" },
    { label: "Process", href: isHome ? "#process" : "/#process" },
    { label: "Testimonials", href: isHome ? "#testimonials" : "/#testimonials" },
    { label: "About", href: "/about" },
    { label: "Contact", href: isHome ? "#contact" : "/#contact" },
  ];

  return (
    <header className={`header ${scrolled || !isHome ? "scrolled" : ""}`}>
      <div className="container">
        <div className="header-inner">
          <Link href="/" className="logo" aria-label="Akshar Production and Technology Home">
            <span className="logo-text">Akshar Production &amp; Technology</span>
          </Link>

          <nav className="nav" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`nav-link ${pathname === link.href ? "active" : ""}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="header-cta">
            <Link href={isHome ? "#contact" : "/#contact"} className="btn btn-primary">
              Get Started
            </Link>
          </div>

          <button
            className={`mobile-menu-btn ${mobileMenuOpen ? "open" : ""}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`mobile-menu ${mobileMenuOpen ? "open" : ""}`}
        aria-hidden={!mobileMenuOpen}
      >
        <nav className="mobile-nav" aria-label="Mobile Navigation">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="mobile-nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div style={{ marginTop: "24px" }}>
            <Link
              href={isHome ? "#contact" : "/#contact"}
              className="btn btn-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
