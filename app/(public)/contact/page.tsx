"use client";

import React from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F8FAF5] text-tennis-blue font-sans selection:bg-tennis-lime selection:text-tennis-blue pt-32 pb-24">
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
       
        <div className="max-w-2xl mb-16">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-6 text-tennis-dark">
            SECURE YOUR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-tennis-blue to-tennis-lime">COURT TIME.</span>
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed">
            Have questions about group placements, package customisation, or corporate events? Drop your targets below, and our team will get back to you within 24 hours.
          </p>
        </div>

      
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
        
          <div className="lg:col-span-7 bg-white border border-gray-100 p-8 md:p-12 rounded-[3.5rem] shadow-xl shadow-gray-200/40">
            <h3 className="text-2xl font-black tracking-tight mb-8 text-tennis-dark">Consultation Request</h3>
            
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full bg-gray-50 border border-gray-100 p-4 rounded-xl focus:border-tennis-lime focus:bg-white outline-none transition-all text-sm font-semibold" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Email Address</label>
                  <input type="email" placeholder="john@example.com" className="w-full bg-gray-50 border border-gray-100 p-4 rounded-xl focus:border-tennis-lime focus:bg-white outline-none transition-all text-sm font-semibold" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Current Level</label>
                  <select className="w-full bg-gray-50 border border-gray-100 p-4 rounded-xl focus:border-tennis-lime focus:bg-white outline-none transition-all text-sm font-bold appearance-none cursor-pointer">
                    <option>Beginner / Recreational</option>
                    <option>Intermediate / Club Player</option>
                    <option>Advanced / Tournament Competitor</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Preferred Program</label>
                  <select className="w-full bg-gray-50 border border-gray-100 p-4 rounded-xl focus:border-tennis-lime focus:bg-white outline-none transition-all text-sm font-bold appearance-none cursor-pointer">
                    <option>Private Coaching (1-on-1)</option>
                    <option>Group Clinic Session</option>
                    <option>High-Energy Cardio Tennis</option>
                    <option>Custom Matrix Proposal</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Your Objectives</label>
                <textarea rows={4} placeholder="Tell us about your current technical pain points or structural schedule requests..." className="w-full bg-gray-50 border border-gray-100 p-4 rounded-xl focus:border-tennis-lime focus:bg-white outline-none transition-all text-sm font-semibold"></textarea>
              </div>

              <button type="submit" className="w-full py-4 bg-tennis-blue text-white font-black uppercase tracking-[0.2em] text-xs rounded-xl hover:bg-tennis-dark transition-all flex items-center justify-center gap-3 shadow-lg shadow-tennis-blue/10 active:scale-[0.98]">
                Submit Court Request <Send size={14} />
              </button>
            </form>
          </div>

          
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-tennis-blue text-white p-8 md:p-10 rounded-[3rem] relative overflow-hidden shadow-xl">
              <div className="absolute -right-16 -bottom-16 w-48 h-48 bg-tennis-lime/10 blur-2xl rounded-full"></div>
              
              <h4 className="text-xl font-black uppercase tracking-tight mb-6 text-tennis-lime">Direct Channels</h4>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-tennis-lime">
                    <Mail size={16} />
                  </div>
                  <div>
                    <p className="text-[9px] font-black uppercase tracking-widest text-white/40">Email Us</p>
                    <p className="text-sm font-bold text-white">dasilvadevon51@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-tennis-lime">
                    <Phone size={16} />
                  </div>
                  <div>
                    <p className="text-[9px] font-black uppercase tracking-widest text-white/40">Call Operations</p>
                    <p className="text-sm font-bold text-white">+1 (571) 307-8341</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white border border-gray-100 p-8 rounded-[3rem] shadow-sm">
              <h4 className="text-lg font-black mb-4 flex items-center gap-2 text-tennis-dark">
                <MapPin size={18} className="text-tennis-lime" /> Court Locations
              </h4>
              <p className="text-xs text-gray-400 uppercase font-black tracking-wider mb-2">Primary Hubs:</p>
              <ul className="text-sm font-bold text-gray-600 space-y-1.5 list-disc pl-4">
                <li>Bluemont Park Courts</li>
                <li>Virginia Highlands Park Courts</li>
                <li>Tuckahoe Park Courts</li>
                <li>Quincy Park Courts</li>
              </ul>
            </div>

            
            <div className="bg-[#F8FAF5] border border-dashed border-gray-300 p-6 rounded-2xl flex items-center gap-4">
              <Clock size={20} className="text-gray-400 flex-shrink-0" />
              <div>
                <p className="text-xs font-black uppercase tracking-tight text-tennis-dark">Active Hours</p>
                <p className="text-xs text-gray-500">Mon - Sun: 6:00 AM — 9:00 PM (Including Floodlight Sessions)</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;