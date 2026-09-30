import React from 'react';
import { 
  X, 
  Printer, 
  Download, 
  Phone, 
  MessageCircle, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  Share2 
} from 'lucide-react';
import { CSC_INFO } from '../data/servicesData';
import { downloadVCard, generateWhatsAppUrl } from '../utils/helpers';
import { LanguageMode } from '../types';

interface DigitalVisitingCardModalProps {
  onClose: () => void;
  language: LanguageMode;
}

export const DigitalVisitingCardModal: React.FC<DigitalVisitingCardModalProps> = ({
  onClose,
  language
}) => {
  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://omkar-creative-epoint.com';
  // Standard Google Chart API / QR Server fallback or SVG for QR code
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(
    `MECARD:N:OMKAR CREATIVE E-POINT;ORG:CSC Digital Seva;TEL:${CSC_INFO.mobile};EMAIL:${CSC_INFO.email};ADR:${CSC_INFO.address.fullEn};;`
  )}`;

  const handlePrint = () => {
    window.print();
  };

  const handleShare = () => {
    const text = `*OMKAR CREATIVE E-POINT*\nCommon Service Center (CSC) & Digital Seva Kendra\n🆔 CSC ID: ${CSC_INFO.cscId}\n📍 Gopiballavpur, Jhargram, WB – 721506\n📞 Call: ${CSC_INFO.mobile}\n💬 WhatsApp: ${CSC_INFO.whatsapp}\n🌐 Website: ${currentUrl}`;
    window.open(generateWhatsAppUrl(text), '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-xs">
      <div 
        className="bg-white rounded-3xl max-w-md w-full shadow-2xl overflow-hidden border border-slate-200 animate-in fade-in zoom-in-95 duration-150"
        role="dialog"
        aria-modal="true"
      >
        {/* Top bar */}
        <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            Official Digital Visiting Card
          </span>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* The Visiting Card Body */}
        <div className="p-6">
          <div className="relative bg-gradient-to-br from-slate-900 via-indigo-950 to-blue-950 text-white rounded-2xl p-6 shadow-xl border border-slate-700/80 overflow-hidden">
            {/* Top tricolor subtle border */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-amber-500 via-white to-emerald-500"></div>
            
            {/* Header / Brand */}
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-400">
                  CSC & Digital Seva Kendra
                </span>
                <h3 className="text-lg font-extrabold tracking-tight text-white mt-0.5">
                  {CSC_INFO.nameEn}
                </h3>
                <p className="text-xs text-amber-200 font-bengali">
                  {CSC_INFO.nameBn}
                </p>
              </div>

              {/* CSC ID Emblem */}
              <div className="text-right shrink-0">
                <span className="inline-block bg-amber-500 text-slate-950 font-black text-[10px] px-2 py-0.5 rounded shadow-xs">
                  CSC ID
                </span>
                <p className="text-xs font-mono font-bold text-slate-200 mt-0.5">
                  {CSC_INFO.cscId}
                </p>
              </div>
            </div>

            {/* Slogan */}
            <p className="text-[11px] text-slate-300 font-medium italic border-b border-slate-700/60 pb-3 mb-4">
              "সহজ • দ্রুত • নির্ভরযোগ্য | Easy • Fast • Reliable"
            </p>

            {/* Contact Details List */}
            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-slate-200 text-[11px] leading-tight">
                  {CSC_INFO.address.fullEn}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-slate-100 font-semibold font-mono">
                  +91 {CSC_INFO.mobile}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-slate-100 font-semibold font-mono">
                  +91 {CSC_INFO.whatsapp} (WhatsApp)
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <span className="text-slate-200 font-mono text-[11px]">
                  {CSC_INFO.email}
                </span>
              </div>
            </div>

            {/* QR Code inside card */}
            <div className="mt-5 pt-4 border-t border-slate-700/60 flex items-center justify-between">
              <div className="text-[10px] text-slate-400">
                <p className="font-bold text-slate-200">Scan QR Code</p>
                <p>To save contact & open portal</p>
              </div>
              <div className="w-16 h-16 bg-white p-1 rounded-lg shadow-sm">
                <img 
                  src={qrCodeUrl} 
                  alt="Omkar Creative E-Point QR Code"
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 grid grid-cols-3 gap-2">
          <button
            onClick={downloadVCard}
            className="flex flex-col items-center justify-center py-2.5 px-2 bg-blue-700 hover:bg-blue-800 text-white rounded-xl text-xs font-bold transition-all shadow-xs"
          >
            <Download className="w-4 h-4 mb-1" />
            <span>Save Contact</span>
          </button>

          <button
            onClick={handleShare}
            className="flex flex-col items-center justify-center py-2.5 px-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-all shadow-xs"
          >
            <Share2 className="w-4 h-4 mb-1" />
            <span>WhatsApp Share</span>
          </button>

          <button
            onClick={handlePrint}
            className="flex flex-col items-center justify-center py-2.5 px-2 bg-white border border-slate-300 hover:bg-slate-100 text-slate-800 rounded-xl text-xs font-bold transition-all shadow-xs"
          >
            <Printer className="w-4 h-4 mb-1 text-slate-600" />
            <span>Print Card</span>
          </button>
        </div>
      </div>
    </div>
  );
};
