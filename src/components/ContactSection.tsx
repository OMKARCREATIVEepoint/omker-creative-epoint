import React, { useState } from 'react';
import { 
  Phone, 
  MessageCircle, 
  Mail, 
  MapPin, 
  Navigation, 
  Clock, 
  ShieldCheck, 
  Send, 
  CheckCircle2,
  Copy,
  ExternalLink
} from 'lucide-react';
import { CSC_INFO } from '../data/servicesData';
import { generateWhatsAppUrl, getShopStatus } from '../utils/helpers';
import { LanguageMode } from '../types';

interface ContactSectionProps {
  language: LanguageMode;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ language }) => {
  const shopStatus = getShopStatus();

  const [copied, setCopied] = useState(false);
  const [quickName, setQuickName] = useState('');
  const [quickPhone, setQuickPhone] = useState('');
  const [quickMsg, setQuickMsg] = useState('');
  const [sentSuccess, setSentSuccess] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(CSC_INFO.address.fullEn);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formatted = `*CONTACT MESSAGE - OMKAR CREATIVE E-POINT*\n` +
      `👤 *Name:* ${quickName.trim() || 'Citizen'}\n` +
      `📱 *Phone:* ${quickPhone.trim()}\n` +
      `💬 *Message:* ${quickMsg.trim()}\n\n` +
      `_Sent from website contact section_`;
    
    setSentSuccess(true);
    setTimeout(() => {
      window.open(generateWhatsAppUrl(formatted), '_blank');
      setSentSuccess(false);
      setQuickName('');
      setQuickPhone('');
      setQuickMsg('');
    }, 1000);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 mb-3">
            <Phone className="w-3.5 h-3.5 text-emerald-600" />
            <span>Connect With Us • যোগাযোগ করুন</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            CONTACT US
          </h2>

          <p className="mt-2 text-xl font-bold text-blue-700 font-bengali">
            আমাদের সঙ্গে যোগাযোগ করুন
          </p>

          <p className="mt-2 text-sm sm:text-base text-slate-600">
            {language === 'bn' 
              ? 'আপনার প্রয়োজনীয় Online, Government, Banking বা Digital Service সম্পর্কে জানতে আজই যোগাযোগ করুন।'
              : 'Feel free to visit our center, give us a phone call, or send a WhatsApp message anytime for prompt guidance.'}
          </p>
        </div>

        {/* Contact Info & Map Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Official Contact Card */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-lg space-y-6">
            
            {/* Header info */}
            <div className="border-b border-slate-100 pb-5">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span className="text-xs font-extrabold uppercase tracking-widest text-blue-700">
                  {CSC_INFO.taglineEn}
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-bold bg-amber-50 text-amber-900 border border-amber-300 px-2.5 py-0.5 rounded-full">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
                  CSC ID: {CSC_INFO.cscId}
                </span>
              </div>
              <h3 className="text-2xl font-black text-slate-900 mt-1">
                {CSC_INFO.nameEn}
              </h3>
              <p className="text-sm text-slate-600 font-bengali">
                {CSC_INFO.nameBn}
              </p>
            </div>

            {/* Core Contact Rows */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Phone */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-400 transition-colors">
                <div className="flex items-center gap-2 text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">
                  <Phone className="w-4 h-4 text-blue-600" />
                  <span>Mobile Phone</span>
                </div>
                <a
                  href={`tel:${CSC_INFO.mobile}`}
                  className="text-lg font-extrabold text-slate-900 hover:text-blue-700 font-mono tracking-tight"
                >
                  {CSC_INFO.mobile}
                </a>
                <p className="text-[11px] text-slate-500 mt-1">
                  Direct call for all urgent queries
                </p>
              </div>

              {/* WhatsApp */}
              <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200/80 hover:border-emerald-400 transition-colors">
                <div className="flex items-center gap-2 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-1">
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>WhatsApp Chat</span>
                </div>
                <a
                  href={`https://wa.me/91${CSC_INFO.whatsapp}?text=${encodeURIComponent('Hello Omkar Creative E-Point! I would like to enquire about digital services.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-extrabold text-emerald-950 hover:text-emerald-700 font-mono tracking-tight"
                >
                  {CSC_INFO.whatsapp}
                </a>
                <p className="text-[11px] text-emerald-700 mt-1">
                  Send documents & screenshots 24/7
                </p>
              </div>

              {/* Email */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-400 transition-colors">
                <div className="flex items-center gap-2 text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">
                  <Mail className="w-4 h-4 text-sky-600" />
                  <span>Official Email</span>
                </div>
                <a
                  href={`mailto:${CSC_INFO.email}`}
                  className="text-sm font-bold text-slate-900 hover:text-blue-700 font-mono break-all"
                >
                  {CSC_INFO.email}
                </a>
                <p className="text-[11px] text-slate-500 mt-1">
                  For formal documents and receipts
                </p>
              </div>

              {/* Working Hours */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="flex items-center gap-2 text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">
                  <Clock className="w-4 h-4 text-amber-600" />
                  <span>Working Hours</span>
                </div>
                <p className="text-xs font-bold text-slate-900">
                  {CSC_INFO.openingHours.weekdays}
                </p>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  Sunday: {CSC_INFO.openingHours.sunday}
                </p>
              </div>

            </div>

            {/* Address Block with Copy button */}
            <div className="p-4 sm:p-5 rounded-2xl bg-blue-50/60 border border-blue-200/80 space-y-2">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-blue-900">
                  <MapPin className="w-4 h-4 text-blue-700" />
                  Center Physical Address
                </span>
                <button
                  type="button"
                  onClick={handleCopyAddress}
                  className="inline-flex items-center gap-1 text-[11px] text-blue-700 hover:text-blue-900 font-semibold bg-white px-2 py-0.5 rounded border border-blue-200"
                >
                  <Copy className="w-3 h-3" />
                  <span>{copied ? 'Copied!' : 'Copy Address'}</span>
                </button>
              </div>

              <p className="text-sm sm:text-base font-bold text-slate-900">
                {CSC_INFO.address.fullEn}
              </p>
              <p className="text-xs sm:text-sm text-slate-600 font-bengali">
                {CSC_INFO.address.fullBn}
              </p>
              <p className="text-xs text-blue-800">
                Landmark: Directly near <strong>Subarnarekha Mahavidyalaya</strong>, Gopiballavpur
              </p>
            </div>

            {/* Primary Action Buttons: [ Call Now ] [ WhatsApp Us ] [ Get Directions ] */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <a
                href={`tel:${CSC_INFO.mobile}`}
                className="py-3 px-4 bg-blue-700 hover:bg-blue-800 text-white rounded-xl text-center font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </a>

              <a
                href={`https://wa.me/91${CSC_INFO.whatsapp}?text=${encodeURIComponent('Hello Omkar Creative E-Point! I want to visit your center.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-center font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>

              <a
                href={CSC_INFO.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 bg-amber-500 hover:bg-amber-600 text-slate-950 rounded-xl text-center font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions</span>
              </a>
            </div>

          </div>

          {/* Right Column: Google Maps Embed & Quick Message Form */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Embedded Google Map Locator Box */}
            <div className="bg-white rounded-3xl p-4 sm:p-5 border border-slate-200/90 shadow-lg">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-amber-500" />
                  Gopiballavpur Map Location
                </span>
                <a
                  href={CSC_INFO.address.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-blue-700 hover:underline flex items-center gap-1 font-semibold"
                >
                  <span>Open in App</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Map iFrame */}
              <div className="w-full h-56 rounded-2xl overflow-hidden border border-slate-200 shadow-inner bg-slate-100">
                <iframe
                  title="Omkar Creative E-Point Location"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://maps.google.com/maps?q=${encodeURIComponent('Subarnarekha Mahavidyalaya Gopiballavpur Jhargram West Bengal 721506')}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                ></iframe>
              </div>

              <div className="mt-3 text-xs text-slate-500 flex items-center justify-between">
                <span>Near Subarnarekha Mahavidyalaya</span>
                <span className="font-semibold text-slate-700">PIN: 721506</span>
              </div>
            </div>

            {/* Quick Online Message / Callback Form */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-lg">
              <h4 className="text-base font-bold text-slate-900 mb-1">
                {language === 'bn' ? 'দ্রুত মেসেজ পাঠান' : 'Send a Quick Message'}
              </h4>
              <p className="text-xs text-slate-500 mb-4">
                {language === 'bn'
                  ? 'আপনার কোনো প্রশ্ন থাকলে নিচে লিখে পাঠান, সরাসরি হোয়াটসঅ্যাপে উত্তর পাবেন।'
                  : 'Enter your message below to send directly to our WhatsApp support.'}
              </p>

              {sentSuccess ? (
                <div className="p-4 bg-emerald-50 rounded-xl text-emerald-800 text-xs font-semibold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Connecting to WhatsApp...</span>
                </div>
              ) : (
                <form onSubmit={handleQuickSubmit} className="space-y-3">
                  <input
                    type="text"
                    required
                    value={quickName}
                    onChange={e => setQuickName(e.target.value)}
                    placeholder={language === 'bn' ? 'আপনার নাম (Your Name)' : 'Your Name'}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:bg-white focus:ring-1 focus:ring-blue-600 outline-hidden"
                  />
                  <input
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    value={quickPhone}
                    onChange={e => setQuickPhone(e.target.value)}
                    placeholder="10-digit Mobile Number"
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:bg-white focus:ring-1 focus:ring-blue-600 outline-hidden"
                  />
                  <textarea
                    rows={2}
                    required
                    value={quickMsg}
                    onChange={e => setQuickMsg(e.target.value)}
                    placeholder={language === 'bn' ? 'আপনার মেসেজ লিখুন...' : 'Write your question or required service...'}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:bg-white focus:ring-1 focus:ring-blue-600 outline-hidden"
                  />
                  <button
                    type="submit"
                    className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{language === 'bn' ? 'মেসেজ পাঠান' : 'Submit Message'}</span>
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
