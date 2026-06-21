"use client";

import React from 'react';
import Link from 'next/link';
import "../globals.css"; 
import Image from 'next/image'; 
import { ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {

  return (
    <footer className="bg-tennis-blue text-white pt-16 pb-12 px-6 overflow-hidden relative">
      {/* Effet visuel subtil en arrière-plan */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#f7921e] blur-[150px] opacity-5"></div>

      <div className="max-w-7xl mx-auto">
        {/* --- SECTION PRINCIPALE --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-12 border-b border-white/10 items-center">
          
          {/* Identité avec Logo Officiel (5 colonnes) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center">
              <Link href="/" className="flex items-center gap-2 group">
                {/* Hérite du logo log2.png placé dans public/images/ */}
                <Image 
                  src="/images/Log_v2.png" 
                  alt="Better Tennis Academy" 
                  className="w-24 sm:w-28 h-auto"
                  width={100}
                  height={100}
                />
              </Link>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Premium coaching, clinics, and game development under the Florida sun.
            </p>
          </div>

          {/* Newsletter minimaliste (7 colonnes) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <form onSubmit={(e) => e.preventDefault()} className="relative w-full max-w-md lg:ml-auto">
              <input 
                type="email" 
                placeholder="Join the newsletter" 
                className="w-full bg-white/5 border border-white/10 py-4 px-5 pr-36 rounded-xl outline-none focus:border-[#f7921e] transition-all text-xs font-medium text-white"
              />
              <button type="submit" className="absolute right-1.5 top-1.5 bottom-1.5 bg-tennis-lime text-[#073743] px-4 rounded-lg font-black uppercase tracking-widest text-[9px] flex items-center gap-1.5 hover:brightness-110 transition-all">
                Join <ArrowRight size={12} />
              </button>
            </form>
          </div>
        </div>

        {/* --- BOTTOM SECTION --- */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[9px] font-black uppercase tracking-widest text-gray-500">
          <p>© 2026 BETTER TENNIS ACADEMY</p>
          
          <div className="flex gap-6 text-gray-400">
            <Link href="#privacy" className="hover:text-tennis-lime transition-colors">Privacy</Link>
            <Link href="#terms" className="hover:text-tennis-lime transition-colors">Terms</Link>
            <Link href="/#contact" className="hover:text-tennis-blue transition-colors text-tennis-lime">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;