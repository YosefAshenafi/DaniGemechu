import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { MessageSquare, FileEdit, Scale, ShieldCheck, ArrowRight, CheckCircle, Clock, Zap } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Legal Consultation",
    icon: MessageSquare,
    description: "Personalized advice to evaluate your legal position and plan your next steps with confidence. Ideal for complex cases.",
    features: ["Risk assessment", "Discovery call", "Strategic planning", "Confidential review"]
  },
  {
    title: "Contract Drafting & Review",
    icon: FileEdit,
    description: "Professional drafting and review of contracts to ensure they are legally sound, enforceable, and protect your interests.",
    features: ["Commercial agreements", "FIDIC contracts", "Lease agreements", "Employment contracts"]
  },
  {
    title: "Legal Representation",
    icon: Scale,
    description: "Professional representation in Ethiopian federal courts and in alternative dispute resolution (ADR) forums.",
    features: ["Court appearances", "Arbitration", "Mediation", "Settlement negotiations"]
  },
  {
    title: "Advisory Services",
    icon: ShieldCheck,
    description: "Ongoing legal support for businesses to ensure compliance with Ethiopian regulatory frameworks and proclamations.",
    features: ["Regulatory compliance", "Policy review", "Due diligence", "Labour law advisory"]
  }
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen pt-24 bg-white">
      <Navbar variant="solid" />
      <main className="flex-grow">
        {/* Banner */}
        <section className="bg-primary py-24 relative overflow-hidden">
           <div className="absolute inset-0 opacity-10">
                <Image src="/images/hero-bg.png" alt="Overlay" fill className="object-cover" />
           </div>
           <div className="container mx-auto px-6 relative z-10 text-center space-y-4">
              <span className="text-accent text-sm font-bold tracking-widest uppercase">Professional Legal Offerings</span>
              <h1 className="text-5xl md:text-7xl font-serif font-bold text-white">Our Services</h1>
           </div>
        </section>

        {/* Services Grid */}
        <section className="py-32">
           <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
              {services.map((service, idx) => (
                <div key={idx} className="group p-10 bg-white rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-l-4 border-l-accent overflow-hidden relative">
                   <div className="relative z-10 space-y-8">
                      <div className="flex items-center gap-6">
                         <div className="w-16 h-16 bg-muted rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                             <service.icon size={32} />
                         </div>
                         <h3 className="text-3xl font-serif font-bold text-primary">{service.title}</h3>
                      </div>
                      <p className="text-lg text-gray-500 font-light leading-relaxed">{service.description}</p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                         {service.features.map((f, i) => (
                           <div key={i} className="flex items-center gap-3 bg-muted/50 p-4 rounded-xl group-hover:bg-accent/5 transition-colors">
                              <CheckCircle size={18} className="text-accent" />
                              <span className="text-gray-600 font-bold text-sm tracking-wide">{f}</span>
                           </div>
                         ))}
                      </div>

                      <div className="pt-6">
                         <Link href="/contact" className="inline-flex items-center gap-3 text-accent font-bold hover:text-primary transition-colors text-lg group-hover:translate-x-2 transition-transform">
                            Book This Service <ArrowRight size={20} />
                         </Link>
                      </div>
                   </div>

                   {/* Background accent */}
                   <div className="absolute top-0 right-0 w-40 h-40 bg-accent/5 rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-700 pointer-events-none" />
                </div>
              ))}
           </div>
        </section>

        {/* Process Section */}
        <section className="py-32 bg-muted">
           <div className="container mx-auto px-6 text-center space-y-20">
              <div className="space-y-6">
                 <span className="text-accent text-sm font-bold tracking-widest uppercase">The Process</span>
                 <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary">How We Work Together</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">
                 {/* Connecting line for desktop */}
                 <div className="hidden md:block absolute top-[60px] left-1/4 right-1/4 h-0.5 bg-accent/20 z-0" />
                 
                 {[
                   { icon: MessageSquare, title: "1. Consultation", desc: "First meeting to understand your case and legal goals." },
                   { icon: Zap, title: "2. Strategic Plan", desc: "Developing a tailored legal map and identifying risks." },
                   { icon: ShieldCheck, title: "3. Execution", desc: "Dedicated representation and follow-through until resolved." }
                 ].map((step, idx) => (
                   <div key={idx} className="relative z-10 space-y-6">
                      <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-primary shadow-xl border-4 border-muted mx-auto group hover:border-accent transition-all duration-500">
                         <step.icon size={36} className="text-accent" />
                      </div>
                      <div className="space-y-3 px-10">
                         <h4 className="text-2xl font-serif font-bold text-primary">{step.title}</h4>
                         <p className="text-gray-500 font-medium leading-relaxed">{step.desc}</p>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
