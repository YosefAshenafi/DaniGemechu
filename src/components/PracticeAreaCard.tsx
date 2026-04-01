"use client";

import { motion } from "framer-motion";
import { Hammer, Home, FileText, Users, ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const icons = {
  construction: Hammer,
  realestate: Home,
  contract: FileText,
  labour: Users,
};

interface PracticeAreaCardProps {
  id: keyof typeof icons;
  title: string;
  description: string;
  index: number;
}

export default function PracticeAreaCard({ id, title, description, index }: PracticeAreaCardProps) {
  const Icon = icons[id];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative bg-white p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 overflow-hidden"
    >
      <div className="relative z-10 space-y-6">
        <div className="w-16 h-16 bg-muted rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 transform group-hover:rotate-6">
          <Icon size={32} />
        </div>
        <div className="space-y-3">
          <h3 className="text-2xl font-serif font-bold text-primary group-hover:text-accent transition-colors">
            {title}
          </h3>
          <p className="text-gray-500 leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>
        <Link
          href={`/practice-areas#${id}`}
          className="inline-flex items-center gap-2 text-sm font-bold text-accent group-hover:text-primary transition-colors"
        >
          View Details
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-2" />
        </Link>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700 pointer-events-none" />
      <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-primary/5 rounded-full group-hover:scale-150 transition-transform duration-700 pointer-events-none" />
    </motion.div>
  );
}
