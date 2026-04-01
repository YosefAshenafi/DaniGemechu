import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
);
const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
);

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-20 pb-10 border-t border-primary-light">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <div className="flex flex-col">
            <span className="text-2xl font-serif font-bold tracking-tight text-white">
              Daniel Gemechu
            </span>
            <span className="text-[10px] uppercase tracking-widest font-medium text-accent">
              Federal Court Advocate
            </span>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed">
            Providing expert legal counsel and representation in Addis Ababa, specializing in Construction and Real Estate Law with over 7 years of professional experience.
          </p>
          <div className="flex space-x-5 items-center">
            <Link href="https://web.facebook.com/profile.php?id=100066380541763" target="_blank">
              <FacebookIcon />
            </Link>
            <Link href="https://www.linkedin.com/in/daniel-gemechu-3133487a/" target="_blank">
              <LinkedinIcon />
            </Link>
            <Link href="https://www.youtube.com/@higenbetegebarthelawpracti5247" target="_blank" className="hover:text-red-500 transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.377.505 9.377.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
            </Link>
            <Link href="https://www.tiktok.com/@danielgemechulaw" target="_blank" className="text-gray-400 hover:text-white transition-colors flex items-center gap-1.5 text-[10px] font-bold">
              <span className="bg-white/10 p-1 px-2 rounded-full">TikTok</span>
            </Link>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6 font-serif border-b border-white/10 pb-2 inline-block">Quick Links</h4>
          <ul className="space-y-4 text-sm text-gray-300">
            <li><Link href="/about" className="hover:text-accent transition-colors">About Me</Link></li>
            <li><Link href="/practice-areas" className="hover:text-accent transition-colors">Practice Areas</Link></li>
            <li><Link href="/services" className="hover:text-accent transition-colors">Services</Link></li>
            <li><Link href="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6 font-serif border-b border-white/10 pb-2 inline-block">Practice Areas</h4>
          <ul className="space-y-4 text-sm text-gray-300">
            <li><Link href="/practice-areas#construction" className="hover:text-accent transition-colors">Construction Law</Link></li>
            <li><Link href="/practice-areas#real-estate" className="hover:text-accent transition-colors">Real Estate Law</Link></li>
            <li><Link href="/practice-areas#contract" className="hover:text-accent transition-colors">Contract Law</Link></li>
            <li><Link href="/practice-areas#labour" className="hover:text-accent transition-colors">Labour Law</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6 font-serif border-b border-white/10 pb-2 inline-block">Contact Info</h4>
          <ul className="space-y-4 text-sm text-gray-300">
            <li className="flex items-center space-x-3 group">
              <div className="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-all">
                <Phone size={16} className="text-accent" />
              </div>
              <span className="group-hover:text-accent transition-colors">+251 (0) 911 413 283</span>
            </li>
            <li className="flex items-center space-x-3 group">
              <div className="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-all">
                <Mail size={16} className="text-accent" />
              </div>
              <span className="group-hover:text-accent transition-colors">danielgemechulawoffice@gmail.com</span>
            </li>
            <li className="flex items-start space-x-3 group">
              <div className="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-all flex-shrink-0 mt-0.5">
                <MapPin size={16} className="text-accent" />
              </div>
              <span className="group-hover:text-accent transition-colors">CMC Area, Addis Ababa, Ethiopia</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
        <p>&copy; {new Date().getFullYear()} Daniel Gemechu. All Rights Reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/legal" className="hover:text-white transition-colors">Legal Disclaimer</Link>
        </div>
      </div>
    </footer>
  );
}
