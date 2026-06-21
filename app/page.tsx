"use client";
/// <reference types="react" />

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import "./globals.css";
import { 
  Users, 
  Tv, 
  ArrowRight,  
  MapPin, 
  ChevronRight, 
  Calendar, 
  TrendingUp, 
  ShieldCheck, 
  Globe,
  Sun,
  CircleDot
} from 'lucide-react';

const Home: React.FC = () => {

  const programs = [
    {
      title: "Private Coaching",
      desc: "One-on-one customized training to fast-track your technique, footwork, and match strategy.",
      features: ["Video analysis", "Custom drills", "Flexible scheduling"],
      price: "$90 / Hour",
      icon: <Users size={24} />
    },
    {
      title: "Group Clinics",
      desc: "High-energy, tactical group sessions with players of your skill level under the sun.",
      features: ["Max 4 players", "Match play drills", "Weekly updates"],
      price: "$35 / Session",
      icon: <CircleDot size={24} />
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAF5] text-tennis-blue font-sans selection:bg-tennis-lime selection:text-tennis-blue overflow-x-hidden">
      
      {/* --- DYNAMIC BACKGROUND ELEMENTS --- */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-[-5%] right-[-5%] w-[40%] h-[40%] bg-tennis-lime/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[10%] left-[-5%] w-[30%] h-[30%] bg-tennis-blue/5 blur-[100px] rounded-full"></div>
      </div>

      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24">
        
        {/* --- HERO SECTION (BENTO STYLE) --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-24">
          
          {/* Main Title Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-8 bg-white border border-gray-100 shadow-xl shadow-gray-200/50 rounded-[3rem] p-10 md:p-16 flex flex-col justify-center relative overflow-hidden group"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-tennis-blue/5 border border-tennis-blue/10 mb-8 w-fit text-tennis-blue">
              <Sun size={14} className="animate-spin text-tennis-blue" style={{ animationDuration: '8s' }} />
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">Arlington Season 2026</span>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-black leading-[0.9] tracking-tighter mb-8 text-tennis-dark">
              ELEVATE <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-tennis-blue to-tennis-lime">YOUR GAME.</span>
            </h1>
            
            <p className="text-lg text-gray-500 max-w-lg leading-relaxed mb-10">
              Transform your tennis skills under the Arlingtion sun. We merge <span className="text-tennis-blue font-bold italic">high-performance coaching</span> with custom training plans to unlock your true potential on the court.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="#contact" className="px-8 py-4 bg-tennis-blue text-white font-black uppercase tracking-widest rounded-2xl hover:bg-tennis-dark transition-all flex items-center gap-3 group shadow-lg shadow-tennis-blue/10">
                Book a Lesson <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="#programs" className="px-8 py-4 border-2 border-tennis-blue text-tennis-blue font-black uppercase tracking-widest rounded-2xl hover:bg-tennis-blue hover:text-white transition-all text-center">
                Our Programs
              </Link>
            </div>
          </motion.div>

          {/* Visual Showcase Side Cards */}
          <div className="md:col-span-4 grid grid-rows-2 gap-6">
            <div className="bg-tennis-blue rounded-[2.5rem] overflow-hidden relative group">
              <img 
                src="https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&q=80" 
                className="w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-700" 
                alt="Miami Tennis Court"
              />
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white bg-gradient-to-t from-tennis-dark/60 to-transparent">
                <div className="flex items-center gap-2 font-black italic">
                  <MapPin size={16} className="text-tennis-lime" /> Arlington, Virginia
                </div>
              </div>
            </div>
            
            <div className="bg-tennis-lime rounded-[2.5rem] p-8 flex flex-col justify-between text-tennis-blue shadow-lg shadow-tennis-lime/10">
              <CircleDot size={32} className="text-tennis-blue" />
              <div>
                <p className="text-4xl font-black italic tracking-tighter text-tennis-blue">100%</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-tennis-blue/80">Results-Driven Court Strategy</p>
              </div>
            </div>
          </div>
        </div>

        {/* --- BOOKING & SPECIAL OFFERS SECTION --- */}
       <section id="about" className="mb-24 scroll-mt-28">
  <div className="bg-tennis-blue border border-white/5 rounded-[4rem] p-8 md:p-20 relative overflow-hidden group">
    {/* Effet lumineux vert acide en arrière-plan */}
    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-tennis-lime/5 blur-[150px] rounded-full pointer-events-none group-hover:bg-tennis-lime/10 transition-all duration-700"></div>
    
    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div>
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 text-tennis-lime">
          <Globe size={14} />
          <span className="text-[10px] font-black uppercase tracking-[0.2em]">All Ages & Levels Welcome</span>
        </div>
        
        <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none mb-8">
          TRAIN LIKE <br /> 
          <span className="text-tennis-lime">A PRO.</span>
        </h2>
        
        <p className="text-white/70 text-lg mb-12 max-w-md leading-relaxed">
          Accelerate your growth with structured development plans. Perfect for local residents or athletes vacationing in Florida.
        </p>

        <div className="space-y-6">
          <FeatureRow 
            icon={<ShieldCheck className="text-tennis-lime" />} 
            title="Certified Expertise" 
            desc="Coaching backed by years of competitive experience and pro-level certifications." 
          />
          <FeatureRow 
            icon={<TrendingUp className="text-tennis-lime" />} 
            title="Proven Progression" 
            desc="Track your improvements with technical video reviews and structured milestone tracking." 
          />
        </div>
      </div>

      {/* Action Booking Card (Bento style flouté) */}
      <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[3rem] p-10 shadow-2xl relative text-center">
        <h3 className="text-white text-2xl font-black uppercase tracking-tighter mb-8">Introductory Package</h3>
        
        <div className="space-y-4 mb-10">
          <div className="flex justify-between items-center py-4 border-b border-white/5">
            <span className="text-white/40 font-black uppercase text-[10px] tracking-widest text-left">3-Session Pack</span>
            <span className="text-white font-black text-xl">$240 USD</span>
          </div>
          <div className="flex justify-between items-center py-4 border-b border-white/5">
            <span className="text-white/40 font-black uppercase text-[10px] tracking-widest text-left">Availability</span>
            <span className="text-tennis-lime font-black uppercase text-xs tracking-tighter underline italic">7 Days a Week</span>
          </div>
        </div>

        <Link 
          href="/#contact" 
          className="w-full py-5 bg-tennis-lime text-tennis-blue font-black uppercase tracking-[0.2em] rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 shadow-lg shadow-tennis-lime/10"
        >
          SECURE YOUR COURT <Calendar size={18} />
        </Link>
        
        <p className="text-center text-white/30 text-[10px] mt-6 uppercase tracking-widest font-bold">
          Serving locations: Arlington, Alexandria, Falls Church, and surrounding Northern Virginia areas.
        </p>
      </div>
    </div>
  </div>
</section>

        {/* --- PROGRAMS & CLASSES GRID --- */}
        <section id="programs" className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-24 scroll-mt-28">
          <div className="md:col-span-12 mb-6">
            <h2 className="text-xs font-black uppercase tracking-[0.5em] text-gray-400 mb-2">Choose Your Pathway</h2>
            <h3 className="text-4xl font-black tracking-tighter text-tennis-dark">On-Court Programs.</h3>
          </div>

          {programs.map((item, i) => (
            <motion.div 
              key={i} 
              whileHover={{ y: -5 }}
              className="md:col-span-6 bg-white border border-gray-100 p-10 rounded-[3rem] shadow-sm hover:shadow-2xl hover:shadow-tennis-lime/5 transition-all group"
            >
              <div className="w-14 h-14 bg-[#F8FAF5] rounded-2xl flex items-center justify-center mb-8 text-tennis-blue group-hover:bg-tennis-blue group-hover:text-white transition-all">
                {item.icon}
              </div>
              <h4 className="text-3xl font-black mb-4 tracking-tight text-tennis-dark">{item.title}</h4>
              <p className="text-gray-500 mb-8 leading-relaxed">{item.desc}</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                {item.features.map(f => (
                  <div key={f} className="flex items-center gap-2 text-[11px] font-black uppercase tracking-wider text-gray-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-tennis-lime"></div> {f}
                  </div>
                ))}
              </div>

              <div className="pt-8 border-t border-gray-50 flex justify-between items-center">
                <span className="text-[10px] font-black uppercase tracking-widest text-tennis-blue bg-tennis-lime/20 px-3 py-1 rounded-full">{item.price}</span>
                <Link href="#contact" className="text-tennis-blue font-black flex items-center gap-2 hover:text-tennis-lime transition-colors uppercase text-xs tracking-tighter">
                  Sign Up <ChevronRight size={14} />
                </Link>
              </div>
            </motion.div>
          ))}
        </section>

        {/* --- CONTACT & MEDIA GRID --- */}
        <section id="contact" className="grid grid-cols-1 lg:grid-cols-2 gap-10 scroll-mt-28">
          {/* Contact Form Card */}
          <div className="bg-white border border-gray-100 p-12 rounded-[3.5rem] shadow-xl shadow-gray-200/50">
            <h3 className="text-4xl font-black tracking-tighter mb-8 italic text-tennis-blue">Get in Touch_</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Full Name" className="w-full bg-gray-50 border-2 border-transparent p-4 rounded-2xl focus:border-tennis-lime focus:bg-white outline-none transition-all font-bold text-tennis-dark" />
              <input type="email" placeholder="Email Address" className="w-full bg-gray-50 border-2 border-transparent p-4 rounded-2xl focus:border-tennis-lime focus:bg-white outline-none transition-all font-bold text-tennis-dark" />
              <textarea placeholder="Tell me about your tennis goals, current level, or custom package requests..." rows={4} className="w-full bg-gray-50 border-2 border-transparent p-4 rounded-2xl focus:border-tennis-lime focus:bg-white outline-none transition-all font-bold text-tennis-dark"></textarea>
              <button type="submit" className="w-full py-5 bg-tennis-blue text-white font-black uppercase tracking-[0.2em] rounded-2xl hover:bg-tennis-dark transition-all shadow-lg shadow-tennis-blue/10">
                Send Consultation Request
              </button>
            </form>
          </div>

          {/* Special Clinic/Media Card */}
          <div className="bg-tennis-blue p-12 rounded-[3.5rem] flex flex-col justify-between text-white relative overflow-hidden shadow-xl shadow-tennis-blue/10">
            <div className="relative z-10">
              <h3 className="text-4xl font-black tracking-tighter mb-6 uppercase leading-tight">Cardio & <br /> <span className="text-tennis-lime">Match Play.</span></h3>
              <p className="text-white/70 leading-relaxed mb-8">
                Looking for a high-intensity workout or specific hitting partners? Discover our seasonal high-energy community events.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-tennis-lime/50 cursor-pointer transition-all group/item">
                  <span className="font-bold flex items-center gap-3"><Tv size={16} className="text-tennis-lime" /> High-Energy Cardio Tennis</span>
                  <ArrowRight size={16} className="text-tennis-lime group-hover/item:translate-x-2 transition-transform" />
                </li>
                <li className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-tennis-lime/50 cursor-pointer transition-all group/item">
                  <span className="font-bold flex items-center gap-3"><Users size={16} className="text-tennis-lime" /> Corporate Tennis Clinics</span>
                  <ArrowRight size={16} className="text-tennis-lime group-hover/item:translate-x-2 transition-transform" />
                </li>
              </ul>
            </div>
            <div className="mt-12 text-[10px] font-black uppercase tracking-[0.3em] text-tennis-lime">
              Arlington Elite Coaching — Camp 2026
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

// --- SUB-COMPONENTS ---
const FeatureRow = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
  <div className="flex gap-5">
    <div className="mt-1">{icon}</div>
    <div>
      <h5 className="text-white font-black uppercase text-xs tracking-widest mb-1">{title}</h5>
      <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
    </div>
  </div>
);

export default Home;