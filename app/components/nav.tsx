"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { X, ArrowRight, User, Lock, LogIn, Menu } from 'lucide-react';

const Nav: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = (isOpen || showLogin) ? 'hidden' : 'unset';
  }, [isOpen, showLogin]);

  const links = [
    { name: 'Programs', href: '/programs' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-[200] transition-all duration-500 ${
          isScrolled || isOpen 
            ? 'py-3 bg-white shadow-md ' 
            : 'py-5 bg-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center bg-white">
          
          {/* --- LOGO --- */}
          <div className="flex items-center z-[210]">
            <Link href="/" className="flex items-center gap-2 group">
              <Image 
                src="/images/Log.png" 
                alt="Better Tennis Academy" 
                className="hidden sm:block w-24 md:w-28 h-auto transition-all" 
                width={100}
                height={100}
              />
              <Image 
                src="/images/Log.png" 
                alt="Better Tennis Academy" 
                className="block sm:hidden w-24 h-auto transition-all" 
                width={100}
                height={100}
              />
            </Link>
          </div>

          {/* --- DESKTOP MENU --- */}
          <div className="hidden lg:flex items-center gap-6 bg-black/5 px-6 py-2 rounded-full backdrop-blur-sm border border-black/5">
            {links.map((link) => (
              <Link 
                key={link.name}
                href={link.href}
                className="text-[10px] font-black uppercase tracking-widest text-tennis-blue hover:text-tennis-lime transition-all"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* --- ACTIONS & BURGER --- */}
          <div className="flex items-center gap-3 z-[210]">
            {/* Portal Button */}
            <button 
              onClick={() => setShowLogin(true)}
              className={`hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-lg text-white text-[10px] font-black uppercase tracking-widest transition-all hover:brightness-110 active:scale-95 shadow-sm ${
                isOpen ? 'bg-tennis-lime text-tennis-blue!' : 'bg-tennis-blue'
              }`}
            >
              <LogIn size={14} /> Portal
            </button>
            
            {/* Hamburger Button */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className={`flex lg:hidden w-10 h-10 items-center justify-center rounded-lg transition-all ${
                isOpen ? 'bg-transparent' : 'bg-tennis-blue'
              }`}
              aria-label="Toggle Menu"
            >
              {isOpen ? (
                <X size={26} className="text-tennis-blue" strokeWidth={2.5} />
              ) : (
                <Menu size={24} color="white" strokeWidth={2.5} />
              )}
            </button>
          </div>
        </div>

        {/* --- OVERLAY MOBILE MENU --- */}
        <div 
          className={`fixed inset-0 bg-tennis-dark z-[205] transition-transform duration-500 ease-in-out lg:hidden flex flex-col justify-between pt-28 pb-12 px-6 sm:px-12 ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Menu Items Group */}
          <div className="flex flex-col gap-6 justify-center flex-1">
            <p className="text-tennis-lime text-[10px] font-black uppercase tracking-[0.5em] opacity-40">Navigation</p>
            
            {links.map((link, i) => (
              <Link 
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-4xl sm:text-5xl font-black text-white tracking-tighter hover:text-tennis-lime transition-all ${
                  isOpen ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                }`}
                style={{ transitionDelay: isOpen ? `${i * 75}ms` : '0ms' }}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Client Portal in Mobile Menu */}
            <button 
              onClick={() => { setIsOpen(false); setShowLogin(true); }}
              className="sm:hidden text-3xl font-black text-tennis-lime flex items-center gap-3 transition-all text-left mt-4"
            >
              Client Portal <LogIn size={24} />
            </button>
          </div>

          {/* Footer Area of Mobile Menu */}
          <div className="space-y-4">
            <div className="h-px w-full bg-white/10"></div>
            <Link 
              href="/#contact" 
              onClick={() => setIsOpen(false)} 
              className="text-lg font-black text-tennis-lime flex items-center gap-3 group pt-2"
            >
              Book Court Time <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </nav>

      {/* --- SPACER HACK FOR FIXED NAV --- */}
      <div className={`${isScrolled ? 'h-16' : 'h-20 sm:h-24'} transition-all duration-500`}></div>

      {/* --- LOGIN MODAL --- */}
      {showLogin && (
        <div className="fixed inset-0 z-[300] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-tennis-dark/90 backdrop-blur-sm transition-opacity"
            onClick={() => setShowLogin(false)}
          ></div>
          
          <div className="relative bg-white w-full max-w-sm sm:max-w-md rounded-[2rem] overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300">
            <div className="p-6 sm:p-10">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl sm:text-3xl font-black text-tennis-blue tracking-tighter">
                  Client <span className="text-tennis-lime">Portal</span>
                </h2>
                <button onClick={() => setShowLogin(false)} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <X size={20} />
                </button>
              </div>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Email Address</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                    <input type="email" className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-tennis-lime outline-none text-sm transition-all" placeholder="player@tennis.com" />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                    <input type="password" className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-tennis-lime outline-none text-sm transition-all" placeholder="••••••••" />
                  </div>
                </div>

                <button className="w-full py-4 bg-tennis-blue text-white text-xs font-black uppercase tracking-[0.2em] rounded-xl hover:bg-tennis-dark transition-all mt-4 active:scale-95 shadow-lg shadow-tennis-blue/10">
                  Sign In
                </button>
              </form>
              <p className="text-center text-[9px] text-gray-400 mt-6 font-bold uppercase tracking-widest">Player & Schedule Management System</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Nav;