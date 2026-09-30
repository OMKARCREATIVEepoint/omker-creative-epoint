import React from 'react';
import { 
  ShieldCheck, 
  MapPin, 
  Phone, 
  MessageCircle, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  CreditCard, 
  Zap, 
  Building2, 
  GraduationCap, 
  Search,
  Printer
} from 'lucide-react';
import { CSC_INFO } from '../data/servicesData';
import { getShopStatus } from '../utils/helpers';
import { LanguageMode } from '../types';

interface HeroProps {
  language: LanguageMode;
  onExploreServices: () => void;
  onOpenEnquiry: () => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  language,
  onExploreServices,
  onOpenEnquiry,
  searchQuery,
  setSearchQuery
}) => {
  const shopStatus = getShopStatus();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-950 via-slate-900 to-slate-900 text-white pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Decorative Indian Tricolor & Digital Wave Accents */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-amber-500 via-white to-emerald-500 opacity-90"></div>
      
      {/* Subtle radial glow background */}
      <div className="absolute top-0 right-1/4 -mt-20 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Heading, Badges, Value Props */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Live Status and Official Verification Badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              {/* Shop Status Pill */}
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md border ${
                shopStatus.isOpen 
                  ? 'bg-emerald-950/80 text-emerald-300 border-emerald-500/40' 
                  : 'bg-amber-950/80 text-amber-300 border-amber-500/40'
              }`}>
                <span className={`w-2 h-2 rounded-full ${shopStatus.isOpen ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`}></span>
                <span>
                  {language === 'bn' ? shopStatus.statusTextBn : shopStatus.statusTextEn}
                </span>
                <span className="text-slate-400 font-normal">|</span>
                <span className="text-slate-300">
                  {language === 'bn' ? shopStatus.nextTimeBn : shopStatus.nextTimeEn}
                </span>
              </div>

              {/* CSC ID Tag */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-400/30">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                CSC ID: {CSC_INFO.cscId}
              </div>
            </div>

            {/* Main Brand Title & Category */}
            <div>
              <div className="inline-block text-xs uppercase tracking-widest font-extrabold text-amber-400 mb-2">
                {language === 'bn' 
                  ? 'কমন সার্ভিস সেন্টার (CSC) ও ডিজিটাল সেবা কেন্দ্র' 
                  : 'Common Service Center (CSC) & Digital Seva Kendra'}
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                {CSC_INFO.nameEn}
              </h1>

              {/* Bengali Slogan / Subheading */}
              <div className="mt-3 space-y-1">
                {(language === 'bilingual' || language === 'bn') && (
                  <p className="text-lg sm:text-2xl font-bold text-amber-300 font-bengali">
                    আপনার বিশ্বস্ত ডিজিটাল পরিষেবা কেন্দ্র
                  </p>
                )}
                {(language === 'bilingual' || language === 'en') && (
                  <p className="text-base sm:text-lg text-slate-300 font-medium">
                    Your Trusted Digital Service Center
                  </p>
                )}
              </div>
            </div>

            {/* Core Values: Easy • Fast • Reliable */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-4 py-2 border-y border-slate-800">
              <div className="flex items-center gap-1.5 text-emerald-400 font-semibold text-sm sm:text-base">
                <CheckCircle2 className="w-4 h-4" />
                <span>{language === 'bn' ? 'সহজ' : 'Easy'}</span>
              </div>
              <span className="text-slate-600">&bull;</span>
              <div className="flex items-center gap-1.5 text-sky-400 font-semibold text-sm sm:text-base">
                <Zap className="w-4 h-4" />
                <span>{language === 'bn' ? 'দ্রুত' : 'Fast'}</span>
              </div>
              <span className="text-slate-600">&bull;</span>
              <div className="flex items-center gap-1.5 text-amber-400 font-semibold text-sm sm:text-base">
                <ShieldCheck className="w-4 h-4" />
                <span>{language === 'bn' ? 'নির্ভরযোগ্য' : 'Reliable'}</span>
              </div>
            </div>

            {/* Quick Live Search Bar for immediate service discovery */}
            <div className="relative max-w-xl">
              <div className="relative flex items-center">
                <Search className="w-5 h-5 absolute left-3.5 text-slate-400 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={language === 'bn' 
                    ? 'যেকোনো পরিষেবা খুঁজুন (যেমন: প্যান কার্ড, আধার, টাকা তোলা, ইলেকট্রিক বিল)...' 
                    : 'Search any service (e.g. PAN card, AePS, cash, electricity bill, passport)...'}
                  className="w-full pl-11 pr-24 py-3 bg-slate-800/90 border border-slate-700 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 text-white placeholder-slate-400 rounded-xl text-sm transition-all outline-hidden shadow-inner"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 text-xs bg-slate-700 hover:bg-slate-600 text-slate-300 px-2 py-1 rounded"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onExploreServices}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold rounded-xl shadow-lg shadow-amber-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>{language === 'bn' ? 'পরিষেবাসমূহ দেখুন' : 'Explore Services'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:${CSC_INFO.mobile}`}
                className="inline-flex items-center gap-2 px-5 py-3.5 bg-blue-600/30 hover:bg-blue-600/50 text-white font-semibold border border-blue-400/40 rounded-xl transition-all"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Call {CSC_INFO.mobile}</span>
              </a>

              <a
                href={`https://wa.me/91${CSC_INFO.whatsapp}?text=${encodeURIComponent('Hello Omkar Creative E-Point! I would like to inquire about your services.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl shadow transition-all hover:scale-[1.02]"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Location strip */}
            <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-400 pt-1">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>
                {language === 'bn' ? CSC_INFO.address.fullBn : CSC_INFO.address.fullEn}
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Quick Service Board Card */}
          <div className="lg:col-span-5">
            <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/95 border border-slate-700/80 rounded-2xl p-6 shadow-2xl backdrop-blur-md">
              
              {/* Header inside card */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-700/60 mb-5">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-blue-600/20 text-blue-400 border border-blue-500/30 flex items-center justify-center font-bold">
                    CSC
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-sm">Digital Seva Center</h3>
                    <p className="text-xs text-slate-400 font-mono">ID: {CSC_INFO.cscId}</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 bg-emerald-500/20 text-emerald-300 text-[11px] font-semibold rounded-full border border-emerald-500/30">
                  Government Portal Hub
                </span>
              </div>

              {/* Instant Highlight Cards Grid */}
              <div className="grid grid-cols-2 gap-3 mb-5">
                <div className="bg-slate-800/70 p-3 rounded-xl border border-slate-700/50 hover:border-slate-600 transition-colors">
                  <div className="flex items-center gap-2 text-amber-400 font-bold text-xs mb-1">
                    <CreditCard className="w-4 h-4" />
                    <span>AePS & Banking</span>
                  </div>
                  <p className="text-[11px] text-slate-300">
                    {language === 'bn' ? 'আঙুলের ছাপে নগদ টাকা উত্তোলন ও DMT' : 'Cash withdrawal, Balance & DMT to all banks'}
                  </p>
                </div>

                <div className="bg-slate-800/70 p-3 rounded-xl border border-slate-700/50 hover:border-slate-600 transition-colors">
                  <div className="flex items-center gap-2 text-sky-400 font-bold text-xs mb-1">
                    <ShieldCheck className="w-4 h-4" />
                    <span>PAN & Voter</span>
                  </div>
                  <p className="text-[11px] text-slate-300">
                    {language === 'bn' ? 'নতুন প্যান, সংশোধন ও ভোটার কার্ড প্রিন্ট' : 'New PAN, corrections & color PVC voter'}
                  </p>
                </div>

                <div className="bg-slate-800/70 p-3 rounded-xl border border-slate-700/50 hover:border-slate-600 transition-colors">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs mb-1">
                    <Zap className="w-4 h-4" />
                    <span>Bill & Recharge</span>
                  </div>
                  <p className="text-[11px] text-slate-300">
                    {language === 'bn' ? 'WBSEDCL বিদ্যুৎ বিল ও LIC প্রিমিয়াম' : 'WBSEDCL power bill & instant LIC receipt'}
                  </p>
                </div>

                <div className="bg-slate-800/70 p-3 rounded-xl border border-slate-700/50 hover:border-slate-600 transition-colors">
                  <div className="flex items-center gap-2 text-purple-400 font-bold text-xs mb-1">
                    <GraduationCap className="w-4 h-4" />
                    <span>College & Forms</span>
                  </div>
                  <p className="text-[11px] text-slate-300">
                    {language === 'bn' ? 'সুবর্ণরেখা মহাবিদ্যালয় ভর্তি ও স্কলারশিপ' : 'College admission & SVMCM scholarship'}
                  </p>
                </div>
              </div>

              {/* Working Hours & Facility Strip */}
              <div className="bg-blue-950/40 rounded-xl p-3.5 border border-blue-900/50 space-y-2 text-xs">
                <div className="flex items-center justify-between text-slate-300">
                  <span className="flex items-center gap-1.5 font-medium">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    {language === 'bn' ? 'সোম - শনি:' : 'Mon - Sat:'}
                  </span>
                  <span className="font-bold text-white">8:00 AM – 8:30 PM</span>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span className="flex items-center gap-1.5 font-medium">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    {language === 'bn' ? 'রবিবার (Sunday):' : 'Sunday:'}
                  </span>
                  <span className="font-bold text-white">8:30 AM – 2:00 PM</span>
                </div>
                <div className="pt-2 border-t border-blue-900/50 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1">
                    <Printer className="w-3.5 h-3.5 text-sky-400" />
                    Color Print, Xerox, Lamination Available
                  </span>
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="mt-4 pt-3 border-t border-slate-700/60">
                <button
                  onClick={onOpenEnquiry}
                  className="w-full py-2.5 px-4 bg-slate-700 hover:bg-slate-600 text-white rounded-lg text-xs font-bold transition-colors flex items-center justify-center gap-2"
                >
                  <span>{language === 'bn' ? 'দ্রুত সহায়তা বা অনুসন্ধানের মেসেজ পাঠান' : 'Send Fast WhatsApp Enquiry / Service Request'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
