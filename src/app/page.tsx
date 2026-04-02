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
    title: "20+ Years Experience",
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

              <div className="mb-20">
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

        {/* YouTube Section */}
        <section className="py-32 bg-white relative overflow-hidden">
          <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="text-accent text-sm font-bold tracking-widest uppercase flex items-center gap-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-red-600"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.377.505 9.377.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                  Legal Education & Insights
                </span>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary">"Higen Betegebar" <br />Youtube Channel</h2>
                <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
                  Daniel Gemechu hosts a specialized TV show/ Youtube Channel focused on legal literacy and Ethiopian law practice. Watch educational episodes and gain expert insights into construction, real estate, and civil law.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6">
                <Link
                  href="https://www.youtube.com/@higenbetegebarthelawpracti5247"
                  target="_blank"
                  className="bg-red-600 text-white px-10 py-4 rounded-full font-bold hover:bg-red-700 transition-all flex items-center justify-center gap-3 shadow-lg hover:shadow-red-600/20"
                >
                  Watch Episodes On YouTube (16k+ Subscribers)
                </Link>
                <div className="flex items-center gap-4 text-primary font-bold">
                  <div className="flex -space-x-4">
                    {[
                      "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=100&h=100&fit=crop",
                      "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=100&h=100&fit=crop",
                      "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=100&h=100&fit=crop"
                    ].map((img, i) => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden relative">
                        <Image src={img} alt="Viewer" fill className="object-cover" unoptimized />
                      </div>
                    ))}
                  </div>
                  <p className="text-sm">Joined by thousands of viewers across Ethiopia</p>
                </div>
              </div>
            </div>

            <Link href="https://www.youtube.com/@higenbetegebarthelawpracti5247"
              target="_blank">
              <div className="relative group cursor-pointer">
                <div className="aspect-video relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-muted ring-1 ring-primary/5">
                  <Image src="/images/ytube.png" alt="Youtube channel Show Preview" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-primary/20 flex items-center justify-center group-hover:bg-primary/40 transition-all">
                    <div className="w-20 h-20 bg-red-600 text-white rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
                    </div>
                  </div>
                </div>
                {/* Decorative badge */}
                <div className="absolute -top-6 -right-6 bg-accent p-4 py-2 rounded-xl text-primary font-bold text-xs shadow-xl rotate-12 group-hover:rotate-0 transition-transform">
                  NEW EPISODE AVAILABLE
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* TikTok Section */}
        <section className="py-32 bg-muted relative overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-8 text-center md:text-left">
              <div className="max-w-2xl">
                <span className="text-accent text-sm font-bold tracking-widest uppercase mb-4 block">Viral Legal Tips</span>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary">Discover Legal Wisdom <br /> On TikTok</h2>
              </div>
              <Link
                href="https://www.tiktok.com/@danielgemechulaw"
                target="_blank"
                className="bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-primary-light transition-all shadow-xl flex items-center justify-center gap-2"
              >
                Follow @higenbetegebarthelawpracti5247
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { views: "267K+", title: "The Truth About Inheritance Law Most People Ignore", color: "bg-pink-500", img: "/images/tiktok-1.png" },
                { views: "120K+", title: "Drinking and attending court", color: "bg-blue-500", img: "/images/tiktok-2.png" },
                { views: "85K+", title: "Labour Rights in Ethiopia", color: "bg-green-500", img: "/images/tiktok-3.png" },
                { views: "112K+", title: "Your Case, Your Rights", color: "bg-purple-500", img: "/images/tiktok-4.png" }
              ].map((video, idx) => (
                <Link
                  key={idx}
                  href="https://www.tiktok.com/@danielgemechulaw"
                  target="_blank"
                  className="group relative aspect-[9/16] rounded-[2rem] overflow-hidden bg-primary shadow-2xl hover:-translate-y-2 transition-all duration-500"
                >
                  <Image
                    src={video.img}
                    alt={video.title}
                    fill
                    className="object-cover opacity-60 group-hover:opacity-40 transition-opacity"
                  />

                  {/* Glassmorphism Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-between p-6 bg-gradient-to-t from-black/80 via-transparent to-transparent">
                    <div className="flex justify-between items-start">
                      <div className="bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-2 border border-white/20">
                        <div className={`w-2 h-2 rounded-full animate-pulse ${video.color}`} />
                        <span className="text-[10px] font-bold text-white uppercase tracking-widest">Legal Tip</span>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-white/90">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" /><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" /></svg>
                        <span className="text-sm font-bold">{video.views} Views</span>
                      </div>
                      <h4 className="text-xl font-bold text-white leading-tight font-serif group-hover:text-accent transition-colors">
                        {video.title}
                      </h4>
                    </div>
                  </div>

                  {/* Play Icon hover effect */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/30 scale-75 group-hover:scale-100 transition-transform duration-500">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-white"><path d="M8 5v14l11-7z" /></svg>
                    </div>
                  </div>
                </Link>
              ))}
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
                href="tel:+251911413283"
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
