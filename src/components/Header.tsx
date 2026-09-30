import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  ShieldCheck, 
  Globe, 
  ExternalLink,
  MessageCircle,
  FileText
} from 'lucide-react';
import { CSC_INFO } from '../data/servicesData';
import { LanguageMode } from '../types';

interface HeaderProps {
  language: LanguageMode;
  setLanguage: (lang: LanguageMode) => void;
  onOpenCardModal: () => void;
  onOpenEnquiryModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  language,
  setLanguage,
  onOpenCardModal,
  onOpenEnquiryModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      {/* Top Govt / CSC Trust Strip */}
      <div className="bg-slate-900 text-slate-100 text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          {/* Left: CSC ID & Digital India badge */}
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-amber-500 to-orange-600 text-slate-950 font-bold px-2 py-0.5 rounded text-[11px] tracking-wide uppercase shadow-xs">
              <ShieldCheck className="w-3.5 h-3.5" />
              CSC ID: {CSC_INFO.cscId}
            </span>
            <span className="hidden sm:inline-block text-slate-300">
              Government of India Authorized Digital Seva Kendra
            </span>
            <span className="sm:hidden text-slate-300 text-[11px]">
              Gopiballavpur, Jhargram
            </span>
          </div>

          {/* Right: Quick contact icons & language */}
          <div className="flex items-center gap-4">
            <a 
              href={`tel:${CSC_INFO.mobile}`} 
              className="inline-flex items-center gap-1 text-slate-300 hover:text-white transition-colors"
              title="Call us directly"
            >
              <Phone className="w-3 h-3 text-emerald-400" />
              <span className="font-semibold">{CSC_INFO.mobile}</span>
            </a>

            <a 
              href={`mailto:${CSC_INFO.email}`} 
              className="hidden md:inline-flex items-center gap-1 text-slate-300 hover:text-white transition-colors"
              title="Send email"
            >
              <Mail className="w-3 h-3 text-sky-400" />
              <span>{CSC_INFO.email}</span>
            </a>

            {/* Language toggle selector */}
            <div className="flex items-center bg-slate-800 rounded-md p-0.5 text-[11px]">
              <button
                onClick={() => setLanguage('bilingual')}
                className={`px-2 py-0.5 rounded transition-all ${
                  language === 'bilingual' 
                    ? 'bg-amber-500 text-slate-950 font-bold shadow-xs' 
                    : 'text-slate-300 hover:text-white'
                }`}
                title="Bilingual (English + বাংলা)"
              >
                Dual
              </button>
              <button
                onClick={() => setLanguage('bn')}
                className={`px-2 py-0.5 rounded transition-all font-bengali ${
                  language === 'bn' 
                    ? 'bg-amber-500 text-slate-950 font-bold shadow-xs' 
                    : 'text-slate-300 hover:text-white'
                }`}
                title="শুধুমাত্র বাংলা"
              >
                বাংলা
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-0.5 rounded transition-all ${
                  language === 'en' 
                    ? 'bg-amber-500 text-slate-950 font-bold shadow-xs' 
                    : 'text-slate-300 hover:text-white'
                }`}
                title="English Only"
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="flex items-center justify-between">
          {/* Logo & Center Title */}
          <a href="#" className="flex items-center gap-3.5 group">
            {/* Custom CSC Styled Logo Emblem */}
            <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-blue-700 via-indigo-800 to-slate-900 text-white flex items-center justify-center font-black shadow-md border-2 border-amber-400/40 group-hover:scale-105 transition-transform">
              <span className="text-xl tracking-tighter">O</span>
              <span className="text-xs text-amber-400 font-extrabold absolute bottom-1 right-1.5">eP</span>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white" title="Verified Active CSC"></div>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-lg sm:text-xl tracking-tight text-slate-900 group-hover:text-blue-700 transition-colors">
                  OMKAR CREATIVE E-POINT
                </span>
                <span className="hidden sm:inline-flex items-center text-[10px] bg-blue-50 text-blue-800 font-semibold px-2 py-0.5 rounded border border-blue-200">
                  CSC Seva
                </span>
              </div>
              <p className="text-xs text-slate-600 font-medium">
                {language === 'bn' ? (
                  <span className="font-bengali">কমন সার্ভিস সেন্টার (CSC) ও ডিজিটাল সেবা কেন্দ্র</span>
                ) : language === 'en' ? (
                  <span>Common Service Center (CSC) & Digital Seva Kendra</span>
                ) : (
                  <span>Common Service Center (CSC) &bull; ডিজিটাল সেবা কেন্দ্র</span>
                )}
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-slate-700">
            <a href="#services" className="hover:text-blue-700 transition-colors py-1">
              {language === 'bn' ? 'পরিষেবাসমূহ' : 'Services'}
            </a>
            <a href="#checklists" className="hover:text-blue-700 transition-colors py-1">
              {language === 'bn' ? 'নথি নির্দেশিকা' : 'Required Docs'}
            </a>
            <a href="#govt-schemes" className="hover:text-blue-700 transition-colors py-1">
              {language === 'bn' ? 'সরকারি প্রকল্প' : 'Govt Schemes'}
            </a>
            <a href="#about" className="hover:text-blue-700 transition-colors py-1">
              {language === 'bn' ? 'আমাদের সম্পর্কে' : 'About Us'}
            </a>
            <a href="#testimonials" className="hover:text-blue-700 transition-colors py-1">
              {language === 'bn' ? 'গ্রাহকদের মতামত' : 'Reviews'}
            </a>
            <a href="#contact" className="hover:text-blue-700 transition-colors py-1">
              {language === 'bn' ? 'যোগাযোগ' : 'Contact'}
            </a>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              onClick={onOpenCardModal}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 rounded-lg transition-colors"
              title="View Digital Visiting Card with QR Code"
            >
              <FileText className="w-3.5 h-3.5 text-slate-600" />
              <span>Digital Card</span>
            </button>

            <a
              href={`https://wa.me/91${CSC_INFO.whatsapp}?text=${encodeURIComponent('Hello Omkar Creative E-Point! I want to enquire about CSC Digital Services.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 rounded-lg transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600 fill-emerald-600/20" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={onOpenEnquiryModal}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-gradient-to-r from-blue-700 to-indigo-700 hover:from-blue-800 hover:to-indigo-800 rounded-lg shadow-sm hover:shadow transition-all"
            >
              {language === 'bn' ? 'অনলাইন সেবা আবেদন' : 'Request Service'}
            </button>
          </div>

          {/* Mobile menu hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-950 focus:outline-hidden"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 py-5 shadow-xl space-y-4 animate-in slide-in-from-top duration-150">
          <div className="grid grid-cols-2 gap-2 text-center pb-2 border-b border-slate-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnquiryModal();
              }}
              className="px-3 py-2 text-xs font-bold text-white bg-blue-700 rounded-lg"
            >
              {language === 'bn' ? 'অনলাইন আবেদন' : 'Request Service'}
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCardModal();
              }}
              className="px-3 py-2 text-xs font-bold text-slate-800 bg-slate-100 rounded-lg border border-slate-300"
            >
              Digital Visiting Card
            </button>
          </div>

          <div className="flex flex-col space-y-3 font-semibold text-slate-800 text-sm">
            <a 
              href="#services" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 px-2 rounded hover:bg-slate-50"
            >
              {language === 'bn' ? 'পরিষেবাসমূহ (Services)' : 'Our Services'}
            </a>
            <a 
              href="#checklists" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 px-2 rounded hover:bg-slate-50"
            >
              {language === 'bn' ? 'নথি নির্দেশিকা (Required Documents)' : 'Document Checklists'}
            </a>
            <a 
              href="#govt-schemes" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 px-2 rounded hover:bg-slate-50"
            >
              {language === 'bn' ? 'সরকারি প্রকল্পসমূহ (Govt Schemes)' : 'Government Schemes'}
            </a>
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 px-2 rounded hover:bg-slate-50"
            >
              {language === 'bn' ? 'আমাদের সম্পর্কে (About Us)' : 'About Us'}
            </a>
            <a 
              href="#testimonials" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 px-2 rounded hover:bg-slate-50"
            >
              {language === 'bn' ? 'গ্রাহকদের মতামত (Reviews)' : 'Customer Reviews'}
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 px-2 rounded hover:bg-slate-50"
            >
              {language === 'bn' ? 'যোগাযোগ (Contact Us)' : 'Contact Us'}
            </a>
          </div>

          {/* Quick contact buttons on mobile menu */}
          <div className="pt-2 border-t border-slate-100 grid grid-cols-2 gap-2">
            <a
              href={`tel:${CSC_INFO.mobile}`}
              className="flex items-center justify-center gap-1.5 py-2 px-3 bg-blue-50 text-blue-900 rounded-lg font-bold text-xs"
            >
              <Phone className="w-4 h-4 text-blue-700" />
              Call 9932541732
            </a>
            <a
              href={`https://wa.me/91${CSC_INFO.whatsapp}?text=${encodeURIComponent('Hello Omkar Creative E-Point! I need assistance.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 py-2 px-3 bg-emerald-50 text-emerald-900 rounded-lg font-bold text-xs"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              WhatsApp Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
