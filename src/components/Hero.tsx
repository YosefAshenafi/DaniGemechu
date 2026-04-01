"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-28 overflow-hidden bg-primary">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.png"
          alt="Daniel Gemechu Law Office"
          fill
          className="object-cover opacity-30 scale-110"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-transparent backdrop-blur-[2px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-white space-y-12"
        >
          <div className="space-y-6">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block text-accent uppercase tracking-widest text-[10px] font-bold bg-accent/10 px-4 py-2 rounded-full border border-accent/20 border-l-4"
            >
              Licensed Federal Court Advocate
            </motion.span>
            <h1 className="text-4xl md:text-7xl font-serif font-bold leading-tight">
              Trusted Legal <br />
              <span className="text-accent italic serif">Expertise</span> In Ethiopia
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-lg leading-relaxed font-light">
              Daniel Gemechu offers comprehensive legal solutions for individuals and corporations in construction, real estate, and contract law. Professional. Strategic. Reliable.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <Link
              href="/contact"
              className="bg-accent text-primary w-full sm:w-auto px-10 py-5 rounded-full font-bold text-lg hover:bg-accent-light transition-all shadow-xl hover:shadow-accent/20 flex items-center justify-center gap-2"
            >
              Book Consultation
              <ChevronRight size={20} />
            </Link>
            <Link
              href="/about"
              className="text-white hover:text-accent font-semibold px-8 py-4 border border-white/20 hover:border-accent/40 rounded-full transition-all flex items-center justify-center gap-2 bg-white/5 backdrop-blur-sm"
            >
              Learn More
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-12 border-t border-white/10 mb-10">
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
              <p className="text-2xl sm:text-4xl md:text-5xl font-serif font-bold text-accent">20+</p>
              <p className="text-[10px] sm:text-xs uppercase tracking-wider text-gray-400 mt-1 font-bold">Years Experience</p>
            </div>
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left border-t border-white/5 sm:border-0 pt-4 sm:pt-0">
              <p className="text-2xl sm:text-4xl md:text-5xl font-serif font-bold text-accent">500+</p>
              <p className="text-[10px] sm:text-xs uppercase tracking-wider text-gray-400 mt-1 font-bold">Cases Handled</p>
            </div>
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left border-t border-white/5 sm:border-0 pt-4 sm:pt-0">
              <p className="text-2xl sm:text-4xl md:text-5xl font-serif font-bold text-accent">100%</p>
              <p className="text-[10px] sm:text-xs uppercase tracking-wider text-gray-400 mt-1 font-bold">Client Dedication</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative hidden lg:block"
        >
          <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border-2 border-white/5 ring-1 ring-white/10 group">
            <Image
              src="/images/daniel-portrait.png"
              alt="Daniel Gemechu portrait"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>

          {/* Accent decoration */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/10 blur-3xl rounded-full" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary-light/40 blur-3xl rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
