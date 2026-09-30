import React from 'react';
import { 
  ShieldCheck, 
  MapPin, 
  Phone, 
  Mail, 
  MessageCircle, 
  ArrowUp,
  Heart
} from 'lucide-react';
import { CSC_INFO } from '../data/servicesData';
import { LanguageMode } from '../types';

interface FooterProps {
  language: LanguageMode;
  onOpenCardModal: () => void;
  onOpenEnquiry: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  language,
  onOpenCardModal,
  onOpenEnquiry
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800 relative">
      {/* Decorative top tricolor strip */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-amber-500 via-white to-emerald-500"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand & Slogan */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white flex items-center justify-center font-black border border-amber-400/40">
                <span>O</span>
              </div>
              <div>
                <h3 className="text-xl font-black text-white tracking-tight">
                  {CSC_INFO.nameEn}
                </h3>
                <p className="text-xs text-amber-400 font-semibold font-bengali">
                  {CSC_INFO.nameBn}
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 italic">
              {CSC_INFO.sloganEn}
            </p>

            <p className="text-xs text-slate-400 font-bengali">
              {CSC_INFO.sloganBn}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 bg-slate-900 border border-slate-700 px-3 py-1 rounded-lg text-xs font-mono text-amber-300">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                CSC ID: {CSC_INFO.cscId}
              </span>

              <button
                onClick={onOpenCardModal}
                className="text-xs px-3 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg transition-colors"
              >
                Digital Visiting Card
              </button>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-slate-200">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#" className="hover:text-amber-400 transition-colors">
                  Home (মূল পাতা)
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-amber-400 transition-colors">
                  About Us (আমাদের সম্পর্কে)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  Services (ডিজিটাল পরিষেবাসমূহ)
                </a>
              </li>
              <li>
                <a href="#govt-schemes" className="hover:text-amber-400 transition-colors">
                  Government Services (সরকারি যোজনা)
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-400 transition-colors">
                  Contact Us (যোগাযোগ)
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-slate-200">
              Center Address & Contact
            </h4>
            
            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{CSC_INFO.address.fullEn}</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${CSC_INFO.mobile}`} className="hover:text-white font-mono">
                  +91 {CSC_INFO.mobile}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`https://wa.me/91${CSC_INFO.whatsapp}`} target="_blank" rel="noopener noreferrer" className="hover:text-white font-mono">
                  +91 {CSC_INFO.whatsapp} (WhatsApp)
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <a href={`mailto:${CSC_INFO.email}`} className="hover:text-white font-mono">
                  {CSC_INFO.email}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenEnquiry}
                className="w-full py-2 bg-blue-700 hover:bg-blue-600 text-white rounded-lg text-xs font-bold transition-colors"
              >
                Send Online Service Request
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Rights & Digital India Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            <p>© 2026 <strong>OMKAR CREATIVE E-POINT</strong>. All Rights Reserved.</p>
            <p className="mt-0.5 text-slate-400 font-medium">
              Designed for Digital India • Powered by Technology
            </p>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[11px] text-slate-400">
              Gopiballavpur, Jhargram, West Bengal – 721506
            </span>

            <button
              onClick={scrollToTop}
              className="p-2 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white rounded-lg border border-slate-800 transition-colors"
              title="Back to Top"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
