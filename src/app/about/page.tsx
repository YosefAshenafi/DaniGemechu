import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { GraduationCap, Briefcase, Award, Heart, CheckCircle2 } from "lucide-react";

const education = [
  {
    institution: "Addis Ababa University",
    degree: "LL.M in Constitutional and Public Law",
    year: "Graduated with Honors"
  },
  {
    institution: "Addis Ababa University",
    degree: "LL.B in Law",
    year: "Foundation of Legal Expertise"
  }
];

const values = [
  {
    title: "Client-Centric Approach",
    description: "Every case is unique, and I pride myself on delivering personalized strategies that align with my clients' specific goals."
  },
  {
    title: "Unwavering Integrity",
    description: "Honesty and ethical practice are the cornerstones of my professional life. I provide transparent counsel at every step."
  },
  {
    title: "Local Expertise",
    description: "Deep understanding of Ethiopian legal systems, regulations, and procedural nuances in Addis Ababa federal courts."
  }
];

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen pt-24 bg-white">
      <Navbar />
      <main className="flex-grow">
        {/* Banner */}
        <section className="bg-primary py-24 relative overflow-hidden">
           <div className="absolute inset-0 opacity-10">
                <Image src="/images/hero-bg.png" alt="Overlay" fill className="object-cover" />
           </div>
           <div className="container mx-auto px-6 relative z-10 text-center space-y-4">
              <span className="text-accent text-sm font-bold tracking-widest uppercase">The Attorney Behind The Expertise</span>
              <h1 className="text-5xl md:text-7xl font-serif font-bold text-white">About Daniel Gemechu</h1>
           </div>
        </section>

        {/* Bio Section */}
        <section className="py-32">
          <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
             <div className="relative">
                <div className="aspect-[4/5] relative rounded-[3rem] overflow-hidden shadow-2xl border-2 border-white shadow-primary/20">
                    <Image src="/images/daniel-portrait.png" alt="Daniel Gemechu" fill className="object-cover" />
                </div>
                 <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-accent/20 blur-3xl rounded-full" />
                 <div className="absolute top-10 -left-10 w-64 h-64 bg-primary/10 blur-3xl rounded-full" />
             </div>

             <div className="space-y-12">
                <div className="space-y-8 text-lg text-gray-600 leading-relaxed font-light">
                   <p className="text-2xl font-serif font-semibold text-primary italic">
                      "My mission is to provide high-quality legal representation that combines strategic thinking with a deep understanding of Ethiopian law."
                   </p>
                   <p>
                      Daniel Gemechu Werdofa is a licensed federal court advocate based in Addis Ababa, Ethiopia. With over 7 years of intensive experience, he has specialized in providing legal counsel and representation in construction law, real estate law, contract administration, and labour law.
                   </p>
                   <p>
                      He holds an LL.M in Constitutional and Public Law from the prestigious Addis Ababa University, equipping him with the academic depth required to handle complex legal challenges for both individuals and multinational corporations.
                   </p>
                   <p>
                      Daniel's approach is marked by a meticulous attention to detail, a commitment to his clients' best interests, and a reputation for resolving disputes through both litigation and strategic negotiation.
                   </p>
                </div>
                
                <div className="pt-10 border-t border-gray-100 grid grid-cols-2 gap-8">
                   <div className="space-y-1">
                      <p className="text-3xl font-serif font-bold text-accent">7+</p>
                      <p className="text-sm font-bold text-primary uppercase tracking-wider">Years Experience</p>
                   </div>
                   <div className="space-y-1">
                      <p className="text-3xl font-serif font-bold text-accent">AAU</p>
                      <p className="text-sm font-bold text-primary uppercase tracking-wider">LL.M Alumni</p>
                   </div>
                </div>
             </div>
          </div>
        </section>

        {/* Education & Experience */}
        <section className="py-32 bg-muted relative">
           <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">
              <div className="space-y-12">
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center text-accent">
                        <GraduationCap size={24} />
                    </div>
                    <h3 className="text-3xl font-serif font-bold text-primary">Education</h3>
                 </div>
                 <div className="space-y-8">
                    {education.map((edu, idx) => (
                       <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-white/50 group hover:shadow-xl transition-all border-l-4 border-l-accent">
                          <h4 className="text-xl font-bold text-primary font-serif mb-2">{edu.degree}</h4>
                          <p className="text-accent font-bold text-sm mb-2">{edu.institution}</p>
                          <p className="text-gray-500 font-medium italic">{edu.year}</p>
                       </div>
                    ))}
                 </div>
              </div>

              <div className="space-y-12">
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center text-accent">
                        <Heart size={24} />
                    </div>
                    <h3 className="text-3xl font-serif font-bold text-primary">Core Values</h3>
                 </div>
                 <div className="space-y-6">
                    {values.map((v, idx) => (
                       <div key={idx} className="flex gap-6 group">
                          <div className="w-10 h-10 mt-1 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 text-accent group-hover:bg-accent group-hover:text-white transition-all">
                             <CheckCircle2 size={20} />
                          </div>
                          <div className="space-y-2">
                             <h4 className="text-xl font-bold text-primary font-serif">{v.title}</h4>
                             <p className="text-gray-500 font-medium leading-relaxed">{v.description}</p>
                          </div>
                       </div>
                    ))}
                 </div>
              </div>
           </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
