"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
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

export default function Navbar({ variant = "transparent" }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isSolid || isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-6 flex justify-between items-center transition-all">
        <Link href="/" className="flex flex-col group">
          <span className={cn(
            "text-xl md:text-2xl font-serif font-bold tracking-tight transition-colors group-hover:text-accent",
            isScrolled ? "text-primary" : "text-primary"
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
                "text-primary-light"
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
          className="md:hidden fixed inset-0 top-[70px] bg-white z-40 flex flex-col p-8 space-y-6 animate-in slide-in-from-right-full duration-300"
        >
          {NavLinks.map((link, idx) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl font-serif font-bold text-primary hover:text-accent transition-colors border-b border-gray-50 pb-4"
              style={{ animationDelay: `${idx * 50}ms` }}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-8">
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full bg-primary text-white px-6 py-4 rounded-2xl text-center font-bold shadow-xl flex items-center justify-center gap-3 text-lg"
            >
              Book Consultation
            </Link>
          </div>
          
          <div className="mt-auto pt-10 border-t border-gray-100 space-y-4">
             <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Connect Directly</p>
             <p className="text-lg font-bold text-primary">+251 911 234 567</p>
             <p className="text-sm text-gray-500 font-medium">daniel.gemechu@law.et</p>
          </div>
        </div>
      )}
    </header>
  );
}
