"use client";

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, 
  CircleDot, 
  Zap, 
  Flame, 
  CheckCircle2, 
  ArrowRight, 
  SlidersHorizontal,
  Award,
  Clock,
  Gauge
} from 'lucide-react';

interface Program {
  id: 'private' | 'clinics' | 'cardio' | 'pro-camp' | string;
  title: string;
  tagline: string;
  desc: string;
  duration: string;
  intensity: string;
  price: string;
  priceUnit: string;
  badge: string;
  features: string[];
  level: 'all' | 'beginner' | 'advanced';
  icon: React.ReactNode;
}

type FilterType = 'all' | 'beginner' | 'advanced';

const ALL_PROGRAMS: Program[] = [
  {
    id: 'private',
    title: "Private Coaching",
    tagline: "One-on-One Custom Mastery",
    desc: "Accelerate your technique, positioning, and tactical awareness with drills engineered specifically for your game profile.",
    duration: "60 / 90 Mins",
    intensity: "Custom",
    price: "$90",
    priceUnit: " / session",
    badge: "Most Popular",
    features: ["Biomechanical video reviews", "Custom tactical blueprint", "Match-play simulations"],
    level: "all",
    icon: <Users size={24} />
  },
  {
    id: 'clinics',
    title: "Group Clinics",
    tagline: "High-Energy Tactical Squads",
    desc: "Drill with players of your exact skill level. Master patterns of play, doubles communication, and competitive live-ball scenarios.",
    duration: "2 Hours",
    intensity: "High",
    price: "$35",
    priceUnit: " / session",
    badge: "Max 4 per court",
    features: ["Live-ball situational drills", "Point-play analysis", "Dynamic footwork blocks"],
    level: "beginner",
    icon: <CircleDot size={24} />
  },
  {
    id: 'cardio',
    title: "Cardio Tennis",
    tagline: "Heart-Pumping Court Fitness",
    desc: "The ultimate high-energy workout merging non-stop tennis drills with high-intensity cardiovascular music and training.",
    duration: "60 Mins",
    intensity: "Extreme",
    price: "$25",
    priceUnit: " / session",
    badge: "Fitness Focus",
    features: ["Heart-rate tracking dynamic", "Calorie-burning structures", "All skill levels welcome"],
    level: "all",
    icon: <Flame size={24} />
  },
  {
    id: 'pro-camp',
    title: "Elite Dynamic Camp",
    tagline: "Weekend Tournament Prep",
    desc: "Designed exclusively for competitive and tournament players looking to refine structural strategy and mental grit under pressure.",
    duration: "Full Weekend",
    intensity: "Pro-Level",
    price: "$299",
    priceUnit: " / weekend",
    badge: "Advanced Only",
    features: ["Match play video tracking", "Mental toughness seminars", "Serve & Return optimization"],
    level: "advanced",
    icon: <Zap size={24} />
  }
];

const Programs: React.FC = () => {
  const [filter, setFilter] = useState<FilterType>('all');

  const filteredPrograms = useMemo(() => {
    return ALL_PROGRAMS.filter(p => filter === 'all' || p.level === filter || p.level === 'all');
  }, [filter]);

  return (
    <div className="min-h-screen bg-[#F8FAF5] text-[#002F6C] font-sans selection:bg-[#CCFF00] selection:text-[#002F6C] overflow-x-hidden pt-32 pb-24">
      
      {/* Background Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[20%] left-[-10%] w-[50%] h-[50%] bg-[#002F6C]/5 blur-[130px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-[#CCFF00]/5 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* --- HEADER --- */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#002F6C]/5 border border-[#002F6C]/10 mb-6 text-[#002F6C]">
            <SlidersHorizontal size={12} />
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">Our Methodology</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-6">
            CHOOSE YOUR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CCFF00] to-[#002F6C]">PATHWAY.</span>
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed">
            From precision technical micro-adjustments in private lessons to high-octane competitive group structures, select the program built for your evolution.
          </p>
        </div>

        {/* --- FILTER CONTROLS --- */}
        <div className="flex flex-wrap gap-3 mb-16 border-b border-gray-200/60 pb-8">
          {(['all', 'beginner', 'advanced'] as const).map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-6 py-3 rounded-xl font-black uppercase tracking-widest text-xs transition-all cursor-pointer ${
                filter === type 
                  ? 'bg-[#002F6C] text-white shadow-lg' 
                  : 'bg-white border border-gray-100 text-[#002F6C] hover:border-gray-300'
              }`}
            >
              {type === 'all' && 'All Systems'}
              {type === 'beginner' && 'Club & Intermediate'}
              {type === 'advanced' && 'Tournament & Elite'}
            </button>
          ))}
        </div>

        {/* --- PROGRAMS GRID --- */}
        <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
          <AnimatePresence mode="popLayout">
            {filteredPrograms.map((prog) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                key={prog.id}
                className="bg-white border border-gray-100 rounded-[3rem] p-8 md:p-12 shadow-xl shadow-gray-200/30 flex flex-col justify-between relative overflow-hidden group hover:shadow-2xl hover:shadow-[#CCFF00]/10 transition-all"
              >
                <div>
                  <div className="flex justify-between items-start mb-8">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center transition-colors bg-[#002F6C]/10 text-[#002F6C] group-hover:bg-[#CCFF00] group-hover:text-[#002F6C]">
                      {prog.icon}
                    </div>
                    <span className="text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full bg-[#002F6C]/5 border border-[#002F6C]/10 text-[#002F6C]">
                      {prog.badge}
                    </span>
                  </div>

                  <h2 className="text-3xl font-black tracking-tight mb-2 text-[#002F6C]">{prog.title}</h2>
                  <p className="text-xs font-black uppercase tracking-wider mb-6 italic text-[#CCFF00] bg-[#002F6C] inline-block px-2 py-0.5 rounded">
                    {prog.tagline}
                  </p>
                  <p className="text-gray-500 text-sm leading-relaxed mb-8">
                    {prog.desc}
                  </p>

                  {/* Micro Specs */}
                  <div className="grid grid-cols-2 gap-4 p-4 bg-[#F8FAF5] rounded-2xl mb-8">
                    <div className="flex items-center gap-2.5">
                      <Clock size={14} className="text-[#002F6C]/60" />
                      <div>
                        <p className="text-[9px] font-bold uppercase tracking-widest text-gray-400">Duration</p>
                        <p className="text-xs font-black text-[#002F6C]">{prog.duration}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Gauge size={14} className="text-[#002F6C]/60" />
                      <div>
                        <p className="text-[9px] font-bold uppercase tracking-widest text-gray-400">Intensity</p>
                        <p className="text-xs font-black text-[#002F6C]">{prog.intensity}</p>
                      </div>
                    </div>
                  </div>

                  {/* Features checklist */}
                  <div className="space-y-3.5 mb-8">
                    {prog.features.map((feat, index) => (
                      <div key={index} className="flex items-center gap-3 text-xs font-bold text-gray-600">
                        <CheckCircle2 size={16} className="text-[#CCFF00] stroke-[3] shrink-0 bg-[#002F6C] rounded-full" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pricing & CTA Line */}
                <div className="pt-6 border-t border-gray-50 flex justify-between items-center mt-auto">
                  <div>
                    <span className="text-2xl font-black tracking-tight text-[#002F6C]">{prog.price}</span>
                    <span className="text-gray-400 text-[10px] font-bold uppercase tracking-wider">{prog.priceUnit}</span>
                  </div>
                  <Link 
                    href="#contact" 
                    className="px-6 py-3.5 bg-[#002F6C] text-white font-black uppercase tracking-widest text-[10px] rounded-xl flex items-center gap-2 hover:bg-[#CCFF00] hover:text-[#002F6C] transition-colors cursor-pointer"
                  >
                    Request Court <ArrowRight size={12} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* --- BOTTOM FOOTNOTE --- */}
        <div className="bg-[#002F6C] border border-[#CCFF00]/30 rounded-[3rem] p-8 md:p-12 text-white relative overflow-hidden flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#CCFF00]/10 blur-[100px] pointer-events-none rounded-full" />
          
          <div className="flex gap-4 items-start relative z-10">
            <div className="w-12 h-12 bg-[#CCFF00]/20 rounded-xl flex items-center justify-center text-[#CCFF00] border border-[#CCFF00]/20 shrink-0">
              <Award size={20} />
            </div>
            <div>
              <h3 className="text-lg font-black uppercase tracking-tight mb-1">Need a custom training matrix?</h3>
              <p className="text-gray-300 text-xs max-w-xl">
                We coordinate specialized structural training profiles for corporate teams, visiting family academies, or specific high-performance long-term goals.
              </p>
            </div>
          </div>

          <Link href="#contact" className="w-full md:w-auto px-8 py-4 bg-[#CCFF00] text-[#002F6C] text-xs font-black uppercase tracking-widest rounded-xl text-center hover:brightness-110 active:scale-98 transition-all relative z-10 cursor-pointer">
            Consult With Coach
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Programs;