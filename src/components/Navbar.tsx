"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavbarProps {
  variant?: "transparent" | "solid";
}

const NavLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Practice Areas", href: "/practice-areas" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar({ variant = "solid" }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isSolid = variant === "solid" || (variant === "transparent" && isScrolled);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 bg-white shadow-sm py-3"
      )}
    >
      <div className="container mx-auto px-6 flex justify-between items-center transition-all">
        <Link href="/" className="flex flex-col group">
          <span className={cn(
            "text-xl md:text-2xl font-serif font-bold tracking-tight transition-colors group-hover:text-accent text-primary",
          )}>
            Daniel Gemechu
          </span>
          <span className={cn(
            "text-[9px] md:text-[10px] uppercase tracking-widest font-bold text-accent",
            isScrolled ? "opacity-100" : "opacity-90"
          )}>
            Federal Court Advocate
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {NavLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-accent",
                pathname === link.href ? "text-accent" : "text-primary-light"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-primary text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-primary-light transition-all shadow-md hover:shadow-lg"
          >
            Book Consultation
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-primary p-2 hover:bg-muted rounded-lg transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 top-[60px] bg-white z-40 overflow-y-auto"
        >
          {NavLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={cn(
                "block py-3 px-6 text-sm font-medium transition-colors border-b border-gray-100",
                pathname === link.href ? "text-accent bg-accent/5" : "text-primary"
              )}
            >
              {link.name}
            </Link>
          ))}
          
          <div className="border-t border-gray-200 mt-2 bg-gray-50">
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full bg-primary text-white py-3 text-center text-sm font-semibold"
            >
              Book Consultation
            </Link>
          </div>
          
          <div className="py-3 px-6 border-t border-gray-100 bg-white">
            <p className="text-sm font-bold text-primary">+251 (0) 911 413 283</p>
          </div>
        </div>
      )}
    </header>
  );
}
