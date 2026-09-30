import React from 'react';
import { 
  ShieldCheck, 
  Zap, 
  Laptop, 
  HeartHandshake, 
  Award, 
  MapPin, 
  CheckCircle2, 
  Sparkles,
  Printer,
  Users2
} from 'lucide-react';
import { CSC_INFO, WHY_CHOOSE_US, TESTIMONIALS } from '../data/servicesData';
import { LanguageMode } from '../types';

interface AboutSectionProps {
  language: LanguageMode;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ language }) => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* About Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-900">
              <Award className="w-3.5 h-3.5 text-amber-700" />
              <span>About Us • আমাদের সম্পর্কে</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              OMKAR CREATIVE E-POINT
            </h2>

            <div className="space-y-4 text-slate-700 leading-relaxed text-sm sm:text-base">
              <p className="font-semibold text-blue-900 text-base sm:text-lg">
                Common Service Center (CSC) & Digital Seva Kendra
              </p>

              <div className="p-4 bg-slate-50 border-l-4 border-amber-500 rounded-r-xl space-y-2">
                <p className="font-bengali text-base sm:text-lg text-slate-800 font-medium">
                  <strong>OMKAR CREATIVE E-POINT</strong> একটি আধুনিক <strong>Common Service Center (CSC) & Digital Seva Kendra</strong>, যেখানে সাধারণ মানুষের জন্য বিভিন্ন সরকারি, ব্যাংকিং এবং ডিজিটাল পরিষেবা সহজে প্রদান করা হয়।
                </p>
                <p className="font-bengali text-sm text-slate-700">
                  আমাদের উদ্দেশ্য হলো প্রযুক্তি ও ডিজিটাল পরিষেবাকে সাধারণ মানুষের আরও কাছে পৌঁছে দেওয়া এবং বিভিন্ন অনলাইন পরিষেবা গ্রহণের প্রক্রিয়াকে সহজ করা।
                </p>
              </div>

              <p className="text-slate-600">
                At Omkar Creative E-Point, we empower citizens, students, farmers, shopkeepers, and families across Gopiballavpur, Beliabera, Nayagram, and Jhargram district with transparent, error-free government and financial digital services. From instant thumb-print cash withdrawals to college admissions and passport assistance, our center bridges the gap with courteous local support.
              </p>

              <div className="pt-2 flex flex-wrap gap-4 text-xs sm:text-sm font-semibold text-slate-800">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>CSC ID: {CSC_INFO.cscId}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Village Gopiballavpur, Jhargram</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Subarnarekha Mahavidyalaya Area</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Highlights Banner */}
          <div className="lg:col-span-5">
            <div className="relative bg-gradient-to-br from-blue-900 to-indigo-950 text-white rounded-3xl p-8 shadow-xl overflow-hidden border border-blue-800">
              <div className="absolute -right-10 -bottom-10 w-44 h-44 bg-amber-500/10 rounded-full blur-2xl"></div>

              <div className="flex items-center justify-between border-b border-blue-800 pb-4 mb-6">
                <div>
                  <span className="text-xs uppercase tracking-widest text-amber-400 font-bold">
                    Official Recognition
                  </span>
                  <h4 className="text-lg font-bold text-white mt-1">
                    Digital India VLE Kendra
                  </h4>
                </div>
                <div className="w-12 h-12 bg-amber-400/20 text-amber-300 rounded-2xl flex items-center justify-center font-black text-xl">
                  CSC
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="bg-blue-950/60 p-3.5 rounded-xl border border-blue-800/80 flex items-start gap-3">
                  <Printer className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-white">Full On-Site Hardware Setup</p>
                    <p className="text-slate-300 text-xs mt-0.5">High-res color printing, PVC card printer, heavy-duty lamination & high-speed biometric AePS scanner.</p>
                  </div>
                </div>

                <div className="bg-blue-950/60 p-3.5 rounded-xl border border-blue-800/80 flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-white">Zero Error Application Filing</p>
                    <p className="text-slate-300 text-xs mt-0.5">Thorough double-check of spelling, DOB, bank IFSC, and photo compression before final portal payment.</p>
                  </div>
                </div>

                <div className="bg-blue-950/60 p-3.5 rounded-xl border border-blue-800/80 flex items-start gap-3">
                  <Users2 className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-white">Convenient Location for Students</p>
                    <p className="text-slate-300 text-xs mt-0.5">Located near Subarnarekha Mahavidyalaya, making college forms and scholarships easily accessible.</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-blue-800 flex items-center justify-between text-xs text-slate-300 font-mono">
                <span>VLE Operator: Monisankar</span>
                <span className="text-amber-400 font-bold">Ph: {CSC_INFO.mobile}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Why Choose Us Section */}
        <div className="border-t border-slate-200 pt-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              Why Choose Us? • কেন OMKAR CREATIVE E-POINT?
            </span>
            <h3 className="text-3xl font-extrabold text-slate-900 mt-3">
              Built on Trust, Speed & Local Understanding
            </h3>
            <p className="text-sm text-slate-600 mt-2 font-bengali">
              সহজ • দ্রুত • নির্ভরযোগ্য ডিজিটাল পরিষেবার বিশ্বস্ত ঠিকানা।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* 1. Fast Service */}
            <div className="bg-slate-50 hover:bg-white rounded-2xl p-6 border border-slate-200/90 hover:border-amber-400 shadow-2xs hover:shadow-lg transition-all group">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900">
                {language === 'bn' ? 'দ্রুত পরিষেবা' : 'Fast Service'}
              </h4>
              <p className="text-xs font-semibold text-amber-700 font-bengali mt-0.5">
                দ্রুত ও সময়োপযোগী পরিষেবা
              </p>
              <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                {language === 'bn' 
                  ? 'দেরি না করে তাত্ক্ষণিকভাবে আপনার প্রয়োজনীয় অনলাইন আবেদন, বিল পেমেন্ট ও টাকা তোলার কাজ সম্পন্ন করা হয়।' 
                  : 'Time-bound and prompt delivery with high-speed internet and biometric hardware without unnecessary delays.'}
              </p>
            </div>

            {/* 2. Reliable Assistance */}
            <div className="bg-slate-50 hover:bg-white rounded-2xl p-6 border border-slate-200/90 hover:border-emerald-400 shadow-2xs hover:shadow-lg transition-all group">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900">
                {language === 'bn' ? 'নির্ভরযোগ্য সহযোগিতা' : 'Reliable Assistance'}
              </h4>
              <p className="text-xs font-semibold text-emerald-700 font-bengali mt-0.5">
                নির্ভরযোগ্য ও দায়িত্বশীল পরিষেবা
              </p>
              <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                {language === 'bn' 
                  ? 'অনুমোদিত CSC কেন্দ্র হিসেবে সরকারি নিয়মনীতি মেনে শতভাগ স্বচ্ছতা ও দায়িত্বের সাথে কাজ করা হয়।' 
                  : 'Official CSC ID 344675330019 ensuring authentic government guidelines, secure data handling, and genuine receipts.'}
              </p>
            </div>

            {/* 3. Digital Solution */}
            <div className="bg-slate-50 hover:bg-white rounded-2xl p-6 border border-slate-200/90 hover:border-blue-400 shadow-2xs hover:shadow-lg transition-all group">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Laptop className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900">
                {language === 'bn' ? 'ডিজিটাল সমাধান' : 'Digital Solution'}
              </h4>
              <p className="text-xs font-semibold text-blue-700 font-bengali mt-0.5">
                এক জায়গায় সমস্ত অনলাইন সমাধান
              </p>
              <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                {language === 'bn' 
                  ? 'ব্যাংকিং, আধার, প্যান, ভোটার, সার্টিফিকেট, স্কলারশিপ থেকে ট্রেনের টিকিট—এক ছাদের নিচে সব সুবিধা।' 
                  : 'Comprehensive one-stop portal eliminating the need to travel to multiple offices or distant internet cafes.'}
              </p>
            </div>

            {/* 4. Customer Support */}
            <div className="bg-slate-50 hover:bg-white rounded-2xl p-6 border border-slate-200/90 hover:border-purple-400 shadow-2xs hover:shadow-lg transition-all group">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900">
                {language === 'bn' ? 'গ্রাহক সেবা' : 'Customer Support'}
              </h4>
              <p className="text-xs font-semibold text-purple-700 font-bengali mt-0.5">
                আন্তরিক সহযোগিতা ও নির্দেশনা
              </p>
              <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                {language === 'bn' 
                  ? 'প্রবীণ নাগরিক, কৃষক ও ছাত্রছাত্রীদের প্রয়োজনে বিশেষ যত্ন ও বুঝিয়ে সাহায্য করার প্রতিশ্রুতি।' 
                  : 'Patient, courteous guidance with clear explanations on required documents, application tracking, and next steps.'}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
