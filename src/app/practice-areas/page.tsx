import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Hammer, Home, FileText, Users, ArrowRight, Gavel, FileCheck, Search, Scale } from "lucide-react";
import Link from "next/link";

const practiceAreas = [
  {
    id: "construction",
    title: "Construction Law",
    icon: Hammer,
    description: "Expert counsel on complex infrastructure projects, disputes, and contract administration in the Ethiopian construction sector.",
    content: "Providing guidance on everything from drafting FIDIC contracts to representing clients in multi-million dollar construction disputes. Daniel has deep experience with local public procurement rules and private-sector project management legalities.",
    cases: [
      "Contract negotiation and administration",
      "Dispute resolution and arbitration",
      "Delay and defect claims",
      "Regulatory compliance for projects"
    ],
    why: "Over 7 years of specialized experience in large-scale Ethiopian infrastructure projects."
  },
  {
    id: "real-estate",
    title: "Real Estate Law",
    icon: Home,
    description: "Comprehensive legal assistance for property acquisition, leasing, and land disputes in Addis Ababa and beyond.",
    content: "Assisting both developers and individual buyers in navigating property law. Whether you're dealing with land lease renewals or title deed disputes, Daniel provides strategic legal direction.",
    cases: [
      "Property transfer and title search",
      "Land lease and ownership disputes",
      "Commercial and residential leasing",
      "Mortgage and banking legalities"
    ],
    why: "Deep local knowledge of land laws and urban planning regulations in Ethiopia."
  },
  {
    id: "contract",
    title: "Contract Law",
    icon: FileText,
    description: "Strategic drafting, reviewing, and enforcement of commercial contracts to protect your business interests.",
    content: "In a dynamic business environment like Ethiopia's, your contracts are your best defense. Daniel ensures your agreements are legally sound, enforceable, and aligned with your business goals.",
    cases: [
      "Commercial contract drafting",
      "Contractual breach and enforcement",
      "Legal risk assessment",
      "Mergers and acquisitions legalities"
    ],
    why: "Meticulous attention to detail and a commitment to protecting your business from legal risks."
  },
  {
    id: "labour",
    title: "Labour Law",
    icon: Users,
    description: "Navigating Ethiopian employment regulations for both employers and employees with precision and fairness.",
    content: "Ensuring fair employment practices and legal compliance. Daniel helps companies manage their human resources in line with the latest Ethiopian labour proclamations and represents employees in wrongful termination cases.",
    cases: [
      "Employment contract drafting",
      "Workplace dispute mediation",
      "Wrongful termination litigation",
      "Labour proclamation compliance"
    ],
    why: "Balanced expertise that ensures legal compliance and fairness in the workplace."
  }
];

export default function PracticeAreasPage() {
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
              <span className="text-accent text-sm font-bold tracking-widest uppercase">Deep Legal Expertise</span>
              <h1 className="text-5xl md:text-7xl font-serif font-bold text-white">Our Practice Areas</h1>
           </div>
        </section>

        {/* Areas List */}
        <div className="container mx-auto px-6 py-32 space-y-32">
          {practiceAreas.map((area, idx) => (
            <section key={area.id} id={area.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-24 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
               <div className={`space-y-10 ${idx % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="space-y-6">
                    <div className="w-20 h-20 bg-muted rounded-3xl flex items-center justify-center text-primary shadow-xl border-b-4 border-accent">
                        <area.icon size={40} />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary">{area.title}</h2>
                    <p className="text-lg text-gray-600 leading-relaxed font-light">{area.content}</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                     <div className="space-y-6 bg-muted/40 p-8 rounded-2xl border border-muted-foreground/10 group hover:bg-white hover:shadow-2xl transition-all">
                        <div className="flex items-center gap-3 text-accent mb-4">
                           <Scale size={20} />
                           <h4 className="text-xl font-serif font-bold text-primary">Common Cases</h4>
                        </div>
                        <ul className="space-y-4">
                           {area.cases.map((c, i) => (
                             <li key={i} className="flex items-start gap-3 group-hover:text-primary transition-colors">
                                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                                <span className="text-gray-500 font-medium group-hover:text-primary-light transition-colors">{c}</span>
                             </li>
                           ))}
                        </ul>
                     </div>

                     <div className="space-y-6 bg-primary/5 p-8 rounded-2xl border border-primary/10 group hover:bg-primary hover:text-white transition-all">
                        <div className="flex items-center gap-3 text-accent mb-4">
                           <Gavel size={20} />
                           <h4 className="text-xl font-serif font-bold text-primary group-hover:text-white transition-colors">Why Choose Me</h4>
                        </div>
                        <p className="text-gray-600 font-medium group-hover:text-gray-300 leading-relaxed transition-colors">
                           {area.why}
                        </p>
                        <div className="pt-6">
                           <button className="text-accent font-bold text-sm tracking-widest uppercase hover:text-white flex items-center gap-2 group-hover:translate-x-2 transition-all">
                             Consultation <ArrowRight size={16} />
                           </button>
                        </div>
                     </div>
                  </div>
               </div>

               <div className={`relative ${idx % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="aspect-square relative rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white shadow-primary/10 group">
                      <Image src="/images/hero-bg.png" alt="Office context" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/40 transition-colors" />
                  </div>
                  {/* Floating badge */}
                  <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-2xl shadow-2xl border-b-4 border-accent max-w-xs group-hover:-translate-y-4 transition-transform duration-500">
                     <p className="text-sm font-bold text-accent uppercase tracking-widest mb-2 flex items-center gap-2">
                        <FileCheck size={16} /> Verified Expert
                     </p>
                     <p className="text-primary font-serif font-bold text-lg">Specialized Legal Guidance in {area.title}</p>
                  </div>
               </div>
            </section>
          ))}
        </div>

        {/* CTA */}
        <section className="bg-muted py-32 border-t border-gray-100 relative overflow-hidden">
             <div className="container mx-auto px-6 text-center space-y-12">
                 <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary">Need Legal Help in a Specific Area?</h2>
                 <p className="max-w-2xl mx-auto text-xl text-gray-500 font-light leading-relaxed">
                    Daniel provides individualized legal strategies for each of his clients. Reach out today for a discovery call to see how he can help you.
                 </p>
                 <div className="pt-6">
                    <button className="bg-primary text-white px-12 py-5 rounded-full font-bold text-xl hover:bg-primary-light transition-all shadow-2xl hover:shadow-primary/20">
                        Discuss Your Case
                    </button>
                 </div>
             </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
