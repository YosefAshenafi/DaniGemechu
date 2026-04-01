import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import PracticeAreaCard from "@/components/PracticeAreaCard";
import Link from "next/link";
import { CheckCircle, Shield, Briefcase, Award, ArrowRight } from "lucide-react";
import Image from "next/image";

const mainPracticeAreas = [
  {
    id: "construction" as const,
    title: "Construction Law",
    description: "Expert counsel on complex infrastructure projects, disputes, and contract administration in the Ethiopian construction sector."
  },
  {
    id: "realestate" as const,
    title: "Real Estate Law",
    description: "Comprehensive legal assistance for property acquisition, leasing, and land disputes in Addis Ababa and beyond."
  },
  {
    id: "contract" as const,
    title: "Contract Law",
    description: "Strategic drafting, reviewing, and enforcement of commercial contracts to protect your business interests."
  },
  {
    id: "labour" as const,
    title: "Labour Law",
    description: "Navigating Ethiopian employment regulations for both employers and employees with precision and fairness."
  }
];

const reasonsToChoose = [
  {
    icon: Award,
    title: "7+ Years Experience",
    description: "Proven track record in high-stakes legal matters and court representation."
  },
  {
    icon: Shield,
    title: "Trusted Reputation",
    description: "Highly regarded for integrity, transparency, and professional ethics."
  },
  {
    icon: Briefcase,
    title: "Personalized Service",
    description: "Direct access to Daniel for tailored legal strategies and counsel."
  }
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar variant="solid" />
      <main className="flex-grow">
        <Hero />

        {/* Practice Areas Summary */}
        <section className="py-32 bg-white">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-20 gap-8">
              <div className="max-w-2xl">
                <span className="text-accent text-sm font-bold tracking-widest uppercase mb-4 block">Specializations</span>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary">Focused Legal Expertise <br /> For Complex Challenges</h2>
              </div>
              <Link href="/practice-areas" className="flex items-center gap-2 font-bold text-primary hover:text-accent transition-colors group">
                View All Areas <ArrowRight className="transition-transform group-hover:translate-x-2" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {mainPracticeAreas.map((area, idx) => (
                <PracticeAreaCard key={area.id} {...area} index={idx} />
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-32 bg-muted relative overflow-hidden">
          <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
             <div className="relative order-2 lg:order-1">
                <div className="aspect-square relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white shadow-primary/20">
                    <Image src="/images/hero-bg.png" alt="Legal Office" fill className="object-cover" />
                    <div className="absolute inset-0 bg-primary/40 flex items-center justify-center">
                        <div className="bg-white p-6 sm:p-10 rounded-2xl shadow-xl max-w-xs text-center border-t-4 border-accent">
                          <p className="text-2xl sm:text-3xl font-serif font-bold text-primary mb-2">98%</p>
                          <p className="text-gray-500 text-sm font-medium">Success Rate in Negotiated Settlements</p>
                        </div>
                    </div>
                </div>
                 <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-accent/10 blur-3xl rounded-full" />
             </div>

             <div className="space-y-12 order-1 lg:order-2">
                <div className="space-y-6">
                  <span className="text-accent text-sm font-bold tracking-widest uppercase">Why Choose Us</span>
                  <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary leading-tight">Committed To Your <br /> Legal Success</h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Daniel Gemechu Werdofa is not just an attorney; he is your strategic partner in navigating the complex legal landscape of Ethiopia. Every client receives the personal attention they deserve.
                  </p>
                </div>

                <div className="space-y-10">
                  {reasonsToChoose.map((reason, idx) => (
                    <div key={idx} className="flex gap-6 group">
                      <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:bg-primary group-hover:text-white transition-all text-primary">
                        <reason.icon size={24} />
                      </div>
                      <div className="space-y-2 pt-1">
                        <h4 className="text-xl font-bold text-primary font-serif">{reason.title}</h4>
                        <p className="text-gray-500 font-medium">{reason.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
             </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-primary relative overflow-hidden">
             <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/20 skew-x-[-20deg] translate-x-1/2 pointer-events-none" />
             <div className="container mx-auto px-6 relative z-10 text-center space-y-10">
                 <h2 className="text-4xl md:text-6xl font-serif font-bold text-white max-w-3xl mx-auto leading-tight">Ready To Protect Your Legal Interests In Ethiopia?</h2>
                 <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
                    Contact Daniel Gemechu today for a confidential consultation regarding your legal matters. Expert advice is just a click away.
                 </p>
                 <div className="flex flex-col sm:flex-row justify-center items-center gap-6 pt-6">
                    <Link
                        href="/contact"
                        className="bg-accent text-primary px-12 py-5 rounded-full font-bold text-xl hover:bg-accent-light transition-all shadow-2xl hover:shadow-accent/40"
                    >
                        Contact Now
                    </Link>
                    <Link
                        href="tel:+251911234567"
                        className="text-white border border-white/30 px-10 py-5 rounded-full font-semibold hover:border-accent hover:text-accent transition-all flex items-center gap-3 bg-white/5 backdrop-blur-sm"
                    >
                        Call Me Directly
                    </Link>
                 </div>
             </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
