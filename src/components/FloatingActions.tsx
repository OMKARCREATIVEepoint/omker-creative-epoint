import React from 'react';
import { Phone, MessageCircle, FileText } from 'lucide-react';
import { CSC_INFO } from '../data/servicesData';
import { generateWhatsAppUrl } from '../utils/helpers';

interface FloatingActionsProps {
  onOpenCard: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenCard }) => {
  return (
    <aside aria-label="Quick contact actions" className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 no-print">
      {/* Digital Visiting Card Floating Trigger */}
      <button
        type="button"
        onClick={onOpenCard}
        className="hidden sm:flex items-center gap-2 bg-slate-900/90 hover:bg-slate-900 text-amber-400 px-3.5 py-2 rounded-full shadow-lg border border-slate-700 text-xs font-bold backdrop-blur-md transition-all hover:scale-105"
        title="View Official Digital Visiting Card & QR"
      >
        <FileText className="w-3.5 h-3.5" />
        <span>CSC Card</span>
      </button>

      {/* Floating Call Button */}
      <a
        href={`tel:${CSC_INFO.mobile}`}
        className="w-12 h-12 bg-blue-700 hover:bg-blue-800 text-white rounded-full shadow-xl flex items-center justify-center transition-all hover:scale-110 active:scale-95 border-2 border-white/80"
        title={`Call ${CSC_INFO.mobile}`}
        aria-label="Call Monisankar / CSC Operator"
      >
        <Phone className="w-5 h-5" />
      </a>

      {/* Floating WhatsApp Button */}
      <a
        href={generateWhatsAppUrl('Hello Omkar Creative E-Point! I would like to inquire about CSC Digital Services.')}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110 active:scale-95 border-2 border-white"
        title="Chat with us on WhatsApp"
        aria-label="Chat on WhatsApp"
      >
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-400"></span>
        </span>
        <MessageCircle className="w-7 h-7 fill-white/20" />
      </a>
    </aside>
  );
};
