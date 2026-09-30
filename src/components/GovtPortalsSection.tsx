import React from 'react';
import { 
  Building2, 
  ExternalLink, 
  ShieldCheck, 
  FileSpreadsheet, 
  HeartHandshake, 
  CreditCard,
  CheckCircle,
  HelpCircle,
  Clock
} from 'lucide-react';
import { DIRECT_GOVT_LINKS, CSC_INFO } from '../data/servicesData';
import { LanguageMode } from '../types';

interface GovtPortalsSectionProps {
  language: LanguageMode;
  onOpenEnquiry: () => void;
}

export const GovtPortalsSection: React.FC<GovtPortalsSectionProps> = ({
  language,
  onOpenEnquiry
}) => {
  return (
    <section id="govt-schemes" className="py-16 sm:py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-400/30 mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            <span>Digital India & West Bengal Portals</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            🇮🇳 GOVERNMENT SERVICES
          </h2>

          <p className="mt-2 text-xl font-bold text-amber-400 font-bengali">
            সরকারি পরিষেবা ও জনকল্যাণমূলক প্রকল্প
          </p>

          <p className="mt-2 text-sm sm:text-base text-slate-300">
            {language === 'bn'
              ? 'রাজ্য ও কেন্দ্রীয় সরকারের সমস্ত কল্যাণমূলক প্রকল্পের অনলাইন রেজিস্ট্রেশন, স্ট্যাটাস চেক ও সহায়তা।'
              : 'Direct authorized citizen assistance for Central & State Government welfare and pension schemes.'}
          </p>
        </div>

        {/* 4 Main Core Govt Pillars from Brief */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          
          {/* 1. State Govt */}
          <div className="bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 hover:border-amber-400/50 rounded-2xl p-6 transition-all shadow-lg flex flex-col justify-between">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded-md border border-emerald-800/50">
                State Gov
              </span>
              <h3 className="text-lg font-bold text-white mt-3">
                State Government Services
              </h3>
              <p className="text-xs font-semibold text-slate-300 font-bengali mt-0.5">
                রাজ্য সরকারের বিভিন্ন অনলাইন পরিষেবা
              </p>
              <ul className="mt-4 space-y-1.5 text-xs text-slate-300">
                <li className="flex items-center gap-1.5">
                  <span className="text-amber-400">&bull;</span>
                  <span>Lakshmir Bhandar Status Check</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="text-amber-400">&bull;</span>
                  <span>Krishak Bandhu (কৃষক বন্ধু)</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="text-amber-400">&bull;</span>
                  <span>Swasthya Sathi Card Assistance</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="text-amber-400">&bull;</span>
                  <span>Banglarbhumi Khatian / Plot Search</span>
                </li>
              </ul>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-700">
              <button
                onClick={onOpenEnquiry}
                className="w-full py-2 bg-slate-700 hover:bg-slate-600 text-xs font-bold text-white rounded-lg transition-colors"
              >
                {language === 'bn' ? 'আবেদন / তথ্য জানুন' : 'Enquire Service'}
              </button>
            </div>
          </div>

          {/* 2. Central Govt */}
          <div className="bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 hover:border-amber-400/50 rounded-2xl p-6 transition-all shadow-lg flex flex-col justify-between">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-amber-400 bg-amber-950/60 px-2.5 py-1 rounded-md border border-amber-800/50">
                Central Gov
              </span>
              <h3 className="text-lg font-bold text-white mt-3">
                Central Government Services
              </h3>
              <p className="text-xs font-semibold text-slate-300 font-bengali mt-0.5">
                কেন্দ্রীয় সরকারের বিভিন্ন অনলাইন পরিষেবা
              </p>
              <ul className="mt-4 space-y-1.5 text-xs text-slate-300">
                <li className="flex items-center gap-1.5">
                  <span className="text-amber-400">&bull;</span>
                  <span>PM-Kisan Samman Nidhi eKYC</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="text-amber-400">&bull;</span>
                  <span>e-Shram Card Registration</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="text-amber-400">&bull;</span>
                  <span>PM Awas Yojana Gramin Tracking</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="text-amber-400">&bull;</span>
                  <span>DigiLocker Account Setup</span>
                </li>
              </ul>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-700">
              <button
                onClick={onOpenEnquiry}
                className="w-full py-2 bg-slate-700 hover:bg-slate-600 text-xs font-bold text-white rounded-lg transition-colors"
              >
                {language === 'bn' ? 'আবেদন / তথ্য জানুন' : 'Enquire Service'}
              </button>
            </div>
          </div>

          {/* 3. Ayushman Bharat */}
          <div className="bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 hover:border-amber-400/50 rounded-2xl p-6 transition-all shadow-lg flex flex-col justify-between">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-sky-400 bg-sky-950/60 px-2.5 py-1 rounded-md border border-sky-800/50">
                Health Cover
              </span>
              <h3 className="text-lg font-bold text-white mt-3">
                Ayushman Bharat Services
              </h3>
              <p className="text-xs font-semibold text-slate-300 font-bengali mt-0.5">
                আয়ুষ্মান ভারত সংক্রান্ত পরিষেবা
              </p>
              <ul className="mt-4 space-y-1.5 text-xs text-slate-300">
                <li className="flex items-center gap-1.5">
                  <span className="text-amber-400">&bull;</span>
                  <span>PM-JAY Golden Card Eligibility</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="text-amber-400">&bull;</span>
                  <span>Biometric / Face Auth eKYC</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="text-amber-400">&bull;</span>
                  <span>Plastic PVC Card Printout</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="text-amber-400">&bull;</span>
                  <span>Free Hospital Directory Assistance</span>
                </li>
              </ul>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-700">
              <button
                onClick={onOpenEnquiry}
                className="w-full py-2 bg-slate-700 hover:bg-slate-600 text-xs font-bold text-white rounded-lg transition-colors"
              >
                {language === 'bn' ? 'আবেদন / তথ্য জানুন' : 'Enquire Service'}
              </button>
            </div>
          </div>

          {/* 4. Pension Yojana */}
          <div className="bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 hover:border-amber-400/50 rounded-2xl p-6 transition-all shadow-lg flex flex-col justify-between">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-purple-400 bg-purple-950/60 px-2.5 py-1 rounded-md border border-purple-800/50">
                Pension & Security
              </span>
              <h3 className="text-lg font-bold text-white mt-3">
                Pension Yojana
              </h3>
              <p className="text-xs font-semibold text-slate-300 font-bengali mt-0.5">
                বিভিন্ন পেনশন যোজনা সংক্রান্ত পরিষেবা
              </p>
              <ul className="mt-4 space-y-1.5 text-xs text-slate-300">
                <li className="flex items-center gap-1.5">
                  <span className="text-amber-400">&bull;</span>
                  <span>Old Age Pension (বার্ধক্য ভাতা)</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="text-amber-400">&bull;</span>
                  <span>Widow Pension (বিধবা ভাতা)</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="text-amber-400">&bull;</span>
                  <span>Divyangjan (প্রতিবন্ধী ভাতা)</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="text-amber-400">&bull;</span>
                  <span>Atal Pension Yojana (APY)</span>
                </li>
              </ul>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-700">
              <button
                onClick={onOpenEnquiry}
                className="w-full py-2 bg-slate-700 hover:bg-slate-600 text-xs font-bold text-white rounded-lg transition-colors"
              >
                {language === 'bn' ? 'আবেদন / তথ্য জানুন' : 'Enquire Service'}
              </button>
            </div>
          </div>

        </div>

        {/* Direct Official Government Portals Directory */}
        <div className="bg-slate-800/50 rounded-3xl p-6 sm:p-8 border border-slate-700">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-700">
            <div>
              <h3 className="text-lg font-bold text-white">
                Official Government Web Portals Directory
              </h3>
              <p className="text-xs text-slate-400">
                Authorized government links we interface with daily for West Bengal & Digital India services
              </p>
            </div>
            <span className="text-xs text-emerald-400 font-mono flex items-center gap-1">
              <ShieldCheck className="w-4 h-4" />
              Verified External Portals
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {DIRECT_GOVT_LINKS.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-900/80 hover:bg-slate-900 p-4 rounded-xl border border-slate-700/60 hover:border-amber-400/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-xs text-white group-hover:text-amber-400 transition-colors">
                      {link.name}
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-amber-400 transition-colors" />
                  </div>
                  <p className="text-[11px] font-bengali text-amber-300 mt-0.5">
                    {link.nameBn}
                  </p>
                  <p className="text-[11px] text-slate-400 mt-2 leading-relaxed">
                    {language === 'bn' ? link.descBn : link.desc}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
