"use client";

import React from 'react';
import Link from 'next/link';
import { Award, Target, Trophy, Star } from 'lucide-react';

const About: React.FC = () => {
  const pillars = [
    {
      title: "Biomechanical Precision",
      desc: "Every stroke is broken down using technical analysis to ensure maximum efficiency and prevent common court injuries.",
      icon: <Target size={20} />
    },
    {
      title: "Tactical Intelligence",
      desc: "Tennis isn't just about hitting hard. We teach you how to read your opponent, dominate spacing, and control the rhythm.",
      icon: <Trophy size={20} />
    },
    {
      title: "Physical Conditioning",
      desc: "Tailored footwork blocks and explosive agility training engineered to mirror true match intensity.",
      icon: <Award size={20} />
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAF5] text-tennis-blue font-sans selection:bg-tennis-lime selection:text-tennis-blue overflow-x-hidden pt-32 pb-24">
      
      {/* --- BACKGROUND BLOBS --- */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
        <div className="absolute top-[-10%] right-[-10%] w-[45%] h-[45%] bg-tennis-lime/10 blur-[130px] rounded-full"></div>
        <div className="absolute bottom-[20%] left-[-10%] w-[35%] h-[35%] bg-tennis-blue/5 blur-[110px] rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* --- HERO SECTION --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-tennis-blue/5 border border-tennis-blue/10 mb-6 text-tennis-blue">
              <Star size={12} className="fill-tennis-lime text-tennis-lime" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">The Academy Story</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-8 text-tennis-dark">
              DESIGNED TO <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-tennis-blue to-tennis-lime">BUILD CHAMPIONS.</span>
            </h1>
            
            <p className="text-gray-500 text-lg leading-relaxed mb-6">
              Based under the permanent sun of Florida, our mission is to transform passionate players into clinical competitors. We break away from old-school generic drills to deliver high-performance, personalized systems.
            </p>
            
            <p className="text-gray-500 text-lg leading-relaxed">
              Whether you are an advanced junior preparing for tournament structures or a corporate professional mastering local leagues, our coaching matrix adapts dynamically to your personal goals.
            </p>
          </div>

          {/* Image / Stats Bento Card */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="col-span-2 h-64 bg-tennis-blue rounded-[2.5rem] overflow-hidden relative group shadow-xl shadow-tennis-blue/5">
              <img 
                src="https://images.unsplash.com/photo-1622279457486-62dcc4a4fa53?auto=format&fit=crop&q=80" 
                alt="Coach analyzing" 
                className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-tennis-dark/40 to-transparent"></div>
            </div>
            <div className="bg-white border border-gray-100 shadow-xl shadow-gray-200/40 p-8 rounded-[2rem] text-center">
              <p className="text-4xl font-black text-tennis-lime">10+</p>
              <p className="text-[9px] font-black uppercase tracking-wider text-gray-400 mt-1">Years Pro Coaching</p>
            </div>
            <div className="bg-white border border-gray-100 shadow-xl shadow-gray-200/40 p-8 rounded-[2rem] text-center">
              <p className="text-4xl font-black text-tennis-blue">500+</p>
              <p className="text-[9px] font-black uppercase tracking-wider text-gray-400 mt-1">Players Accelerated</p>
            </div>
          </div>
        </div>

        {/* --- METHODOLOGY PILLARS --- */}
        <section className="mb-24">
          <div className="mb-12">
            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-gray-400 mb-2">Our Framework</h2>
            <h3 className="text-4xl font-black tracking-tighter text-tennis-dark">The Three Pillars.</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((p, i) => (
              <div key={i} className="bg-white border border-gray-100 p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl hover:shadow-tennis-blue/5 transition-all group">
                <div className="w-12 h-12 bg-[#F8FAF5] border border-gray-100 text-tennis-blue group-hover:bg-tennis-blue group-hover:text-white rounded-xl flex items-center justify-center mb-6 transition-colors">
                  {p.icon}
                </div>
                <h4 className="text-xl font-black mb-3 tracking-tight text-tennis-dark">{p.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* --- MISSION CTA --- */}
        <div className="bg-tennis-blue border border-white/5 rounded-[3.5rem] p-10 md:p-16 text-white text-center relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-tennis-lime/5 to-transparent pointer-events-none"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-tennis-lime/5 blur-[120px] rounded-full pointer-events-none"></div>
          
          <h3 className="text-3xl md:text-5xl font-black tracking-tighter mb-6 relative z-10">READY TO WRITE YOUR NEXT CHAPTER?</h3>
          <p className="text-white/60 text-sm max-w-xl mx-auto mb-8 relative z-10 leading-relaxed">
            No shortcuts, no gimmicks. Just pure, results-driven progression tailored to unleash your absolute maximum court potential.
          </p>
          <Link href="/#contact" className="inline-block px-8 py-4 bg-tennis-lime text-tennis-blue text-xs font-black uppercase tracking-widest rounded-xl hover:scale-105 active:scale-95 transition-all relative z-10 shadow-lg shadow-tennis-lime/10">
            Secure a Consultation
          </Link>
        </div>

      </div>
    </div>
  );
};

export default About;