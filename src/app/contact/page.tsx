"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Phone, Mail, MapPin, Send, MessageSquare, Clock } from "lucide-react";
const FacebookIcon = () => (
   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
);
const LinkedinIcon = () => (
   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
);
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const contactSchema = z.object({
   name: z.string().min(2, { message: "Name must be at least 2 characters." }),
   email: z.string().email({ message: "Invalid email address." }),
   subject: z.string().min(5, { message: "Subject is required." }),
   message: z.string().min(10, { message: "Message should be more detailed." }),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactPage() {
   const {
      register,
      handleSubmit,
      formState: { errors, isSubmitting },
      reset
   } = useForm<ContactFormData>({
      resolver: zodResolver(contactSchema),
   });

   const onSubmit = async (data: ContactFormData) => {
      // Integrate email sending here in real use case
      console.log(data);
      alert("Thank you! Your message has been sent successfully.");
      reset();
   };

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
                  <span className="text-accent text-sm font-bold tracking-widest uppercase">Get In Touch</span>
                  <h1 className="text-5xl md:text-7xl font-serif font-bold text-white">Contact Daniel Gemechu</h1>
               </div>
            </section>

            <section className="py-32">
               <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24">
                  {/* Contact Info */}
                  <div className="space-y-16">
                     <div className="space-y-6">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary">Let's Discuss <br /> Your Legal Matters</h2>
                        <p className="text-xl text-gray-500 font-light leading-relaxed">
                           Whether you have a question about construction law or need representation in a real estate dispute, I'm here to help you navigate through the process.
                        </p>
                     </div>

                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                        {[
                           { icon: Phone, title: "Phone & WhatsApp", content: "+251 (0) 911 413 283", sub: "Available 8:30 AM - 5:30 PM" },
                           { icon: Mail, title: "Email Address", content: "danielgemechulawoffice@gmail.com", sub: "Replies within 24 hours" },
                           { icon: MapPin, title: "Office Location", content: "Bole Area, Addis Ababa", sub: "Near Friendship Mall" },
                           { icon: Clock, title: "Working Hours", content: "Mon - Sat", sub: "Closed on Sundays" }
                        ].map((info, idx) => (
                           <div key={idx} className="group p-8 bg-muted rounded-3xl border border-muted-foreground/5 hover:bg-white hover:shadow-2xl transition-all">
                              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-accent mb-6 shadow-sm group-hover:bg-primary group-hover:text-white transition-all transform group-hover:rotate-3">
                                 <info.icon size={22} />
                              </div>
                              <h4 className="text-lg font-bold text-primary mb-2 font-serif">{info.title}</h4>
                              <p className="text-primary-light font-bold text-xs mb-1">{info.content}</p>
                              <p className="text-gray-400 text-xs font-medium uppercase tracking-widest">{info.sub}</p>
                           </div>
                        ))}
                     </div>

                     {/* Social Links */}
                     <div className="pt-10 border-t border-gray-100 flex items-center gap-10">
                        <h5 className="font-bold text-primary text-sm uppercase tracking-widest">Connect With Me:</h5>
                        <div className="flex gap-6">
                           <a href="https://web.facebook.com/p/Daniel-Gemechu-Law-Office-100066380541763/?_rdc=1&_rdr" target="_blank" className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-primary-light hover:text-accent hover:border-accent transition-all hover:bg-accent/5">
                              <FacebookIcon />
                           </a>
                           <a href="https://www.linkedin.com/in/daniel-gemechu-3133487a/" target="_blank" className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-primary-light hover:text-accent hover:border-accent transition-all hover:bg-accent/5">
                              <LinkedinIcon />
                           </a>
                           <a href="https://www.youtube.com/@higenbetegebarthelawpracti5247" target="_blank" className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-primary-light hover:text-red-600 hover:border-red-600 transition-all hover:bg-red-50">
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.377.505 9.377.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                           </a>
                           <a href="https://www.tiktok.com/@danielgemechulaw" target="_blank" className="flex items-center gap-2 font-bold text-sm text-primary hover:text-accent transition-colors">
                              <span className="p-1 px-3 bg-primary text-white rounded-full text-[10px]">TikTok</span> @higenbetegebarthelawpracti5247
                           </a>
                        </div>
                     </div>
                  </div>

                  {/* Contact Form */}
                  <div className="bg-white p-10 md:p-16 rounded-[3rem] shadow-2xl border border-gray-50 relative overflow-hidden group">
                     {/* Decorative background for form */}
                     <div className="absolute top-0 right-0 w-40 h-40 bg-accent/5 rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-700 pointer-events-none" />

                     <form onSubmit={handleSubmit(onSubmit)} className="relative z-10 space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                           <div className="space-y-2">
                              <label className="text-sm font-bold text-primary uppercase tracking-widest ml-1">Your Name</label>
                              <input
                                 {...register("name")}
                                 className={`w-full bg-muted border-none p-5 rounded-2xl focus:ring-2 focus:ring-accent transition-all font-medium ${errors.name ? 'ring-2 ring-red-500' : ''}`}
                                 placeholder="Your name"
                              />
                              {errors.name && <p className="text-red-500 text-xs font-bold mt-1 ml-1">{errors.name.message}</p>}
                           </div>
                           <div className="space-y-2">
                              <label className="text-sm font-bold text-primary uppercase tracking-widest ml-1">Email Address</label>
                              <input
                                 {...register("email")}
                                 className={`w-full bg-muted border-none p-5 rounded-2xl focus:ring-2 focus:ring-accent transition-all font-medium ${errors.email ? 'ring-2 ring-red-500' : ''}`}
                                 placeholder="Your email address"
                              />
                              {errors.email && <p className="text-red-500 text-xs font-bold mt-1 ml-1">{errors.email.message}</p>}
                           </div>
                        </div>
                        <div className="space-y-2">
                           <label className="text-sm font-bold text-primary uppercase tracking-widest ml-1">Subject Matter</label>
                           <input
                              {...register("subject")}
                              className={`w-full bg-muted border-none p-5 rounded-2xl focus:ring-2 focus:ring-accent transition-all font-medium ${errors.subject ? 'ring-2 ring-red-500' : ''}`}
                              placeholder="Construction Dispute / Consultation / etc."
                           />
                           {errors.subject && <p className="text-red-500 text-xs font-bold mt-1 ml-1">{errors.subject.message}</p>}
                        </div>
                        <div className="space-y-2">
                           <label className="text-sm font-bold text-primary uppercase tracking-widest ml-1">Your Message</label>
                           <textarea
                              {...register("message")}
                              rows={5}
                              className={`w-full bg-muted border-none p-5 rounded-2xl focus:ring-2 focus:ring-accent transition-all font-medium ${errors.message ? 'ring-2 ring-red-500' : ''}`}
                              placeholder="Tell me more about your legal needs..."
                           />
                           {errors.message && <p className="text-red-500 text-xs font-bold mt-1 ml-1">{errors.message.message}</p>}
                        </div>

                        <button
                           type="submit"
                           disabled={isSubmitting}
                           className="w-full bg-primary text-white py-6 rounded-2xl font-bold text-xl hover:bg-primary-light transition-all shadow-xl hover:shadow-primary/20 flex items-center justify-center gap-3 disabled:opacity-50"
                        >
                           {isSubmitting ? "Sending..." : "Send Message"}
                           <Send size={20} />
                        </button>
                     </form>
                  </div>
               </div>
            </section>

            {/* Map Section Placeholder */}
            <section className="h-[500px] w-full bg-muted relative">
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-6">
                     <div className="w-20 h-20 bg-white rounded-3xl shadow-xl flex items-center justify-center text-accent mx-auto">
                        <MapPin size={36} />
                     </div>
                     <h3 className="text-3xl font-serif font-bold text-primary">Office Location</h3>
                     <p className="text-gray-500 font-bold max-w-xs mx-auto">Find us in the heart of Addis Ababa, Bole Area. Near Friendship International Hotel.</p>
                     <button className="bg-accent text-primary px-10 py-4 rounded-full font-bold hover:bg-accent-light transition-all shadow-lg">Get Directions</button>
                  </div>
               </div>
               {/* In real use case, embed a Google Maps iframe here */}
               <div className="absolute inset-0 opacity-20 bg-primary/10 grayscale pointer-events-none" />
            </section>
         </main>
         <Footer />
      </div>
   );
}
